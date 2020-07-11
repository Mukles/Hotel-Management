import React from 'react';

export default function Modal_Wrapper({children,cls}) {
  
  return (
    <section className={`${cls}_banner mt-5 py-5 text-center d-flex justify-content-center align-items-center`}>
      {children}
    </section>
  )
}
