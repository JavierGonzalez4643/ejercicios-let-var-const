// Ejercicio 3: Bloques de Código y Alcance

// 1. Declara la variable `x` usando `let`
let x= 5;

if (true) {
  // 2. Declara otra variable `x` usando `let` dentro del bloque
    let x=10;
  console.log(x); // ¿Qué valor esperas aquí?
}

console.log(x); // ¿Qué valor esperas aquí?

// 4. Repite el ejercicio usando `const`

const y =5;
if (true) {
  const y=10;
  console.log(y); // ¿Qué valor esperas aquí?
}

console.log(y); // ¿Qué valor esperas aquí?
