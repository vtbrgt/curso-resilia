/* OBJETIVO DO EXERCÍCIO: receber um caractere/palavra de um campo de texto e ao clicar no botão "submit" prevenir o comportamento padrão e retornar os códigos da tabela ASCII referente aos caracteres inseridos. Abaixo está a solução para ambos os desafios. */

const input = document.querySelector('.input')
const btn = document.querySelector('.btn-primary')

/* btn.addEventListener('click', (event) => {
    event.preventDefault()
    const resultado = document.createElement('h4')
    resultado.style.margin = '1rem 0 0 1rem'
    resultado.innerText = `${input.value} -> ${input.value.charCodeAt()}`
    document.body.appendChild(resultado)
}) */

btn.addEventListener('click', (event) => {
    event.preventDefault()
    const resultado = document.createElement('p')
    resultado.style.margin = '1rem 0 0 1rem'
    const caracteres = input.value.split('')
    const codigoASCII = caracteres.map(caracter => caracter + ' -> ' + caracter.charCodeAt()).toString().replace(/,/g, '<br>')
    resultado.innerHTML = codigoASCII
    document.body.appendChild(resultado)
})