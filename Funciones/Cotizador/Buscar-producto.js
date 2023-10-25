const buscarproducto = () =>{
    const tableNuevo = document.getElementById("tabla-producto-nuevo");
    const tableVariables = document.getElementById('tabla-variables-producto');
    const tablebuscar= document.getElementById("tabla-buscar-producto");
    

    var codigoproducto;

    var precio = 30000;
    var preciototal = 0;
    var costoposta = 371;
    var costoempaque = 350;
    var costocarne = document.getElementById("costocarne").innerHTML;
    var preciodescuento = 0;
    var costototal = 2208;
    var utilidad = 0;
    var utilidadtotal = 0;
    var margen = 0;
    var margentotal = 0;

    var productoselect =  document.getElementById("productoselect");
    var seleccion = productoselect.ATTRIBUTE_NODE;
    var producto = productoselect[seleccion];
    //var idseleccion = seleccion.ATTRIBUTE_NODE;

    var poste = document.getElementById("poste").value;
    var cantidad = document.getElementById("Cantidad").value;
    var descuento = document.getElementById("Descuento").value;
    var sacrificio = document.getElementById("coste-sacrificio").value;
    var costeposte = document.getElementById("coste-poste").value;
    var eficiencia = document.getElementById("eficiencia").value;

    if (eficiencia.length == 0){
        eficiencia = 0;
    }
    else{
        costocarne = costocarne *(1 + (eficiencia/100));
    };
    
    if (descuento.length == 0){
        descuento = 0;
    }

    if (costeposte == "si"){
        switch (poste){
            case "base1kg":
                costototal =  (costoposta*1) + (costoempaque*1) +costototal;
                break;
            
            case "base1lb":
                costototal =  (costoposta*2)  + (costoempaque*2) + costototal;
                break;

            case "base350gr":
                costototal = (costoposta*3) + (costoempaque*2) + costototal;
                break;
            
            case "bloque":
                costototal = (costoposta*0) + (costoempaque*2) + costototal;
                break;
        };
    };

    if (sacrificio == "si"){
        costototal = 1088 + costototal;
    };


    preciodescuento = precio - ((precio/100)*descuento);
    costototal = costocarne + costototal;
    preciototal = preciodescuento*cantidad;

    utilidad = preciodescuento - costocarne;
    margen = parseFloat((utilidad/preciodescuento)*100).toFixed(2);

    utilidadtotal = preciodescuento - costototal;
    margentotal = parseFloat((utilidadtotal/preciodescuento)*100).toFixed(2);

    precio = precio.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    preciodescuento = preciodescuento.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    costocarne = costocarne.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    costototal = costototal.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    utilidad = utilidad.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    utilidadtotal = utilidadtotal.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    preciototal = preciototal.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    tableNuevo.rows[1].innerHTML = "<td>"+codigoproducto+"</td><td>RES</td><td>"+producto+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td>"+
        descuento+"</td><td>"+preciodescuento+"</td><td>"+costocarne+"</td><td>"+costototal+"</td><td>"+utilidad+"</td><td>"+
        margen+"</td><td>"+utilidadtotal+"</td><td>"+margentotal+"</td><td>"+preciototal+"</td>";
    
    //tablebuscar.rows[1].cells[0].innerHTML = html;
};