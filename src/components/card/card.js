import Data from '../../data/data.json'
import { Link } from 'react-router-dom'
import './card.scss'

function Card({ title, cover }) {
    return (
        <section className='location-background'>
         {Data.map((location) => (
            <Link to={`/location/${location.id}`} key={location.id} >
               <figure className='location__card'>
                  <img className='location__image' src={location.cover} alt={location.title}/>
                  <div className='location__card__shadow'></div>          
                  <figcaption className='location__title'>{location.title}</figcaption>
               </figure>
            </Link>
         ))}
      </section>
   )
}
  
  export default Card