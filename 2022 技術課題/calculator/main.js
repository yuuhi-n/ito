alert("Made by Nakashiro")
var display = document.getElementById("output");
function set(nums) {
    display.textContent += nums.textContent;
}
function calc() {
    display.textContent = new Function("return " + display.textContent)();
}
function reset() {
    display.textContent = "";
}