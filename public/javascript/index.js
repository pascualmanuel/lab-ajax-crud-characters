const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    event.preventDefault();

    charactersAPI.getFullList()

      .then(res => {
        const charactersUL = document.querySelector(".characters-container")
          console.log(res)

          let charactersInfo = ""
          res.data.reverse().forEach(character => { 
            charactersInfo += 
            `<div class="character-info">
              <div class="name">${character.name}</div>
              <div class="occupation">${character.occupation}</div>
              <div class="cartoon">${character.cartoon}</div>
              <div class="weapon">${character.weapon}</div>
            </div>`
            });
            charactersUL.innerHTML = charactersInfo
        })
        .catch(err => console.log(err))
  })

  


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    
    event.preventDefault();

    const id = document.querySelector("#search-character-id").value

    charactersAPI.getOneRegister(id)

    .then(res => {
      const charactersUL = document.querySelector(".characters-container")

      let charactersInfo = ""

      charactersInfo += 
      `<div class="character-info">
        <div class="name">Character Name: ${res.data.name}</div>
        <div class="occupation">Character Occupation: ${res.data.occupation}</div>
        <div class="cartoon">Character cartoon: ${res.data.cartoon}</div>
        <div class="weapon">Character weapon: ${res.data.weapon}</div>
      </div>`
      
      charactersUL.innerHTML = charactersInfo
      document.querySelector("#search-character-id").value = ''

    })
    .catch(err => console.log(err))


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    let id = document.querySelector(".delete input").value
    charactersAPI.deleteOneRegister(id)
    .then(res =>{
      const charactersUL = document.querySelector(".characters-container")

      let charactersInfo = ""

      charactersInfo += 
      `<div class="character-info">
        <div class="name">Character Name: ${res.data.name}</div>
        <div class="occupation">Character Occupation: ${res.data.occupation}</div>
        <div class="cartoon">Character cartoon: ${res.data.cartoon}</div>
        <div class="weapon">Character weapon: ${res.data.weapon}</div>
      </div>`
      
      charactersUL.innerHTML = charactersInfo
      document.querySelector(".delete input").value = ''

  })
  .catch(err => console.log(err))
  
})

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
  event.preventDefault()

    const editFormInputs = document.querySelectorAll("#edit-character-form input")

    const id = editFormInputs[0].value
    const name = editFormInputs[1].value
    const occupation = editFormInputs[2].value
    const weapon = editFormInputs[3].value
    const cartoon = editFormInputs[4].checked


    const info = { name, occupation, weapon, cartoon }

    charactersAPI.updateOneRegister(id, info)
        .then(res => {

          const charactersUL = document.querySelector(".characters-container")

          let charactersInfo = ""

          charactersInfo += 
          `<div class="character-info">
            <div class="name">Character Name: ${res.data.name}</div>
            <div class="occupation">Character Occupation: ${res.data.occupation}</div>
            <div class="cartoon">Character cartoon: ${res.data.cartoon}</div>
            <div class="weapon">Character weapon: ${res.data.weapon}</div>
          </div>`
          
          charactersUL.innerHTML = charactersInfo
          document.querySelector("#search-character-id").value = ''
        })
        .catch(err => console.log(err))



  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault(event);
    const inputs = document.querySelectorAll("#new-character-form input")

    const name = inputs[0].value
    const occupation = inputs[1].value
    const weapon = inputs[2].value
    const cartoon = inputs[3].checked


    const info = { name, occupation, weapon, cartoon }

    charactersAPI.createOneRegister(info)
        .then(res => {
          
          const charactersUL = document.querySelector(".characters-container")

          let charactersInfo = ""

          charactersInfo += 
          `<div class="character-info">
            <div class="name">Character Name: ${res.data.name}</div>
            <div class="occupation">Character Occupation: ${res.data.occupation}</div>
            <div class="cartoon">Character cartoon: ${res.data.cartoon}</div>
            <div class="weapon">Character weapon: ${res.data.weapon}</div>
          </div>`
          
          charactersUL.innerHTML = charactersInfo
          document.querySelector("#search-character-id").value = ''
        })
        .catch(err => console.log(err))

  });
});
