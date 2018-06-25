import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import TableView from "./TableView"

export default class TestTableView extends Component {
    
    constructor (props) {
      super(props)
  
      let datas = []
      for (let i = 0; i < 200; i++) {
        datas.push(i)
      }
      this.datas = datas

      this.state = {
        refreshing:false
    }
  
      this._getViewHeight = this._getViewHeight.bind(this)
      this._getRowType = this._getRowType.bind(this)
      this._renderRow = this._renderRow.bind(this)
      this._onPullRefresh = this._onPullRefresh.bind(this)
    }
  
    _getViewHeight (index) {
      let type = this._getRowType(index);
      return 20 * (type + 1)
    }

    _getRowType (index) {
      return index % 3;
    }

    _onPullRefresh(){
      this.setState({refreshing:true})
      setTimeout(() => {
          this.setState({refreshing:false})
      }, 5000);
  }
  
    _renderRow (index) {
      let height = this._getViewHeight(index)
      let type = this._getRowType(index);
      let color = 'red'
      if (type === 1) {
        color = 'green'
      } else if (type === 2) {
        color = 'blue'
      }
      return <View style={{ width: 300, height, backgroundColor: color }}>
        <Text>{this.datas[index]}</Text>
      </View>
    }
  
    render () {
      return <View style={{ flex: 1, backgroundColor: 'gray' }}>
        <TableView style={{ width: 300, height: 300 }}
          getViewHeight={this._getViewHeight}
          getRowType={this._getRowType}
          renderRow={this._renderRow}
          rowCount={200}
          initCount={16}
          enablePullRefresh={true}
          onPullRefresh={this._onPullRefresh}
          refreshing = {this.state.refreshing}
        />
      </View>
    }
  }