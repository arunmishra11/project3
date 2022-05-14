import React, { useState } from 'react'
import { SET_SORT_BY } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';

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
        <div>
            <label htmlFor="price-sort">Sort by:</label>

            <select onChange={sort} id="product-sort">
                {options.map((item) => (
                    <option key={item.title} value={item.value}>{item.title}</option>
                ))}
            </select>


        </div>
    )
}
