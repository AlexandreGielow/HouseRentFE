import React from 'react'
import useNewHomeForm from './useNewHomeForm'
import '../../App.css'
import './NewHomeForm.css'

const NewHomeForm = ({ homeForm }) => {
  const { handleChange, values } = useNewHomeForm(
    homeForm
  )

  return (
        <form className="form-wrapper">
            <div className="text">
                <label className="label">Postal Code</label>
                <input className="input" type="text" name="Name" value={values.PostalCode} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Country</label>
                <input className="input" type="text" name="Name" value={values.Country} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">State</label>
                <input className="input" type="text" name="Name" value={values.State} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">City</label>
                <input className="input" type="text" name="Description" value={values.City} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Region</label>
                <input className="input" type="text" name="Description" value={values.Region} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Address</label>
                <input className="input" type="text" name="Description" value={values.AddressName} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Number</label>
                <input className="input" type="text" name="Description" value={values.Number} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Complement</label>
                <input className="input" type="textarea" name="Description" value={values.Complement} onChange={handleChange}/>
            </div>
        </form>
  )
}

export default NewHomeForm
