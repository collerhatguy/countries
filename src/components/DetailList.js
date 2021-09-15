import React from 'react'
import { v4 as uuid } from "uuid"
import Detail from './Detail'

export default function DetailList(props) {
    const { details, country } = props
    return (
        <>
            {
                details.map(d => 
                    <Detail 
                        detail={d} 
                        value={country[d]}
                        key={uuid()}
                    />
                )
            }
        </>
    )
}
