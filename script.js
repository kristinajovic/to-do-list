var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function addTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addTaskInput").value;
    var inputText = document.createTextNode(inputValue);
    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id";

    li.appendChild(checkbox);
    li.appendChild(inputText);
    if (inputValue === '') {
      alert("Insert task!");
    } else {
      document.getElementById("taskUL").appendChild(li);
    }
    document.getElementById("addTaskInput").value = "";


}