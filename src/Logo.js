import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bigIron from './BigIron.png'
import bigiron1 from './bigiron1.png'
import bigiron3 from './bigiron3.png'
import bigiron4 from './bigiron4.png'
import bigiron2 from './bigironII.png'

function Logo() {
    return (
    <Carousel className='flight-log-carousel'>
        <div>
            <img className='logo' src={bigIron} alt='a mig and a sabre merge at very very close range'/>
        </div>
        <div>
            <img className='logo' src={bigiron1} alt='a mig and a sabre merge at very very close range'/>
        </div>
        <div>
            <img className='logo' src={bigiron2} alt='a mig and a sabre merge at very very close range'/>
        </div>
        <div>
            <img className='logo' src={bigiron3} alt='a mig and a sabre merge at very very close range'/>
        </div>
         <div>
            <img className='logo' src={bigiron4} alt='a mig and a sabre merge at very very close range'/>
        </div>
    </Carousel>
    )
}

export default Logo
