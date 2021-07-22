import { useEffect, useState } from "react";
import "./pies.css"

const Pies = props => {
    console.log(props)
    const [pies, setPies] = useState([])

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
        .then(json => console.log(json))
    }

    useEffect(() => {
        fetchPies()
    }, [])

    return (
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

            </tbody>
        </table>
    )
}

export default Pies