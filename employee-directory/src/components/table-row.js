import React from "react";

function TableRow(props) {
    return (
        <tr>
            {
                props.values.map(value => {
                    return (
                        <td>{value}</td>
                    )
                })
            }
        </tr>
    )
}

export default TableRow;