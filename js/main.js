import { api } from "./api.js";
import { renderHero, renderFeatures } from "./components.js";
import { initCarousel } from "./carousel.js";

async function init() {
    try {

        const hero = await api.getHeroContent();
        renderHero(hero);

        const features = await api.getFeaturesContent();
        renderFeatures(features);

        initCarousel();
    }
    catch (error) {

        showError();

    }

}

init();

function showError(){

  const hero = document.getElementById("hero");
  const features = document.getElementById("features");

  const errorHTML = `
    <div class="error-box">
      <p>Failed to load content</p>
      <button id="retry-btn">Retry</button>
    </div>
  `;

  hero.innerHTML = errorHTML;
  features.innerHTML = "";

  document.getElementById("retry-btn").addEventListener("click", init);

}