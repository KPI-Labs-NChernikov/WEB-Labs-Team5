function add() {
    $.post("add.php", $("#add").serialize(), function(data) { 
        writeTask(data.id, data.name, data.description, data.time);
        $("#name").val("");
        $("#description").val("") }, "json");
    return false; 
}

function del(id) {
    $.post("del.php", $("#del-" + id).serialize(), function(data) { 
        delTask(data.id) }, "json")
    return false; 
}

$(document).ready(function(){ 
    $.ajax({     type: "GET", 
        url: "tasks.xml",      dataType: "xml",      success: function(xml) {
            writeTasks(xml);
        }
    }) 
}) 
   
let tasksIdTag = "#tasks";

function writeTasks(xml) {
    $(tasksIdTag).empty();
    $(xml).find("task").each(function() {
        let id = $(this).attr("id").toString();
        let name = $(this).find("name").first().text();
        let description = $(this).find("description").first().text();
        let time = $(this).find("time").first().text();
        writeTask(id, name, description, time);
    });
}

function writeTask(id, name, description, time) {
    let $taskElement = $("<div></div>",
    {class: "task",
     id: "task"+id});
    let $left = $("<div></div>",
    {class: "task-left"});
    let $right = $("<div></div>",
    {class: "task-right"});
    let $nameSpace = $("<h3></h3>");
    let $descriptionScape = $("<p></p>");
    let $timeSpace = $("<h3></h3>");
    let $buttons = $("<div></div>",
    {class: "task-buttons"});
    let $del = $("<button></button>",
    {class: "small-btn"});
    $del.append("Delete");
    let $delHiddenInput = $("<input></input>",
    {type: "hidden", value: id, name: "id"});
    let $delForm = $("<form></form>",
    {method: "post", onsubmit: "return del(" + id + ")", id: "del-"+id});
    $delForm.append($delHiddenInput);
    $delForm.append($del);
    $buttons.append($delForm);
    $nameSpace.append(name);
    $descriptionScape.append(description);
    $timeSpace.append(time);
    $right.append($buttons);
    $right.append($timeSpace);
    $left.append($nameSpace);
    $left.append($descriptionScape);
    $taskElement.append($left);
    $taskElement.append($right);

    let now = new Date();
    let alarmDate = new Date();
    alarmDate.setHours(time.substring(0, 2));
    alarmDate.setMinutes(time.substring(3));
    alarmDate.setSeconds(0);
    alarmDate.setMilliseconds(0);
    if (now <= alarmDate)
    {
        let diff = alarmDate - now;
        setTimeout(() => alert(name + " | " + time + "\n" + description), diff);
    }

    if ($(tasksIdTag).children().length == 0)
        $(tasksIdTag).append($taskElement);
    else {
        let existingId = findId(time);
        if (existingId != -1)
            $("#task"+existingId).before($taskElement);
        else
            $(tasksIdTag).append($taskElement);
    }
}

function findId(time) {
    let tasks = $(tasksIdTag).children();
    let id = tasks.eq(0).attr("id").substring(4);
    let tempTime;
    for (let i = 0; i < tasks.length; i++) {
        tempTime = tasks.eq(i).find(".task-right").find("h3").text();
        if (tempTime > time)
        {
            id = tasks.eq(i).attr("id").substring(4);
            break;
        }
        else if (i == tasks.length - 1) {
            id = -1;
        }
    }
    return id;
}

function delTask(id) {
    $("#task" + id).remove();
}