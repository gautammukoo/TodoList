// Create a "close" button and append it to each list item
var myTodo = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myTodo.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");// To display cross sign
  span.className = "close";
  span.appendChild(txt);
  myTodo[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var checkVal = inputValue.split(" ").map(val => {
      return val.charAt(0).toUpperCase() + val.slice(1)
  })
  console.log(checkVal)
  var t = document.createTextNode(checkVal.join(" "));
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please add Value");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create a new list item when clicking on the "Enter" button from Keyboard
var myInput = document.getElementById("myInput");
myInput.addEventListener("keydown", function (e) {
    if(e.code === "Enter") {
        newElement();
    }
})