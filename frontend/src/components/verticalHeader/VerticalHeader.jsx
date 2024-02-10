import React from 'react'
import "./style.css"
import Menu from '../menu/Menu'
import User from '../user/User'
import { useContext } from 'react'
import { Context } from '../../context/AppContext'

function VerticalHeader() {
    const { menu } = useContext(Context);
    console.log(menu);
    return (
        <div className='verticalHeaderContainer'>
            {
                menu ?
                    <Menu />
                    :
                    <User />
            }
        </div>
    )
}

export default VerticalHeader