import { projects } from '/project_db.js'

// initiate on page load
window.onload = function () {
    addProjectGridToPage();
};

// add profile grid to the page
function addProjectGridToPage() {
    document.getElementById('project-grid').innerHTML = createProjectGrid(projects)
}


// generate project grid
function createProjectGrid(projectDatabase) {
    let html = ''

    // iterate through user database
    for (const project of projectDatabase) {
        html += createProjectCard(project)
    }

    // return profile grid
    return html
}

// generate project card
function createProjectCard(project) {
    return `
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="card">
        <img class="bd-placeholder-img card-img-top" width="100%" height="auto" src="${project.img}">
        <div class="card-body">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">${project.desc}</p>
          <p class="card-text"><small class="text-muted">Created By : ${project.user}</small></p>
          <p class="card-text text-center"><a type="button" class="btn btn-sm btn-outline-secondary" href="${project.link}" target="_blank">Check It Out</a></p>
        </div>
      </div>
    </div>`
}
