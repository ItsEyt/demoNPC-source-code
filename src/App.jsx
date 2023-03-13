import React from 'react'
import { useState } from 'react'
import './App.css'
// @ts-ignore
import beans from './assets/beans.png'
// @ts-ignore
import coffeeMachine from './assets/machine.png'
// @ts-ignore
import coffeeMug from './assets/cups.png'
// @ts-ignore
import registered from './assets/registered.png'
import Cart from './Cart'
import Counter from './Counter'
import RadioButton from './RadioButton'

function App() {
    const [countBeans, setCountBeans] = useState(1)
    const [countMachines, setCountMachines] = useState(1)
    const [countCups, setCountCups] = useState(1)
    const [shoppingCart, setShoppingCart] = useState([])
    const [beansSize, setBeansSize] = useState('kg')
    const [cupAmount, setCupAmount] = useState('single')

    let prices = {
        'beans': {
            'kg': 10,
            'package': 25
        },
        'machine': { 'single': 150 },
        'cups': {
            'single': 15,
            'package': 120
        }
    }

    const handleSize = (e) => {
        e.target.name === 'beans' && setBeansSize(e.target.value)
        e.target.name === 'cups' && setCupAmount(e.target.value)
    }

    const handleAddToCart = (name) => {
        // @ts-ignore
        name === 'beans' && setShoppingCart((oldCart) => [...oldCart, { prodname: 'beans', size: beansSize, amount: countBeans }])
        // @ts-ignore
        name === 'machine' && setShoppingCart((oldCart) => [...oldCart, { prodname: 'machine', size: 'single', amount: countMachines }])
        // @ts-ignore
        name === 'cups' && setShoppingCart((oldCart) => [...oldCart, { prodname: 'cups', size: cupAmount, amount: countCups }])

    }

    return (
        <>
            <Cart cart={shoppingCart} prices={prices} delete={setShoppingCart} />
            <div dir='rtl' className="App">
                <h1 className="text"><img style={{height:'10px'}} src={registered}/>Mockaffe</h1>
                <h3 className="text muted">הקפה הטוב ביותר שניתן להכין</h3>
                <div className='card-wrapper'>
                    <div className="belt"></div>
                    <div className="card">
                        <img src={beans} alt='beans' />
                        <span>פולי קפה</span>
                        <span>{prices['beans'][beansSize]} ש"ח</span>
                        <div className='radio-container'>
                            <RadioButton
                                name='beans'
                                id="beans-weight"
                                text='ק"ג'
                                value='kg'
                                onChange={handleSize}
                                checked={beansSize === 'kg' ? true : false}
                            />
                            <RadioButton
                                name='beans'
                                id="beans-package"
                                text='חבילה'
                                value='package'
                                onChange={handleSize}
                                checked={beansSize === 'package' ? true : false}
                            />
                        </div>
                        <Counter count={countBeans} handleCount={setCountBeans} />
                        <span>סך הכל: {prices['beans'][beansSize] * countBeans} ש"ח</span>
                        <button onClick={() => handleAddToCart('beans')} className='button'>הוסף לסל</button>
                    </div>
                    <div className="card">
                        <img src={coffeeMachine} alt='beans' />
                        <span>מכונת קפה</span>
                        <span>{prices['machine']['single']} ש"ח</span>
                        <div className='radio-container'>
                            <RadioButton
                                name='machine'
                                id="machine-id"
                                text='יחידה'
                                value='single'
                                onChange={true}
                                checked={true} />
                        </div>
                        <Counter count={countMachines} handleCount={setCountMachines} />
                        <span>סך הכל: {prices['machine']["single"] * countMachines} ש"ח</span>
                        <button onClick={() => handleAddToCart('machine')} className='button'>הוסף לסל</button>
                    </div>
                    <div className="card">
                        <img src={coffeeMug} alt='coffeemug' />
                        <span>כוסות קפה</span>
                        <span>{prices['cups'][cupAmount]} ש"ח</span>
                        <div className='radio-container'>
                            <RadioButton
                                name='cups'
                                id="cups-single"
                                text='יחידה'
                                value='single'
                                onChange={handleSize}
                                checked={cupAmount === 'single' ? true : false}
                            />
                            <RadioButton
                                name='cups'
                                id="cups-package"
                                text='חבילה'
                                value='package'
                                onChange={handleSize}
                                checked={cupAmount === 'package' ? true : false}
                            />
                        </div>
                        <Counter count={countCups} handleCount={setCountCups} />
                        <span>סך הכל: {prices['cups'][cupAmount] * countCups} ש"ח</span>
                        <button onClick={() => handleAddToCart('cups')} className='button'>הוסף לסל</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
