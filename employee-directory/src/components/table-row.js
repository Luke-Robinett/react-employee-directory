import React from "react";

function TableRow(props) {
    return (
        <tr key={props.employee.id}>
            <td>{props.employee.id}</td>
            <td>{props.employee.name}</td>
            <td>{props.employee.email}</td>
        </tr>
    )
}

export default TableRow;