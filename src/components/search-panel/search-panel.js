<<<<<<< HEAD
import { useContext, useState } from 'react'
import { Context } from '../../context'
import './search-panel.css'

const SearchPanel = () => {
	const [term, setTerm] = useState('')
	const { _, dispatch } = useContext(Context)

	const updateTermHandler = e => {
		const term = e.target.value.toLowerCase()
		setTerm(term)
		dispatch({ type: 'ON_TERM', payload: term })
	}

	return (
		<input
			type='text'
			className='form-control search-input'
			placeholder='Kinolarni qidirish'
			onChange={updateTermHandler}
			value={term}
		/>
	)
}

export default SearchPanel
=======

import { Component } from 'react'
import './search-panel.css'

class SearchPanel extends Component {
	constructor(props) {
		super(props)
		this.state = { term: '' }
	}

	updateTermHandler = e => {
		const term = e.target.value.toLowerCase()
		this.setState({ term })
		this.props.updateTermHandler(term)
  }

	render() {
		return (
			<input
				type='text'
				className='form-control search-input'
				placeholder='Kinolarni qidirish'
				onChange={this.updateTermHandler}
				value={this.state.term}
			/>
		)
	}
}

export default SearchPanel
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
