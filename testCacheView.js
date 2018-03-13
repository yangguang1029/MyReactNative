import React, { Component, PureComponent } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";


class Mc extends PureComponent{ //这里改成Component试试?
    render(){
        console.log("guangy mc render......")
        return <Text>{this.props.num}</Text>
    }
}

export default class testCacheView extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isVisible:true
        }
    }

    _renderContent(){   //切换两种方案试试?
        let height = this.state.isVisible ? 100 : 0;
        return  <View style={{height, backgroundColor:"yellow"}}>
            <Mc num={1}/>
            <Mc num={2}/>
        </View> 
        // return this.state.isVisible ? <View style={{backgroundColor:"yellow"}}>
        //      <Mc num={1}/>
        //      <Mc num={2}/>
        //  </View> : null;
    }

    render(){
        return <View style={{flex:1, backgroundColor:"red"}}>
            <Button title="click" onPress={()=>{
                this.setState({isVisible:!this.state.isVisible})
            }}/>
            <View style={{height:100, backgroundColor:"green"}}/>
            
            {
                this._renderContent()
            }

            <View style={{flex:1, backgroundColor:"blue"}}/>

        </View>
    }
}