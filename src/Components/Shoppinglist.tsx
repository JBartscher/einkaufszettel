import { useEffect, useState } from 'react'
import Category from './Category'


type Items = {
	categories: itemCategory[]
}

type itemCategory = {
	categoryName: string
	items: string[]
}

const Shoppinglist = () => {

	const initialState: Items = { categories: [] }

	const [items, setItems] = useState<Items>(initialState)

	useEffect(() => {
			const mockJson: Items = {
				categories: [
					{ categoryName: 'Food', items: ['Milch', 'Eier', 'Toast'] },
					{ categoryName: 'Hygiene Products', items: ['Klopapier', 'Zahnpasta'] },
					{ categoryName: 'Miscellaneous', items: ['Besen'] }
				]
			}

			setItems(mockJson)
		},
		[])


	return (
		<>
			<div className="shoppinglist" id="shoppinglist">
				{items.categories.map(category => (
					<Category categoryName={category.categoryName} items={category.items} />
				))}
			</div>
		</>)

}
export default Shoppinglist