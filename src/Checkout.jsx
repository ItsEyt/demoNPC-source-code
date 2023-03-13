import React, { useState } from 'react'

const Checkout = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")

    const handleNotYet = (e) => {
        e.preventDefault();
        props.handleCheckout(false)
    }

    const handleDone = (e) => {
        e.preventDefault();
        alert(`נקנו פריטים בסך ${props.total} ש"ח`)
        props.handleCheckout(false)
    }

    return (
        <div dir='rtl' className="checkout-wrapper">
            <div className="checkout">
                <h1>פרטי תשלום</h1>
                <h3>סך הכל: {props.total} ש"ח</h3>
                <form className="grid-checkout">
                    <label id="firstname">
                        <span>שם פרטי</span>
                        <input onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="ישראל" />
                    </label>
                    <label id="lastname">
                        <span>שם משפחה</span>
                        <input onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="ישראלי" />
                    </label>
                    <label id="phone">
                        <span>טלפון</span>
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="0501234567" />
                    </label>
                    <label id="email">
                        <span>אימייל</span>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="mail@gmail.com" />
                    </label>
                    <label id="city">
                        <span>עיר</span>
                        <input onChange={(e) => setCity(e.target.value)} value={city} placeholder="תל אביב"/>
                    </label>
                    <label id="address">
                        <span>כתובת</span>
                        <input onChange={(e) => setAddress(e.target.value)} value={address} placeholder="דיזינגוף 99"/>
                    </label>
                    <label id="checkout-button">
                        <button className="button submit" onClick={(e) => handleDone(e)}>סיימתי</button>
                    </label>
                    <label id="cancel-button">
                        <button className="button cancel" onClick={(e) => handleNotYet(e)}>עדיין לא</button>
                    </label>
                </form>
            </div>
        </div >
    )
}

export default Checkout