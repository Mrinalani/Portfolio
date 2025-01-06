import React from 'react'

const Section = ({title, subtitle, children}) => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center py-10 px-5 text-center'>
        <h3 className='py-3 text-2xl lg:text-4xl'>{title}</h3>
        <p className='max-w-xl font-light text-gray-500 mb-10'>{subtitle}</p>
        {children}
      
    </section>
  )
}

export default Section
