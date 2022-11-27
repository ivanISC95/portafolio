import { Table } from "react-bootstrap";
import {works} from '../Datas/Datas';
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
                {
                    works.map(
                        data =>(
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.descripcion}</td>
                                <td>{data.tecnologia}</td>
                                <td><a href={data.URL}>Go</a></td>
                            </tr>
                        )
                    )
                }              
            </tbody>
        </Table>
    )
}