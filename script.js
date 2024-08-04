//clab
//crear leer actualizar borrar etiquetas 



let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//usar el punto es para llamar a una propiedad o a una accion del objeto
typewriter
.pauseFor(2500)
.typeString('Valeria Sosa')
.pauseFor(300)
.deleteAll()
.typeString('Desarrolladora Frontend JR')
.pauseFor(1000)
.start();

