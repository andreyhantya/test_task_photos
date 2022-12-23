import React from "react";
import { StyledInput } from './styles'

const TextField = ({changeHandler, placeholder}) => {
    return (
        <>
            <StyledInput placeholder={placeholder} type="text" onChange={(e) => changeHandler(e)}/>
        </>
    )
}

export default TextField;