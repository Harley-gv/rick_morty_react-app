import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Location.css'

const Residents = ({ url }) => {

    const [resident, setResident] = useState({})
    useEffect(() => {
        axios.get(url).then(res => setResident(res.data))
    }, [url])

    console.log(resident)
    return (
        <div>
            <li>
                <div className="card mb-3" id="cards">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={resident.image} id='img' alt='img' />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4>{resident.name}</h4>
                                <h6>{resident.species} - {resident.status}</h6>
                                <h5>origen: <br /> <h6>{resident.origin?.name}</h6></h5>
                                <h5>aparicion en episodios: <br /> <b >{resident.episode?.length}</b></h5>

                            </div>
                        </div>
                    </div>
                </div>

            </li>
        </div>
    );
};

export default Residents;