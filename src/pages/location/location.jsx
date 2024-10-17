import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/data.json';
import Collapse from '../../components/collapse/collapse';
import Rating from '../../components/rating/rating';
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

    const { description, equipments } = location; 

    return (
        <>
            <section className='announcement'>
                <h1 className='announcement__title'>{location.title}</h1>
                <h2 className='announcement__location'>{location.location}</h2>
                <Rating score={location.rating}/>
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