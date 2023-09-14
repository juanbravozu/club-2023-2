import { projectsData } from "./data.js";

const BASE_URL = 'http://localhost:1337/api/';

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const section = document.querySelector('.projects-container');
  
    const res = await fetch(`${BASE_URL}projects?populate=*`);
    const {data} = await res.json();
  
    console.log(data);

    data.forEach(({
      attributes: {
        title,
        thumbnail,
        categories: {
          data: categoriesList
        }
      }
    }) => {
      const card = document.createElement('article');
      card.classList.add('project-card');
      card.innerHTML = `
        <a href="#" class="project-anchor" aria-label="Más información sobre Mi proyecto de gatos">
          <div class="image-container">
            <picture>
              <img src="http://localhost:1337${thumbnail.data.attributes.url}" alt="${thumbnail.data.attributes.alternativeText}">
            </picture>
          </div>
          <h3 class="project-title">${title}</h3>
          <ul class="tags-container">
            ${categoriesList.map(({attributes}) => `<div class="tag">${attributes.category}</div>`)}
          </ul>
        </a>`;
      section.appendChild(card);
    });
  } catch (error) {
    console.error("Ocurrió un error al obtener los proyectos " + error.message);
  }
});
