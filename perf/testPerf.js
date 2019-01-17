import React, { Component } from 'react'
import {StyleSheet,Text,View,Button,Dimensions, FlatList} from 'react-native'
import {startPerf, stopPerf} from './index'


class Cell extends Component {
  constructor(props) {
    super(props)
    this.tag = 'CELL' + props.data
  }

  render(){
    return <View style={{width:300,height:40}}>
      <Text>{this.props.data}</Text>
    </View>
  }
}


export default class test extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data:[1,2,3]
    }
    this.updateKey = null
  }

  renderItem=({item})=>{
    return <Cell data={item} />
  }

  componentDidUpdate() {
    stopPerf(this.updateKey)
  }

  componentWillUpdate() {
    this.updateKey = 'update' + new Date().getTime()
    startPerf(this.updateKey)
  }

  render() {
    return <View style={styles.container}>
    <Button title='add' onPress={()=>{
      let data = this.state.data.concat([Math.floor(Math.random() * 10000)])
      this.setState({data})
    }} />
    <FlatList style={{width:300,height:200}}
      data={this.state.data}
      keyExtractor={(index)=>''+index}
      renderItem={this.renderItem}
    />
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})