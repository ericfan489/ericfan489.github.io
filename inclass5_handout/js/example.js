// ADD NEW ITEM TO END OF LIST
var list = document.querySelector('ul');
list.innerHTML += "<li>cream</li>";

// ADD NEW ITEM START OF LIST
list.innerHTML = "<li>kale</li>" + list.innerHTML;

// ADD A CLASS OF COOL TO ALL LIST ITEMS

var li = document.getElementsByTagName('li');
for(let i = 0; i < li.length; i ++){
    li[i].setAttribute('class', 'cool');
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var header = document.querySelector('h2');
header.textContent += " "+String(li.length);
