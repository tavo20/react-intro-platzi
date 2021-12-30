import React from 'react'

function withStorageListener(wrappedComponent) {
    return (props) => {
        const [ storageChange, setStorageChange ] = React.useState(true);
        
        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1'){
                setStorageChange(true);
                console.log('hubo cambios');
            }
        })

        return (
         <wrappedComponent
             show={storageChange}
             toggleShow={setStorageChange}
         />
        )
    }
}

export { withStorageListener };

