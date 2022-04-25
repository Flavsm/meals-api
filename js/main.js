/******************************************
/* FETCH ON HIT ENTER
/*******************************************/

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getFetch();
  }
});

/******************************************
/* FETCH ON CLICK
/*******************************************/

document.querySelector("button").addEventListener("click", getFetch);

/*******************************************************
/* FUTURE / ONLY ADD INPUT FOR THE FOR THE RIGTH SELECT
/*******************************************************/

/* const select = document.querySelector("select");
const selection = document.querySelector("select").value;

select.addEventListener("change", getInput);

function getInput() {
  const selection1 = document.querySelector("select").value;
  const form = document.querySelector("form");
  const input = document.createElement("input");

  input.setAttribute("type", "text");
  input.setAttribute("name", "");
  input.setAttribute("onfocus", "this.value='");
  input.setAttribute("value", "");
  input.setAttribute("autocomplete", "off");

  selection1 === ("name" || "letter") ? form.appendChild(input) : "";
} */

/******************************************
/* FUTURE / CHANGE SELECT OPTIONS DYNAMICALLY
/*******************************************/

/* 
const select = document.querySelector("select");
select.addEventListener("change", changeOption);

function changeOption() {
  const selection = document.querySelector("select").value;
  let baseUrl = "https://www.themealdb.com/api/json/v1/1/list.php?";
  let finalUrl;
  selection === "cat"
    ? (finalUrl = `${baseUrl}c=list`)
    : (finalUrl = `${baseUrl}a=list`);

  fetch(finalUrl)
    .then((res) => res.json())
    .then((data) => {
      let newSelect = document.createElement("select");
      select.replaceWith(newSelect);

      function createOptions(text, value) {
        let newOption = new Option(text, value);
        newSelect.add(newOption);
      }
      
      data.meals.forEach((e) =>
        selection === "cat"
          ? createOptions(e.strCategory, e.strCategory.toLowerCase())
          : createOptions(e.strArea, e.strArea.toLowerCase())
      );
    })
    .catch((err) => console.log(err));
} */

/******************************************
/* FETCH FUNCTION
/*******************************************/

function getFetch() {
  const wrapper = document.querySelector(".wrapper");

  /******************************************
/* REPLACE ITEMS FOR EACH SEARCH
/*******************************************/

  if (wrapper.hasChildNodes()) {
    wrapper.removeChild(wrapper.firstElementChild);
  }

  // const headings = Array.from(document.querySelectorAll("h2"));

  const inputValue = document.querySelector("input").value;
  const selection = document.querySelector("select").value;

  let finalUrl;

  const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
  const search = "search.php?";
  /* const filter = "filter.php?";
  const list = "list.php?";
 */
  selection === "name"
    ? (finalUrl = `${baseUrl}${search}s=${inputValue}`)
    : (finalUrl = `${baseUrl}${search}f=${inputValue}`);

  fetch(finalUrl)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      let gallery = document.createElement("div");
      gallery.classList.add("gallery");
      wrapper.appendChild(gallery);

      function createCard(name, area, instruc, img) {
        let section = document.createElement("section");
        section.classList.add("galleryItem");

        let title = document.createElement("h2");
        let image = document.createElement("img");
        let country = document.createElement("h3");
        let instructions = document.createElement("h3");

        title.classList.add("title");
        country.classList.add("country");
        instructions.classList.add("instructions");

        title.innerText = name;
        image.src = img;
        country.innerText = area;
        instructions.innerText = `Instructions:\n ${instruc}`;

        section.append(title, image, country, instructions);
        gallery.appendChild(section);
      }

      /******************************************
      /* FUTURE/ DISPLAY INGREDIENTS
      /*******************************************/

      /*  let createLi = (ing) => {
        let li = document.createElement("li");
        li.classList.add("eachIngredient");
        li.innerText = ing;
        ingredients.appendChild(li);
      }; */

      data.meals.forEach((e) => {
        createCard(e.strMeal, e.strArea, e.strInstructions, e.strMealThumb);
      });

      /* headings.forEach((e) => {
        let meal = data.meals.shift();
          //e.innerText = e.strMeal
        createCard(meal.strMeal);
      }); */
    })
    .catch((err) => {
      alert(
        "Sorry, we couldn't find that. Please try something else or check your spelling"
      );
      console.log(`error ${err}`);
    });
}

/******************************************
/* ORAGANIZING URLS
/*******************************************/

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
