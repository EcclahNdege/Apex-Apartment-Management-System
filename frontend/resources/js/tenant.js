function getDashboard(){
    function formatPayments(payments){
        payments = payments.reverse();
        let htmlString = '';
        for(let payment of payments){
            htmlString += `
            <div class="payment">
                <p>Amount: ${payment.amount}</p>
                <p>Date: ${new Date(payment.date).toLocaleString()}</p>
            </div>
            `
        }
        return htmlString;
    }
    fetch("https://apex-apartment-management-system.onrender.com/tenant/dashboard" , {
        method: "GET",
        mode : "cors",
        credentials : "include",
        headers: {
            "Content-Type": "application/json",
        }
    }).then(response => {
        if(response.status === 401 || response.status === 403){
            window.location.href = 'login.html';
        }
        return response.json();
    }).then(data => {
        let container = document.getElementById("container");
        container.innerHTML = "";
        let user = data.user;
        let apartment = data.apartment;
        container.innerHTML = `
        <h2>Welcome back, ${user.username}</h2>
        <h3>Your information</h3>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <h3>Your Apartment</h3>
        <p>Apartment Name: ${apartment.name}</p>
        <p>Location: ${apartment.address}</p>
        <p>Rent: ${apartment.rent}</p>
        <h3>Your Payments</h3>
        <div id="payments">
        ${formatPayments(data.paymentHistory)}
        </div>
        `
    });
}

getDashboard();

function logout(){
    fetch("https://apex-apartment-management-system.onrender.com/account/logout", {
        method: 'POST',
        mode : "cors",
        credentials : "include",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(response.status === 200){
            window.location.href = 'login.html';
        }
        else{
            alert('An error occurred');
        }
    })
}