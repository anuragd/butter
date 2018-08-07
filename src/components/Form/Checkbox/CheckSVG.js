import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CheckSVG extends Component {
  render() {
    return (
      <svg data-name="Layer 1" viewBox="0 0 15.43 12" {...this.props}>
          <title>check</title>
          <path
            fill="#fff"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M13.93 1.5l-8.29 9L1.5 7.23"
          />
        </svg>
    )
  }
}
