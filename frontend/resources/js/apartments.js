let apartmentContainer = document.getElementById('apartment-container');

function getApartments() {
    fetch("http://localhost:3000/apartments/").then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(apartment => {
            apartmentContainer.innerHTML += `
                <div class="apartment" id="${apartment._id}" onclick="viewApartment('${apartment._id}')">
                    <h2>${apartment.name}</h2>
                    <p>${apartment.address}</p>
                    <p>${apartment.rent}</p>
                </div>
            `;
        });
    });
}

getApartments();