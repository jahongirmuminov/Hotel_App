import React from 'react'
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomsList";
import {withRoomConsumer} from '../context'
import Loading from './Loading'


function RoomsContainer({context}) {
    const {loading,sortedRooms,rooms}=context 

    if(loading){
        return <Loading/>
    }
    return(
         <>
            
               <RoomList rooms={rooms}/>
               <RoomFilter rooms={sortedRooms}/>
         </>
    )
}

export default withRoomConsumer(RoomsContainer)

















// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//     {
//      (value)=>{
//       const {loading,sortedRooms,rooms}=value         
        
//   return(
//       <div>
//             hello from Room container
//             <RoomList/>
//             <RoomFilter/>
//      </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
        
//     )
// }
