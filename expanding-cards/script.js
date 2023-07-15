"use strict"

const panels = document.querySelectorAll(".panel")

const removeAllActive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAllActive()
    panel.classList.add("active")
  })
})
