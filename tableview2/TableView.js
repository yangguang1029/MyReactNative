import React, { Component, PureComponent } from 'react'
import { requireNativeComponent } from 'react-native'


const TableView = requireNativeComponent('TableView', null)
const TableViewCell = requireNativeComponent('TableCell', null)

class TableCell extends PureComponent {
    constructor (props) {
      super(props)
      this.state = {
        itemPosition: 0
      }
    }
  
    render () {
      return <TableViewCell style={ { position: 'absolute',left: 0,top: 0 } } onChange = {
            (data) => {
              this.setState({ itemPosition: data.nativeEvent['index'] })
            }
          }>
            {this.props.renderRow(this.state.itemPosition)}
        </TableViewCell>
    }
  }

  export default class TableView extends Component {

    constructor (props) {
      super(props)
      let rowHeights = []
      let heightFunc = props.getViewHeight
      let rowTypes = []
      let typeFunc = props.getRowType
      for (let i = 0; i < props.rowCount; i++) {
        rowHeights.push(heightFunc(i))
        rowTypes.push(typeFunc(i))
      }
      this._rowHeights = rowHeights
      this._rowTypes = rowTypes
  
      let cells = []
      for (let i = 0; i < this.props.initCount; i++) {
        cells.push(<TableCell renderRow={this.props.renderRow}/>)
      }
      this._cells = cells
    }
  
    render () {
      return <TableView {...this.props} rowHeights = {this._rowHeights} rowTypes={this._rowTypes}>
        {
          this._cells
        }
     </TableView>
    }
  }
  