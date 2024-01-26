function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

 const pruebaFecha = new Date(fecha);
 return !isNaN(pruebaFecha.getTime());
}

console.log(esFechaValida("2024-01-25"));

module.exports = esFechaValida;