
function cAlert(title, text, opacity = 0.8, borderRadius = 12, backgroundColor = "lightblue"){
    removeAllAlerts();
    const alertElement = document.createElement("div")
    ,alertTitle = document.createElement("h4")
    ,alertText = document.createElement("p");

    alertElement.className = "window";
    alertElement.style.opacity = opacity;
    alertElement.style.borderRadius = borderRadius + "px";
    alertElement.style.backgroundColor = backgroundColor;
    alertElement.addEventListener("click", ()=>{
        alertElement.remove();
        return;
    })
    alertTitle.innerText = title;
    alertText.innerText = text;

    document.body.appendChild(alertElement);
    alertElement.appendChild(alertTitle);
    alertElement.appendChild(alertText);
}

function cInput(title, placeholder, buttonText, opacity = 0.8, borderRadius = 12, backgroundColor = "lightblue", callback){
    removeAllAlerts();
    const inputElement = document.createElement("div")
    ,inputTitle = document.createElement("h4")
    ,inputField = document.createElement("input")
    ,inputButton = document.createElement("button");

    inputElement.className = "window";
    inputField.className = "inputField";

    inputElement.style.opacity = opacity;
    inputElement.style.borderRadius = borderRadius + "px";
    inputElement.style.backgroundColor = backgroundColor;

    inputTitle.innerText = title;
    inputField.placeholder = placeholder;
    inputButton.innerText = buttonText;

    document.body.appendChild(inputElement);
    inputElement.appendChild(inputTitle);
    inputElement.appendChild(inputField);
    inputElement.appendChild(inputButton);

    inputButton.addEventListener("click", () => {
        const value = inputField.value;
        callback(value);
        // Optionally, remove the input element after getting the value
        document.body.removeChild(inputElement);
    });

}

window.cAlert = cAlert;
window.cInput = cInput;

function removeAllAlerts(){
    let alerts = document.getElementsByClassName("window");
    for(let i = 0; i < alerts.length; i++){
        alerts[i].remove();
    }
}
