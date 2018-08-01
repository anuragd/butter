import React, { Component } from 'react'
import { NIChartTheme } from 'dcn-ux-resources'
import Highcharts from 'react-highcharts'


Highcharts.Highcharts.setOptions(NIChartTheme)



/**
 * Panel for displaying a note to users that a component has no data to display. It is important that this component is placed inside a container with a definite max-height set, or it will take all of the screen space vertically.
 *
 * Requires a minimum width of 280px
 * @version 0.0.1
 */
export default class Charts extends Component {
  render() {
    const config = {
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
      }]
    }
    return (
      <div>
        <Highcharts config={config}/>
      </div>
    )
  }
}
