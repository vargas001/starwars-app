import React, { useMemo } from 'react';
import queryString from 'query-string';
import { StarCard } from '../star2/StarCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getStarByName } from '../../selectors/getStarByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    const starFiltered = useMemo(() => getStarByName( q ), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            
            <div className="row">
                
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                Search a per
                            </div>
                    }

                    { 
                        (q !=='' && starFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                There is no a per with { q }
                            </div>
                    }

                    {
                        starFiltered.map( per => (
                            <StarCard 
                                key={ per.id }
                                { ...per }
                            />
                        ))
                    }

                </div>

            </div>


        </div>
    )
}
