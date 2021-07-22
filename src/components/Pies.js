import { useEffect, useState } from "react";
import "./pies.css"
import DisplayPies from "./Pie/Pie"
import CreatePie from "./Pie/createPie/CreatePie";

// shows all pies
const Pies = props => {
    console.log(props)
    const [pies, setPies] = useState([])
    // console.log(pies)
    const [createPie, setCreatePie] = useState(false)

    const fetchPies = () => {
        let url = "http://localhost:4000/pies"

        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => setPies(json))
    }

    useEffect(() => {
        fetchPies()
    }, [createPie])

    const buttonHandler = () => setCreatePie(true)

    return (
        <>
        {createPie ? 
        <CreatePie setCreatePie={setCreatePie} sessionToken={props.sessionToken}/> : null}
        {!createPie ?
        <button onClick={buttonHandler}>Create Pie</button> : null}

        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Base of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <DisplayPies pie={pies}/>
            </tbody>
        </table>
        </>
        
    )
}

export default Pies