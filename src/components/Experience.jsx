import React from 'react'

const Experience = ({data}) => {
  return (
    <div className='card shadow-sm mb-4 p-3'>
        <h5 className='border-bottom pb-2'>Experience</h5>
        {data.map((exp,i) => (
            <div key={i} className='mb-3'>
                <h6 className='mb-0'>{exp.role}</h6>
                <small className='text-muted'>
                    {exp.company} | {exp.duration}
                </small>
                <ul>
                    {exp.details.map((point,i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Experience