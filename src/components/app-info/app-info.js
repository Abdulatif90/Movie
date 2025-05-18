<<<<<<< HEAD
import { useContext } from 'react'
import { Context } from '../../context'
import './app-info.scss'

const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
	const { state } = useContext(Context)

	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>Barcha kinolar soni: {state.data.length}</p>
			<p className='fs-4 text-uppercase'>
				Sevimli film: {state.data.filter(c => c.favourite).length}
			</p>
=======

import './app-info.css'

const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
			<p className='fs-4 text-uppercase'>Sevimli film: {favouriteMovieCount}</p>
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
		</div>
	)
}

<<<<<<< HEAD
export default AppInfo
=======
export default AppInfo
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
