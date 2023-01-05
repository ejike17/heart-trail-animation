const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event) => {
    const fixX = event.offsetX;
    const fixY = event.offsetY;

    const spanEL = document.createElement("span")
    spanEL.style.top = fixY + "px"
    spanEL.style.left = fixX + "px"
    const size = Math.random() * 100
    spanEL.style.width = size + 'px'
    spanEL.style.height = size + 'px'
    bodyEl.appendChild(spanEL)
    setTimeout(() => {
        spanEL.remove()
    },3000)
})