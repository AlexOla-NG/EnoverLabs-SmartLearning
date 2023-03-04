import React from 'react'
import Footer from "../components/footer/Footer"
import PricingCard from "../components/pricing/pricingCard"
import { ReactComponent as BlueTickMark } from "../assets/svg/BlueTickMark.svg";

const Pricing = () => {
  return (
    <div className='pricingContainer'>
      <h2>
      Select a plan that works for you
      </h2>
      <p>
      Get access to unlimited resources, unlimited tests, create study plan that helps you prepare better for your JAMB
      </p>
      <div className='pricingFeatures'>
        <div className='pricingFeaturesItem'>
          <BlueTickMark/>
          <p>Gamified tests</p>
        </div>
        <div className='pricingFeaturesItem'>
        <BlueTickMark/>
          <p>Unlimited resources</p>
        </div>
        <div className='pricingFeaturesItem'>
          <BlueTickMark/>
          <p>Progressive learning</p>
        </div>
        <div className='pricingFeaturesItem'>
          <BlueTickMark/>
          <p>24/7 support</p>
        </div>
        <div className='pricingFeaturesItem'>
          <BlueTickMark/>
          <p>Questions with explainable workings</p>
        </div>
        <div className='pricingFeaturesItem'>
          <BlueTickMark/>
          <p>Leader board</p>
        </div>
      </div>
      <p>Select a plan that works for you</p>
      <div className='pricingPlanSection'>
          <div className="pricingCard">

          </div>
          <div className="pricingCard">

          </div>
          <div className="pricingCard">

          </div>
      </div>
      <div>
          <PricingCard duration="monthly" price="1000"/>
          <PricingCard duration="quarterly" price="2500"/>
          <PricingCard duration="yearly" price="9000"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Pricing