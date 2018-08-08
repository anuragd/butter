import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Tabs.less'

/**
 * Control for tabs based navigation.
 * Use this as a UI for navigation control amongst 3-10 peer pages. You can use the onChange callback as a hook to make corresponding changes to your app navigation
 * @version 0.0.1
 */
export default class Tabs extends Component {
  static propTypes = {
    /**
     * Array of strings for tab labels
     */
    options: PropTypes.arrayOf(PropTypes.string),
    /**
     * String label for currently active tab
     */
    activeTab: PropTypes.string,
    /**
     * Callback fired when user changes selected tab. Callback functions take the following form:
     * 
     * `callback(selected_label,index)`
     * where __selected_label__ is string denoting the displayed label selected by the user and __index__ denotes the position of the selected option in the provided array of options
     * __Remember to change the activeTab prop inside this callback to trigger the appropriate animation__
     */
    onChange: PropTypes.func.isRequired
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
        left: this.activeTab.current.offsetLeft + 12,
        width: bounds.width - 24
      })
    },0)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.options !== this.props.options || prevProps.activeTab!==this.props.activeTab) {
      let bounds = this.activeTab.current.getBoundingClientRect()
      this.setState({
        left: this.activeTab.current.offsetLeft + 12,
        width: bounds.width - 24
      })
    }
  }

  clickHandler(e,key) {
    // let bounds = e.currentTarget.getBoundingClientRect()
    // this.setState({
    //   left: bounds.left - 24,
    //   width: bounds.width - 24
    // })
    if(this.props.onChange instanceof Function) this.props.onChange(e.currentTarget.innerText,key)
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
              onClick={(e) => this.clickHandler(e,key)}>
              {value}
            </div>
          )
        }
      </div>
    )
  }
}
