import Input from './components/Form/Input/Input'
import TextArea from './components/Form/TextArea/TextArea'
import Dropdown from './components/Form/Dropdown/Dropdown'
import Radio from './components/Form/Radio/Radio'
import Toggle from './components/Form/Toggle/Toggle'
import Slider from './components/Form/Slider/Slider'
import Checkbox from './components/Form/Checkbox/Checkbox'
import DatePicker from './components/Form/DatePicker/DatePicker'

import Button from './components/Core/Button/Button'
import ProgressBar from './components/Core/ProgressBar/ProgressBar'
import ProgressBarMini from './components/Core/ProgressBarMini/ProgressBarMini'
import NoDataPanel from './components/Core/NoDataPanel/NoDataPanel'
import Tooltip from './components/Core/Tooltip/Tooltip'
import Table from './components/Core/Table/Table'
import Tabs from './components/Core/Tabs/Tabs'

import Charts from './components/Charts/Charts'

import Container from './components/Grid/Container/Container'
import Header from './components/Grid/Header/Header'
import Content from './components/Grid/Content/Content'
import Panel from './components/Grid/Panel/Panel'

const Core = {
	Button, ProgressBar, ProgressBarMini, NoDataPanel, Tooltip, Table, Tabs
}

const Form = {
	Input, TextArea, Dropdown, Radio, Toggle, Slider, Checkbox, DatePicker
}

const Grid = {
	Container, Header, Content, Panel
}

const DCNUXResources = { Core, Form, Grid, Charts }

export { 
	Input, 
	Button, 
	TextArea, 
	Dropdown, 
	Radio, 
	ProgressBar, 
	NoDataPanel, 
	ProgressBarMini, 
	Toggle, 
	Slider, 
	Checkbox, 
	DatePicker, 
	Tooltip, 
	Table, 
	Tabs,
	DCNCharts,
	Container,
	Header,
	Content,
	Panel,

	Core,
	Grid,
	Form,
	Charts }

export default DCNUXResources

