'use strict';

const projects = [
  {
    title: "M1A2: Curbside Thai About Page",
    category: "Prelims",
    year: 2026,
    description: "An about page using semantic HTML5. "
  },
  {
    title: "M2A1: Skeletal Structure of a Portfolio",
    category: "Prelims",
    year: 2026,
    description: "A basic wireframed layout of a single-page portfolio using box model and Flexbox."
  },
  {
    title: "M2A2: My Portfolio: The Projects Grid",
    category: "Prelims",
    year: 2026,
    description: "The extension of my portfolio and the proof of my development, welcome to the projects section."
  },
  {
    title: "M2A3: My Portfolio: Style of Design System",
    category: "Prelims",
    year: 2026,
    description: "The color that brings life to a webpage, welcome to styling."
  },
  {
    title: "M6A1: One Page, Three Modules",
    category: "Midterms",
    year: 2026,
    description: "A love match website built from scratch: RagaMatch."
  },
  {
    title: "M6A2: Mini Music Player",
    category: "Midterms",
    year: 2026,
    description: "A small project imitating Spotify, bringing music to a webpage."
  },
  {
    title: "M9A1: The Order Calculator",
    category: "Midterms",
    year: 2026,
    description: "The first attempt at using JavaScript, a simple order calculator."
  },
  {
    title: "M9A2: The Curbside Thai Checkout",
    category: "Midterms",
    year: 2026,
    description: "Upgrading from the calculator, we move on to the checkout."
  },
  {
    title: "Finals Project Coming Soon!",
    category: "Finals",
    year: 2026,
    description: "Stay tuned."
  },
]

function filterProjects(query) {
  const kielle = query.trim().toLowerCase()
  if (kielle === "" || kielle === "all") return projects
  return projects.filter(function(project) {
    return project.category.toLowerCase() === kielle ||
           project.title.toLowerCase().includes(kielle) ||
           project.description.toLowerCase().includes(kielle);
  })
}


function renderProjects(list) {
  const container = document.getElementById("projects-container")


  if (!list || list.length === 0) {
    container.innerHTML = `
      <p class="no-results">No projects found. Try a different search.</p>
    `
    return
  }

  container.innerHTML = list.map(function(project) {
    return `
      <article class="card">
        <div class="card-img"></div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-meta">${project.category} · ${project.year}</p>
        <p class="card-desc">${project.description}</p>
        <a class="card-link" href="#">View →</a>
      </article>
    `
  }).join("")
}

document.addEventListener("DOMContentLoaded", function() {

  renderProjects(projects)

  const searchBox = document.getElementById("project-search")
  searchBox.addEventListener("input", function() {
    const results = filterProjects(searchBox.value)
    renderProjects(results)
  })

  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {

      filterButtons.forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active")

  
      searchBox.value = ""

      const results = filterProjects(btn.dataset.filter);
      renderProjects(results)
    })
  })

})
