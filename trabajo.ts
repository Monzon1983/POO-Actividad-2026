"use strict";

// JERARQUÍA (Punto 2)
abstract class Propulsor {
    public cantidad: number = 0;
    constructor(n: number) {
        this.cantidad = n;
    }
    public abstract ToString(): string;
}

class Helice extends Propulsor {
    public ToString(): string {
        return `${this.cantidad} hélice/s`;
    }
}

// COMPONENTES
class Alas {
    constructor(public num: number) {}
    public ToString(): string { return `Alas: ${this.num}`; }
}

class TrendeAterrizaje {
    constructor(private n: number, private a: number, private f: boolean) {}
    public ToString(): string { return `Tren: ${this.n} neumáticos`; }
}

// CLASE PRINCIPAL (Punto 3: Todas las asociaciones)
class Aeroplano {
    // AGREGACIÓN: Se definen pero se reciben de afuera [cite: 100, 104]
    private propulsion: Propulsor; 
    private alas: Alas;

    // COMPOSICIÓN: Se crean adentro (Relación de vida o muerte)
    private tren: TrendeAterrizaje;

    constructor(p: Propulsor, a: Alas) {
        this.propulsion = p; // Agregación
        this.alas = a;       // Agregación
        
        // COMPOSICIÓN: El 'new' acá adentro define la relación fuerte
        this.tren = new TrendeAterrizaje(2, 2, true); 
    }

    public ToString(): string {
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