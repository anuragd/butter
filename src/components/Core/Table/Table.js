import React, { Component } from 'react'
import PropTypes from 'prop-types'
import orderBy from 'lodash/orderBy'
import map from 'lodash/map'

import styles from './Table.less'

/**
 * The table component will consume a data object to output  a sortable table. Current version only allows for sorting functionality. Future versions will also include the following functionality:
 * * Editing
 * * Pagination
 * * Mobile responsive column control
 *
 * @version 0.0.1
 */
export default class Table extends Component {

  static propTypes = {
    /**
     * The data object that will be rendered. This is expected to be an object with two keys:
     *
     * * __keys__ :An array of keys including metadata and options to control respective table columns. See below for details.
     * * __data__ :An array of data objects
     */
    data: PropTypes.shape({
      /**
       * The `keys` property on the data object is expected to be an array of objects, each with the following shape
       *
       * * __key__ :Key name to be used to access the data provided, 
       * * __label__ :Display label for the corresponding column
       * * __type__ :The type of column(one of `number`, `text` or `date`)
       * * __sortable__ :An optional boolean key to denote whether or not the column is to be sortable
       */
      keys: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
        type: PropTypes.oneOf(['text','number','date'])
      })),
      /**
       * An array of data objects, the keys of which are the same string as listed in the `key` property of the keys array.
       * Additionally, attaching a boolean property called `attention` and setting it to true on a data object inside the array will cause the corresponding row __to be highlighted red__. Use this feature to draw the user attention to a specific row.
       */
      data: PropTypes.array
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      positionMap:null,
      translateMap:props.data.data.map(() => 0)
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
  }

  sortAsc(data,key) {
    return orderBy(data,[key.key],['asc'])
  }

  //End Sorting function

  headerClickHandler(keys,index) {
    let currentKey = keys[index]
    if(currentKey.sortable) {
      let newKeys = this.state.data.keys
      let newData = this.state.data.data
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
      let newTranslateMap = this.deriveTranslateMap(newData,this.state.data.data,this.state.positionMap)
      this.setState({
        translateMap: newTranslateMap,
        data: {
          ...this.state.data,
          keys: newKeys
        }
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
    } = this.state
    const tableHeader = data.keys.map((value,key) => 
      <th key={key} onClick={() => this.headerClickHandler(data.keys,key)}>
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
      let row = this.getRow(value,data.keys)
      if(this.state.translateMap) {
        return(
          <tr key={(value.id+'-row')} 
              style={{transform: `translateY(${this.state.translateMap[key]}px)`}}
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
