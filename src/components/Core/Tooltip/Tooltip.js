import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Tooltip.less'
import { InfoSVG } from '../../../utilities/Icons/Icons'

/**
 * Tooltip wrapper component. You can use this wrapper component to add a tooltip to any markup you have inside your react components. Comes with 8 positioning modes to give you control on where the tooltip will appear relative to the markup it wraps around. Use this feature to ensure that the tooltip appears in an area of the screen that is fully visible. The tooltip has a slightly translucent white background on Chrome and Firefox, but a background blurred background on Edge and Safari, Both behaviours will merge to the same blurred background version when Chrome and Firefox provide support for the `backdrop-filter` css property
 * @version 0.0.1
 */
export default class Tooltip extends Component {
  
  static propTypes = {
    /**
     * HTML markup for the tooltip's content
     */
    content: PropTypes.string,
    /**
     * Position modes are named using the following semantics:
     * 
     * * Each position name consists to two parts separated by an underscore eg: TOP_RIGHT
     * * The first part denotes the position of the tooltip's arrow  with respect to the `i` icon that appears to the right of your wrapped content
     * * The second part denotes the position of the tooltip's content with respect to the arrow position
     * 
     * Refer to the examples for more clarity
     */
    mode: PropTypes.oneOf(['TOP_RIGHT','TOP_LEFT','RIGHT_BOTTOM', 'RIGHT_TOP','BOTTOM_RIGHT', 'BOTTOM_LEFT','LEFT_BOTTOM', 'LEFT_TOP'])
  }

  constructor(props) {
    super(props)
    this.state = {
      showTooltip: false,
      tooltipOffset: {
        x: 0
      }
    }

    this.arrowSize = 10

    this.tooltipIcon = React.createRef()
    this.tooltip = React.createRef()
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this)
    this.calculatePosition = this.calculatePosition.bind(this)
  }

  componentDidMount() {
    let tooltipOffset = this.calculatePosition(this.props.mode)
    this.setState({
      tooltipOffset: tooltipOffset
    })
  }

  calculatePosition(mode) {
    let tooltipOffset = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
    let iconStyle = this.tooltipIcon.current.getBoundingClientRect()
    let parentStyle = this.tooltip.current.getBoundingClientRect()
    switch(mode) {
      case 'BOTTOM_RIGHT':
        tooltipOffset = {
          top: (iconStyle.top - parentStyle.top) + this.arrowSize + iconStyle.height,
          right: 'auto',
          left: (iconStyle.left - parentStyle.left) + (iconStyle.width / 2) - (this.arrowSize / 2),
          bottom: 'auto'
        }
        break
      case 'BOTTOM_LEFT':
        tooltipOffset = {
          top: (iconStyle.top - parentStyle.top) + this.arrowSize + iconStyle.height,
          right: (parentStyle.right - iconStyle.right) - this.arrowSize,
          left: 'auto',
          bottom: 'auto'
        }
        break
      case 'RIGHT_TOP':
        tooltipOffset = {
          top: 'auto',
          right: 'auto',
          left: (iconStyle.left - parentStyle.left) + iconStyle.width + (this.arrowSize / 2),
          bottom: (parentStyle.bottom - iconStyle.bottom) + (iconStyle.height / 2) - this.arrowSize
        }
        break
      case 'RIGHT_BOTTOM':
        tooltipOffset = {
          top: (iconStyle.top - parentStyle.top) + (iconStyle.height / 2) - this.arrowSize,
          right: 'auto',
          left: (iconStyle.left - parentStyle.left) + iconStyle.width + (this.arrowSize / 2),
          bottom: 'auto'
        }
        break
      case 'LEFT_BOTTOM':
        tooltipOffset = {
          top: (iconStyle.top - parentStyle.top) + (iconStyle.height / 2) - this.arrowSize,
          right: (parentStyle.right - iconStyle.right) + iconStyle.width + this.arrowSize,
          left: 'auto',
          bottom: 'auto'
        }
        break
      case 'LEFT_TOP':
        tooltipOffset = {
          bottom: (parentStyle.bottom - iconStyle.bottom) + (iconStyle.height / 2) - this.arrowSize,
          right: (parentStyle.right - iconStyle.right) + iconStyle.width + this.arrowSize,
          left: 'auto',
          top: 'auto'
        }
        break
      case 'TOP_LEFT':
      tooltipOffset = {
        top: 'auto',
        right: (parentStyle.right - iconStyle.right) - (this.arrowSize / 2),
        left: 'auto',
        bottom: (parentStyle.bottom - iconStyle.bottom) + iconStyle.height + this.arrowSize
      }
      break
      case 'TOP_RIGHT':
      default:
      tooltipOffset = {
        top: 'auto',
        right: 'auto',
        left: (iconStyle.left - parentStyle.left) - (this.arrowSize / 2),
        bottom: (parentStyle.bottom - iconStyle.bottom) + iconStyle.height + this.arrowSize
      }
    }
    return tooltipOffset
  }

  mouseEnterHandler(e) {
    this.setState({
      showTooltip: true,
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
      children,
      mode
    } = this.props
    let activeModeClass = mode?'tooltip_content_'+mode:'tooltip_content_top'
    return (
      <div className={styles.tooltip_container} ref={this.tooltip} >
        <div 
          className={this.state.showTooltip?styles.tooltip_active:styles.tooltip}
          style={this.state.tooltipOffset}>
          <div
            className={styles[activeModeClass]}>
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
