import React, { Component } from 'react'
import PropTypes from 'prop-types'
import orderBy from 'lodash/orderBy'
import map from 'lodash/map'

import styles from './Table.less'

/**
 * Panel for displaying a note to users that a component has no data to display. It is important that this component is placed inside a container with a definite max-height set, or it will take all of the screen space vertically.
 *
 * Requires a minimum width of 280px
 * @version 0.0.1
 */
export default class Table extends Component {

  static propTypes = {
    data: PropTypes.shape({
      keys: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
        type: PropTypes.oneOf(['text','number','date'])
      })),
      data: PropTypes.array
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      keys: props.data.keys,
      positionMap:null,
      translateMap:null
    }
    this.tableBody = React.createRef()
    this.headerClickHandler = this.headerClickHandler.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      let newPositionMap = map(this.tableBody.current.children, (tableRow) => tableRow.offsetTop)
      this.setState({
        positionMap: newPositionMap
      })
    }, 0)
  }

  deriveTranslateMap(newData, oldData, oldMap) {
    let newMap = []
    for(var i = 0; i < oldData.length; i++) {
      newMap.push(oldMap[newData.indexOf(oldData[i])] - oldMap[i])
    }
    return newMap
  }

  //Sorting functions

  sortDesc(data,key) {
    return orderBy(data,[key.key],['desc'])
    // switch(type) {
    //   case 'number':
    //     return orderBy(data,[key.key],['desc'])
    //     break
    //   case 'text':
    //     return sortBy(data, (row) => )
    //     break
    // }
  }

  sortAsc(data,key) {
    return orderBy(data,[key.key],['asc'])
    // switch(type) {
    //   case 'number':
    //     return sortBy(data, (row) => (0 - row[key.key]))
    //     break
    //   case 'text':

    //     break
    // }
  }

  //End Sorting function

  headerClickHandler(keys,index) {
    let currentKey = keys[index]
    if(currentKey.sortable) {
      let newKeys = this.state.keys
      let newData = this.props.data.data
      if(currentKey.sortedUp) {
        // Sort data in descending
        newData = this.sortDesc(newData,currentKey)
        currentKey.sortedUp = false
      }
      else {
        // Sort data in ascending
        newData = this.sortAsc(newData,currentKey)
        currentKey.sortedUp = true
      }
      newKeys = map(newKeys, (key) => {return({...key,sortedUp:null})})
      newKeys[index] = currentKey
      let newTranslateMap = this.deriveTranslateMap(newData,this.props.data.data,this.state.positionMap)
      this.setState({
        translateMap: newTranslateMap,
        keys: newKeys
      })
    }
  }

  getRow(row,keys) {
    let result = keys.map((key) =>
      <td key={(row.id+'-'+key.key)} className={styles.table_body_cell}>{row[key.key]}</td>
    )
    return result
  }

  render() {
    const {
      data
    } = this.props
    const tableHeader = this.state.keys.map((value,key) => 
      <th key={key} onClick={() => this.headerClickHandler( this.state.keys,key)}>
        <div className={styles.table_header_cell}>
          <div className={styles.label}>{value.label}</div>
          <div className={value.sortable?styles.sorters:styles.hide}>
            <div className={value.sortedUp===true?styles.sorter_triangle_active:styles.sorter_triangle}>&#x25B2;</div>
            <div className={value.sortedUp===false?styles.sorter_triangle_active:styles.sorter_triangle}>&#x25BC;</div>
          </div>
        </div>
      </th>
    )
    const tableData = data.data.map((value,key) => {
      let row = this.getRow(value, this.state.keys)
      if(this.state.translateMap) {
        return(
          <tr key={(value.id+'-row')} 
              style={{transform: `translateY(${this.state.translateMap[key]}px)`, zIndex:key}}
              className={value.attention?styles.table_row_attention:styles.table_row}>
            {row}
          </tr>)
      }
      else {
        return(
          <tr key={(value.id+'-row')} 
              className={value.attention?styles.table_row_attention:styles.table_row}>
            {row}
          </tr>)
      }
    })
    return (
      <div className={styles.table_container}>
       <table className={styles.table}>
        <thead>
          <tr>
            {tableHeader}
          </tr>
        </thead>
        <tbody ref={this.tableBody}>
          {tableData}
        </tbody>
       </table>
      </div>
    )
  }
}
