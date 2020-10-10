import React, { useState, useEffect} from "react"
import SearchForm from "../componets/SearchForm"
import API from "../utils/API"
import Table from "../componets/Table"

function Main() {
    // const [employee, setEmployee] = useState({})
    const [employees, setEmployees] = useState([])
    // const [employeeIndex, setEmployeeIndex] = useState(0)

    useEffect(() => {
        loadEmployees()
    }, [])

    function loadEmployees() {
        API.fetchEmployees()
            .then(res => {
                console.log("API res", res.data.results)
                const APIResults = res.data.results
                const results = APIResults.map(employee => {
                    return {
                        image: employee.picture.thumbnail,
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        email: employee.email
                    }
                })
                console.log("Relevant Employee Data", results)
                setEmployees(results)
            })
            .catch(err => console.log(err))
        // console.log(employees)
    }

    return (
        <div>
            <SearchForm />
            <Table results={employees} />   
        </div>
    )
}

export default Main

