import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getStarById } from '../../selectors/getStarById';

export const StarScreen = ({ history }) => {

    const { personajeId } = useParams();

    const per = useMemo(() => getStarById( personajeId ), [ personajeId ]);

    if ( !per ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        starpersonaje,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = per;
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/personajes1/${ personajeId}.jpg` }
                    alt={  starpersonaje }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { starpersonaje } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
