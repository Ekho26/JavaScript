import React, {createContext, useState, useEffect} from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const [editTodo, setEditTodo] = useState({});
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [priorityFilter, setPriorityFilter] = useState("");

    useEffect(() => {
        if (!isDialogOpen) {
          if (isEditMode) setIsEditMode(false);
        }
    }, [isDialogOpen]);

    return (
        <StateContext.Provider
            value = {
                {
                isDialogOpen: [isDialogOpen, setIsDialogOpen],
                isEditMode: [isEditMode, setIsEditMode],
                editTodo: [editTodo, setEditTodo],
                priorityFilter: [priorityFilter, setPriorityFilter]
                }
            }
        >
            { children }
        </StateContext.Provider>
    )
}