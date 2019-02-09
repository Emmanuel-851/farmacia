
import React, {Component} from 'react'
import Product from './Product'

class Products extends Component{

    constructor(props){
        super(props)
        this.state = {
            productos:[
                {
                    nombre: "Paracetamol",
                    caducidad : " Enero del 2020",
                    sustancia : "Cocaina",
                    contenido : '10 pastillas de 500 mg',
                    precio : '$20.00',
                    imagen : 'http://cumafar.helencaltum.com/wp-content/uploads/2016/11/paracetamol.jpg'
                        },
                
                {
                    nombre: "Loratadina",
                    caducidad : " Enero del 2030",
                    sustancia : "Mentanfetamina",
                    contenido : '30 pastillas de 15 mg',
                    precio : '$50.00',
                    imagen : 'https://quefarmacia.com/wp-content/uploads/2017/10/7502223702028_1.jpg'
                        },
                        {
                            nombre: "Omeprazol",
                            caducidad : " septiembre del 2025",
                            sustancia : "magica para el estomago",
                            contenido : '20 pastillas de 500 mg',
                            precio : '$40.00',
                            imagen : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLa7jZmuQo-OIGyVC_LhY05eHGGIGU85D9tHz2ssvOBvqhMn2'
                                }
            ]
        }
    }
    render(){
        return(
            <div>
                <h1>Productos disponibles</h1>
                {
                    this.state.productos.map ((producto, index) =>(
                        <div key={index}>
                        <h3>{producto.nombre}</h3>
                        <img src={producto.imagen} alt={producto.nombre} width='100' height='100' />
                        <p>{producto.precio}</p>
                        <p>---------------------------------</p>
                        <Product p={producto} />

                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products;