import React, { useMemo } from 'react';
import { getStarByPublisher } from '../../selectors/getStarByPublisher';
import { StarCard} from './StarCard';

export const StarList = ({ publisher }) => {

    const personajes = useMemo(() => getStarByPublisher( publisher ), [ publisher ] );

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               personajes.map( per => (
                   <StarCard 
                        key={ per.id }
                        { ...per }
                    />
                   
               ))
           } 
        </div>
    )
}
