class Alumno{
    constructor(nombre, edad, curso, materias) {
        this.nombre = nombre;
        this.edad   = edad;
        this.curso  = curso;
        this.materias = materias;
    }
    
    get obtenerNombre () {
        return this.nombre;
    }

    get obtenerCurso() {
        return this.curso;
    }

    set cambioCurso(nuevoCurso) {
        this.curso = nuevoCurso;
    }

    get obtenerMaterias() {
        return this.materias;
    }

    set cambioMaterias(nuevaMateria) {
        this.materias = nuevaMateria;
    }

    paso() {
        console.log("El alumno " + this.nombre + " esta en curso");
    }
  
}
