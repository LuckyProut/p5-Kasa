import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom'
import Data from '../../data/data.json';
import Collapse from '../../components/collapse/collapse';
import NameLocation from '../../components/namelocation/namelocation';
import Rating from '../../components/rating/rating';
import Host from '../../components/host/host';
import Tags from '../../components/tag/tag';
import Gallery from '../../components/gallery/gallery';
import '../../style/location.scss';


function Annonces() {
    const { id } = useParams(); 
    const location = Data.find(loc => loc.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        if (!location) {
            navigate('/NotFound');
        }
    }, [location, navigate]);
    if (!location) return null;


    const { description, equipments, host } = location; 

    return (
        <>
            <section className='announcement'>
                <Gallery className='annoucement__gallery' pictures={location.pictures} title={location.title} />
                <div className='announcement__details'>
                    <div className='announcement__left'>
                        <NameLocation title={location.title} location={location.location} />
                        <Tags className='announcement__tag' tags={location.tags}/>
                    </div>
                    <div className='announcement__right'>
                        <Host name={host.name} picture={host.picture} />
                        <Rating className='announcement__rating' score={location.rating}/>
                    </div>
                </div>
                <div className='collapse__container'>
                <Collapse className='collapse__box collapse--small' title="Description">
                    <p>{description}</p>
                </Collapse>
                <Collapse className='collapse__box collapse--small' title="Équipements">
                    <ul className="equipments-content">
                        {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
                </div>
            </section>
        </>
    );
}   

export default Annonces;