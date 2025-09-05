// Ejercicio 2: Inmutabilidad de `const`

const PI= 3.14159;

// 1. Declara la constante `PI`
// 2. Intenta reasignar `PI` (esto debería causar un error)
// 3. Declara un objeto `circle`
const circle={
  radius:10
};
circle.radius=15; // SI , SE PUEDE MODIFICAR PORQUE ES OBJETO LAS CONSTANTES EN OBJETOS SI SE PUEDE MODIFICAR NADA MAS EN ESO
// 4. Modifica la propiedad `radius` de `circle`
// ¿Qué valor esperas para `radius`? 15 
console.log(circle);
