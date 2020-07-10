// Import React to make use of JSX
import React from 'react'

// The card component with a title and card body
function Card ({ icon, title, children }) {
  return (
    <div className='card mt-4'>
      <div className='card-header'>
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden='true' /> {title}
          </strong>
        </h3>
      </div>
      <div className='card-body'>{children}</div>
    </div>
  )
}

export default Card
