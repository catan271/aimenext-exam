const display = document.querySelector('#display')
const formula = display.querySelector('.formula')
const current = display.querySelector('.current')

const pads = document.querySelector('#pads')
const numbers = pads.querySelectorAll('.num')
const operators = pads.querySelectorAll('.operator')
const AC = pads.querySelector('.AC')
const DEL = pads.querySelector('.DEL')
const calc = pads.querySelector('.equal')

const MAX_LENGTH = 15
let calculated = false

numbers.forEach((number) => {
    number.onclick = () => {
        if (calculated) {
            current.textContent = ''
            formula.textContent = ''
            calculated = false
        }
        if (current.textContent.length === MAX_LENGTH) return
        current.append(number.textContent)
        current.textContent = current.textContent.replace(/^0(?!\.)+/, '')
        current.textContent = current.textContent.replace(/(?<=\.\d*)\./, '')
        formula.textContent = formula.textContent.replace(/[\d.]*$/, current.textContent)
    }
})

operators.forEach((operator) => {
    operator.onclick = () => {
        if (calculated) {
            formula.textContent = (formula.textContent.match(/(?<==)[e0-9\-+.]*$/)[0] || '') + operator.textContent
            current.textContent = '0'
            calculated = false
            return
        }
        current.textContent = '0'
        formula.append(operator.textContent)
    }
})

AC.onclick = () => {
    if (calculated) {
        calculated = false
    }
    current.textContent = '0'
    formula.textContent = '0'
}

DEL.onclick = () => {
    if (calculated) return AC.onclick()
    current.textContent = current.textContent.slice(0, -1)
    formula.textContent = formula.textContent.slice(0, -1)
}

calc.onclick = () => {
    if (calculated) return
    calculated = true
    try {        
        const result = math.evaluate(formula.textContent)
        current.textContent = result
        formula.append('=' + result)
    } catch(e) {
        current.textContent = 'Syntax Error!'
    }
}