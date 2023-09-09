function onAlertButtonClick(){
    cAlert("My first customizable alert window!",
               "Hey, this is my first customizable alert window!!! I am so excited!Hey, this is my first customizable alert window!!! I am so excited!Hey, this is my first customizable alert window!!! I am so excited!",
                0.8, 50, "lightcoral");
}
function onInputButtonClick(){
    cInput("Enter a value:", "Placeholder", "Submit", undefined, undefined, undefined, (value) => {
        console.log(value);
    });
}