const getUsersBtn = document.querySelector('.get-users-btn');
const userGrid = document.querySelector('.user-grid');
const loader = document.querySelector('.loader');

getUsersBtn.addEventListener('click', fetchUsers);

function fetchUsers() {
    loader.style.display = 'block';
    fetch('https://reqres.in/api/users?page=1')
        .then(response => {
            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            renderUsers(data.data);
        })
        .catch(error => {
            console.error(error);
            displayError('Failed to fetch users. Please try again later.');
        })
        .finally(() => {
            loader.style.display = 'none'; // Hide loader in both success and error cases
        });
}

function renderUsers(users) {
    userGrid.innerHTML = '';
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>${user.email}</p>
        `;
        userGrid.appendChild(userCard);
    });
}

function displayError(message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    userGrid.innerHTML = ''; // Clear the user grid
    userGrid.appendChild(errorMessage);
}
