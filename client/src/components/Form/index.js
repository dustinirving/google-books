// Import React to use JSX
import React from 'react'

// Form function to allow the user to search for a particular book
function Form ({ search, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='Query'>
          <strong>Book</strong>
        </label>
        <input
          className='form-control'
          id='Title'
          type='text'
          value={search}
          placeholder='Ready Player One'
          name='search'
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='pull-right'>
        <button
          onClick={handleFormSubmit}
          type='submit'
          className='btn btn-lg btn-danger float-right'
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Form
