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
                <label className="label">Ammenities</label>
                <input className="input" type="text" name="Name" value={values.Name} onChange={handleChange}/>
            </div>
            <button>
                Add
            </button>
        </form>
  )
}

export default NewHomeForm
