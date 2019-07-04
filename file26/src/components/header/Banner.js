import React from 'react'
import {name} from '../../../src/data.js';
//rfc -> func
//rcc ->classs

export default function Banner() {
    return (
        <div>
            <h1>{name}</h1>
            <h1>Hello from banner!</h1>
        </div>
    )
}