/***********************
author: yangguang
date: 2018-01-20
description: 可以往左边滑出的list
************************/

import React, { Component, PureComponent } from 'react';
import { Text, View, StyleSheet, Dimensions,  FlatList, Animated } from 'react-native';

let {width:WIDTH, height:HEIGHT} = Dimensions.get('window')

class ListCell extends Component{

    constructor(props) {
        super(props);

        this.onStartShouldSetResponder = this.onStartShouldSetResponder.bind(this);
        this.onResponderRelease = this.onResponderRelease.bind(this);

        this.TAG = "CELL" + this.props.number;

        this._touchStartPos = null;

        this._isOut = false;
        this._isAnimating = false;

        this.state = {
            containerPosX:new Animated.Value(0)
        }
    }

    _moveOut(){
        console.log("guangy start move out")
        this._isAnimating = true;
        Animated.timing(
            this.state.containerPosX,
            {
              toValue: -40,
            }
          ).start(()=>{
                this._isAnimating = false;
                this._isOut = true;
          });
    }

    _moveIn(){
        console.log("guangy start move in")
        this._isAnimating = true;
        Animated.timing(
            this.state.containerPosX,
            {
              toValue: 0,
            }
          ).start(()=>{
            this._isAnimating = false;
            this._isOut = false;
      });
    }

    onStartShouldSetResponder(evt){
        if(this._isAnimating) {
            return false;
        }
        console.log("guangy start touch...........")
        this._touchStartPos = evt.nativeEvent.locationX;
        return true;
    }

    onResponderRelease(evt){
        console.log(this.TAG, "onResponderRelease");
        if(this._touchStartPos - evt.nativeEvent.locationX > 20 && !this._isOut) {
            this._moveOut();
        }else if(this._touchStartPos - evt.nativeEvent.locationX < -20 && this._isOut){
            this._moveIn();
        }
    }

    render(){
        let num = this.props.number;
        let color = num % 2 === 0 ? "red":"green";
        return <View style={{backgroundColor:color, width:400,height:40}}
            onStartShouldSetResponder={this.onStartShouldSetResponder}
            onResponderRelease={this.onResponderRelease}
        >
        <Animated.View style={{flexDirection:"row", flex:1,position:"absolute", transform:[{translateX:this.state.containerPosX}]}}>
        <View style={{width:WIDTH,height:40, alignItems:"center"}}>
        <Text>{num}</Text>
        </View>
        <View style={{width:40,height:40, backgroundColor:"gray"}}>
        </View>
        </Animated.View>
        </View>
    }
}


export default class testSwipeoutList extends Component{

    constructor(props) {
        super(props);
        this.data = [1,2,3,4,5,6]

        this._renderItem = this._renderItem.bind(this);
    }

    _renderItem({item}){
        return <ListCell number={item}/>
    }

    render(){
        return <View style={{flex:1}}>

            <FlatList
                data={this.data}
                renderItem={this._renderItem}
                keyExtractor={(item,index)=>index}
            />

        </View>
    }
}