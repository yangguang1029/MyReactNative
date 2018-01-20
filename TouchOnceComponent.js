/***********************
author: yangguang
date: 2018-01-20
description: 短时间内只能触摸一次的按钮。
************************/

import React, {Component } from 'react';
import {TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

function changeToTouchOnce(TouchComponent){
    class TouchOnceComponent extends Component{

        constructor(props) {
            super(props);
            this._isTouched = false;
            this._timeLimit = 1500;
            this._timer = null;
        }

        render(){
            return <TouchComponent
            {...this.props}
            onPress={()=>{
                if(this._isTouched) {
                    return;
                }
                this._isTouched = true;
                this._timer = setTimeout(()=>{
                    this._isTouched = false;
                }, this._timeLimit);
                this.props.onPress();
            }}
            >
            {this.props.children}
            </TouchComponent>
        }

        componentWillUnmount(){
            clearTimeout(this._timer);
        }
    }
    return TouchOnceComponent
}

const TouchableOnceOpacity = changeToTouchOnce(TouchableOpacity)
const TouchableOnceHighlight = changeToTouchOnce(TouchableHighlight)
const TouchableOnceWithoutFeedback = changeToTouchOnce(TouchableWithoutFeedback)
export {TouchableOnceOpacity, TouchableOnceHighlight, TouchableOnceWithoutFeedback}

