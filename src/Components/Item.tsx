import { useState } from 'react'
import SwipeableViews, { OnSwitchingCallbackTypeDescriptor } from 'react-swipeable-views'

type ItemProps = {
	name: string,
	initialState: 1 | 0,
}


const Item = (props: ItemProps) => {

	const { name, initialState } = props

	const [active, setActive] = useState<1 | 0>(initialState)

	const onSwitching = (index: number, type: OnSwitchingCallbackTypeDescriptor) => {
		if (index === 1) {
			setActive(1)
		}
		if (index === 0) {
			setActive(0)
		}
	}

	return (
		<SwipeableViews className="items" resistance axis={'x-reverse'} onSwitching={onSwitching} index={active}>
			<div
				className='m-2 p-5 row-span-full bg-gray-200 items-center bg-white leading-none text-center text-gray-900 rounded-full p-2 shadow text-2xl'>
				<span>{name}</span>
			</div>
			<div
				className='m-2 p-5 row-span-full bg-gray-300 items-center bg-white leading-none text-center text-gray-500 rounded-full p-2 shadow text-2xl line-through'>
				<span>{name}</span>
			</div>

		</SwipeableViews>
	)
}

export default Item