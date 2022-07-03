import { Box } from '@mui/material';
import React, { useState } from 'react';
import './Todo.css'
import DoneIcon from '@mui/icons-material/Done';

import Checkbox from '@mui/material/Checkbox';



const options = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1 ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2 ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4",

];

const Todo = () => {
    const [selected, setSelected] = useState([]);
    const isAllSelected =
        options.length > 0 && selected.length === options.length;

    const handleChange = (event) => {
        const value = event.target.value;
        console.log(value);
        if (value === "all") {
            setSelected(selected.length === options.length ? [] : options);
            return;
        }

        const list = [...selected];
        const index = list.indexOf(value);
        index === -1 ? list.push(value) : list.splice(index, 1);
        setSelected(list);
    };



    const listItem = options.map((option) => {
        return (
            <div key={option}>
                <Checkbox
                    value={option}
                    onChange={handleChange}
                    checked={selected.includes(option)}
                />
                <span className="items">{option} <small id="item">Last Added : 10 sep 2022</small> </span>
            </div>
        );
    });

    return (
        <Box bgcolor={"theme.default"} className="todo-area">
            <div className=''>
                <h1>To-Do List</h1>
                <div >
                    <div className='d-flex' >
                        <textarea name="" id="" cols="70" rows="3"></textarea>
                        <button className='add-button'><DoneIcon style={{ fontSize: '15px' }} /> Add</button>

                    </div>
                    <div className='d-flex justify-content-between mt-3' >
                        <div className="d-flex ">
                            <Checkbox value="all" onChange={handleChange} checked={isAllSelected} />
                            <h1 className='mt-2'> Select All</h1>
                        </div>
                        <button className='add-button  '>Done</button>

                    </div>

                    {listItem}

                </div>
            </div>
        </Box>
    );
};

export default Todo;