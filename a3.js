// Selecting necessary elements
const celsiusField = document.querySelector("#answer");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// Function to convert temperature
function convertTemperature() {
  // Get the input value and convert it to a number
  let inputValue = parseFloat(degree.value);

  // Check the selected temperature type and perform the conversion
  if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    const FahrenheitToKelvin = FahrenheitToCelsius + 273.15;
    celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C & ${FahrenheitToKelvin.toFixed(3)} &deg;K`;
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    const KelvinToFahrenheit = KelvinToCelsius * (9 / 5) + 32;
    celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;C & ${KelvinToFahrenheit.toFixed(3)} &deg;F`;
  } else if (tempType.value === "celsius") {
    const CelsiusToFahrenheit = inputValue * (9 / 5) + 32;
    const CelsiusToKelvin = inputValue + 273.15;
    celsiusField.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;F & ${CelsiusToKelvin.toFixed(3)} &deg;K`;
  }
}

// Event listener for the convert button
convertBtn.addEventListener("click", () => {
  // Call the function to convert temperature
  convertTemperature();
});
