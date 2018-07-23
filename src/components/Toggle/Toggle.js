import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Toggle.less'


/**
 * Toggles are to be used where a value can have two possible values that are opposites of each other(eg: on, off). You can pass a mode prop to this component(one of 'NORMAL','GOOD','BAD') if you want to indicate that a certain setting is 'good' or 'bad'. You can also supply labels for the on and off states via valueLabels. Try and ensure that the Label + valueLabel makes intuitive sense eg(Label: Data collection, valueLabel: off yields Data Collection off)
 *
 * @version 0.0.1
 */
export default class Toggle extends Component {
  static propTypes = {
    /**
     * Label for the control
     */
    label: PropTypes.string.isRequired,
    /**
     * Value of the control. This can be either true or false. Value must be set exclusively by the parent container, and updated by listening for changes via the changeHandler function. This must be explicitly defined as value={true} or value={false}
     */
    value: PropTypes.oneOf([false,true]).isRequired,
    /**
     * Labels for displaying state of the component. Defaults to "on" and "off". Expects an object with two keys: on and off (See example)
     */
    valueLabels: PropTypes.shape({
      on: PropTypes.string,
      off: PropTypes.string
    }),
    /**
     * Function fired whenever user clicks on the toggle. Must be used to pass the modified value back to the component
     */
    changeHandler: PropTypes.func.isRequired,
    /**
     * Boolean for disabling the control.
     */
    disabled: PropTypes.bool,
    /**
     * Mode to set color of the control. Setting to GOOD will provide a green theme for the on state. Setting to BAD will give the off state a red theme
     */
    mode: PropTypes.oneOf(['NORMAL','GOOD','BAD']),

  }

  constructor(props) {
    super(props)
    //Setup valueLabels based on provided props or resort to default
    this.state = {
      valueLabels: props.valueLabels?props.valueLabels:{off:"off", on: "on"}
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    if(this.props.changeHandler instanceof Function && !this.props.disabled) this.props.changeHandler()
  }


  render() {

    let track;
    let thumb;
    if(this.props.disabled) {
      track = styles.track_disabled
      thumb = styles.thumb_disabled
    }
    else if(this.props.value) {
      switch(this.props.mode) {
        case 'NORMAL':
          track = styles.track_on
          thumb = styles.thumb_on
          break
        case 'GOOD':
          track = styles.track_good
          thumb = styles.thumb_good
          break
        case 'BAD':
        default:
          track = styles.track_on
          thumb = styles.thumb_on
      }
    }
    else {
      if(this.props.mode == 'BAD') {
        track = styles.track_bad
        thumb = styles.thumb_bad
      }
      else {
        track = styles.track
        thumb = styles.thumb
      }
    }

    return (
      <div className={styles.toggle_container} onClick={this.clickHandler}>
        <div className={track}>
          <div className={thumb}></div>
        </div>
        <div className={styles.label}>
          {this.props.label} {this.props.value?this.state.valueLabels.on:this.state.valueLabels.off}
        </div>
      </div>
    )
  }
}
