import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import Checkout from './Checkout'
// @ts-ignore
import cartSVG from './assets/cart.svg'


const Cart = (props) => {

    const [checkout, setCheckout] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(props.cart.reduce((accumulator, prod) => {
            return accumulator + props.prices[prod.prodname]?.[prod.size] * prod.amount
        }, 0))

    }, [props.cart])


    return (
        <div className="shopping-cart">
            <input type={'checkbox'} id='cartImg'/>
            <label htmlFor="cartImg">
                <img src={cartSVG} className="cart-img" />
            </label>
            {props.cart.length !== 0 && <div className='categories'>
                <span></span>
                <span>מחיר</span>
                <span>כמות</span>
                <span>סוג</span>
                <span>מוצר</span>
            </div>}
            {props.cart.length === 0 ?
                <div className="empty-cart">
                    <p>העגלה שלך ריקה</p>
                </div> :
                props.cart.map((item, idx) =>
                    <CartItem
                        key={idx}
                        prodname={item.prodname}
                        size={item.size}
                        amount={item.amount}
                        price={props.prices[item.prodname]?.[item.size]}
                        idx={idx}
                        onDelete={props.delete} />
                )}
            {props.cart.length !== 0 && <span style={{ color: 'black', display: 'block' }}>
                מחיר סופי: {totalPrice}
            </span>}
            {props.cart.length !== 0 && <button className="button" onClick={() => setCheckout(true)}>המשך לתשלום</button>}
            {checkout && <Checkout handleCheckout={setCheckout} total={totalPrice} />}
        </div>
    )
}

export default Cart