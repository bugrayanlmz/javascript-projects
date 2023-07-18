"use strict"

const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}

const imgContainer = document.querySelector(".images")

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img")
    img.src = imgPath

    img.addEventListener("load", function () {
      imgContainer.append(img)
      resolve(img)
    })

    img.addEventListener("error", function () {
      reject(new Error("Image didn't load"))
    })
  })
}

let currentImage

createImage("img/img-1.jpg")
  .then((img) => {
    currentImage = img
    console.log("Image 1 loaded")
    return wait(2)
  })
  .then(() => {
    currentImage.style.display = "none"
    return createImage("img/img-2.jpg")
  })
  .then((img) => {
    currentImage = img
    console.log("Image 2 loaded")
    return wait(2)
  })
  .then(() => {
    currentImage.style.display = "none"
    return createImage("img/img-3.jpg")
  })
  .then((img) => {
    currentImage = img
    console.log("Image 3 loaded")
    return wait(2)
  })
  .then(() => (currentImage.style.display = "none"))
  .catch((err) => console.error(err))
