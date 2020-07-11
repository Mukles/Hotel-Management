import React from 'react'
import ModalWrapper from './Modal_Wrapper';
import ModalElement from './Modal_Element';
import RoomContainer from './RoomContainer';
import { Link } from 'react-router-dom';


export default function Rooms() {

  return (
    <>
     <ModalWrapper cls={'room'}>
        <ModalElement title={'Luxurious Rooms'} subTitle={'Deluxe Rooms Starting At $299'}><Link  className='btn banner-btn' to='/'>Return Home</Link></ModalElement>
      </ModalWrapper>
      <RoomContainer />
    </>
  )
}
