var tasks = [];

var editIndex = null;

var input = document.getElementById("input");
var addBtn = document.getElementById("addBtn");
var clearBtn = document.getElementById("clearBtn");
var list = document.getElementById("list");

// addBtn.addEventListener("click" , function() {
function addTask() {

    if (addBtn.textContent != "Add") {
        addBtn.textContent = "Add";
    }

    var inputTxt = input.value.trim();

    if (inputTxt == "") {
        return;
    }

    if (editIndex != null) {
        tasks[editIndex] = inputTxt;
        editIndex = null;
    } else {
        tasks.push(inputTxt);
    }

    input.value = "";

    showList()
}
// });





function showList() {

    list.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {

        var li = document.createElement("li");

        li.innerHTML = tasks[i] + '<button class="editBtn" onClick="editLi(' + i + ')">Edit</button><button class="deleteBtn" onClick="deleteLi(' + i + ')">Delete</button>';

        list.appendChild(li);
    }
}





function editLi(listNum) {
    addBtn.textContent = "Save";
    clearBtn.textContent = "Cancel";
    input.value = tasks[listNum];

    editIndex = listNum;
}





function deleteLi(listNum) {

    tasks.splice(listNum, 1);

    showList();
}





// function clearBtn() {
clearBtn.addEventListener("click", function () {

    if (clearBtn.textContent = "Cancel") {
        clearBtn.textContent = "Clear All";
        addBtn.textContent = "Add";
        input.value = "";
        return;
    }

    input.value = "";
    list.innerHTML = "";
    tasks = [];
});






window.onload = function () {

    addBtn.addEventListener("click", function () {
        addTask();
    });

    input.addEventListener('keydown', function (e) {
        if (!e) {
            e = window.event;
        }

        var key = e.keyCode || e.which;

        if (key === 13) { // enter
            addTask();
        }

    });

    // showList();
}