import React, { Component } from 'react'
import items from './date'

const RoomContext=React.createContext()

 class RoomProvider extends Component {
    state={
          rooms:[],
          sortedRooms:[],
          featuredRooms:[],
          loading:true
    }
    //get Date
 componentDidMount(){
     let rooms=this.formatDate(items)
    let featuredRooms=rooms.filter(room => room.featured === true);
    this.setState({
        rooms,
        featuredRooms,
        sortedRooms:rooms,
        loading:false
    })
 }

formatDate(items){
    let tempItems=items.map(item=>{
        let id =item.sys.id
        let images=item.fields.images.map(image=>image.fields.file.url);

        let room={ ...item.fields, images, id}
        return room
    })
    return tempItems
}
getRoom=(slug)=>{
    let TempRooms=[...this.state.rooms]
    const room =TempRooms.find(room=>room.slug===slug)
    return room
}

    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom}}>
               {this.props.children} 
            </RoomContext.Provider>
        )
    }
}

const  RoomConsumer=RoomContext.Consumer


export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value=> <Component {...props} context={value}  />}
        </RoomConsumer>
    }
}


export  {RoomProvider,RoomConsumer,RoomContext}