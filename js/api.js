export const api = {

 async getHeroContent(){

   const res = await fetch("../data/content.json");
   const data = await res.json();

   return new Promise(resolve=>{
      setTimeout(()=>{
        resolve(data.hero);
      },1200);
   });

 },

 async getFeaturesContent(){

   const res = await fetch("../data/content.json");
   const data = await res.json();

   return new Promise(resolve=>{
      setTimeout(()=>{
        resolve(data.featuresSection);
      },1200);
   });

 }

}