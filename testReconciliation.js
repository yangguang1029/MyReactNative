import React, { Component, PureComponent } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";

class Com1 extends Component {
  render() {
    return <Text>1</Text>;
  }
}

class Com2 extends Component {
  render() {
    return <Text>1</Text>;
  }
}

export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("will change ");
      this.setState({ visible: false });
    }, 5000);
  }

  render() {
    return this.state.visible ? (
      <View style={styles.container}>
        <Com1 />
        <Com2 />
      </View>
    ) : (
      <View style={styles.container}>
        <Com2 />
      </View>
    );
  }

  render1() {
    return (
      <View style={styles.container}>
        {this.state.visible ? <Com1 /> : null}
        <Com2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
