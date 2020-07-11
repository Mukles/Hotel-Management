import React from 'react';
import { Consumer } from './ContexProvider';
import FeturedItem from './FeturedItem';

import Title from './Title';

const FeturedSection = () =>{
  return(
    <div id='fetureroom-section' className='py-5'>
      <Title cls='fetured' title='Fetured' />
      <div className='container'>
        <div className='row'>
          <Consumer>
            {
              value =>{
                const {feturedRooms, loading} = value;
                    return !loading? feturedRooms.map((item) => <FeturedItem room={item} key={item.id} />): <h2>Data Loading.........</h2>
              }
            }
          </Consumer>
        </div>
      </div>
    </div>
  )
}

export default FeturedSection;
