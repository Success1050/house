const refreshBtn= document.querySelector('.refresh-btn')
const container= document.querySelector('.container')

let maxColor= 32
const generateColor =()=>{
    container.innerHTML= ""
    for (let i = 0; i < maxColor; i++) {
    let colorElement= Math.floor(Math.random() * 0xffffff).toString(16)
    colorElement= `#${colorElement.padStart(6, "0")}`

    let colors= document.createElement('div')
    colors.classList.add('color')
        colors.innerHTML= `                        <div class="rect-box" style= "background: ${colorElement};"></div>
        <div class="hex-value">
            <h3>${colorElement}</h3>
        </div>`
        container.appendChild(colors)

        colors.addEventListener('click', ()=> changeColor(colors, colorElement))
    }
}

const changeColor=(colorPlate, colorValue)=>{
    const element= colorPlate.querySelector('.hex-value')
    navigator.clipboard.writeText(colorValue).then(()=>{
        element.innerHTML= "Copied"
        setTimeout(() => {
            element.innerHTML= colorValue
        }, 1000);
    })
}
window.addEventListener('DOMContentLoaded', generateColor)
refreshBtn.addEventListener('click', generateColor)

