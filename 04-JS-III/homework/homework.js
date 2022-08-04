// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  var d = array[0];
  return d;

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  var a = array.length;
  var d = array[a - 1];
  return d;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  var a = array.length;
  return a;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var a = [];

  for (let i = 0; i < array.length; i++) {
    a[i] = array[i] + 1;    
   
  }
  return a;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  
   array.push(elemento);
    return array;
    
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  
   array.unshift(elemento);
  return array;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  var p = '';
  for (let i = 0; i < palabras.length; i++) {
    if (i < palabras.length - 1) {
      p = p + palabras[i] + ' ';
    }
    if(i === palabras.length - 1){
      p = p  + palabras[i];
    }
  }
  return p;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }  
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];    
  }

  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var prom, suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    
    suma = suma + resultadosTest[i];
    
  }

  prom = suma / resultadosTest.length;

  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var nMg = 0;

  for (let i = 0; i< numeros.length; i++) {
    
      if (numeros[i]> nMg) {
        nMg = numeros[i]; 
      }
      }
    
      return nMg;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver 
  //el producto. Si no se pasan argumentos devuelve 0. Si se pasa un argumento, 
  //simplemente devuélvelo. Escribe tu código aquí:

  if (arguments.length === 0) {
    return 0;
  }  
  var n = 1;
  for (let i = 0; i < arguments.length; i++) {
    n *= arguments[i];
  }
return n;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo 
  //cuyo valor es mayor a 18. Escribe tu código aquí

  var cont = 0;

  for (let i = 0; i < arreglo.length; i++) {
    
    if (arreglo[i] > 18) {
      cont++;
    }
    
  }

  return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 
  //2 = Lunes y así sucesivamente. Realiza una función que dado el 
  //número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  
  if ((numeroDeDia === 1) ||(numeroDeDia === 7)) {
    return 'Es fin de semana';
  } else {
    return 'Es dia Laboral';
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  var nS = n.toString();

  if (nS[0] == 9) {
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo 
  //son iguales: retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  
  var cont = 0;

  for (let i = 0; i <= arreglo.length; i++) {
    if (arreglo[i] === arreglo[i +1]) {
      cont++;
    }
  }
  
  if (cont === arreglo.length) {
    return true;
  } else {
    return false;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, 
  //recorrer el array buscando los meses de "Enero", "Marzo" y "Noviembre", 
  //guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

var a = [];
var cont = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
          a[cont] = array[i];
          cont++;
      }
      
    }

    if (a.length < 3) {
      return 'No se encontraron los meses pedidos';
    } else {
      return a;
    }
    

 

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar 
  //en un nuevo array sólo los valores mayores a 100 (no incluye el 100). 
  //Finalmente devolver el nuevo array. Tu código:

  var a = [];
  var cont = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      a[cont] = array[i];
      cont++;
    }
  }
return a;   
}
function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. Devolver el array si en algún momento el valor de la suma 
  //y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y devolver: 
  //"Se interrumpió la ejecución". Pista: usá el statement 'break'
  // Tu código:

 /* var a = [];
  var i;

  for (i = 0; i < 10; i++) {
    var n = numero +2;
    a.push(n);

    if (n === i) {
      break;
    }    
  }

  if (n === i) {
    return a;
  }

if (i < 10) {
  return 'Se interrumpió la ejecución'
}*/

var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma += 2;
    if (i === suma) break;
    else {      
      array.push(suma);
    }
  }
  
  if (i === suma) {
    return 'Se interrumpió la ejecución';
  }else{
    return array;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array cuando el número de iteraciones alcance el valor 5, no se suma 
  //en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    if (i === 5) continue;
    else {
      suma += 2;
      array.push(suma);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
