import React, { Component } from "react";
import Api from "../utils/api";
import TableHeader from "./table-header";

class Table extends Component {
    state = {
        employees: []
    };

    componentDidMount() {
        Api.getEmployees()
            .then(res => {
                this.setState({
                    employees: res.data.results
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const fields = Object.keys({ ...this.state.employees[0] });
        return (
            <table>
                <TableHeader fields={fields} />
                <tbody>
                    {
                        this.state.employees.map(employee => {
                            return (
                                <tr>
                                    {
                                        <td>Data</td>
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;