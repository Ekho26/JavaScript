import React, {createContext} from 'react';
import {useFormik} from 'formik';

export const FormikContext = createContext();

const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().slice(0, 10);
};

export const FormikProvider = ({children}) =>
{
        const formik = useFormik({
            initialValues: {
                todoText: "",
                priority: "Low",
                dueDate: getCurrentDate(),
            }
        })
    return(
        <FormikContext.Provider value={formik}>
            {children}
        </FormikContext.Provider>
    )
}