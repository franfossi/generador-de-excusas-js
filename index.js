window.onload = () => {

    // let excuse = "Mi perro se comió mi tarea anoche!";

    // declarar variables arreglos con partes de la excusa

        var who = ["Mi perro", "El gato", "Mi hermana", "El niño", "Mi vecino", "El loro"];
        var what = ["se comió", "rompió", "me escondió", "me rayó", "borró", "manchó"];
        var when = ["anoche", "esta mañana", "hace 2 días", "hoy", "hace un rato", "a mediodía"];
    
    // seleccionar aleatoriamente elementos de cada arreglo

        var numberWho = Math.floor(who.length*Math.random());
        var numberWhat = Math.floor(what.length*Math.random());
        var numberWhen = Math.floor(when.length*Math.random());

    // asegurarse de que el número aleatorio sea menor o igual a la cantidad de elemento en cada arreglo
        
     
    // concatenar las partes de la excusa

  
        var newexcuse = `${who[numberWho]} ${what[numberWhat]} la tarea ${when[numberWhen]}.`;

    // cambiar el contenido del h1 con id excuse para incorporar la excusa creada
        
        console.log(newexcuse);
        document.querySelector("#newexcuse").innerHTML = newexcuse;

  //  console.log(excuse);
  //  document.querySelector("#excuse").innerHTML = excuse;

}