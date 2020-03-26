import React, { Component } from "react";
import Api from "../utils/api";

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
        return (
            <table>
                <thead>
                    <tr>
                        {
                            Object.keys({...this.state.employees[0]}).map(column => {
                                return (
                                    <th>{column}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
            </table>
        )
    }
}

export default Table;