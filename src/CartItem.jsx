import React from 'react'
// @ts-ignore
import beans from './assets/beans.png'
// @ts-ignore
import machine from './assets/machine.png'
// @ts-ignore
import cups from './assets/cups.png'

const CartItem = (props) => {

    let images = {
        'beans': beans,
        'machine': machine,
        'cups': cups,
    }

    let sizes = {
        'kg': 'ק"ג',
        'package': 'חבילה',
        'single': 'יחידה'
    }

    return (
        <div dir='rtl' className='cart-item'>
            <img className='grid-item' src={images[props.prodname]} />
            <div className='grid-item' >{sizes[props.size]}</div>
            <div className='grid-item' >{props.amount}</div>
            <div className='grid-item' >{props.price * props.amount}</div>
            <button className='delete' onClick={() => props.onDelete((oldCart) => [...oldCart.filter((item, itemIdx) => itemIdx !== props.idx)])}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" /></svg>
            </button>
        </div>
    )
}

export default CartItem