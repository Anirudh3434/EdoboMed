import React from 'react';
import './CartComponent.css';
import editIcon from '../../assets/Icon/edit.png'
export default function Summary({ data , method}) {
  return (
    <div className="summary-container">
      <h3>Cart Summary</h3>
      <div className="summary-item">
        {data.map((items) => (
          <div className="item-row" key={items.id}>
            <div className="item-details">
              <img src={items.url} alt={items.title} className="item-image" />
              <div className="item-info">
                <span className="offer-item-title">{items.title}</span>
                <span className="offer-item-price">{items.price}</span>
              </div>
            </div>
            <div className='mrp-and-quantity-container'>
            <span className="offer-item-mrp">{items.mrp}</span>
            <div className='offer-and-quantity-container'>
                <div>
                    <span className="offer-item-quantity">Qt.1{items.quantity}</span>
                </div>
            <div  className="offer-item-container">
                <span className="offer-item-discount">5% off</span>
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className='address-container'>
       <button>
       <img 
        
        src={editIcon} width={'20px'}/>
       </button>
         <span>Address</span>
         <span>123, ABC Street, XYZ City</span>
         <span>Ph. 9834573009</span>

      </div>
      <div className='payment-buttons-container'>
      <button onClick={method} className='cod'>Cash on delivery</button>
      <button>Pay </button>
      </div>
      
    </div>
  );
}
