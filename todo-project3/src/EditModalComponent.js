import React, { useState, useEffect } from 'react';

const EditModalComponent = (props) => {
    const [inputValue, setInputValue] =useState('');
    const [todo, setTodo] = useState({});

    useEffect(() => {
        setInputValue(props.todo.val);
        setTodo(props.todo)
    }, [props.todo])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={`${props.isOpen ? 'block' : 'hidden'} absolute 
        bg-blue-100 p-8 inset-0 text-gray-900`}>
            <h2 className='text-gray-900 text-lg'>
                Update Todo
            </h2>
            <form className='w-full flex justify-between mb-4 items-end' 
                  onSubmit= {(event) => {props.updateTodo(event.inputValue)}}>
                <div className= ''>
                    <label htmlFor= 'todoText'
                           className= 'text-xs text-gray-600 select-none block'>
                           Edit task
                    </label>
                </div>
                <input  type= 'text'
                        className= 'h-8 bg-white p-2 rounded'
                        value= {inputValue}
                        onChange= {handleChange}
                ></input>
                <button className='h-8 p-2 rounded'
                    type= 'submit'>
                    ✔️
                </button>
            </form>
        </div>
    )
}

export default EditModalComponent;