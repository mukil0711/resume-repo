import React from 'react'

const Projects = ({data}) => {
  return (
    <div className='card shadow-sm mb-4 p-3'>
        <h5 className='border-bottom pb-2'>Projects</h5>
        {data.map((project,i) => (
            <div key={i} className='mb-2'>
                <h6>{project.title}</h6>
                <p className='mb-1'>{project.details}</p>
            </div>
        ))}
    </div>
  )
}

export default Projects