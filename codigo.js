const buttonNumbers = document.querySelectorAll('.num');

const buttonOperation = document.querySelectorAll('.operacion');

const buttonIgual = document.querySelectorAll('.igual')[0];
const buttonDelete = document.querySelectorAll('.delete')[0];


 var result = document.getElementById('result');


var actual  = '';
var anterior = '';
var operacion = undefined;


buttonNumbers.forEach(element => {
  element.addEventListener('click', function(){
    agregarNumero(element.innerText);
    // alert(element.innerText);
  })
});

buttonOperation.forEach(function(boton){
    boton.addEventListener('click', function(){
      selectOperation(boton.innerText);

      // alert(boton.innerText);
    })
});

buttonIgual.addEventListener('click',()=>{
  // alert(efe.innerText);
  calcular();
  actualizarDisplay();
});

buttonDelete.addEventListener('click', function(nico){
  // alert(nico.innerText+'ff');
  clear();
  actualizarDisplay();

})

// metodos

  function calcular()
  {
    var calculo;
    const opeanterior = parseFloat(anterior) ;

    const opeactual = parseFloat(actual) ;

    if(isNaN(anterior) || isNaN (actual)) return;
    switch(operacion){

      case '+':
      calculo = opeanterior + opeactual;
       break;

       case '-':
      calculo = opeanterior - opeactual;
        break;

      case 'x':
       calculo = opeanterior * opeactual;
         break;
     case '/':
       calculo = opeanterior / opeactual;
          break;
      default:
        return;

    }
    actual = calculo;
    operacion = undefined;
    anterior ='';
  }

 function selectOperation(op)
  {
    if(actual === '') return;
    if(anterior !== ''){
      calcular();
    }

    operacion = op.toString();
    anterior = actual;
    actual = '';

  };

function agregarNumero(num)
{
  actual = actual.toString() + num.toString();
  actualizarDisplay();
};

  function clear(){
    actual = '';
    anterior='';
    operacion='undefined';
  };

function actualizarDisplay()
{
  result.value = actual;
};




