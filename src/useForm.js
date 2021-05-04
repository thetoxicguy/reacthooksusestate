import React, {useState} from 'react';

export const useForm = (initialValues) => {
    const [values,setValues] = useState(initialValues);

    // In this case, for the function,
    // we return this operation to use with the [,] format (feeding useState)
    return[values, e => {
            setValues(
                {...values, [e.target.name]: e.target.value}// ...values summons the previous values
            )
            }
        ]
}