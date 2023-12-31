import React from 'react';

const Cards = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/c6CGYtV/1.png" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="button">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;