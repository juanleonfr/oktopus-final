//uso los while principalmente para los menus donde quiero que el usuario coloque los input correspondientes.
//y no haga cosas raras cuando recibe como input algo inesperado

const productos = [
    {id: 1, nombre: "remera1", precio: 3300},
    {id: 2, nombre: "remera2", precio: 3300},
    {id: 3, nombre: "remera3", precio: 3300},
    {id: 4, nombre: "buzo1", precio: 6200},
    {id: 5, nombre: "buzo2", precio: 6200},
    {id: 6, nombre: "buzo3", precio: 6200},
    {id: 7, nombre: "gorrita1", precio: 1050},
    {id: 8, nombre: "gorrita2", precio: 1050}
];

let divProducto = document.getElementsByClassName(padre);

for (const producto of productos) {
    
    let contenerdor = document.createElement("div");
    contenerdor.classList.add('relItem2')

    contenerdor.innerHTML = `<a style="cursor: pointer" class="addCart"><img src="../assets/img/merch/${producto.nombre}.jpg" alt="${producto.nombre}"></a>
                            <p>AGREGAR AL CARRITO</p>
                            <h2 class="colorBlack">ID: ${producto.id}</h2>
                            <h3 class="colorBlack">Precio: $${producto.precio}</h3>`;

    padre.append(contenerdor)

};

let addCart = document.getElementsByClassName(addCart)
let csutomEvent = "click"
addCart.addEventListener(CustomEvent, respuestaClick)



let listaTotal = '';
// cambios proximos: let listaTotal = [];

let suma = 0;
let keep = true;

//objeto usado para la seleccion de indumentaria
let choice = {
    tipo: '',
    color: '',
    talle: '',
    precioUn: 0,
    cant: 0,
    precioCant: 0
}

//objetos para las distintas pilchas
const remera = {
    tipo: 'Remera',
    precio: 3300,
    color: ['rojo', 'blanco', 'azul', 'negro'],
    talle: ['S', 'M', 'L', 'XL']
}
const buzo = {
    tipo: 'Buzo',
    precio: 6200,
    color: ['rojo', 'blanco', 'azul', 'negro'],
    talle: ['S', 'M', 'L', 'XL']
}
const gorrita = {
    tipo: 'Gorrita',
    precio: 1050,
    color: ['rojo', 'blanco', 'azul', 'negro'],
    talle: 'único'
}

//funcion para tomar el total y dividirlo en cuotas, con sus recargos
function cuotas(subtotal) {
    keep = true;
    let ncuotas = 0;
    let cuotas3 = {
        totCtas: ((110 * suma) / 100).toFixed(2),
        valorCtas: (((110 * suma) / 100) / 3).toFixed(2)
    }
    let cuotas6 = {
        totCtas: ((120 * suma) / 100).toFixed(2),
        valorCtas: (((120 * suma) / 100) / 6).toFixed(2)
    }
    let cuotas12 = {
        totCtas: ((140 * suma) / 100).toFixed(2),
        valorCtas: (((140 * suma) / 100) / 12).toFixed(2)
    }
    while (keep) {
        ncuotas = prompt(`Escriba el número de cuotas en las que desea abonar: \n 3 cuotas de $${cuotas3.valorCtas} (total: $${cuotas3.totCtas}) \n 6 cuotas de $${cuotas6.valorCtas}  (total: $${cuotas6.totCtas}) \n 12 cuotas de $${cuotas12.valorCtas}  (total: $${cuotas12.totCtas})`)
        switch (ncuotas) {
            case ('3'):
                keep = false;
                alert('El total es $' + cuotas3.totCtas + ', a pagar en ' + ncuotas + ' cuotas de $' + cuotas3.valorCtas);
                break

            case ('6'):
                keep = false;
                alert('El total es $' + cuotas6.totCtas + ', a pagar en ' + ncuotas + ' cuotas de $' + cuotas6.valorCtas);
                break

            case ('12'):
                keep = false;
                alert('El total es $' + cuotas12.totCtas + ', a pagar en ' + ncuotas + ' cuotas de $' + cuotas12.valorCtas);
                break;
            default: break;
        }
        alert('Gracias por su compra! Será redirigido para abonar, y no olvide presionar el otro botoncito que no hace nada!')
    }
}

function elegir(pilcha) {
    choice.precioUn = pilcha.precio;
    choice.tipo = pilcha.tipo;
    keep = true;
    while (keep) {
        let colorChoice = prompt('Elija el color de el/la ' + pilcha.tipo + ': \n 1. Rojo \n 2. Blanco \n 3. Azul \n 4. Negro').toLowerCase();
        switch (colorChoice) {
            case ('1'):
            case ('rojo'):
            case ('roja'):
                choice.color = pilcha.color.slice(0, 1).toString();
                keep = false;
                break;
            case ('2'):
            case ('blanco'):
            case ('blanca'):
                choice.color = pilcha.color.slice(1, 2).toString();
                keep = false;
                break;
            case ('3'):
            case ('azul'):
                choice.color = pilcha.color.slice(2, 3).toString();
                keep = false;
                break;
            case ('4'):
            case ('negro'):
            case ('negra'):
                choice.color = pilcha.color.slice(3, 4).toString();
                keep = false;
                break;
            default: break;
        }
    }
    if (pilcha.tipo != gorrita.tipo) {
        keep = true;
        while (keep) {
            let talleChoice = prompt('Elija el talle de el/la ' + pilcha.tipo + ': \n 1. S \n 2. M \n 3. L \n 4. XL').toLowerCase();
            switch (talleChoice) {
                case ('1'):
                case ('s'):
                    keep = false;
                    choice.talle = pilcha.talle.slice(0, 1).toString();
                    break;
                case ('2'):
                case ('m'):
                    keep = false;
                    choice.talle = pilcha.talle.slice(1, 2).toString();
                    break;
                case ('3'):
                case ('l'):
                    keep = false;
                    choice.talle = pilcha.talle.slice(2, 3).toString();
                    break;
                case ('4'):
                case ('xl'):
                    keep = false;
                    choice.talle = pilcha.talle.slice(3, 4).toString();
                    break;
                default: break;
            }
        }
    }
    keep = true;
    while (keep) {
        let cantChoice = prompt('Escriba la cantidad de ' + pilcha.tipo + 's que desea adquirir');
        if (!isNaN(cantChoice)) {
            choice.cant = cantChoice;
            choice.precioCant = choice.precioUn * parseInt(cantChoice);
            keep = false;
        }
    }

    // cambios proximos: listaTotal.push({...choice})
    listaTotal = `${listaTotal} ${choice.tipo} de color ${choice.color}, en talle ${choice.talle} × ${choice.cant} unidades, precio unitario: $${choice.precioUn}, subtotal: $${choice.precioCant} \n`;
    suma += choice.precioCant;
}

// funcion principal, que contiene mas funciones, para modularidad
function listaDePilchas() {
    let option;
    let keepRun = true;
    keep = true;
    while (keepRun) {
        option = prompt(`Elija de la lista de artículos: \n 1. ${remera.tipo}: $${remera.precio} \n 2. ${buzo.tipo}: $${buzo.precio} \n 3. ${gorrita.tipo}: $${gorrita.precio} \n Escriba checkout para mostrar el total \n \n Escriba exit para salir.`).toLowerCase();
        keep = true;
        switch (option) {
            case ('1'):
            case ('remera'):
                elegir(remera);
                break;
            case ('2'):
            case ('buzo'):
                elegir(buzo);
                break;
            case ('3'):
            case ('gorrita'):
                elegir(gorrita);
                break;
            case ('checkout'):
                listaTotal = listaTotal + 'Total: $' + suma + '\n \n';
                keepRun = false;
                let keepPreCtas = true
                while (keepPreCtas) {
                    let ctasSiNo = prompt(listaTotal + '¿desea abonar en cuotas? \n Indique "sí" o "no"').toLowerCase();
                    switch (ctasSiNo) {
                        case ('si'):
                        case ('sí'):
                            keepPreCtas = false;
                            cuotas(suma);
                            break;
                        case ('no'):
                            keepPreCtas = false;
                            alert('El total es entonces $' + suma + '. Gracias por su compra, será redirigido para abonar, y no olvide presionar el otro botoncito que no hace nada!')
                            break;
                        default:
                            break;
                    }
                }
                break;

            case ('exit'):
                keepRun = false;
                break;
            default: break;

        }
    }
}