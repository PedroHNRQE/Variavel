

function armValor()
{
    var userInput = document.getElementById("userInput").value;
    document.getElementById("valorInserido").innerText = "O valor inserido e: " + userInput;
    alert(`O valor inserido é: ${userInput}`)
}