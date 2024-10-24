//FUNCION FLECHA
//1.**********************************/
function jonny(a,b){
    return a+b;

}
//2.**********************************/
console.log(jonny(2,3))

//ESTRUCTURA DE LA FUNCIÓN FLECHA
let salu2 = () => {};
//3.**********************************/
let saludo = (nombre) =>{
    return 'Saludos ' + nombre; 
}
console.log(saludo('Jonny'))

//4.**********************************/

let saludar = nombre =>'Saludos ' + nombre;

console.log(saludo('Noyola-Deidad'))

//5.****pasar parametros**************/
let suma = (a,b) => a+b;
console.log(suma(34,1))
//6.**Crear objeto en función flecha**/
let obj = () =>({nombre: 'Leonardo', edad:20});

//Llamamos al objeto y accedemos a la propiedad
//let persona = obj().nombre;
console.log(obj().nombre);
//7.****pasar parametros**************/
let arrFunc = ()=> [1,2,3,4,5];

//Accediendo a todo el array
console.log(arrFunc());

//Accediendo al arreglo
console.log(arrFunc()[4]);



