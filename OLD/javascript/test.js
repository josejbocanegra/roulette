
console.log('resolve')    
} 
else {
    reject(req.statusText);
    console.log('reject')
}};
req.send();});
return promesa2;
    } function espera() {
    return new Promise(resolve => { setTimeout(() => { resolve('resolved'); }, 100); });
}
const result = await espera(); pr2('https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json').then(result1 => { detalleProducto = JSON.parse(result1); detalleProducto.forEach(element => { if (element.idproducto == max.idproducto) { nombre = element.nombreProducto; } })  console.log("Nombre: " + nombre + " Cantidad: " + max.cantidad); });}

