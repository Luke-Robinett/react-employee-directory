import React, { Component } from "react";
import Api from "../utils/api";
import Table from "./table";

class TableContainer extends Component {
    state = {
        employeeData: [],
        displayRows: [],
        searchFilter: ""
    };

    initialize() {
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
                    employeeData: data,
                    displayRows: data,
                    searchFilter: ""
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.initialize();
    }

    render() {
        return (
            <div>
                <Table rows={this.state.displayRows} />
            </div>
        )
    }
}

export default TableContainer;