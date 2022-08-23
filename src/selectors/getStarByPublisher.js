import { personajes } from '../data/stars';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['Star wars 1', 'Star Wars 2'];

    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    return personajes.filter( per => per.publisher === publisher );

}
