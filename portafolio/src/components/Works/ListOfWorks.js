import { Table } from "react-bootstrap";
export default function ListOfWorks() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Descripción</th>
                    <th>Tecnología usada</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Prueba técnica la cual llevo como finalidad crear una aplicación web que muestre los personajes de la serie de “The Rick and Morty”. Para
                    ello se utilizará un API en la cual se obtuvo toda la información sobre los personajes y la serie.
                    </td>
                    <td>React.JS</td>
                    <td> <a href="https://ivanisc95.github.io/rick-and-morty-characters/">Go </a></td>
                </tr>                
            </tbody>
        </Table>
    )
}