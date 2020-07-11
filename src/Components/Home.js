import React from 'react'
import ModalWrapper from './Modal_Wrapper';
import ModalElement from './Modal_Element';
import AboutSection from './AboutSection';
import { Link } from 'react-router-dom';
import FeturedSection from './FeturedSection';

export default function Home() {

  return (
    <>
      <ModalWrapper cls={'home'}>
        <ModalElement title={'Luxurious Rooms'} subTitle={'Deluxe Rooms Starting At $299'}><Link className='btn banner-btn' to='/'>Return Home</Link></ModalElement>
      </ModalWrapper>
      <AboutSection />
      <FeturedSection />
    </>
  )
}
