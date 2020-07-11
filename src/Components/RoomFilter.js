import React, { useContext } from 'react';
import { MyContext } from './ContexProvider';
import Title from './Title';

const RoomFilter = (props) =>{
  const context = useContext(MyContext);
  const { rooms, onchageHandler, type, capacity, price, maxPrice, minPrice, minSize, maxSize, breakfast, pets } = context;
  const types = (items, value) => [...new Set(items.map(item => item[value]))];

  return(
    <>
      <div id='filter'>
      <Title cls='room-filter' title='Search Rooms' />
        <div className='container'>
          <form>
            <div className='row'>
              {/* Room Type */}
              <div className='col-md-2'>
              <div className="form-group">
                <label htmlFor="type">Rooms Type: </label>
                <select onChange={onchageHandler} value={type}  name='type' id='type' className="form-control shadow-0">
                  <option value='all'>All</option>
                  {
                    types(rooms,'type').map((item, i) => <option value={item} key={i}>{item}</option>)
                  }
                </select>
                </div>
              </div>
              { /* Guest of capacity */ }
              <div className='col-md-2'>
              <div className="form-group">
                <label htmlFor="capacity">Guest: </label>
                <select onChange={onchageHandler} name='capacity' value={capacity} id='capacity' className="form-control shadow-0">
                  {
                    types(rooms,'capacity').map((item, i) => <option key={i} value={item}>{item}</option>)
                  }
                </select>
                </div>
              </div>
            {/*Pirce Range */}
            <div className='col-md-2'>
              <div className="form-group">
                <label htmlFor="price">Rooms Price: ${price} </label>
                <input type="range" onChange={onchageHandler} value={price} name='price' className="form-control-range mt-3" id="range" max={maxPrice} min={minPrice} />
              </div>
            </div>
            {/* Room Sized */}
            <div className='col-md-2 d-flex'>
              <div className="form-group mb-2 w-50 mr-1">
                <input type="number"  className="form-control" name='minSize' min={minSize} max={maxSize} value={minSize} onChange={onchageHandler} />
              </div>
              <div className="form-group mb-2 w-50 ">
                <input type="number" className="form-control" name='maxSize' min={minSize} max={maxSize} value={maxSize} onChange={onchageHandler}  />
              </div>
            </div>
            {/*breackfast and pets */}
            <div className='col-md-2'>
              <div className="form-check">
                <input className="form-check-input" name='breakfast' type="checkbox" checked={breakfast} id="breakfast" onChange={onchageHandler} />
                <label className="form-check-label" htmlFor="breakfast">Breakfast</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" name='pets' type="checkbox" checked={pets} id="pets" onChange={onchageHandler} />
                <label className="form-check-label" htmlFor="pets">Pets</label>
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default RoomFilter;
