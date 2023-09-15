const BASE_URL = 'http://localhost:1337/api/';

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const section = document.querySelector('.projects__list');
  
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
      const card = document.createElement('li');
      card.classList.add('card');
      card.innerHTML = `
        <a href="#" class="card__anchor" aria-label="Más información sobre Mi proyecto de gatos">
          <div class="card__image-wrapper">
            <picture>
              <img class="card__image" src="http://localhost:1337${thumbnail.data.attributes.url}" alt="${thumbnail.data.attributes.alternativeText}">
            </picture>
          </div>
          <h3 class="card__title">${title}</h3>
          <ul class="card__tags-list">
            ${categoriesList.map(({attributes}) => `<li class="card__tag">${attributes.category}</li>`)}
          </ul>
        </a>`;
      section.appendChild(card);
    });
  } catch (error) {
    console.error("Ocurrió un error al obtener los proyectos " + error.message);
  }
});
