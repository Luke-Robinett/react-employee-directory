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
            <div>
                {
                    JSON.stringify(this.state.employees)
                }
            </div>
        )
    }
}

export default Table;