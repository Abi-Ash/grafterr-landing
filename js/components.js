export function renderHero(hero) {

  const heroContainer = document.getElementById("hero");

  heroContainer.innerHTML = `
  
  <div class="container hero-wrapper">


    <h1 class="hero-title">
      ${hero.headlinePrefix} <br>
      
      <span class="gradient-text">${hero.headlineGradient}</span>

    </h1>


    <p class="hero-subtitle">
      ${hero.subheadline.replace("success stories", "<span class='black-text'>success stories</span>")}
    </p>

    <button class="cta-btn">
      ${hero.cta}
    </button>

  </div>


  `;

}





export function renderFeatures(features) {

  const container = document.getElementById("features");

  let cardsHTML = "";

  features.products.forEach(product => {

    cardsHTML += `
  
  <div class="product-card">
    <h3>${product.title}</h3>
    <img src="${product.image}" alt="${product.title}">
  </div>

  `;

  });

  container.innerHTML = `

 <div class="container">

   <h2 class="features-title">

    <span class="headline-gradient-wrapper">
        <span class="shape teal"></span>
     ${features.title.replace(
    "Grafterr",
    '<span class="grey-text">Grafterr</span>'
  )}

     <span class="accent">${features.titleAccent}</span>

      <span class="shape coral"></span>
      </span>
   </h2>

   <p class="features-subtitle">
     ${features.subtitle}
   </p>

   <div class="divider"></div>

  <div class="carousel">

<div class="carousel-track">
${cardsHTML}
</div>

<div class="carousel-controls">
<button class="carousel-btn prev">&larr;</button>
<button class="carousel-btn next">&rarr;</button>
</div>

</div>

 </div>

 `;

}