import React from 'react'

const Contact = () => (
    <div>
        <p>Dejanos tu comentario y te respondemos pronto</p>
        <input 
        type="text"
        name="nombre"
        placeholder="ingresa tu nombre"
        />
        <input 
        type="text"
        name="email"
        placeholder="Tu correo electronico"
        />
        <input 
        type="number"
        name="phone"
        placeholder="numero telefonico"
        />

        <textarea
        name="mensaje"
        rows="10"
        cols="20"
        placeholder="escribe aqui tu mensaje"
        />

        <button id='enviar_form'>enviar mensaje</button>

        
    </div>
)

export default Contact;