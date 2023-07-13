/*
	📌 JSON
	Javascript Object Notation
*/

/*
	📌 Tipos de datos que podemos usar en JSON:
	- cadena de texto
	- numeros
	- objetos (en formato JSON)
	- arreglos
	- booleanos
	- null

	Tipos de datos que NO podemos usar en JSON:
    - funciones
    - objetos de fecha
    - undefined
*/

//datos.json
const datos= `
{
    "id":1,
    "nombre":"Meli Barrios",
    "suscriptor_activo": true,
    "post":[
        {
            "id":1,
            "titulo":"titulo del primer post",
            "texto":"texto del primer post"
        },
        {
            "id":2,
            "titulo":"titulo del segundo post",
            "texto":"texto del segundo post"
        }
    ]
}`

//parse()
//le pasaos una cadena de texto con formato json y nos
//devuelve objeto de javascript
const objeto= JSON.parse(datos)
//console.log(objeto.nombre);

//stringify
/* nos permite pasarle un objeto de javascript y nos devuelve
una cadena de texto con objeto en formato JSON */

const usuario={
    nombre:'Melissa',
    correo: 'correo@gmail.com',
    coloresFavoritos:['rosa', 'morado','cafe']
}
let stringUsuario =JSON.stringify(usuario);
console.log(stringUsuario);
