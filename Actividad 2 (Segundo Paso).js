var mes=prompt("Introduce un numero en el rango de 1 a 12");
    if (mes > 0 && mes <=12 ) {
        if (mes <3) {
        document.write("Es Invierno");
    } else if(mes>=12){
        document.write("Es Invierno");
    } else if (mes<=5){
        document.write("Es Primavera");
    } else if (mes<=8){
        document.write("Es Verano");
    } else if (mes<=11){
        document.write("Es Otoño");
    }
    } else {
        document.write("Por favor introduce un numero");
    }
    
    