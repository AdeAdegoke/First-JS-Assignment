// Convert weight from kg to pounds (1 kg = 2.20462 pounds)
function convertWeightToPounds(name, weightInKg) {
    const weightInPounds = weightInKg * 2.20462; 
    return name + " weighs " + weightInPounds.toFixed(2) + " pounds.";
  }

  // Prompt the user for name and weight in kg
  const userName = prompt("Enter your fullname:");
  const weightInKg = parseFloat(prompt("Enter your weight in kilograms:"));
  
  // Check if weightInKg is a valid number
  if (!isNaN(weightInKg)) {
    // Call the function and display the result using alert
    const result = convertWeightToPounds(userName, weightInKg);
    alert(result);
  } else {
    alert("Invalid input. Please enter a valid weight in kilograms.");
  }