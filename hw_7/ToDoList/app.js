let input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

function addChild() {
    let data = document.getElementById('input').value;
    document.getElementById('input').value = '';
    let list = document.createElement("LI");
    let div = document.createElement("div");
    div.className = "form-check";
    let label = document.createElement("label");
    label.className = "form-check-label";
    let input = document.createElement("input");
    input.className = "checkbox";
    input.type = "checkbox";
    input.checked = false;
    let i = document.createElement('i');
    i.className = "input-helper";
    let icon = document.createElement('i');
    icon.className = "remove mdi mdi-close-circle-outline";
    label.innerHTML = data;

    label.appendChild(input);
    label.appendChild(i);
    div.appendChild(label);
    list.appendChild(div);
    list.appendChild(icon);

    input.onclick = checked;
    icon.onclick = remove;
    document.getElementById("myList").appendChild(list);

}

function remove(e) {
    let li = e.target.closest('li');
    document.getElementById("myList").removeChild(li);
}

function checked(e) {
    let li = e.target.closest('li');
    if (li.className === "completed") {
        li.className = "";
    } else {
        li.className = "completed";
    }
}