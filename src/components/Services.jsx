import React from 'react'
import Section from './Section'

import commerce from "../assets/commerce.png"
import research from "../assets/research.png"
import web from "../assets/web.png"
import mobile from "../assets/mobile.png"



const Services = () => {
    const services = [
            {
                id: "1",
                image: commerce,
                title: "Ecommerce Website",
            },
            {
                id: 2,
                image: web,
                title: "web Developement",
            },
            {
                id: 3,
                image: mobile,
                title: "Mobile Developement",
            },
            {
                id: 4,
                image: research,
                title: "Research and Developement",
            }
        ]
  return (
    <Section
    title="Services ⚔️"
    subtitle="Here are all services that I provide to my cliebts. I hope I offer the services that you are looking for. If you dont find something that you are looking for then please send me an email"
    >

<div className='grid gap-10 lg:grid-cols-2'>
    {
        services.map(({id, image, title}) =>(
            <div key={id} className='flex flex-col items-center justify-center
            p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
                <img src={image} alt={title} className='w-36 h-36 md:h-44 md:w-44' />
                <h3 className='mt-5 text-base'>{title}</h3>
            </div>
        ))
    }
</div>

    </Section>
  )
}

export default Services
