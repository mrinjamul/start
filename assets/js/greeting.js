// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

// Here you can change your name
const name = CONFIG.name;

// Here you can change your greetings
const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

// greet refresh
const greetInterval = 1 * 60 * 1000;

greet();
setInterval(greet, greetInterval);

function greet() {
  // Get the hour
  const today = new Date();
  const hour = today.getHours();
  // Define the hours of the greetings
  if (hour >= 23 || hour < 5) {
    document.getElementById("greetings").innerText = gree1 + name;
  } else if (hour >= 5 && hour < 12) {
    document.getElementById("greetings").innerText = gree2 + name;
  } else if (hour >= 12 && hour < 17) {
    document.getElementById("greetings").innerText = gree3 + name;
  } else if (hour >= 17 && hour < 24) {
    document.getElementById("greetings").innerText = gree4 + name;
  }
}
