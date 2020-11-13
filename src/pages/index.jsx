/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'

import Box from '../components/box/box'

const index = () => {

	const [ data, setData ] = useState([])
	const [ pages, setPages ] = useState({
		currentPages : 1,
		totalPages : null
	})

	useEffect(() => {
		fetch ('https://reqres.in/api/users?page=2')
		.then(result => result.json())
		.then(parsed => {
			setData(parsed['data'])
		})
	}, [])

	const Container = { 
		display : 'flex',
		flexDirection : 'column',
		gap : '20px'
	}

	const Title = {
		textAlign : 'center',
		m : '50px 0'
	}

	return (
		<div>
			<div sx={ Title }>
				<h1>Infinite Scroll</h1>
			</div>
			<div sx={ Container }>
				{ data.length >= 1 && data.map((item, index) => {
					return <Box
						key={ index }
						firstName={ item['first_name'] }
						lastName={ item['last_name'] }
						avatar={ item['avatar'] }
						email={ item['email'] }
					/>
				}) }
			</div>
		</div>
	)
}

export default index