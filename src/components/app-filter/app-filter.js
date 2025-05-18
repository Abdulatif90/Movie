<<<<<<< HEAD
import { useContext } from 'react'
import { Context } from '../../context'
import './app-filter.css'

const AppFilter = () => {
	const { state, dispatch } = useContext(Context)

=======

import './app-filter.css'

const AppFilter = ({ updateFilterHandler, filter }) => {
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
	return (
		<div className='btn-group'>
			{btnsArr.map(btn => (
				<button
					key={btn.name}
<<<<<<< HEAD
					className={`btn ${state.filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
					onClick={() => dispatch({ type: 'ON_FILTER', payload: btn.name })}
=======
					className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
					onClick={() => updateFilterHandler(btn.name)}
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
					type='button'
				>
					{btn.label}
				</button>
			))}
		</div>
	)
}

const btnsArr = [
	{ name: 'all', label: 'Barcha kinolar' },
	{ name: 'popular', label: 'Mashhur kinolar' },
	{ name: 'mostViewers', label: "Eng ko'p ko'rilgan kinolar" },
]

<<<<<<< HEAD
export default AppFilter
=======
export default AppFilter
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
