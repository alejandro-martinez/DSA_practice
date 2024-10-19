function contarVocales(str) {
  const vocales = "aeiouAEIOU";
  let contador = 0;
  for (let char of str) {
      if (vocales.includes(char)) {
          contador++;
      }
  }
  return contador;
}

function mayorCantidadDeVocales(cadena, k) {
  const vocales = "aeiouAEIOU";
  let maxVocales = 0;
  let actualVocales = 0;
  let mejorSubstring = "";
  maxVocales = 0;
  mejorSubstring = cadena.slice(0, k);

  // Usamos sliding window para mover la ventana sobre la cadena
  for (let i = k; i < cadena.length; i++) {
      // Restamos la vocal que sale de la ventana
      if (vocales.includes(cadena[i - k])) {
          actualVocales--;
      }
      // Sumamos la vocal que entra en la ventana
      if (vocales.includes(cadena[i])) {
          actualVocales++;
      }

      // Actualizamos si encontramos una ventana con más vocales
      if (actualVocales > maxVocales) {
          maxVocales = actualVocales;
          mejorSubstring = cadena.slice(i - k + 1, i + 1);
      }
  }

  return mejorSubstring;
}

// Ejemplo de uso
const cadena = "javascript";
const k = 3; // Longitud de la ventana
console.log(mayorCantidadDeVocales(cadena, k));
