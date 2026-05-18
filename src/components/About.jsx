import React from 'react'

const About = ({ data }) => {
  return (
    <div className='card shadow-sm mb-4 p-3'>
      <h5 className='border-bottom pb-2'>About</h5>
      <p>{data}</p>
    </div>
  )
}

export default About