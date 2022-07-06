import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Location.css'
import tittle from '../img/rick.svg'
import bg from '../img/bg.svg'
import Residents from './ResidentList';


function Location() {
    const [rick, setRick] = useState({})
    const [id, setId] = useState([])
   

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`).then(res => setRick(res.data))
    }, [])



    const search = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`).then(res => setRick(res.data))
    }

   console.log(id)
    return (
        <div>

            <img src={bg} alt="bg" className='bg'/>

            <div className="header">

                <img src={tittle} alt="" className='img' />

                <input type="text" className="input" onChange={e => setId(e.target.value)}
                    value={id} placeholder='busqueda por id'/>
                <button type="button" className="btn btn-success" onClick={search} id='btn1' >Buscar</button>
            </div>


            <section>
                <ul className='location-list'>
                    <li><span>nombre:</span><br />{rick.name}</li>
                    <li><span>tipo:</span><br />{rick.type}</li>
                    <li><span>dimensíon:</span><br />{rick.dimension}</li>
                    <li><span>poblacion:</span><br />{rick.residents?.length}</li>
                </ul>

            </section>

            <div className="card-info">

                <ul className='card-items'>
                    {rick.residents?.map(e => (
                        <Residents url={e} key={e} />
                    ))}
                </ul>

            </div>

            <footer className='footer'>
                <p>hecho por harley guerra, estudiante #academlo</p>
            </footer>


        </div>
    );
}

export default Location;