import React from 'react'
import Poster from './Poster'
import Review from './Review'
import SelectCity from './SelectCity'


export default function Home() {
    return (
        <div>
            <SelectCity />
            <div className="h-3 bg-white bg-opacity-80"></div>
            <Poster />
            <div className="h-3 bg-white bg-opacity-80"></div>
            <Review />
        </div>
    )
}
