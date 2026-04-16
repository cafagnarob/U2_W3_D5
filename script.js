const ApiKey = "Ew0xBeU5p8qVg3Shdoo9e3EpdAnnPzoOxpKflyeTzU89BjHPsQmuX4iP"
const ApiLink = "https://api.pexels.com/v1/search?query=hamsters"
const ApiLink2 = "https://api.pexels.com/v1/search?query=tigers"

const LoadBtn = document.getElementById("load_btn")
const SecLoadBtn = document.getElementById("sec_load_btn")
const CardImg = document.querySelectorAll(".card img")
const EditBtn = document.querySelectorAll(".edit_btn")
const TextMuted = document.getElementsByTagName("small")

const changetext = function (data) {
  for (let i = 0; i < TextMuted.length; i++) {
    TextMuted[i].innerText = data.photos[i].id
  }
}

const getImg = function () {
  fetch(ApiLink, {
    headers: {
      Authorization: ApiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
        console.log("response ok")
      } else {
        throw new Error("response NON ok")
      }
    })
    .then((data) => {
      console.log("array di img eistenti", data)
      CardImg.forEach((Image, i) => {
        Image.setAttribute("src", data.photos[i].src.landscape)
        Image.classList.add("h-50")
        // CAMBIO TESTO
        changetext(data)
      })
    })
    .catch((error) => {
      console.log("errore nella fetch", error)
    })
}
//
//
//
//
//
//
//
//
//
//
//

const getImg2 = function () {
  fetch(ApiLink2, {
    headers: {
      Authorization: ApiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
        console.log("response ok")
      } else {
        throw new Error("response NON ok")
      }
    })
    .then((data) => {
      console.log("array di img eistenti", data)
      CardImg.forEach((Image, i) => {
        Image.setAttribute("src", data.photos[i].src.landscape)
        Image.classList.add("h-50")
        // CAMBIO TESTO
        changetext(data)
      })
    })
    .catch((error) => {
      console.log("errore nella fetch", error)
    })
}

const changeBtn = function () {
  EditBtn.forEach((btn) => {
    btn.textContent = "Hide"
  })
}

for (let i = 0; i < EditBtn.length; i++) {
  EditBtn[i].addEventListener("click", (e) => {
    const Card = e.target.closest(".card")
    Card.classList.add("d-none")
  })
}

LoadBtn.addEventListener("click", () => {
  changeBtn()
  getImg()
})

SecLoadBtn.addEventListener("click", () => {
  changeBtn()
  getImg2()
})
