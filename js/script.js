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
const dialog = $('#dialog');

function createTask(taskId, taskTitle, taskDesc) {
    const tId = `task-${taskId}`
    const task = $('<li>').addClass('task').attr('id', tId);
    const taskHeader = $('<h3>').addClass('card-header').text(taskTitle);
    const taskBody = $('<p>').addClass('card-body').text(taskDesc);
    $('.todo').append(task);
    task.append(taskHeader);
    task.append(taskBody);
    tasks = $('.task');
    taskEvent();

}






$('#tabs').tabs();

function getId() {
    tasks.each(function () {
        return taskId++;
    })
}


$('.navbuttons').on('click', '.newTask', function () {
    getId();
    taskTitle = $('#title').val();
    taskDesc = $('#desc').val();
    createTask(taskId, taskTitle, taskDesc);
    console.log(taskTitle, taskDesc)
});



let clickedItemId;
function taskEvent() {
    tasks.on('click', function () {
        title = $(this).find('h3').html();
        desc = $(this).find('p').text();
        console.table(title, '', desc);
        dialog.dialog('open')
        clickedItemId = $(this).attr('id')

    });
}



dialog.dialog({
    modal: true,
    width: 500,
    height: 350,
    title: 'Edit Todo',

    resizeble: false,
    draggable: false,
    autoOpen: false,
    show: {
        effect: "fade",
        duration: 100
    },
    hide: {
        effect: "fade",
        duration: 100
    },
    open: function () {
        $('#taskTitle').val(title);
        $('#taskDesc').val(desc);
    },
    buttons: {
        'Save': function () {
            title = $('#taskTitle').val();
            desc = $('#taskDesc').val();
            $('.card-header').val(title);
            setNewValues();
        }
    }
});

function setNewValues() {
    const newValueId = '#' + clickedItemId;
    changingTitle = $(newValueId).find('h3')
    changingDesc = $(newValueId).find('p')

    $(changingTitle).val(title);
    $(changingDesc).val(desc);
}














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
taskEvent();