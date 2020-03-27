import React from "react";
import TableRow from "./table-row";

function TableBody(props) {
    return (
        <tbody>
            {
                props.employees.map(employee => {
                    return (
                        <TableRow employee={employee} />
                    )
                })
            }
        </tbody>
    )
}

export default TableBody;