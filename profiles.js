import { users } from '/db.js'

// initiate on page load
window.onload = function () {
    addProfileGridToPage();
};

// add profile grid to the page
function addProfileGridToPage() {
    document.getElementById('profile-grid').innerHTML = createProfileGrid(users)
}


// generate profile grid
function createProfileGrid(usersDatabase) {
    let html = ''

    // iterate through user database
    for (const user of usersDatabase) {
        html += createProfileCard(user)
    }

    // return profile grid
    return html
}

// generate profile card
function createProfileCard(user) {
    return `
    <div>
        <img class='grid-item'
            src='${user.img}'
            alt=''>
        <h3 class="text-dark d-flex justify-content-between fs-5 m-4">${user.name} <span class="text-muted text-end">${user.location}</span></h3>
        <p class="m-4 ">${user.bio}</p>
        <p class="card-text text-center mb-4">
            <a type="button" class="btn btn-sm btn-outline-dark" href="${user.github}" target="_blank">github</a>
            <a type="button" class="btn btn-sm btn-outline-dark" href="${user.linkedin}" target="_blank">linkedin</a>
            <a type="button" class="btn btn-sm btn-outline-dark" href="${user.portfolio}" target="_blank">portfolio</a>
        </p>
            
    </div>
    `
}
