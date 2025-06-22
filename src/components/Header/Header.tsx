import React from 'react'
import './style.css'
import { ArrowDown, Play, User } from 'lucide-react'

const Header = () => {
    return (
        <div className='header'>
            <div className='leftPart'>
                <text className='title'>Delivery in 8 minutes</text>
                <div className='AddressContainer'>
                    <text className='address'>address shjdshjh s fhsj fhsjf fs hfisfhjsf jsf jhsf hj</text>
                    <Play fill='black' style={{ transform: 'rotate(90deg)', marginLeft: 5 }} size={15} />
                </div>

            </div>
            <div className='rightPart'>
                <User size={30} />
            </div>
        </div>
    )
}

export default Header