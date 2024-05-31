import React from 'react'
import './discount.css';

const Discount = () => {
  return (
    <div className='discount__section'>
      <div className='discount__secton-sale'>Discount Sale</div>
      <div className='discount__secton-upto'>Upto 40%</div>
      <div className='discount__secton-sale' id="discount__hide">Discount Sale</div>
      <div className='discount__secton-upto' id="upto__hide">Upto 40%</div>
    </div>
  )
}

export default Discount