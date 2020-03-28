import React, { Component } from "react";
import Api from "../utils/api";
import SearchForm from "./search-form";
import Table from "./table";

class TableContainer extends Component {
    state = {
        // employeeData is updated from the external API when the app first loads
        employeeData: [],

        // displayRows is initially a mirror of employeeData but becomes a filtered subset of it when a search is performed
        displayRows: [],

        searchString: ""
    };

    initialize() {
        // Get our names from the external API and update state variables accordingly
        Api.getEmployees(40)
            .then(res => {
                // Transform incoming data so it's easier to work with
                let data = res.data.results.map((emp, i) => {
                    return {
                        // Give our dataset an auto-incremented unique ID field
                        id: i + 1,

                        // The API returns names as an object of various fields, most of which we don't need
                        // Just grab first and last name and concatenate in the form last, first
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

        // Filter displayedRows by the form's search string
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

    handleSort = event => {
        event.preventDefault();

        // Sort table by employee name in ascending order
        this.setState(
            {
                displayRows: this.state.employeeData.sort((rowA, rowB) => {
                    // This comparison logic adapted from example found at:
                    // https://www.w3schools.com/js/js_array_sort.asp

                    const nameA = rowA.name.toLowerCase();
                    const nameB = rowB.name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                })
            }
        );
    }

    handleFormReset = event => {
        event.preventDefault();

        // Reset search field and show all employees
        this.setState(
            {
                searchString: "",
                displayRows: this.state.employeeData
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
                    handleSort={this.handleSort}
                    handleFormReset={this.handleFormReset}
                />
                <Table rows={this.state.displayRows} />
            </div>
        )
    }
}

export default TableContainer;