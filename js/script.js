
/*  GLOBAL VARIABLES */
let taskList = [];
let tasks = $('.task');
let taskId = 0;
let taskTitle;
let taskDesc;
let clickedItemId;
let title;
let desc;
const dialog = $('#dialog');

/* FUNCTIONS TO BUILD NEW TASKS */
function createTask(taskId, taskTitle, taskDesc) {
    const tId = `task-${taskId}`
    const task = $('<li>').addClass('task').attr('id', tId);
    const taskHeader = $('<h3>').addClass('card-header').text(taskTitle);
    const taskBody = $('<p>').addClass('card-body').text(taskDesc);
    const deadLine = $('<span>').addClass('chosenDeadline');
    $('.todo').prepend(task);
    task.append(taskHeader);
    task.append(deadLine);
    task.append(taskBody);
    tasks = $('.task');
    taskEvent();

}




/* JQUERRY UI [TABS, DATEPICKER, SORTABLE] */
$('.sort-task').sortable({
    tolerance: "pointer",
    connectWith: ".sort-task",
    placeholder: "cardPlaceholder"

});
$('#tabs').tabs();
$('#datepicker').datepicker({
    minDate: 0,
    dateFormat: "yy-mm-dd",
    onSelect: function () {
        const date = $('#datepicker').val();
        const chosenDate = $(clickedItemId).find('.chosenDeadline');
        chosenDate.html(date);



    }
});

/* FUNCTION TO SET RANDOM ID TO NEW TODODS */
function getId() {
    tasks.each(function () {
        return taskId++;
    })
}

/* RENDERS NEW TODO */
$('.navbuttons').on('click', '.newTask', function () {
    getId();
    taskTitle = $('#title').val();
    taskDesc = $('#desc').val();
    createTask(taskId, taskTitle, taskDesc);
    console.log(taskTitle, taskDesc)
});




/* FUNCTION TO UPDATE TODOS ADDING DIALOG  */
function taskEvent() {
    tasks.on('click', function () {
        title = $(this).find('h3').html();
        desc = $(this).find('p').text();
        clickedItemId = '#' + $(this).attr('id');
        dialog.dialog('open')
        setNewValues();
    });
}


/* DIALOG MODAL */
dialog.dialog({
    modal: true,
    width: 500,
    height: 350,
    title: 'Edit Todo',

    resizeble: false,
    draggable: false,
    autoOpen: false,
    show: {
        effect: "slide",
        duration: 300
    },
    hide: {
        effect: "fade",
        duration: 400
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
            $(this).dialog("close");
        },
        'Delete': function () {
            $(clickedItemId).remove();
            $(this).dialog("close");

        }
    }

});

/* FUNCTION TO UPDATE CHANGES TO TODO ITEMS  */
async function setNewValues() {
    const toChangeTitle = await $(clickedItemId).find('h3');
    const toChangeDesc = await $(clickedItemId).find('p');
    toChangeTitle.html(title);
    toChangeDesc.text(desc);

};

/*  COLORS */
const color = [
    'red',
    'green',
    'blue',
    'cyan',]
const colorgenerator = () => {
    $('span.red').on('click', () => {
        $(clickedItemId).removeClass(color).toggleClass(color[0]);
    })
    $('span.green').on('click', () => {
        $(clickedItemId).removeClass(color).toggleClass(color[1])
    })
    $('span.blue').on('click', () => {
        $(clickedItemId).removeClass(color).toggleClass(color[2])
    })
    $('span.cyan').on('click', () => {
        $(clickedItemId).removeClass(color).toggleClass(color[3])
    })

};

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