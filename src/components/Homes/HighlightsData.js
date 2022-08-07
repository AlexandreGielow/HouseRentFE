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
                <label className="label">Type</label>
                <select className="input" type="text" name="Description" value={values.Description} onChange={handleChange}>
                    <option value = "0">Room in House</option>
                    <option value = "1">House</option>
                    <option value = "2">Apartment</option>
                    <option value = "3">Trailer</option>
                </select>
            </div>
            <div className="text">
                <label className="label">Name</label>
                <input className="input" type="text" name="Name" value={values.Name} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Status</label>
                <input className="input" type="text" name="Status" value={values.Status} onChange={handleChange}/>
            </div>
            <div>
                <div className="text">
                    <label className="label">Avaliable from</label>
                    <input className="input" type="date" name="DateFrom" value={values.DateFrom} onChange={handleChange}/>
               </div>
                <div className="text">
                    <label className="label">Avaliable to</label>
                    <input className="input" type="date" name="DateTo" value={values.DateTo} onChange={handleChange}/>
                </div>
            </div>
            <div className="text">
                <label className="label">Value</label>
                <input className="input" type="text" name="Value" value={values.Value} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Size</label>
                <input className="input" type="text" name="Size" value={values.Size} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Rooms</label>
                <input className="input" type="text" name="Rooms" value={values.Rooms} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Furnished</label>
                <input className="input" type="text" name="Furnished" value={values.Furnished} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Accommodates</label>
                <input className="input" type="text" name="Accommodates" value={values.Accommodates} onChange={handleChange}/>
            </div>
            <div className="text">
                <label className="label">Description</label>
                <input className="input" type="Type" name="Description" value={values.Type} onChange={handleChange}/>
            </div>
        </form>
  )
}

export default NewHomeForm
