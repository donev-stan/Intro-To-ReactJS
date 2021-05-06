import React from "react";

export default function Pokemons({ character }) {
    return (
        <div className="container">
            <div className="row justify-content-center my-5">
                {character.map((c) => (
                    <div className="card text-center m-2" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title"> {c} </h5>
                            <a href="#" className="btn btn-primary">
                                See more!
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
