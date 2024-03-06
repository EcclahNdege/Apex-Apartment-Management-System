function getDashboard(){
    fetch("https://apex-apartment-management-system.onrender.com/tenant/dashboard" , {
        method: "GET",
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