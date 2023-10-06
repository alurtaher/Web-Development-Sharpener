 // Using parentElement and insertBefore to add "Hello world" before "Item Lister"
 var headerTitle = document.getElementById("header-title");
 var helloText = document.createTextNode("Hello world ");
 headerTitle.parentElement.insertBefore(helloText, headerTitle);

 // Using lastElementChild and appendChild to add "Hello world" before "Item 1"
 var itemsList = document.getElementById("items");
 var item1 = itemsList.lastElementChild; // Select the last <li> element
 var helloText2 = document.createTextNode("Hello world ");
 itemsList.insertBefore(helloText2, item1);

 // Alternative way to add "Hello world" before "Item 1" using firstElementChild and insertBefore
 var item2 = itemsList.firstElementChild; // Select the first <li> element
 var helloText3 = document.createTextNode("Hello world ");
 itemsList.insertBefore(helloText3, item2);