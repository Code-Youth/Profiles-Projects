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
    <div class="col">
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${user.img}" alt="" srcset="">
            <div class="card-body">
                <h3 class="text-dark">${user.name}</h3>
                <h3 class="text-muted text-end">${user.location}</h3>
                <p class="card-text">${user.bio}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <a type="button" class="btn btn-sm btn-outline-secondary" href="${user.github}">github</a>
                    <a type="button" class="btn btn-sm btn-outline-secondary" href="${user.linkedin}">linkedin</a>
                    <a type="button" class="btn btn-sm btn-outline-secondary" href="${user.portfolio}">portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}
