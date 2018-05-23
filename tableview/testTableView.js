import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  requireNativeComponent
} from 'react-native';

var TableView = requireNativeComponent('TableView', null);
var TableViewCell = requireNativeComponent('TableCell', null);

class TableCell extends Component {
    constructor(props) {
        super(props);
        this.state = {num:0};
    }
    componentWillReceiveProps(nextProps) {
        this.state.num = nextProps.num;
    }
    render(){
        return <TableViewCell style={{width:300,height:40, flexDirection:"row", }} 
            onChange={(data)=>{
                this.setState({num:data.nativeEvent["index"]})
            }}>
            <Text>{this.state.num}</Text>
        </TableViewCell>
    }
}

export default class testTableView extends Component {
    render(){
        let arr = [];
        for(let i = 0; i < 16; i++) {
            arr.push(<TableCell key={""+i} num={i}/>)
        }
        return <View style={{flex:1, backgroundColor:"gray"}}>
            <TableView style={{width:300,height:300}} rowCount={200}>
            {
                arr
            }
            </TableView>
        </View>
    }
}