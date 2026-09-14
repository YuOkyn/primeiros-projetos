window.alert("Isso é um programa simples de aumentos e descontos em porcentagem criado como método de praticar javascript")
window.alert("Resultados no console(f12)")
let funcao = prompt("Digite 1 para desconto e 2 para aumento")
if (funcao == 1){
    let preco = prompt("Insira o preço inicial (apenas números)")
    let desconto = prompt("Insira o desconto (0 a 100)")
    let result = preco*(1-desconto/100)
    console.log(`O preço com o desconto fica: ${result.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})}`)
}
if (funcao == 2){
    let preco = prompt("Insira o preço (apenas números)")
    let aumento = prompt("Insira o aumento (0 a 100)")
    let result = preco*(1+aumento/100)
    console.log(`O preço com o aumento fica: ${result.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})}`)
}