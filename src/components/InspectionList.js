import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {  ListView } from 'react-native';
import _ from 'lodash';

import { inspectionsFetch } from '../actions'
import ListItem from './ListItem';

class InspectionList extends Component {

    constructor(){
        super();
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    componentWillMount(){
        this.props.inspectionsFetch();
        this._createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this._createDataSource(nextProps);
    }

    _createDataSource({ inspections }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(inspections);
    }

    _renderRow(inspection){
        return <ListItem inspection={inspection}/>
    }

    render(){
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this._renderRow}/>
        )
    }
}

InspectionList.propTypes = {
    inspectionsFetch: PropTypes.func
};

const mapStateToProps = state => {
    const inspections = _.map(state.inspectionsList, (val, uid) => {
        return { ...val, uid };
    });
    return { inspections }
};

export default connect(mapStateToProps, { inspectionsFetch })(InspectionList);