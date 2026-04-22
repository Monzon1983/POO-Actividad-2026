"use strict";
// JERARQUÍA (Punto 2)
class Propulsor {
    cantidad = 0;
    constructor(n) {
        this.cantidad = n;
    }
}
class Helice extends Propulsor {
    ToString() {
        return `${this.cantidad} hélice/s`;
    }
}
// COMPONENTES
class Alas {
    num;
    constructor(num) {
        this.num = num;
    }
    ToString() { return `Alas: ${this.num}`; }
}
class TrendeAterrizaje {
    n;
    a;
    f;
    constructor(n, a, f) {
        this.n = n;
        this.a = a;
        this.f = f;
    }
    ToString() { return `Tren: ${this.n} neumáticos`; }
}
// CLASE PRINCIPAL (Punto 3: Todas las asociaciones)
class Aeroplano {
    // AGREGACIÓN: Se definen pero se reciben de afuera [cite: 100, 104]
    propulsion;
    alas;
    // COMPOSICIÓN: Se crean adentro (Relación de vida o muerte)
    tren;
    constructor(p, a) {
        this.propulsion = p; // Agregación
        this.alas = a; // Agregación
        // COMPOSICIÓN: El 'new' acá adentro define la relación fuerte
        this.tren = new TrendeAterrizaje(2, 2, true);
    }
    ToString() {
        return `Avión con ${this.propulsion.ToString()} , ${this.alas.ToString()} y ${this.tren.ToString()}`;
    }
}
// --- AGREGÁ ESTO PARA QUE EL CÓDIGO SE EJECUTE ---
// 1. Creamos los objetos para la AGREGACIÓN (existen por separado)
const miMotor = new Helice(3);
const misAlas = new Alas(2);
// 2. Instanciamos el Aeroplano 
// (Fijate que él solito crea el Tren de Aterrizaje por COMPOSICIÓN adentro)
const miAvion = new Aeroplano(miMotor, misAlas);
// 3. Imprimimos el resultado en la consola
console.log("--- REPORTE DEL AEROPLANO ---");
console.log(miAvion.ToString());
