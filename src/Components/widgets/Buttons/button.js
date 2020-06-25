import React from 'react'
import {Button} from 'react-bootstrap'
import './buttons.css'

const Buttons = (props)=>{
    return(
        <>
        <Button variant="none" className="CMButton"><p className="buttonp">{props.cta}</p></Button>
        </>
    )
}

export default Buttons