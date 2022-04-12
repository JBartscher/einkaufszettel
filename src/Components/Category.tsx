import Item from './Item'
import { ShoppingListItem } from './Shoppinglist'

type CategoryProps = {
	categoryName: string,
	items: ShoppingListItem[]
}

const Category = (props: CategoryProps) => {

	const { categoryName, items } = props;

	const categoryNameWithoutSpaces :string = categoryName.replace(/\s+/g, '')

	return (
		<div className={'category'}>
			<h2 className='accordion-header mb-0' id={`heading${categoryNameWithoutSpaces}`}>
				<button className='
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        text-xl
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      ' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${categoryNameWithoutSpaces}`} aria-expanded='true'
												aria-controls={`collapse${categoryNameWithoutSpaces}`}>
					{categoryName}
				</button>
			</h2>
			<div id={`collapse${categoryNameWithoutSpaces}`} className='accordion-collapse collapse show'
								aria-labelledby={`heading${categoryNameWithoutSpaces}`}>
				<div className='grid-rows-1 accordion-body py-4 px-5'>

					{items.map(item =>(<Item initialState={item.active} name={item.name}/>))}

				</div>
			</div>
		</div>
	)
}

export default Category