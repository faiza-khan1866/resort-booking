import React, { useState, useEffect } from 'react';
import Preloader from '../layouts/Preloader';

export default function Error404(props) {
    const [letsLoad, setLetsLoad] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLetsLoad(false)
        }, 3000);
    }, []);
    return (
        <>
            {letsLoad ?
                <Preloader />
                :
                <div className="error-wrapper">
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>4</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    <span className='particle'>0</span>
                    {/* <div className="img-wrapper">
                <img src={image} alt="Error404" />
            </div> */}
                    <div className="txt-wrapper">
                        <p className="status-code py-2">404</p>
                        <p className="subtext py-2">Oops, something went wrong!</p>
                        <p className="description py-2">The page you are looking for was moved, removed, renamed or might never have existed.</p>
                        <button onClick={() => props.history.push('/')} className="main-btn btn-eden">Homepage</button>
                    </div>
                </div>
            }
        </>
    );
}