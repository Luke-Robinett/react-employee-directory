import React from "react";
import TableRow from "./table-row";

function TableBody(props) {
    return (
        <tbody>
            {
                props.rows.map(row => {
                    return (
                        <TableRow values={row} />
                    )
                })
            }
        </tbody>
    )
}

export default TableBody;