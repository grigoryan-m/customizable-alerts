# Customizable alert messages
This project is day #13 of <a href="https://github.com/grigoryan-m/100-day-javascript.git">100-day-javascript</a>!

Customizable alert and input windows!

<h3>Installation</h3>
Just download and link <i>customizable-alerts.js</i> and <i>customizable-alerts.css</i> files to your HTML.

<h3>Using</h3>
There are two functions for now: cAlert() and cInput().
Just use them in the code!
<h4>Params</h4>
    
    cAlert(title, text, <i>opacity</i>, <i>borderRadius</i>, <i>backgroundColor</i>);

    
  Italic params have default value: opacity = 0.8, borderRadius = 12, backgroundColor = lightblue.</li>

    cInput(title, placeholder, buttonText, <i>opacity</i>, <i>borderRadius</i>, <i>backgroundColor</i>, callback);
  

  Italic params have default value: opacity = 0.8, borderRadius = 12, backgroundColor = lightblue.


<b>Important!!!</b>

cInput uses callback, so here is the example of using this function:

```git
cInput("Enter a value:", "Placeholder", "Submit", undefined, undefined, undefined, (value) => {

  console.log(value);
  // value is the string that user typed in input field
  // Do whatever you want with your value here

});
```


Planning on adding CDN soon.

Also planning to add another alert functions, but don't know if i'll ever do this!

By the way, you can test this two functions on my github pages. <a href="https://grigoryan-m.github.io/customizable-alerts">Link</a>
