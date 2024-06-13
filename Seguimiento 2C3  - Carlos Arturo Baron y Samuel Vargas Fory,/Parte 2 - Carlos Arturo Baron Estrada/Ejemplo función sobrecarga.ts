function contactar(email: string): void;
function contactar(telefono: number): void;


function contactar(dato: string | number): void {
  if (typeof dato === 'string') {
    console.log(`Enviando email a: ${dato}`);
  } else {
    console.log(`Llamando al número: ${dato}`);
  }
}

contactar('ejemplo@correo.com');
contactar(1234567890);
