import ListOfWorks from "./ListOfWorks"
export default function WorksIndex(){
    return(
        <div>
            <div className="inicio">
                <h1>Aqui se muestran algunos trabajos realizados por mi en <strong>React.JS</strong> & <strong>Angular</strong></h1>
            </div>
            <div>
                <ListOfWorks />
            </div>
        </div>
    )
}