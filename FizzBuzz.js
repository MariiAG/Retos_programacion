//NODEJS -entorno de ejecucion, permite que cualquier maquina sea capaz de entender javascript sin necesidad de un navegador

//RETO DEL FIZZ BUZZ (200 numeros enteros)

/*Escribe, un programa que muestre en pantalla los números del 1 al 200, 
sustituyendo los múltiplos de 3 por el palabro “Fizz” y, a su vez, los múltiplos 
de 5 por “Buzz”. Para los números que, al tiempo, son múltiplos de 3 y 5, utiliza el combinado 
“FizzBuzz*/

for(i = 1; i <= 200; i++){ 
    let n = [];
    n[i] = i;

    if(n[i]%3 == 0 && n[i]%5 == 0){
        n[i] = 'FizzBuzz';
    }
    else{
        if(n[i]%3 == 0){
            n[i] = 'Fizz';
        }
        else if(n[i]%5 == 0){
            n[i] = 'Buzz';
        } 
    } 
    console.log(n[i]);
}