import { createSlice } from "@reduxjs/toolkit";

import backEnd from '../../img/backEnd.jpg';
import frontEnd from '../../img/frontEnd.jpg';
import Red1 from '../../img/Red1.jpg';
import Red2 from '../../img/Red2.jpg';
import gitCertificado from '../../img/gitCertificado.jpg';



const initialState = [
    { "id":1,"img":backEnd,"titulo": "Desarrollador Back-end", "descripcion": "Curso de capacitación para Desarrollador Back-end , dicho curso consto de la arquitectura cliente-servidor, modelo vista controlador, diferencias entre web estática y dinámica"},
    { "id":2,"img": frontEnd, "titulo": "Desarrollador Front-end", "descripcion": "Curso de capacitación para Desarrollo Front-end , dicho curso consto de tipos de sitios web(dinámicos y estáticos),proceso de desarrollo , requerimientos y filtrado de estos, sintaxis básica de HTML, CSS y JAVASCRIPT" },
    { "id":3,"img": Red1, "titulo": "CCNAv7: Switching, Routing and Wireless Essentials", "descripcion": "Configurar las VLAN y el enrutamiento entre VLAN aplicando las mejores prácticas de seguridad Solucionar problemas de ruteo entre redes VLAN en dispositivos de capa 3. Configurar la redundancia en una red conmutada utilizando STP y EtherChannel" },
    { "id":4,"img": Red2, "titulo": "CCNAv7: Introducción a Redes", "descripcion": "Configurar los switch y dispositivos finales para proporcionar acceso a recursos de redes locales y remotos." },
    { "id":5,"img": gitCertificado, "titulo": "Git Para Todos", "descripcion": "Manejo de repositorios locales y remotos, así como de comandos para la gestión de repositorios" }
];

export const courses = createSlice({
    name:"courses",
    initialState : initialState,
    reducers: {}
});


export default courses.reducer;
