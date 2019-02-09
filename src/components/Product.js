import React from 'react'

const Product = (props) =>(


                
                <div className='product_card'>
                <h2>{props.p.nombre}</h2>
                <p>Caduca en : {props.p.caducidad}</p>
                <p>contien : {props.p.sustancia}</p>
                <p>contenido : {props.p.contenido}</p>
                <h3>{props.p.precio}</h3>
                
                </div>
                
                
    )
    
    export default Product
    
          
