import React, { Component } from "react";
import Api from "../utils/api";
import SearchForm from "./search-form";
import Table from "./table";

class TableContainer extends Component {
    state = {
        employeeData: [],
        displayRows: [],
        searchString: ""
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
                    searchString: ""
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            }
        );
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState(
            {
                displayRows: this.state.employeeData.filter(row => {
                    return (
                        row.name.includes(this.state.searchString)
                    );
                })
            }
        );
    }

    componentDidMount() {
        this.initialize();
    }

    render() {
        return (
            <div>
                <SearchForm
                    searchString={this.state.searchString}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Table rows={this.state.displayRows} />
            </div>
        )
    }
}

export default TableContainer;