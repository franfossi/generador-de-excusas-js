window.onload = () => {

    // let excuse = "Mi perro se comió mi tarea anoche!";

    // declarar variables arreglos con partes de la excusa

        var who = ["Mi perro", "El gato", "Mi hermana", "El niño", "Mi vecino", "El loro"];
        var what = ["se comió", "rompió", "me escondió", "me rayó", "borró", "manchó"];
        var when = ["anoche", "esta mañana", "hace 2 días", "hoy", "hace un rato", "a mediodía"];
    
    // seleccionar aleatoriamente elementos de cada arreglo

        var numberwho = Math.floor(10*Math.random());
        var numberwhat = Math.floor(10*Math.random());
        var numberwhen = Math.floor(10*Math.random());

    // asegurarse de que el número aleatorio sea menor o igual a la cantidad de elemento en cada arreglo
        
        while (numberwho > who.length - 1) {
            numberwho = Math.floor(10*Math.random());
        }
        while (numberwhat > what.length - 1) {
            numberwhat = Math.floor(10*Math.random());
        }
        while (numberwhen > when.length - 1) {
            numberwhen = Math.floor(10*Math.random());
        }

    // concatenar las partes de la excusa

        let newexcuse = who[numberwho] + " " + what[numberwhat] + " " + "la tarea " + when[numberwhen];

    // cambiar el contenido del h1 con id excuse para incorporar la excusa creada
        
        console.log(newexcuse);
        document.querySelector("#newexcuse").innerHTML = newexcuse;

  //  console.log(excuse);
  //  document.querySelector("#excuse").innerHTML = excuse;

}