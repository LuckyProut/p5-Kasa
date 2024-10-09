import Data from '../../data/data.json'
import { Link } from 'react-router-dom'
import './card.scss'

function Card({ title, cover }) {
    return (
        <section className='location-background'>
         {Data.map((location) => (
            <Link to={`/location/${location.id}`} key={location.id} >
               <figure className='location-card'>
                  <img className='location-image' src={location.cover} alt={location.title}/>
                  <div className='card-shadow'></div>          
                  <figcaption className='location-title'>{location.title}</figcaption>
               </figure>
            </Link>
         ))}
      </section>
   )
}
  
  export default Card