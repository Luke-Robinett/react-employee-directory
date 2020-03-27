// To-do: add image thumbnail for each employee

import React, { Component } from "react";
import Api from "../utils/api";
import TableHeader from "./table-header";
import TableBody from "./table-body";

class Table extends Component {
    state = {
        employees: []
    };

    loadTable() {
        Api.getEmployees(20)
            .then(res => {
                // Transform incoming data so it's easier to work with
                let data = res.data.results.map((emp, i) => {
                    return {
                        id: i + 1, // auto-incremented unique ID
                        name: emp.name.last + ", " + emp.name.first,
                        email: emp.email
                    };
                });

                this.setState({
                    employees: data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.loadTable();
    }

    render() {
        // Store key names of first row of data, to be used as column headers for table
        const fields = Object.keys({ ...this.state.employees[0] });

        return (
            <table className="w-100">
                <TableHeader fields={fields} />
                <TableBody rows={this.state.employees} />
            </table>
        )
    }
}

export default Table;