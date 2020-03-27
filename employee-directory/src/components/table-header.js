import React from "react";

function TableHead(props) {
    return (
        <thead>
            <tr>
                {
                    props.fields.map(field => {
                        return (
                            <th>{field}</th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default TableHead;