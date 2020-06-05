import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
   state={
       services: [
           {
               icon:<FaCocktail />,
               title: "Free Cocktails",
               info: 'You have food, some beverages, some fruits and you wonder what cocktails you should make? The Bar is there for you, simply pick the ingredients you want.'
           },
            {
                icon:<FaHiking />,
                title: "Hike your heart out!",
                info: 'Experience AllTrails outdoors! Explore nature from around the world with hiking, walking, backpacking, and running trails.'
                },
            {
                icon:<FaShuttleVan />,
                title: "Free Shuttle",
                info: 'The free shuttle service is available to clients from 8:00am to 7:00pm.'
            },
            {
                icon:<FaBeer />,
                title: "Free Beer",
                info: 'A selection of our finest beer for free only upon arrival as complimentary'
            }
       ]
   }
   
   
    render() {
        return (
           <section className="services">
               <Title title="services" />
            <div className="services-center">
                {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                })}
            </div>
           </section>
        )
    }
}
