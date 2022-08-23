import { personajes } from '../data/stars';


export const getStarByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return personajes.filter( per => per.starpersonaje.toLocaleLowerCase().includes( name )  );

}