import React from 'react'
import { RiMovieFill } from 'react-icons/ri';
import './Title.css'


export const Title = () => {
    return (
        <div className='title'>
            <h1>Movies Searcher </h1>
            <RiMovieFill size='3em' />
        </div>
    )
}
