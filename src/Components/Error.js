import React from 'react';
import ModalElement from './Modal_Element';
import ModalWrapper from './Modal_Wrapper';
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
      <ModalWrapper cls='Error'>
        <ModalElement title='Error 404' subTitle={<h4>Page Not Found !</h4>}>
          <Link className='btn banner-btn mt-2' to='/'>Return Home</Link>
        </ModalElement>
      </ModalWrapper>
    </>
  )
}
