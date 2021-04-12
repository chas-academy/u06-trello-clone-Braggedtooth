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
taskList = [];
tasks = $('.task');

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




