const productos = [
    {nombre:  "4910", precio: 50},
    { nombre: "4950", precio: 20},
    { nombre: "9834", precio: 510},
    { nombre: "4031", precio: 540},
];
let carrito = []

let seleccion = prompt("desea comprar algo si o no?");

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresá si o no")
    seleccion = prompt ("Hola desea comprar algo si o no")
}
if(seleccion =="si"){
    alert(" Elija el producto")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "U$");
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("lo esperamos en otro momento")
}

while (seleccion != "no"){
    let producto = prompt( "agrega un producto al carrito")
    let precio = 0

    if (producto === "4910" || producto === "4950" || producto === "9834" || producto == "4031"){
        switch (producto) {
            case "4910":
                precio = 50;
                break;
            case "4950":
                precio = 20;
                break;
            case "9834":
                precio = 510;
                break;
            case "4031":
                    precio = 540;
                    break;
              default:
                break;
        }
    let unidades = Number(prompt(" cuantas unidades quiere llevar?"))
    carrito.push({ producto, unidades, precio})
    console. log(carrito)  
    } else{
        alert(" no disponemos ese producto")
    }
    seleccion = prompt( "desea seguir comprando?")
    while (seleccion === "no"){
        alert("gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }
} 