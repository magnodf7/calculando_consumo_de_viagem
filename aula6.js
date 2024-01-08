//calculando o valor de preços com acrecimos e descontos

const precoDeEtiqueta = 100
const formaDePagamento = 4

//função para calcular os valores dos acréscimos e descontos
if(formaDePagamento === 1){
    console.log(precoDeEtiqueta - ( precoDeEtiqueta * 0.1))
    
}else if(formaDePagamento === 2){
    console.log(precoDeEtiqueta - (precoDeEtiqueta * 0.15))

}else if(formaDePagamento === 3){
    console.log(precoDeEtiqueta)
}else{
    console.log(precoDeEtiqueta +(precoDeEtiqueta * 0.1))
}

