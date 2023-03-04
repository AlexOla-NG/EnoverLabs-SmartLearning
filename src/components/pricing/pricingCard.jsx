import React from 'react'
import { ReactComponent as Ellipse } from "../../assets/svg/Ellipse324.svg";

const pricingCard = ({duration, price}) => {
  return (
    <div className='pricingCardItem'>
      <div>
        <div className='durationSection'>
            <h2>{duration} Plan</h2>
            <p>Charged {duration}</p>
        </div>
        <h2>N{price}</h2>
      </div>
      <div>
        <Ellipse/>
      </div>
    </div>
  )
}

export default pricingCard
