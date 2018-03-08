import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image
} from 'react-native';


export default class ImageButton extends Component{

    constructor(props) {
        super(props);

        this._onPressIn = this._onPressIn.bind(this);
        this._onPressOut = this._onPressOut.bind(this);

        this.state={
            imgSrc:this.props.normalSrc
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({imgSrc:nextProps.normalSrc})
    }

    render(){
        return <TouchableWithoutFeedback style={this.props.style} 
            onPressIn={this._onPressIn}
            onPressOut={this._onPressOut}
            onPress={this.props.onPress}
            >
            <Image source={this.state.imgSrc} style={this.props.imageStyle}/>
        </TouchableWithoutFeedback>
    }
    
    _onPressOut(){
        this.setState({imgSrc:this.props.normalSrc});
    }
    _onPressIn(){
        this.setState({imgSrc:this.props.highlightSrc});
    }
}