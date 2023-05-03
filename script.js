const button = document.getElementById('button');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

const getText = (imc) => {
    if(imc > 40) return "está com obesidade grau III (mórbida)";
    if(imc > 35) return "está com obesidade grau II (severa)";
    if(imc > 30) return "está com obesidade grau I";
    if(imc > 25) return "está acima do peso";
    if(imc > 18.5) return "está com o peso ideal";
    return "está abaixo do peso";
}

const imcCalc = () => {
    if(!peso.value 	|| !altura.value || !nome.value) return resultado.textContent = 'Preencha todos os campos';
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `${nome.value} ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc);