import React, {createContext, useState} from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [todos, setTodos]

    useEffect(() => {
        if (!isDialogOpen) {
          if (isEditMode) setIsEditMode(false);
        }
    }, [isDialogOpen]);

    return (
        <TodoContext.Provider
            value = { [todos, setTodos] }
        >
            { children }
        </TodoContext.Provider>
    )
}