import React, { useContext } from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { MyContext } from './ContexProvider';

const RoomContainer = () =>{
  const context = useContext(MyContext);
  const { rooms, storeRooms } = context;
    return (
      <>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={storeRooms} />
      </>
    )
}

export default RoomContainer;
