import React from 'react'

const RadioButton = ({ name, id, onChange, checked, text, value }) => {
    return (
        <label htmlFor={id} className="radio-label">
            <input
                className="radio-input"
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={(e) => onChange(e)}
                checked={checked}
            />
            <span className="custom-radio">
                {text}
            </span>
        </label>
    )
}

export default RadioButton