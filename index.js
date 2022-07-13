const select = document.getElementById('scheme-options')
const form = document.querySelector('form')
const colorPicker = document.getElementById('color-picker')
const color1 = document.getElementById('color-1')
const colors = document.querySelectorAll('.column')
const hex1 = document.getElementById('hex-1')
const hexs = document.querySelectorAll('.hex')
const hexText = document.querySelector('footer')

function renderColors(data){
    color1.style.background = colorPicker.value
    hex1.textContent = colorPicker.value.toUpperCase()
    for(let i = 0; i < 4; i++){
        let color = data.colors[i].hex.value
        colors[i].style.background = color
        hexs[i].textContent = color
    }
}

function copyToClipboard (index){
    let textsArray = hexText.innerText.split('#')
    textsArray.shift()
    let copyText = '#' + textsArray[index]
    console.log(copyText)
    navigator.clipboard.writeText(copyText)
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    const valueForScheme = colorPicker.value.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${valueForScheme}&mode=${select.value}&count=4`)
        .then(response => response.json())
        .then(data => renderColors(data))
})