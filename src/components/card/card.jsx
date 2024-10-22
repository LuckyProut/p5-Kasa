import '../../style/card.scss'
import { Link } from 'react-router-dom'

function Card({ title, cover, id }) {
    return (
            <Link to={`/location/${id}`} key={id} >
               <figure className='location__card'>
                  <img className='location__image' src={cover} alt={title}/>
                  <div className='location__card__shadow'></div>          
                  <figcaption className='location__title'>{title}</figcaption>
               </figure>
            </Link>
         );
}
  
  export default Card