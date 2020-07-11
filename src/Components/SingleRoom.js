import React, { Component } from 'react';
import { Consumer } from './ContexProvider';
import Error from './Error';
import ModalWrapper from './Modal_Wrapper';
import ModalElement from './Modal_Element';
import { Link } from 'react-router-dom';
import {RoomData} from './StyledCompoents'

class SingleRoom extends Component {
  constructor(props){
    super(props);
    this.state ={
      slug: this.props.match.params.slug
    }
  }


  render(){
  return(
  <Consumer>
    {
      value =>{
        const { getFeturedRoom} = value;
        const room = getFeturedRoom(this.state.slug);
          if(!room){
            return(
              <section id='empty-data'>
              <Error />
              </section>
            )
          }
          const { name, images, price, description, pets, capacity, size, breakfast } = room;
          const [mainImage,...childImages] = images;
          return(
            <RoomData id='room-data' bg_Img={mainImage} className='mt-5'>
              <ModalWrapper cls=''>
              <ModalElement title={name} subTitle={`${room.name} price At ${price}`}><Link className='btn banner-btn' to='/'>Return Home</Link></ModalElement>
            </ModalWrapper>
              <div className='container'>
              <div className='row'>
                {
                  childImages.map((item, i) => <div key= {i} className='col-md-4'>
                    <img className='img-fluid' src={item}  alt={name} />
                  </div>)
                }
                <div className='col-md-6 pt-4'>
                  <h1 className='text-left'>Details:</h1>
                  <p>{description}</p>
                </div>
                <div className='col-md-6 pt-4 '>
                  <h1 className='text-left'>Info</h1>
                  <ul className='Navbar'>
                    <li className=''>Price: ${price}</li>
                    <li className=''>Size: ${size}SQFT</li>
                    <li className=''>Capacity: ${capacity}</li>
                    <li className=''>breackfast: {breakfast? 'Free': 'Primier'}</li>
                    <li className=''>{!pets ? <span>Pret Allowed</span>:<span>Pets Not Allowed</span>}</li>
                  </ul>
                </div>
              </div>
              </div>
            </RoomData>
          )
        }

    }
  </Consumer>
    )
  }
}

export default SingleRoom;









//
//
//
//
//
//
//
//
//
//
//
// room ?

//
// :
