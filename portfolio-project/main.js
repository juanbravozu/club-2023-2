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
    
  }
});

{/* <article class="project-card">
  <a href="#" class="project-anchor" aria-label="Más información sobre Mi proyecto de gatos">
    <div class="image-container">
      <picture>
        <img src="https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=2000" alt="Imagen de mi gato">
      </picture>
    </div>
    <h3 class="project-title">Mi proyecto de gatos</h3>
    <ul id="project-card-1" class="tags-container" aria-label="Categorías de proyecto">
      <li class="tag" aria-labelledby="project-card-1">Fotografía</li>
    </ul>
  </a>
</article> */}