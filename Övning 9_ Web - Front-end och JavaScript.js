for(let n = 0;n <= 100;n++){
    var output = "";
    if (n % 3 == 0)
      output += "Bish";
    if (n % 4 == 0)
      output += "Bosh";
    prompt(output || n);
  }