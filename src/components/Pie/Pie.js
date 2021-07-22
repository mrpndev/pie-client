import React from "react"
import "./pie.css"

const DisplayPies = props => {
    console.log(props.pie)
    return (
        <>
            {
                props.pie.map((pie, key) => {
                    return (
                        <tr key={key}>
                            <td>{pie.nameOfPie}</td>
                            <td>{pie.baseOfPie}</td>
                            <td>{pie.crust}</td>
                            <td>{pie.timeToBake}</td>
                            <td>{pie.servings}</td>
                            <td>{pie.rating}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default DisplayPies