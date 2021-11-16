document.getElementById("fetch-one").addEventListener("click", function (event) {
  event.preventDefault();
  let inputId = document.querySelector(".operation input").value;

  charactersAPI.getOneRegister(inputId).then((minion) => {
    let cardMinion = "";
    cardMinion = `
          <div class="character-info">
            <div class="name"> Character Name: ${minion.data.name}}</div>
            <div class="occupation">Character ocupattion: ${minion.data.occupation}}</div>
            <div class="cartoon"> Is cartoon: ${minion.data.cartoon}}</div>
            <div class="weapon">Character weapon${minion.data.weapon}}</div>
          </div>`;

    divAllMinions.innerHTML = cardMinion;
  });
});