import React from 'react'

export default function Flag(props) {
    const { flag, name } = props
    return (
        <div className="flag-container">
            <img 
                src={flag} 
                alt={`${name}-flag`}
            />
        </div>
    )
}
