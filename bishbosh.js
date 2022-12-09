function returnText(){
    let userBishValue = document.getElementById("userInputBishValue").value;
    let userBoshValue = document.getElementById("userInputBoshValue").value;
    let userLoopValue = document.getElementById("userInputLoopValue").value;
    for(let n = 1;n <= userLoopValue;n++){
    var output = "";
    if (n % userBishValue == 0)
      output += "Bish";
    if (n % userBoshValue == 0)
      output += "Bosh";
    prompt(output || n);
  }
}