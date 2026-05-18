import React from 'react'

const Skills = ({data}) => {
  return (
    <div className='card shadow p-3'>
        <h5 className='bottom-border pb-2'>Skills</h5>
        <div>
            {data.map((skills,i) => (
                <ul key={i} className='d-flex fs-6 me-5 mb-2'>
                    <li>{skills}</li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default Skills
