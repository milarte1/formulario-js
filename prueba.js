function validateForm() {
    let nombre = document.forms["myForm"]["nombre"].value;
    let apellidos = document.forms["myForm"]["apellidos"].value;
    
    if (nombre =="") {
      alert("Name must be filled out");
      return false;
  
    }

    if(apellidos==""){
      alert("surname must be filled out");
      return false;
    }
    let confirm = document.forms["myForm"]["confirm"].value;
    let password = document.forms["myForm"]["password"].value;
    if (password != confirm){
      alert("contraseña incorrecta");
      return false;
    
    }
    if(document.getElementById('casilla').checked == true){
      alert("cleans the sea");
      return false;

  } 

  

}
