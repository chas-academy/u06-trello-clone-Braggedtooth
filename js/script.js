$('.done').sortable({
    tolerance: "pointer",
    connectWith: ".sort-task",
    placeholder: "ui-state-highlight"

})
$('.doing').sortable({
    tolerance: "pointer",
    connectWith: ".sort-task",
    placeholder: "ui-state-highlight"

})
$('.todo').sortable({
    tolerance: "pointer",
    connectWith: ".sort-task",
    placeholder: "ui-state-highlight"

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
    $('.todo').prepend(task);
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
let title;
let desc;

function taskEvent() {
    tasks.on('click', function () {
        title = $(this).find('h3').html();
        desc = $(this).find('p').text();
        //console.log(title, '', desc);

        clickedItemId = '#' + $(this).attr('id');
        dialog.dialog('open')
        console.log(`${clickedItemId}`);
        setNewValues();
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
            setNewValues();

        }
    }
});

async function setNewValues() {
    const toChangeTitle = await $(clickedItemId).find('h3');
    const toChangeDesc = await $(clickedItemId).find('p');
    toChangeTitle.html(title);
    toChangeDesc.text(desc);

}

const color = [
    'red',
    'green',
    'blue',
    'cyan',]



const colorgenerator = () => {
    $('span.red').on('click', () => {
        $(clickedItemId).addClass(color[0])
    })
    $('span.green').on('click', () => {
        $(clickedItemId).addClass(color[1])
    })
    $('span.blue').on('click', () => {
        $(clickedItemId).addClass(color[2])
    })
    $('span.cyan').on('click', () => {
        $(clickedItemId).addClass(color[3])
    })

}

colorgenerator();




















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
setNewValues();