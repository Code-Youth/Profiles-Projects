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
    <div>
        <img class='grid-item'
            src='${project.img}'
            alt=''>
        <h5 class="card-title py-2">${project.name}</h5>
        <p class="card-text p-2">${project.desc}</p>
        <p class="card-text my-2"><small class="text-muted">Created By : ${project.user}</small></p>
        <p class="card-text text-center"><a type="button" class="btn btn-outline-dark mt-2 mb-2" href="${project.link}" target="_blank">Check It Out</a></p>
    </div>`
}
