

function Categories({categoryValue, onClickCategory}) {

    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, idx) => (
                        <li className={categoryValue === idx ? 'active' : ''} onClick={() => onClickCategory(idx)}
                            key={idx}>
                            {category}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories