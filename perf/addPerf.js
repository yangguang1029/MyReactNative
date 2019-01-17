import React, { Component, PureComponent } from 'react'
import {register, unregister, update} from './index'

function addPerf(Com) {
  Com.prototype.componentDidMount = function() {
    if(this.tag === undefined) {
      return
    }
    this.renderCount = 0
    register(this.tag)
  }
  Com.prototype.componentWillUnmount = function() {
    unregister(this.tag)
  }
  Com.prototype.componentWillUpdate = function() {
    update(this.tag)
  }
}
addPerf(Component)
addPerf(PureComponent)

