import React, { Component } from 'react';
import { Provider, Consumer } from './ContexProvider';
import { Dots } from 'react-preloaders';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import items from '../data';

class RoomProvider extends Component {
  constructor(props){
    super(props);
    this.state={
      rooms: [],
      storeRooms: [],
      feturedRooms: [],
      loading: true,
      type: 'all',
      capacity: 1,
      price: 0,
      maxPrice: 0,
      minPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false,
      about: [
      {
        icon: <FaCocktail />,
        header: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        icon: <FaHiking />,
        header: 'free Hiking',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        icon: <FaShuttleVan />,
        header: 'free Hiking',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        icon: <FaBeer />,
        header: 'free Hiking',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      }
      ]
    }
  }

  //Get Click able Data;
  getItem = (id) =>{
    return this.state.rooms.find(item => item.slug ===id);
  }

  getFeturedRoom = (id) =>{
    const findRoomFetured = this.getItem(id);
    return findRoomFetured;
  }

  init = () =>{
    const rooms = this.setRoomItem(items);
    //Get the Fetured room
    const feturedRooms = rooms.filter(room => room.featured===true);
    //Get the Highest Price Room;
    const maxPrice = Math.max(...rooms.map(item => item.price));
    //Get the Highest sized rooms
    const maxSize = Math.max(...rooms.map(item => item.size));

    //setSTATE
    this.setState(() =>{
     return{rooms, feturedRooms, storeRooms: rooms, maxSize, maxPrice, price: maxPrice, loading: false}
   });
  }

  componentDidMount(){
   this.init()
  }

//Set Item room
  setRoomItem = items =>{
    const tempItems = items.map(item =>{
      const id = item.sys.id;
      const images = item.fields.images.map(img => img.fields.file.url)
      const room = {...item.fields, images, id}
      return room;
    })
      return tempItems
    }

  // Onchage Method
  onchageHandler = event =>{
    const target = event.target;
    const value = target.type ==='checkbox' ? target.checked: target.value;
    const name = event.target.name;
    this.setState({[name]: value}, this.filterRooms)
  }

  //filter rooms
  filterRooms = () =>{
    let { rooms, type, capacity, price, pets, breakfast, maxSize, minSize} = this.state;
    capacity = +capacity;
    minSize= +minSize;
    maxSize = +maxSize;

    //filter by type
    let tempRooms = [...rooms];
    if(type !== 'all'){
       tempRooms= tempRooms.filter( item => item.type === type);
    }

    //filter by capacity of rooms
    if(capacity !==1){
       tempRooms= tempRooms.filter( item => item.capacity >= capacity);
    }

    //fiter by Price
    if(price !==600){
      tempRooms = tempRooms.filter(item => item.price <= price)
    }

    //filter by breakfast
    if(breakfast){
      tempRooms = tempRooms.filter(item => item.breakfast === true)
    }

    //filter by pets
    if(pets){
      tempRooms = tempRooms.filter(item => item.pets === true)
    }

    //filter by Sized
    tempRooms= tempRooms.filter(item => item.size >= minSize && item.size <= maxSize);

    this.setState({storeRooms: tempRooms });
  }

  render(){
    return(
      <>
      <Provider value={{ ...this.state, getFeturedRoom: this.getFeturedRoom, onchageHandler: this.onchageHandler}}>
        <Dots customLoading={this.state.loading} />
      {
        !this.state.loading && this.props.children
      }
      </Provider>
      </>
    )
  }
}

export default RoomProvider;
