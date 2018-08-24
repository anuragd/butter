import React, { Component } from 'react'
import PropTypes from 'prop-types'
import orderBy from 'lodash/orderBy'
import map from 'lodash/map'
import moment from 'moment'

import styles from './Table.less'
import { SuccessSVG, ErrorSVG } from '../../../utilities/Icons/Icons'

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
        type: PropTypes.oneOf(['text','number','date', 'status'])
      })),
      /**
       * An array of data objects, the keys of which are the same string as listed in the `key` property of the keys array.
       * Additionally, attaching a boolean property called `attention` and setting it to true on a data object inside the array will cause the corresponding row __to be highlighted red__. Use this feature to draw the user attention to a specific row.
       */
      data: PropTypes.array,
      /**
       * Pixel value for maximum height of the Table component. Table rows exceeding this height will be scrollable. Defaults to 500px
       */
      maxHeight: PropTypes.number
    })
  }

  static defaultProps = {
    maxHeight: 500
  }

  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
    }
    this.headerClickHandler = this.headerClickHandler.bind(this)
    this.handleDrillDown = this.handleDrillDown.bind(this)
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
      this.setState({
        data: {
          data: newData,
          keys: newKeys
        }
      })
    }
  }

  handleDrillDown(index) {
    let newData = [...this.state.data.data]
    newData[index].open = newData[index].open?false:true
    this.setState({
      data: {
        data: newData,
        keys: this.state.data.keys
      }
    })
  }

  getRow(row,keys,dataIndex) {
    let result = keys.map((key,index) =>
      <td key={(row.id+'-'+key.key)} className={styles.table_body_cell} onClick={() => this.handleDrillDown(dataIndex)}>
      {(row.children && index === 0) && <span className={row.open?styles.row_open:styles.row_collapse}>&#9654;</span>}
      {this.generateDisplay(row[key.key],key.type)}
      </td>
    )
    return result
  }

  getChildRows(row,keys) {
    let result
    if(row.children) {
      let style = row.open?styles.open_row:styles.collapsed_row
      result = row.children.map((row, index) => {
        return(<tr key={index} className={style}>{this.getRow(row,keys)}</tr>)
      })
    }
    return result
  }

  generateDisplay(data,type) {
    switch(type) {
      case 'date':
        return moment(data).format('D MMM YYYY')
        break
      case 'number':
        return data.toString()
        break
      case 'status':
        if(data) {
          return(<div className={styles.status_cell}><img src={SuccessSVG} />SUCCESS</div>)
        }
        else {
          return(<div className={styles.status_cell}><img src={ErrorSVG} />FAILED</div>)
        }
        break
      case 'text':
      default:
        return data.toString()
        break

    }
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
      let row = this.getRow(value,data.keys,key)
      let children = this.getChildRows(value,data.keys)
      return(
        <tbody key={(value.id+'-row')}>
          <tr className={value.attention?styles.table_row_attention:styles.table_row}>
            {row}
          </tr>
          {children}
        </tbody>)
    })
    return (
      <div className={styles.table_container} style={{maxHeight:this.props.maxHeight+'px'}}>
       <table className={styles.table}>
        <thead>
          <tr>
            {tableHeader}
          </tr>
        </thead>
        {tableData}
       </table>
      </div>
    )
  }
}
