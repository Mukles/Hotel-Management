import React from 'react';

const Title = ({title,cls}) =>{
  return(
  <div className={`${cls}_title col-12 mb-5 text-center`}>
    <h1 className='mb-2 text-capitalize'>{title}</h1>
    <div className='divider' style={{height:'5px'}}></div>
  </div>
  )
}

export default Title;
