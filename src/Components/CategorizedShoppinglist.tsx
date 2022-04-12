import { useEffect, useState } from 'react'
import Category from './Category'


type Items = {
	categories: itemCategory[]
}

type itemCategory = {
	categoryName: string
	items: ShoppingListItem[]
}

export type ShoppingListItem = {
	name: string
	active: 0 | 1 // 0 = active 1 = inactive
	pills?: string[]
}

const CategorizedShoppinglist = () => {

	const initialState: Items = { categories: [] }

	const [items, setItems] = useState<Items>(initialState)

	useEffect(() => {
			const mockJson: Items = {
				categories: [
					{ categoryName: 'Food', items: [{name: 'Milch', active:0}, {name: 'Eier', active:1}, {name: 'Toast', active:0}] },
					{ categoryName: 'Hygiene Products', items: [{name: 'Klopapier', active:1}, {name: 'Zahnpasta', active:0}] },
					{ categoryName: 'Miscellaneous', items: [{name: 'Besen', active:1}] }
				]
			}

			setItems(mockJson)
		},
		[])


	return (
		<>
			<div className='categorizedshoppinglist' id='categorizedshoppinglist'>
				{items.categories.map(category => (
					<Category categoryName={category.categoryName} items={category.items} />
				))}
			</div>
		</>)

}
export default CategorizedShoppinglist