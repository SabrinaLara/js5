/*import { Sara, Andres} from "./obj.js";*/

let sara = new Alumno("Sara", 19, 1, 4);
let andres = new Alumno("Andres", 23, 1, 2);

sara.paso();
andres.paso();

console.log(sara.obtenerNombre + " obtuvo el curso: " + sara.obtenerCurso);
console.log(andres.obtenerNombre + " obtuvo el curso: " + andres.obtenerCurso);

sara.cambioCurso = "2";
console.log("Sara cambió al curso: " + sara.obtenerCurso);

console.log(sara.obtenerNombre + " n° materias: " + sara.obtenerMaterias);
console.log(andres.obtenerNombre + " n° materias: " + andres.obtenerMaterias);

andres.cambioMaterias ="5"
console.log("Andres cambio a n° materias: " + andres.obtenerMaterias);