import React from 'react'

export default function Modal_Element({children, title, subTitle}) {

  return (
    <div className='col-md-7 mx-auto w-100'>
      <div className='card border-0 banner-overly text-light'>
        <div className='card-body'>
          <h1 className='mt-3 mb-2 pb-1 text-capitalize'>{title}</h1>
          <div className='divider mb-2'></div>
          <div className='mb-2 pb-1 text-capitalize'>{subTitle}</div>
          {children}
        </div>
      </div>
    </div>
  )
}
