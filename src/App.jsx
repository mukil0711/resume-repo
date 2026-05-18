import React from 'react'
import data from './data';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className='bg-light min-vh-100'>
        <div className='container py-5'>
            <div className='row'>
                {/*Left sidebar*/}   
                <div className='col-md-3'>
                    <Header data={data} />
                    <Skills data={data.skills}/>
                </div>
        
                {/*Right sidebar*/}
                <div className='col-md-9'>
                    <About data={data.about} />
                    <Experience data={data.experience} />
                    <Projects data={data.projects} />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default App
