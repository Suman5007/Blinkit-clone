import React, { useEffect, useState } from 'react'
import './style.css'
import { Search } from 'lucide-react'

const searchText = [
    'Search "milk"',
    'Search "milk1"',
    'Search "milk2"',
    'Search "milk3"',
]

const SearchComponent = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % searchText.length)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="search">
            <div className="searchContainer">
                <Search size={20} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                    type="text"
                    readOnly
                    className="animated-placeholder-input"
                />
                <div className="placeholder-overlay">
                    <span key={index} className="placeholder-text">
                        {searchText[index]}
                    </span>
                </div>
            </div>
        </div>
    )
}


export default SearchComponent
