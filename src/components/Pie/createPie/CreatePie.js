import React, {useState} from "react"
import "./createPie.css"

const CreatePie = props => {

    const [nameOfPie, setNameOfPie] = useState("")
    const [baseOfPie, setBaseOfPie] = useState("")
    const [crust, setCrust] = useState("")
    const [timeToBake, setTimeToBake] = useState(0)
    const [servings, setServings] = useState(0)
    const [rating, setRating] = useState(0)

    const postPie = e => {
        e.preventDefault()

        let url = "http://localhost:4000/pies/"

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                nameOfPie: nameOfPie,
                baseOfPie: baseOfPie,
                crust: crust,
                timeToBake: timeToBake,
                servings: servings,
                rating: rating
            }),
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            props.setCreatePie(false)
        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={postPie}>
             <input type="text" 
             value={nameOfPie}
             onChange={(e) => setNameOfPie(e.target.value)} 
             placeholder="Name of Pie" />
             <input type="text"
             onChange={(e) => setBaseOfPie(e.target.value)} 
             value={baseOfPie}
             placeholder="Base of Pie" />
             <input type="text"
             onChange={(e) => setCrust(e.target.value)} 
             value={crust}
             placeholder="Crust" />
             <input type="text"
             onChange={(e) => setTimeToBake(e.target.value)} 
             value={timeToBake}
             placeholder="Time to Bake" />
             <input type="text"
             onChange={(e) => setServings(e.target.value)} 
             value={servings}
             placeholder="Servings" />
             <input type="text"
             onChange={(e) => setRating(e.target.value)} 
             value={rating}
             placeholder="Rating" />
             <button type="submit">Submit</button>
        </form>
    )
}

export default CreatePie