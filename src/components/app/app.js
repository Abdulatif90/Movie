<<<<<<< HEAD
import { useState, useEffect, useContext } from 'react'
=======

import { Component } from 'react'
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
<<<<<<< HEAD
import MoviesAddForm from '../movies-add-form/movies-add-form'
import { Context } from '../../context'

import './app.css'

const App = () => {
	const [isLoading, setIsLoading] = useState(false)

	const { _, dispatch } = useContext(Context)

	useEffect(() => {
		setIsLoading(true)
		fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
			.then(response => response.json())
			.then(json => {
				const newArr = json.map(item => ({
					name: item.title,
					id: item.id,
					viewers: item.id * 10,
					favourite: false,
					like: false,
				}))
				dispatch({ type: 'GET_DATA', payload: newArr })
			})
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				{isLoading && 'Loading..'}
				<MovieList />
				<MoviesAddForm />
			</div>
		</div>
	)
}

export default App
=======
import MoviesAddForm from '../movie-add-form/movie-add-form'
import { v4 as uuidv4 } from 'uuid'

import './app.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ name: 'Empire of osman', viewers: 988, favourite: false, like: false, id: 1 },
				{ name: 'Ertugrul', viewers: 789, favourite: false, like: false, id: 2 },
				{ name: 'Omar', viewers: 1091, favourite: false, like: false, id: 3 },
			],
			term: '',
			filter: 'all',
		}
	}

	onDelete = id => {
		this.setState(({ data }) => ({
			data: data.filter(c => c.id !== id),
		}))
	}

	addForm = item => {
		const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
		this.setState(({ data }) => ({
			data: [...data, newItem],
		}))
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			}),
		}))
	}

	searchHandler = (arr, term) => {
		if (term.length === 0) {
			return arr
		}

		return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
	}

	filterHandler = (arr, filter) => {
		switch (filter) {
			case 'popular':
				return arr.filter(c => c.like)
			case 'mostViewers':
				return arr.filter(c => c.viewers > 800)
			default:
				return arr
		}
	}

	updateTermHandler = term => this.setState({ term })

	updateFilterHandler = filter => this.setState({ filter })

	render() {
		const { data, term, filter } = this.state
		const allMoviesCount = data.length
		const favouriteMovieCount = data.filter(c => c.favourite).length
		const visibleData = this.filterHandler(this.searchHandler(data, term), filter)

		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount} />
					<div className='search-panel'>
						<SearchPanel updateTermHandler={this.updateTermHandler} />
						<AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
					</div>
					<MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
					<MoviesAddForm addForm={this.addForm} />
				</div>
			</div>
		)
	}
}

export default App
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
