import React, { useState, createContext, useContext } from 'react'
import Icon from './Icon'

const FlyOutContext = createContext()

export const FlyOut = (props) => {

    const [open, toggle] = useState(false)
    const providerValue = { open, toggle }

    return (
        <div className={`flyout`} >
          <FlyOutContext.Provider value={providerValue}>
            {props.children}
        </FlyOutContext.Provider>  
        </div>
        
    )
}

export const Toggle = () => {
    const { open, toggle } = useContext(FlyOutContext)
    return (
        <div className="flyout-btn" onClick={() => toggle(!open)}>
             <Icon />
        </div>
    )
}

export const List = ({ children } ) => {
    const { open } = useContext(FlyOutContext)
    return open && <ul className="flyout-list" >{ children } </ul>
}

export const Item = ({ children }) => {
    const { open } = useContext(FlyOutContext)
    return open && <li className="flyout-item" >{ children } </li>
}

FlyOut.Toggle = Toggle
FlyOut.List = List
FlyOut.Item = Item
