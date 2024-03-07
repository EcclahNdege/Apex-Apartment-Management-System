function getDashboard(){
    fetch("https://apex-apartment-management-system.onrender.com/tenant/dashboard" , {
        method: "GET",
        mode : "cors",
        credentials : "include",
        headers: {
            "Content-Type": "application/json",
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    });
}

getDashboard();