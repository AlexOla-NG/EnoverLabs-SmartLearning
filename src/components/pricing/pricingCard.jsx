import React from 'react'
import { ReactComponent as Ellipse } from "../../assets/svg/Ellipse324.svg";

const pricingCard = ({duration, price, backgroundColor}) => {
  return (
    <div className='pricingCardItem' id={duration} style={{ backgroundColor: backgroundColor }}>
      <div className='pricingCardItemTop'>
        <div className='durationSection'>
            <h2>{duration} Plan</h2>
            <p>Charged {duration}</p>
        </div>
        <h2>N{price}</h2>
      </div>
      <div className='pricingCardItemBottom'>
        <Ellipse/>
      </div>
    </div>
  )
}

export default pricingCard
