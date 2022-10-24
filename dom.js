// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);
////console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
// document.all[10].textXontent = "Hello";
//console.log(document.forms);
//console.log(document.links;
//console.log(documnet.images);

// GETELEMENTBYID //
//console.log(document.getElementById("header-Title"));
//var headerTitle = document.getElementById("header-Title");
//var header = document.getElementById("main-header");
console.log(headerTitle);
//headerTitle.textContent = "Hello";
//headerTitle.innerText = "Goodbye";
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = "<h3>Hello</h3>";
//header.style.borderBottom = "solid 3px #000"

// GETELEMENTBYCLASSNAME //
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(item[1]);
item[1].textContent = "Hello 2";
item[1].style.fontweight = "bolo";
items[1].style.backgroundColor = "green";

//items.style.backgroundColor = "#f4f4f4";

for(var i=0; i<items.length; i++){
  items[i].style.backgroundColor = "#f4f4f4";
}
