/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

function generateHtml(card) {
  const output = document.getElementById("output");
  const brandCard = document.createElement("div");
  brandCard.setAttribute("class", "card");
  const brand = document.createElement("h1");
  brand.setAttribute("class", "brand");
  const model = document.createElement("p");
  model.setAttribute("class", "models");

  brand.innerHTML = card.brand;
  model.innerHTML = card.models;

  output.append(brandCard);
  brandCard.append(brand, model);
}

async function getBrands() {
  const res = await fetch("./cars.json");
  const resJson = await res.json();
  resJson.forEach((card) => {
    generateHtml(card);
  });
}

getBrands();
