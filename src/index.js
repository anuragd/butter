import Input from './components/Form/Input/Input'
import TextArea from './components/Form/TextArea/TextArea'
import Dropdown from './components/Form/Dropdown/Dropdown'
import Radio from './components/Form/Radio/Radio'
import Toggle from './components/Form/Toggle/Toggle'
import Slider from './components/Form/Slider/Slider'
import Checkbox from './components/Form/Checkbox/Checkbox'
import DatePicker from './components/Form/DatePicker/DatePicker'

import Button from './components/Basics/Button/Button'
import ProgressBar from './components/Basics/ProgressBar/ProgressBar'
import ProgressBarMini from './components/Basics/ProgressBarMini/ProgressBarMini'
import NoDataPanel from './components/Basics/NoDataPanel/NoDataPanel'
import Tooltip from './components/Basics/Tooltip/Tooltip'
import Table from './components/Basics/Table/Table'
import Tabs from './components/Basics/Tabs/Tabs'

import Charts from './components/Charts/Charts'

import Container from './components/Grid/Container/Container'
import Header from './components/Grid/Header/Header'
import Content from './components/Grid/Content/Content'
import Panel from './components/Grid/Panel/Panel'

const Basics = {
	Button, ProgressBar, ProgressBarMini, NoDataPanel, Tooltip, Table, Tabs
}

const Form = {
	Input, TextArea, Dropdown, Radio, Toggle, Slider, Checkbox, DatePicker
}

const Grid = {
	Container, Header, Content, Panel
}

const DCNUXResources = { Basics, Form, Grid, Charts }

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

	Basics,
	Grid,
	Form,
	Charts }

