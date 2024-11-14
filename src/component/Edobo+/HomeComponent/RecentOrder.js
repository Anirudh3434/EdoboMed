import React from 'react'
import './Home.css'


export default function RecentOrder() {
  return (
    <div className='recent-order-container'>
        <h4>Your Recent Order</h4>
    <div className='my-order-slider'>
     {  [1,2,3].map((items)=>(
        <div className='order-card'>
             <img alt='order'/>
        <div className='order-detail'>
        <span><b>Order No. :</b> #445654082</span>
        <span><b>Order On:</b> 2022-02-20</span>
        <span><b>Delivery Type:</b> Express Delivery</span>
        <span><b>Status:</b> Pending</span>

        <div className='orders-btn-container'>
          <button className='rate-order-btn'>Re order</button>
          <button className='rate-order-btn'>Rate order</button>
        </div>
        </div>

             
             
         </div>
       ))}
    </div>
    </div>
  )
}
