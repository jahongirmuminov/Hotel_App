import React from 'react'
import Room from "./Room";
export default function RoomsList({rooms}) {
    if (rooms.length===0) {
        return(
            <div className="empty-search">
               <h3>unfortunetly no rooms matched  your search parametres</h3>
            </div>
        )
    }
    return (
        <div>
         <section className="roomslist">
            <div className="roomslist-center">
               {
                   rooms.map(item=>{
                       return(
                           <Room key={item.id} room={item} />
                       )
                   })
               }
            </div>
         </section>
        </div>
    )
}
