import React from 'react'

const Counter = (props) => {



    return (
        <div className='counter-wrapper'>
            <button
                className='counter-button counter-button--right'
                onClick={() => props.handleCount((counter) => counter < 10 ? counter + 1 : 10)}
            >
                <h2>+</h2>
            </button>
            {props.count}
            <button
                className='counter-button counter-button--left'
                onClick={() => props.handleCount((counter) => counter > 1 ? counter - 1 : 1)}
            >
                <h2>-</h2>
            </button>
        </div>
    )
}

export default Counter