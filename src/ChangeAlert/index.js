import React from 'react';
import { withStorageListener } from './withStorageListener'

 function ChangeAlert({ show, toggleShow}) {
     console.log('show', show);
    if(show) {
         return (
             <div>
                <p>Ocurrieron cambios</p> 
                <button 
                    onClick={() => toggleShow(false) }
                >
                    Volver a cargar la información
                </button>
             </div>
         )
         
    } else {
        return (
            <div>
                <p>Nara todavía</p>
                <p>Nara todavía</p>
                <p>Nara todavía</p>
                <p>Nara todavía</p>
                <p>Nara todavía</p>
                <p>Nara todavía</p>
                <p>Nara todavía</p>
                <p>Nara todavía</p>
                <p>Nara todavía</p>
                <p>Nara todavía</p>
                <p>Nara todavía</p>

            </div>
            )
    }
    }

const ChangeAletStorageListener = withStorageListener(ChangeAlert)

export { ChangeAletStorageListener };