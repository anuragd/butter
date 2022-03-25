import React from 'react'
import PropTypes from 'prop-types'
import filter from 'lodash/filter'

import styles from './Panel.less'

/**
 * `Panel` is meant to serve as the basic building block of the grid system. Each panel is a div with a `row` flex-box display and a 24px(defined by __@base-size__ in `styles/grid.less`) padding on all sides.
 * 
 * * You can set the size each `Panel` using the size prop
 * * You can turn off the padding on any one of the sides, using the collapse prop and setting the appropriate side to true.
 * * You can set the `hasSurface` prop on a Panel instance to ensure that the panel renders a white surface for content display centered inside it. 
 * * Using a combination of these three props, all layouts designed, based on [this grid system](#/Grid), can be constructed. See [`App.js`] in the example repo for an example layout constructued using only this library
 * @version 0.0.1
 */
export default class Panel extends React.Component {

	static propTypes = {
		/**
		 * Setting any of the keys of this prop to true will remove all padding from that side in the Panel instance.
		 * Omitting this prop will render a 24px padding on all four sides of the div. Panels have no background color.
		 */
		collapse: PropTypes.shape({
			top: PropTypes.bool,
			right: PropTypes.bool,
			bottom: PropTypes.bool,
			left: PropTypes.bool
		}),
		/**
		 * Including this prop will cause the Panel to render a white background div for content display, inside the transparent panel. Note that the white surface will render after leaving space for padding of 24px on any sides not affted by the collapse prop specified. Use this in your DOM as a direct parent to your own components.
		 */
		hasSurface: PropTypes.bool,
		/**
		 * The size setting can be used to set the width of the Panel. The size options are broken down as follows:
		 * * __full__ : `width: 100%`
		 * * __half__ : `width: 50%`
		 * * __quarter__ : `width: 25%`
		 * * __threequarter__ : `width: 75%`
		 * Note that these are relative sizes, i.e, a half Panel inside of another Half Panel will have width 50% of 50% = 25% of whole.
		 * 
		 * __Also note that the DOM generated by this component has its CSS `box-sizing` set to `border-box`. This means that the percentage widths include the 24px padding.
		 */
		size: PropTypes.oneOf(['full', 'half', 'quarter', 'threequarter']),
		/**
		 * optional panel title
		 */
		label: PropTypes.string
	}

	static defaultProps = {
		collapse: {
			top: null,
			bottom: null,
			right: null,
			left: null
		},
		hasSurface: false,
		size: 'full'
	}

	render() {
		let style = {
			width: null,
			paddingTop:this.props.collapse.top?0:null,
			paddingBottom:this.props.collapse.bottom?0:null,
			paddingLeft:this.props.collapse.left?0:null,
			paddingRight:this.props.collapse.right?0:null
		}
		switch(this.props.size) {
			case 'full':
				style.width = '100%'
				break
			case 'threequarter':
				style.width = '75%'
				break
			case 'half':
				style.width = '50%'
				break
			case 'quarter':
				style.width = '25%'
				break
		}
		let children = this.props.children
		if(this.props.hasSurface) children = 
			<div className={styles.DCNSurface}>
				{this.props.label &&
					<div className={styles.panel_header}>{this.props.label}</div>
				}
				{this.props.children}
			</div>

		//Remove non HTML props from props object
		let props = filter(props,(prop, key) => {
			return (key!=='collapse' && key !== 'hasSurface' && key !== 'size')
			// return (key!=='collapse' && key !== 'hasSurface')
		})
		return(
			<div 
				style={style}
				className={styles.DCNPanel} 
				{...props}>
				{children}
			</div>
		)
	}

}