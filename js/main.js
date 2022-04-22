//Example fetch using pokemonapi.co

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  ///const choice = document.querySelector("input").value;
  // const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  const headings = Array.from(document.querySelectorAll("h2"));
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Kenyan";

  const gallery = document.querySelector(".gallery");

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      let arrLength = data.meals.length;
      console.log(arrLength);

      function createCard(name, img) {
        let section = document.createElement("section");
        section.classList.add("gallery__img");
        let card = document.createElement("h2");
        section.appendChild(card);
        card.innerText = name;
        let image = document.createElement("img");
        image.src = img;
        //gallery.appendChild(section);
        section.append(image);
        gallery.append(section);
      }

      console.log(data.meals);
      data.meals.forEach((e) => {
        console.log(e.strMeal);
        createCard(e.strMeal, e.strMealThumb);
      });
      /* headings.forEach((e) => {
        let meal = data.meals.shift();
          //e.innerText = e.strMeal
        createCard(meal.strMeal);
      }); */
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//LIST BY CATEGORY
//www.themealdb.com/api/json/v1/1/list.php?c=list
//SPECIFIC CATEGORY
//www.themealdb.com/api/json/v1/1/filter.php?c=Beef

//LIST BY INGREDIENT
//www.themealdb.com/api/json/v1/1/list.php?i=list
//SPECIFIC INGREDIENT
//

//LIST BY COUNTRY
//www.themealdb.com/api/json/v1/1/list.php?a=list
//SPECIFIC COUNTRY
//

//FIRST LETTER
//www.themealdb.com/api/json/v1/1/search.php?f=a

//BY NAME
//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

//SELECT FROM CAT / INGRID / COUNTRY
//TYPE OR SELECT CAT / INGRID / COUNTRY

//SELECT BY NAME / LETTER
//TYPE THE NAME / LETTER
