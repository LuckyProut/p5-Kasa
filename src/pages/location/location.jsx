import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/data.json';
import Collapse from '../../components/collapse/collapse';
import NameLocation from '../../components/namelocation/namelocation';
import Rating from '../../components/rating/rating';
import Host from '../../components/host/host';
import Tags from '../../components/tag/tag';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Annonces() {
    const { id } = useParams(); 
    const location = Data.find(loc => loc.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        if (!location) {
            navigate('/NotFound');
        }
    }, [location, navigate]);

    const { description, equipments, host } = location; 

    return (
        <>
            <section className='announcement'>
                <NameLocation title={location.title} location={location.location} />
                <Rating className='announcement__rating' score={location.rating}/>
                <Tags className='announcement__tag' tags={location.tags}/>
                <Host
                name={host.name}
                picture={host.picture} />
            </section>
            <div className='collapse'>
            <Collapse className='collapse__box' title="Description">
                <p>{description}</p>
            </Collapse>
            <Collapse className='collapse__box' title="Équipements">
                <ul className="equipments-content">
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </Collapse>
            </div>
        </>
    );
}   

export default Annonces;