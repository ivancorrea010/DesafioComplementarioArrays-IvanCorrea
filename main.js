let precioMasaTradicional = 250;
let precioMasaZanahoria = 300;
let precioMasaCalabaza = 350;
let precioMasaPapa = 325;
let precioPuntadeAgua = 400;
let precioBarraza = 375;

class Producto {
    constructor (nombre,precio,){
        this.nombre = nombre;
        this.precio = precio;
        this.precioIva;
    }

    getIva(){
        return this.precioIva = this.precio*1.21;
        }
    
}

const arrayProductos = [];
const users = ['JUAN','IVAN'];

const masaTradicional = new Producto ('"Masa tradicional"',precioMasaTradicional);
const masaZanahoria = new Producto ('"Masa de zanahoria"', precioMasaZanahoria);
const masaCalabaza = new Producto ('"Masa de calabaza"', precioMasaCalabaza);
const masaPapa = new Producto ('"Masa de papa"', precioMasaPapa);
const quesoPuntaDeAgua = new Producto ('"Queso Punta de agua"', precioPuntadeAgua);
const quesoBarraza = new Producto ('"Muzzarella Barraza',precioBarraza);

arrayProductos.push(masaTradicional,masaZanahoria,masaCalabaza,masaPapa,quesoPuntaDeAgua,quesoBarraza);

function saludar() {
   
    let nombre = '';
   
    do { 
        
        if (nombre !== '') {
            alert('El nombre ya esta en uso, por favor ingresa un nombre diferente')
        };
        

        nombre = prompt('Hola! Estás en PIDDA!, Ingresa un nombre de usuario para poder registrarte: ').toUpperCase();

       
    } while (users.includes(nombre));
    
    users.push(nombre);
    console.log(users);
    
    alert('Hola '+nombre+'!, Bienvenido a PIDDA!, vamos a crear la pizza a tu medida.\nPresioná aceptar para elegir tus productos');

}

function masas(){
    let eleccionMasa = Number(prompt('Que tipo de masa vas a elegir?\n1)Masa tradicional: $'+masaTradicional.precio+' + IVA = $'+masaTradicional.getIva()+'\n2)Masa de calabaza: $'+masaCalabaza.precio+' + IVA = $'+masaCalabaza.getIva()+'\n3)Masa de zanahoria: $'+masaZanahoria.precio+' + IVA = $'+masaZanahoria.getIva()+'\n4)Masa de papa: $'+masaPapa.precio+' + IVA = $'+masaPapa.getIva()));

    while (eleccionMasa !== 1 && eleccionMasa !== 2 && eleccionMasa !== 3 && eleccionMasa !== 4) {
        alert('Su opcion es incorrecta, marque un numero del 1 al 4')
        eleccionMasa = Number(prompt('Que tipo de masa vas a elegir?\n1)Masa tradicional: $'+masaTradicional.precio+' + IVA = $'+masaTradicional.getIva()+'\n2)Masa de calabaza: $'+masaCalabaza.precio+' + IVA = $'+masaCalabaza.getIva()+'\n3)Masa de zanahoria: $'+masaZanahoria.precio+' + IVA = $'+masaZanahoria.getIva()+'\n4)Masa de papa: $'+masaPapa.precio+' + IVA = $'+masaPapa.getIva()));
    }
    
    switch (eleccionMasa) {
        case 1:
            {
                alert('Seleccionaste "Masa Tradicional"');
                return masaTradicional;
            }
        case 2:
            {
                alert('Seleccionaste "Masa de calabaza"');
                return masaCalabaza;
            }
        case 3:
            {
                alert('Seleccionaste "Masa de zanahoria"');
                return masaZanahoria;
            }
        case 4:
            {
                alert('Seleccionaste "Masa de papa"');
                return masaPapa;
            }
        
        }

}

function quesos() {
    
    let eleccionQueso = Number(prompt('Que tipo de queso vas a elegir?\n1)Queso cremoso "Punta de agua": $'+quesoPuntaDeAgua.precio+'+ IVA = $'+quesoPuntaDeAgua.getIva()+'\n2)Queso muzzarella "Barraza": $'+quesoBarraza.precio+'+ IVA = $'+quesoBarraza.getIva()));

    while (eleccionQueso !== 1 && eleccionQueso !== 2) {
        alert('Su opcion es incorrecta, marque un numero del 1 al 2')
        eleccionQueso = Number(prompt('Que tipo de queso vas a elegir?\n1)Queso cremoso "Punta de agua": $'+quesoPuntaDeAgua.precio+'+ IVA = $'+quesoPuntaDeAgua.getIva()+'\n2)Queso muzzarella "Barraza": $'+quesoBarraza.precio+'+ IVA = $'+quesoBarraza.getIva()));
    }
    
    switch (eleccionQueso) {
        case 1:
            {
                alert('Seleccionaste "Queso cremoso "Punta del agua""');
                return quesoPuntaDeAgua;
            }
        case 2:
            {
                alert('Seleccionaste "Queso muzzarella "Barraza""');
                return quesoBarraza;
            }
        
        }
}

function salsaDeTomate() {
    alert('Recordá que junto con tus anteriores productos te llegará de regalo nuestra salsa de tomate cocinada por nuestros grandes cocineros');
}


function resumenDePago(masa,queso) {
    
    let precioTotal = masa.getIva()+queso.getIva();

    alert('Los productos que te llegarán para hacer tu pizza son:\n-'+masa.nombre+': $'+masa.precio+' + IVA = '+masa.getIva()+'\n-'+queso.nombre+': $'+queso.precio+'+ IVA = $'+queso.getIva()+'\n-Salsa de Tomate de regalo\n\nTu precio Total a pagar con IVA es de: $'+(precioTotal));

    let pagoTotal = Number(prompt('Tu monto a pagar con IVA es de: $'+precioTotal+'\nCon cuánto vas a abonar?'));

    while (pagoTotal < precioTotal) {
        alert('El pago debe ser mayor al precio a abonar')
        pagoTotal = Number(prompt('Tu monto a pagar con IVA es de: $'+precioTotal+'\nCon cuánto vas a abonar?'));
    }

    alert('Tu vuelto es de: $'+(pagoTotal-precioTotal)+'\nMuchas Gracias por tu compra, que disfrutes tu pizza! ;)');

}

saludar();
let masaElegida = masas();
let quesoElegido = quesos();
salsaDeTomate();
resumenDePago(masaElegida,quesoElegido); 
