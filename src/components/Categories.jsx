import {useState} from "react";

function Categories() {
    const [categoryActive, setCategoryActive] = useState(0);

    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((item, idx) => (
                        <li className={categoryActive === idx ? 'active' : ''} onClick={() => setCategoryActive(idx)}
                            key={idx}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories