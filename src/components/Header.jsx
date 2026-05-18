import React from 'react'

const Header = ({data}) => {
  return (
    <div className='card shadow-sm mb-4 text-center p-3'>
        <h2 className='fw-bold'>{data.name}</h2>
        <p className='text-tertiary'>{data.role}</p>     
    </div>
  )
}

export default Header
