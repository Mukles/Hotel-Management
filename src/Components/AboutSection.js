import React from 'react';
import { Consumer } from './ContexProvider';
import Title from './Title';

const AboutSection = () =>{
  return(
    <section style={{background:'#DCDCDC'}} id='about-section' className='py-5 text-center'>
      <Title title='About' cls='about' />
      <Consumer>
       {
         value =>{
           const {about} = value
           return(
             <div className ='container'>
              <div className='row py-lg-4'>
                {about.map((item, i) =>{
                  return(
                    <div key={i} className='col-md-6 col-lg-3 text-center'>
                      <span className='about-icons h2'>{item.icon}</span>
                      <h5 className='text-capitalize mt-3'>{item.header}</h5>
                      <p>{item.info}</p>
                    </div>
                  )
                })}
              </div>
             </div>
           )
         }
       }
      </Consumer>
    </section>
  )
}

export default AboutSection;
