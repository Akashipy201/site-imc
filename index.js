const btn = document.querySelector("button"); 
const  peso =  document.querySelector(".peso"); 
const altura = document.querySelector(".altura"); 
const resposta = document.querySelector("#resposta"); 

function IMC(valor1, valor2){

    let valor_altura = parseFloat(valor1.replace(",", "."))

    let imc = (Math.floor(valor2)/(valor_altura*valor_altura)).toFixed(2)
    
    
    if (Number(imc)<=18.5){
        return `O valor do seu IMC é ${imc.replace(".",",")}<br/>e está baixo do normal`
    }
    else if (Number(imc) > 18.6 && Number(imc) < 24.9){
        return `O seu IMC é ${imc.replace(".",",")} <br>e parabéns, o seu imc está normal ^-^`
    }
    
    else if (Number(imc) > 25.0 && Number(imc) < 29.9){
        return `O seu IMC é ${imc.replace(".",",")}<br>Alerta de sobrepreso!!! começa a se cuidar...`
    }
    else if (Number(imc) > 30.0 && Number(imc) < 34.9){
        return `O seu IMC é ${imc.replace(".",",")} <br>Alerta de Obesidade grau 1 !!! começa a se cuidar...`
    }
    else if (Number(imc) > 35.0 && Number(imc) < 39.9){
        return `O seu IMC é ${imc.replace(".",",")}<br>Alerta de Obesidade grau 2 !!! começa a se cuidar...`
    }
    else if (Number(imc) > 40.0){
        return `O seu IMC é ${imc.replace(".",",")}<br>Alerta de Obesidade grau 3 !!!<br/> Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.`
    }

    else{
        return ""
    }

}



btn.addEventListener("click", ()=>{

    if(altura.value != "" && peso.value !=""){
        let valor = IMC(altura.value, peso.value)
   
        if(valor !=  "NaN" ){
            resposta.innerHTML = valor
        }
        else{
            resposta.innerHTML= "Error, tente novamente!"
        }
        

    }
    else{
        alert("Porfavor, coloca todos os os dados que estão pedindo")
    }
})
