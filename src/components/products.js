
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
            ],
            newProducto:{
                nombre: null,
                precio: null,
                imagen: null,
                caducidad: null,
                sustancia: null,
                contenido: null
            }
        }
       
    }
    changeName=(e)=>{
        let new_producto =this.state.newProducto
        new_producto.nombre=e.target.value
        this.setState({newProducto: new_producto})
    }
    changeprecio=(e)=>{
        let new_precio =this.state.newProducto
        new_precio.precio=e.target.value
        this.setState({newProducto: new_precio})
    }
    changeimagen=(e)=>{
        let new_imagen =this.state.newProducto
        new_imagen.imagen=e.target.value
        this.setState({newProducto: new_imagen})
    }
    changefecha=(e)=>{
        let new_fecha =this.state.newProducto
        new_fecha.caducidad=e.target.value
        this.setState({newProducto: new_fecha})
    }
    changecontiene=(e)=>{
        let new_contiene =this.state.newProducto
        new_contiene.sustancia=e.target.value
        this.setState({newProducto: new_contiene})
    }
    changecontenido=(e)=>{
        let new_contenido =this.state.newProducto
        new_contenido.contenido=e.target.value
        this.setState({newProducto: new_contenido})
    }

    addProduct = (e)=> {
        e.preventDefault();
        let {productos}=this.state
        let new_producto=this.state.newProducto
        productos.push(new_producto)
        this.setState({productos})
        
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

                <div className='new-product-conteiner'>

                <h3>Agregar nuevo producto</h3>
                <label for='nombre'>Nombre: </label>
                <input
                
                type='text'
                name='nombre'
                id='nombre'
                onChange={(e)=>this.changeName(e)}

                />
                <label for='precio'>precio: </label>
                <input type='number' name='precio'
                id='precio'
                onChange={(e)=>this.changeprecio(e)}

                />
                <label for='imagen'>URL de imagen: </label>
                <input
                
                type='text'
                name='imagen'
                id='imagen'
                onChange={(e)=>this.changeimagen(e)}

                />
                <label for='fecha'>fecha de caducidad: </label>
                <input
                
                type='number'
                name='fecha'
                id='fecha'
                onChange={(e)=>this.changefecha(e)}

                />
                <label for='contiene'>contiene: </label>
                <input
                
                type='text'
                name='contiene'
                id='contiene'
                onChange={(e)=>this.changecontiene(e)}

                />
                <label for='contenido'>contenido: </label>
                <input
                
                type='text'
                name='contenido'
                id='contenido'
                onChange={(e)=>this.changecontenido(e)}

                />
                   <button onClick={(e)=>this.addProduct(e)}>Agregar Producto</button>
                </div>
            </div>
        )
    }
}

export default Products;