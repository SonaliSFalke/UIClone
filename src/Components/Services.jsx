import React from 'react'

function Services(props) {
  return (
    <div className='container p-2  mx-auto pt-9'>
      <div className='services-cont grid grid-cols-1 lg:grid-cols-2 gap-20'>
        <div className="hed-left text-center">
            <h1 className='text-3xl sm:text-4xl bg-customGreen md:text-5xl font-semibold'>{props.head}</h1>
        </div>
        <div className="right-para">
            <p className='text-center sm:text-lg md:text-xl w-full sm:w-3/4 md:w-fit'>{props.para}</p>
        </div>
      </div>    
     </div>
  )
}

export default Services
