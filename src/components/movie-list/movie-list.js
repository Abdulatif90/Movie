<<<<<<< HEAD
import MovieListItem from '../movie-list-item/movie-list-item'
import { useContext } from 'react'
import { Context } from '../../context'
import { filterHandler, searchHandler } from '../../utilities/data'

import './movie-list.css'

const MovieList = () => {
	const { state } = useContext(Context)

	const data = filterHandler(searchHandler(state.data, state.term), state.filter)

	return (
		<ul className='movie-list'>
			{data.map(item => (
				<MovieListItem key={item.id} {...item} />
=======

import './movie-list.css'

import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = ({ data, onDelete, onToggleProp }) => {
	return (
		<ul className='movie-list'>
			{data.map(item => (
				<MovieListItem
					key={item.id}
					name={item.name}
					viewers={item.viewers}
					favourite={item.favourite}
					like={item.like}
					onDelete={() => onDelete(item.id)}
					onToggleProp={e => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
				/>
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
			))}
		</ul>
	)
}

<<<<<<< HEAD
export default MovieList
=======
export default MovieList
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
