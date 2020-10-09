import axios from "axios"

export default {
    fetchEmployees: function() {
        return axios
            .get("https://randomuser.me/api/?results=50")
            .then(res => {
                const employees = res.data
                return employees.map(employee => {
                    return {
                        image: employee.picture.thumbnail,
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        email: employee.email
                    }
                })
            })
    }
}