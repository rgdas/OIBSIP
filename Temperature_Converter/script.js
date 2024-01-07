function convert() {
    const degrees = parseFloat(document.getElementById("degrees").value);
    const type = document.getElementById("type").value;
  
    let result;
  
    if (type === "fahrenheit") {
      result = (degrees - 32) * 5/9;
      result = result.toFixed(4); // Display result with 4 decimal places
      document.getElementById("result").textContent = result + " °C";
    } else if (type === "celsius") {
      result = (degrees * 9/5) + 32;
      result = result.toFixed(4);
      document.getElementById("result").textContent = result + " °F";
    }
  }