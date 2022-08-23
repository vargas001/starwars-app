import { personajes } from '../data/stars';

export const getStarById = ( id ) => {

    return personajes.find( per => per.id === id );

}
