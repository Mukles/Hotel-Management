import React, { useContext } from 'react';
import { MyContext } from './ContexProvider';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'

const RoomList = ({rooms}) =>{
  const context = useContext(MyContext);
  const { loading } = context

  if(loading){
    return(
      <div className='text-center my-5'>
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    )
  }

  return(
    <>
    {
      rooms.length?(
        <div className='fitler-item'>
          <div className='container'>
            <div className='row'>
              {
                rooms.map(item =>(
                  <div key={item.id} className='col-md-12 col-lg-4 mb-4 mx-auto'>
                    <div className='card fetured-card position-relative Larger-shadow'>
                      <img src={item.images[0]} alt='fetureroom' className='card-img-top img-fluid' />
                        <div className='position-absolute fetured-price p-2 text-center text-light pr-3' style={{background:'#000', borderRadius: '0 0 18px 0',fontSize: '12px'}}>
                          <h6 className='mb-0' style={{letterSpacing: '3px'}}>${item.price}</h6>
                          <p className='mb-0'>Per Night</p>
                        </div>
                        <div className='overlay-fetured position-absolute d-flex justify-content-center align-items-center w-100 h-100'>
                          <Link  to={`/room/${item.slug}`} className='btn banner-btn text-uppercase rounded'>Fetures</Link>
                        </div>
                        <div className='card-fotter py-1 text-center' style={{background:'#C9C9C9'}}>
                          <h5 className='text-center text-capitalize' style={{letterSpacing: '3px'}}>{item.name}</h5>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
         </div>
      )
      : <div className='container py-5'>
        <h1 className='text-center py-3'>No Room Data Found !</h1>
      </div>
    }
    </>
  )
}

export default RoomList;
