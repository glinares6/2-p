// // OBJETO EN JS
// const usuario1 = {
// // ATRINUTO 
//     nombre : "gianmarco linares ",
//     email : "gian@ed.team",
//     edad : 25 
// }
// const usuario2 = {
//     nombre : "gianmarco ",
//     apellido : " linares ",
//     correo : "gian@ed.team",
//     edad : 28 

// }

// // OBJETOS DINAMICOS
// let name = "nombre";
// let anidado = "anidado";

// const tabla = {
//     [name] : "atributo dinamico",
//     [`${name}${anidado}`] : "nombre anidado"
// }
// console.log(tabla);




// // SE CONSTRUYE UN PATRON PARA NO CAER EN EL ERROR DE CONFUNDIR LOS ATRIBUTOS QUE SE PUEDEN PARECER 
// // SE VA ALMACENAR EN UNA CLASE

// // sintaxis punto para obtener el atributo del objeto
// console.log(usuario1.email);
// // sintaxtis corchete  para obtener el atributo del objeto
// console.log(usuario2["edad"]);

// // sintaxtis corchete para setear los valores del atributo
// usuario2["nombre"] = " alver  seteando el atributo"
// console.log(usuario2.nombre);




// // CLASES EN JS    
// class  Usuario {
//     // ATRIBUTOS
//     constructor (nombre,apellido,correo,edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.correo = correo
//         this.edad = edad

//     }

//     // METODOS
//     saludarSimple(){
//        return console.log(`hola mi amigo ${this.nombre}`);

//     }


// saludar(){
//     return document.write(`
//         <div>
//             <p>
//                 hola,mi nombre es ${this.nombre}
//             </p>
//         </div>
    
//     `)
// }

// // cambiarEdad(nuevaEdad){
// //     return this.edad = nuevaEdad
// // }
// }
// let beto = new Usuario("gianmarco", "linares", "glinaresc@gmail.com", 27)
// // console.log(beto)

// let marco = new Usuario("marco laime", "", "mlaimec@gmail.com", 26)

// // console.log(marco)


    // HETENCIA DE CLASES
// class Profesor extends Usuario {
//     constructor (nombre,apellido,correo,edad,experiencia,lenguaje){
//         super(nombre,apellido,correo,edad)
//         this.ecperiencia = experiencia
//         this.lenguaje = lenguaje
          
    
//     }
// }
// class Estudiante extends Usuario {
//     constructor (nombre,apellido,correo,edad,activado){
//         super(nombre,apellido,correo,edad)
//         this.activado = activado
          
    
//     }
// }
    // INSTACIANDO EL OBJETO DE UNA CLASE
// let alvaro = new Profesor(
//     "alvaro",
//     "felipe",
//     "alvaro@ed.team",
//     54,
//     5,
//     "javascript"
// )
// let alejandro = new Estudiante(
//     "alejandro",
//     "rodrige<",
//     "ale@ed.team",
//     15,
//     true
// )



// console.log(alvaro);
// console.log(alejandro);



// class Forma{
//     constructor (alto,ancho,color){
//         this.alto = alto
//         this.ancho = ancho
//         this.color = color 

//     }

//     dibujar(){
//         return document.body.innerHTML = `
//                 <div
//                     style="
//                     width: ${this.ancho}px;
//                     height: ${this.alto}px;
//                     background: ${this.color}"
//                 >
//                 </div>
//         `
//     }

//     redondo(){
//         return document.body.innerHTML = `
//                 <div
//                     style="
//                     width: ${this.ancho}px;
//                     height: ${this.alto}px;
//                     background: ${this.color};
//                     border-radius: ${this.radio}"
//                 >
//                 </div>
//         `
//     }
    
   
// }


// // let forma1 = new Forma(220,400,"red")

// class Cuadrado extends Forma {
//     constructor(lado,color){
//         super(lado,lado,color)
//     }
// }

// class Circulo extends Forma{
//     constructor(lado,color,radio){
//         super(lado,lado,color)
//         this.radio= radio
//     }


// }

// let figuraCuadrada = new Cuadrado(400,"green")
// let figuraCircular = new  Circulo(400,"blue","50%")
class Usuario{
    constructor(nombre,apellidos,correo,contraseña){
        this.nombre = nombre,
        this.apellidos = apellidos,
        this.correo = correo,
        this.contraseña = contraseña
    }
}

let form1=document.getElementById('formulario')
    form1.addEventListener('submit', e => {
        e.preventDefault();
        // console.log(e.target.nombre.value);
        let nombre = e.target.nombre.value
        let apellidos = e.target.apellidos.value
        let correo = e.target.correo.value
        let contraseña = e.target.contraseña.value

        // declatando un objeto para tomar sus valores
        // let usuario = {
        //     nombre :nombre,
        //     apellido :apellidos,
        //     correo :correo,
        //     contraseña :contraseña
        // }

        // asignado un onjeto de la clase usuario
                let usuario = new Usuario(
            nombre,
            apellidos,
            correo,
            contraseña

                )

            console.log(usuario);
    })



