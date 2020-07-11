import React from 'react';
import { Link } from 'react-router-dom';

const FeturedItem = ({room: {images, name, price, size, slug, id}}) =>{
  return(
    <div className='col-md-12 col-lg-4'>
      <div className='card fetured-card position-relative Larger-shadow'>
        <img src={images[0]} alt='fetureroom' className='card-img-top img-fluid' />
        <div className='position-absolute fetured-price p-2 text-center text-light pr-3' style={{background:'#000', borderRadius: '0 0 18px 0',fontSize: '12px'}}>
          <h6 className='mb-0' style={{letterSpacing: '3px'}}>${price}</h6>
          <p className='mb-0'>Per Night</p>
        </div>
        <div className='overlay-fetured position-absolute d-flex justify-content-center align-items-center w-100 h-100'>
          <Link to={`/room/${slug}`} className='btn banner-btn text-uppercase rounded'>Fetures</Link>
        </div>
        <div className='card-fotter py-1 text-center' style={{background:'#C9C9C9'}}>
          <h5 className='text-center text-capitalize' style={{letterSpacing: '3px'}}>{name}</h5>
        </div>
      </div>
    </div>
  )
}

export default FeturedItem;
