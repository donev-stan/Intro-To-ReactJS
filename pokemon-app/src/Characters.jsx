import React from "react";

export default function Pokemons({ character }) {
    return (
        <div className="container">
            <div className="row justify-content-center my-5">
                {character.map((c) => (
                    <div className="card text-center m-2" style={{width: '18rem'}}>
                         <img src={`${c.image}`} class="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title"> {c.name} </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
