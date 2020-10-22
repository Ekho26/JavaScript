import React from 'react';

function InputComponent(props) {

    return (
        <form className='w-full flex justify-between mb-4 items-end' 
              onSubmit= {props.handleSubmit}>
            <div className= ''>
                <label htmlFor= 'todoText'
                       className= 'text-xs text-gray-600 select-none'>
                           Enter Task
                </label>
            </div>
            <input type= 'text' 
                   id= 'todoText' 
                   placeholder= 'Eg. - Learn React' 
                   className= 'h-8 bg-white p-2 rounded'
                   value= {props.value} 
                   onChange= {props.handleChange}
            ></input>
            <button className='h-8 p-2 bg-white rounded'
                    type= 'submit'>
                ✔️
            </button>
        </form>
    )
}

export default InputComponent;