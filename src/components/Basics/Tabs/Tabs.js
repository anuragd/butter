import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Tabs.less'

/**
 * Panel for displaying a note to users that a component has no data to display. It is important that this component is placed inside a container with a definite max-height set, or it will take all of the screen space vertically.
 *
 * Requires a minimum width of 280px
 * @version 0.0.1
 */
export default class Tabs extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    activeTab: PropTypes.string,
    changeHandler: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      top:null,
      left:null,
      width:null
    }
    this.activeTab = React.createRef()
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      let bounds = this.activeTab.current.getBoundingClientRect()
      this.setState({
        left: bounds.left - 24 ,
        width: bounds.width - 24
      })
    },0)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.options !== this.props.options) {
      let bounds = this.activeTab.current.getBoundingClientRect()
      this.setState({
        left: bounds.left - 24,
        width: bounds.width - 24
      })
    }
  }

  clickHandler(e) {
    let bounds = e.currentTarget.getBoundingClientRect()
    this.setState({
      left: bounds.left - 24,
      width: bounds.width - 24
    })
    if(this.props.changeHandler instanceof Function) this.props.changeHandler(e.currentTarget.innerText)
  }

  render() {
    const {
      options,
      activeTab
    } = this.props
    return (
      <div className={styles.tabs_container}>
        <div className={styles.active_marker} style={{left:this.state.left, width:this.state.width}}></div>
        {
          options.map((value,key) =>
            <div
              key={key}
              ref={activeTab===value?this.activeTab:null} 
              className={activeTab===value?styles.active_tab:styles.tab_option} 
              onClick={this.clickHandler}>
              {value}
            </div>
          )
        }
      </div>
    )
  }
}
