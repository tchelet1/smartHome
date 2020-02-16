import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
        <div className='row'>
            <div className='btn btn-primary btn-lg btn-block'>
                {/* Home */}
                <Link to ='/'><button className='btn btn-primary btn-lg btn-block'>home</button></Link>
            </div>
            
            
        </div>
    )
}