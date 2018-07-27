import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Tooltip.less'
import { InfoSVG } from '../../utilities/Icons/Icons'

/**
 * Panel for displaying a note to users that a component has no data to display. It is important that this component is placed inside a container with a definite max-height set, or it will take all of the screen space vertically.
 *
 * Requires a minimum width of 280px
 * @version 0.0.1
 */
export default class Tooptip extends Component {
  static propTypes = {
    content: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      showTooltip: false,
      tooltipOffset: {
        x: 0,
        y:0
      }
    }
    this.tooltipIcon = React.createRef()
    this.tooltip = React.createRef()
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this)
  }

  componentDidMount() {
    this.setState({
      tooltipOffset: {
        x: this.tooltipIcon.current.offsetLeft - 17,
        y: (0 - this.tooltipIcon.current.getBoundingClientRect().height) - 20
      }
    })
  }

  mouseEnterHandler(e) {
    this.setState({
      showTooltip: true,
      tooltipOffset: {
        x:e.currentTarget.offsetLeft - 17,
        y:(0 - this.tooltipIcon.current.getBoundingClientRect().height) - 20
      }
    })
  }

  mouseLeaveHandler(e) {
    this.setState({
      showTooltip: false
    })
  }

  render() {
    const {
      content,
      children
    } = this.props
    return (
      <div className={styles.tooltip_container}>
        <div 
          className={this.state.showTooltip?styles.tooltip_active:styles.tooltip}
          style={{
              top: this.state.tooltipOffset.y + 'px',
              left: this.state.tooltipOffset.x + 'px'
          }}>
          <div
            ref={this.tooltip} 
            className={styles.tooltip_content}>
            <div dangerouslySetInnerHTML={{__html:content}} />
          </div>
        </div>
        <div className={styles.tooltip_children}>
          {children}
        </div>
        <div 
          ref={this.tooltipIcon}
          className={styles.tooltip_icon} 
          onMouseEnter={this.mouseEnterHandler} 
          onMouseLeave={this.mouseLeaveHandler}>
          <img src={InfoSVG} />
        </div>
      </div>
    )
  }
}
