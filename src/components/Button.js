import React, { useState, useEffect } from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline', 'btn--test']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  value
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  const [destiny, setDestiny] = useState('')

  const useDestiny = () => {
    if (!value) {
      setDestiny('/')
    } else {
      setDestiny(value)
    }
  }
  useEffect(() => {
    useDestiny()
  }, [useDestiny])
  return (
        <Link to={destiny} className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
  )
}
