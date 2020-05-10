import React from 'react';

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null
    console.log(resultado)

    return ( 
        <div>
            <p>El precio actual es: <span>{resultado.PRICE}</span></p>
            <p>Precio más Alto del día: <span>{resultado.HIGHDAY}</span></p>
            <p>Precio más Bajo del día: <span>{resultado.LOWDAY}</span></p>
            <p>Variación últimas 24 hrs: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Última actualización: <span>{resultado.LASTUPDATE}</span></p>

        </div>
    );
}
 
export default Cotizacion;