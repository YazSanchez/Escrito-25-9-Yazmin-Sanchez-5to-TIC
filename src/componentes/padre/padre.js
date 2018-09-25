import React, { Component } from 'react';
import './padre.css';
import Hijo from '../hijo/hijo.js';

class Padre extends Component {

    render(cantHijos){

        var cantHijos = 2;
        var listaHijos = <Hijo />;

        return (
            <div className="Padre">
                <Hijo />
             </div>

        );
    }
}

export default Padre;