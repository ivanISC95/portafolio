import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {"id": 1,"descripcion": "Prueba técnica la cual llevo como finalidad crear una aplicación web que muestre los personajes de la serie de “The Rick and Morty”. Para ello se utilizará un API en la cual se obtuvo toda la información sobre los personajes y la serie","tecnologia":"React.JS","URL":"https://ivanisc95.github.io/rick-and-morty-characters/"},
    {"id": 2,"descripcion": "Pagina de contacto para la empresa CPGE , especializada en consultoria y gestión en el estado de Queretaro","tecnologia":"React.JS","URL":"https://ivanisc95.github.io/cpge/"},
    {"id": 3,"descripcion": "Aplicación Web para registro de prestamos y ahorros personales, con uso de LocalStorage","tecnologia":"Angular","URL":"https://ivanisc95.github.io/MiEconomia-app/"}
];

export const works = createSlice({
    name:"works",
    initialState : initialState,
    reducers: {}
});


export default works.reducer;
