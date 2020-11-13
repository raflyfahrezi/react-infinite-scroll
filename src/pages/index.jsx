/** @jsx jsx */
import { jsx } from 'theme-ui'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState, useEffect } from 'react'

import Box from '../components/box/box'

const index = () => {

	const [ data, setData ] = useState([])
	const [ pages, setPages ] = useState({
		currentPages : 0,
		totalPages : 0
	})

	const fetchingData = () => {
		fetch (`https://reqres.in/api/users?page=${ pages['currentPages'] + 1 }`)
		.then(result => result.json())
		.then(parsed => {
			const pagesTemp = { ...pages }

			pagesTemp['totalPages'] = parsed['total_pages']
			pagesTemp['currentPages'] = pagesTemp['currentPages'] + 1

			setData(data.concat(parsed['data']))
			setPages(pagesTemp)
		})
	}

	useEffect(() => {
		fetchingData()
	}, [])

	const Container = { 
		display : 'flex',
		flexDirection : 'column',
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
				{ data.length >= 1 && 
					<InfiniteScroll
						dataLength={ data.length }
						hasMore={ pages['currentPages'] < pages['totalPages'] }
						next={ fetchingData }
						loader={ <h3>Loading...</h3> }
						style={{ 
							display : 'flex', 
							flexDirection : 'column',
							gap : '20px' 
						}}
					>
						{ data.map((item, index) => {
							return <Box
								key={ index }
								firstName={ item['first_name'] }
								lastName={ item['last_name'] }
								avatar={ item['avatar'] }
								email={ item['email'] }
							/> 
						}) }
					</InfiniteScroll>
				}
			</div>
		</div>
	)
}

export default index