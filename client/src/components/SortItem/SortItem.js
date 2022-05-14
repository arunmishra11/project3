import React, { useState } from 'react'
import { SET_SORT_BY } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import './style.css'

export default function SortItem() {



const [sortBy, setSortBy] = useState("");

const [state, dispatch] = useStoreContext();


const options = [
    {
        title: "Please choose an option",
        value: ''
    },
    {
        title: "Price By Lowest Value",
        value: "price_asc"
    },
    {
        title: "Price By Highest Value",
        value: "price_desc"
    },
    {
        title: "Name By Ascending",
        value: "name_asc"
    },
    {
        title: "Name By Descending",
        value: "name_desc"
    }
]


function sort(e){
 //   console.log(e.target.selectedIndex);
    const selected =options[e.target.selectedIndex];

    dispatch({
        type: SET_SORT_BY,
        sort_type: selected.value
    })
    
}


    return (
        <div className='sort'>
            <svg 
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
            <label htmlFor="price-sort">Sort by:</label>

            <select onChange={sort} id="product-sort">
                {options.map((item) => (
                    <option key={item.title} value={item.value}>{item.title}</option>
                ))}
            </select>


        </div>
    )
}
