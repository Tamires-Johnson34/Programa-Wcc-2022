var readline = require('readline-sync');

function receberNumero() {
  console.log('Bem Vindo! \n');

  do {
    var numero = Number(
      readline.question('Entre com um numero e descubra seus divisores:')
    );

    if (isNaN(numero)) {
      console.log('O valor informado não é valido! Tente novamente. \n');
    }
  } while (isNaN(numero));
  return numero;
}

function descobrirDivisores() {
  let count = 0;
  for (let i = 1; i <= valor; i++) {
    if (valor % i == 0) {
    }
    count++;
    console.log(`Os divisores de ${valor} sao: ${i}`);
  }
  if (divisores.length == 2) {
    console.log(
      'Este numero e primo,ele so pode ser divido po 1 e por ele mesmo!'
    );
  }
}

function descobrir2(valor){
  var divisores = [];

  for(var i = 1, i <=, i++){
    if (valor % i == 0){
      divisores.push(i);

    }
  }
  console.log(`Os divisores de % {valor} sao: $ {divisores}`);
   if(divisores.length == 2){
    console.log('Este numero e primo, ele so pode ser divido po 1 e por ele mesmo!');
   }
   function rodarAplicativo(){
    do{
      var valor = receberNumero();
      descobrirDivisores2(valor);

      var continuar = String(readline.question('\nVoce deseja verificar outro numero? Responda S para sim ou N para nao'));

     while(continuar == 'S');
     console.log('\nObrigado! Ate logo.');
    }
   



rodarAplicativo();



//var valor = receberNumero();
//descobrirDivisores(valor);
