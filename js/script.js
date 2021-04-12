$('.done').sortable({
    tolerance: "pointer",
    connectWith: ".sort-task",

})
$('.doing').sortable({
    tolerance: "pointer",
    connectWith: ".sort-task",

})
$('.todo').sortable({
    tolerance: "pointer",
    connectWith: ".sort-task",

})

/*  DIALOG */
let taskList = [];
let tasks = $('.task');
let taskId = 0;

let taskTitle;
let taskDesc;

function createTask(taskId, taskTitle, taskDesc) {
    const task = $('<li>').addClass('task').attr('id', 'task-${taskId}');
    const taskHeader = $('<h3>').addClass('card-header').val(taskTitle);
    const taskBody = $('p').addClass('card-body').val(taskDesc);
    $('.todo').append(task);
    $('task').append(taskHeader);
    $('task').append(taskBody);

}

$('.navbuttons').on('click', '.newTask', (taskId) => {

    console.log(taskId);
    taskTitle = $('#title').val;
    taskDesc = $('#desc').val;
    createTask(taskId, taskTitle, taskDesc);
})














/*
$("#dialog").dialog({

    autoOpen: false,
    draggable: false,
    modal: true,
    buttons: {
        close: function () {
            $(this).dialog("close");
        }
    },
    hide: {
        effect: "clip",
        duration: 350
    }
});
const tabs = $('#tabs')
tabs.tab();
$('#dialog').append(tabs);


$('.task').on('click', function () {

    el = $(this)
    console.log(el);
    $('#dialog').dialog("open");

});
 */






