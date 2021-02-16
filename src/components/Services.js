import React, { Component } from 'react'

import { FaCocktail, FaHiking,FaShuttleVan,FaBeer } from "react-icons/fa";
import Title from './Title'

export default class componentName extends Component {
     state = {
        services:[
            {
            icon:<FaCocktail/>,
            title:"free cocktail",
            info:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  ut labore et dolore aliqua."   
        },
         {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  aliqua."   
        },
         {
            icon:<FaShuttleVan/>,
            title:"Free shuttle",
            info:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  et dolore magna aliqua."   
        },
         {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  et dolore magna aliqua."   
        }
        ]
    }
    render() {
        return (
            <div>
                 <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {this.state.services.map((items,index)=>{
                  return (
                      <article key={index} className="service">
                          <span>{items.icon}</span>
                          <h6>{items.title}</h6>
                          <p>{items.info}</p>
                      </article>
                  )
                })}
            </div>
        </section>
            </div>
        )
    }
}
