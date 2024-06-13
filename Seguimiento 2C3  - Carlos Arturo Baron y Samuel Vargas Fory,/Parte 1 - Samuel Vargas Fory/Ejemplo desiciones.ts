let horaActual: number = new Date().getHours();

if (horaActual < 12) {
  console.log("¡Buenos días!");
} else if (horaActual < 18) {
  console.log("¡Buenas tardes!");
} else {
  console.log("¡Buenas noches!");
}
