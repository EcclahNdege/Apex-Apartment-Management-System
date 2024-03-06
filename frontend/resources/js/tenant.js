function getDashboard(){
    fetch("http://localhost:3000/tenant/dashboard" , {
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