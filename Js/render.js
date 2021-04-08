/* const listTitle = $('<li></li>').addClass('card-header').appendTo('#todoContainer');
const listContent = $('<li></li>').addClass('card-content').appendTo('#todoContainer');
const listFooter = $('<li></li>').addClass('card-footer').appendTo('#todoContainer');


 */


const newTableBtn = $('<button>').addClass('add-table-btn button is-success').text('+ table');
$('#table-container').append(newTableBtn);
$(newTableBtn).click(function () {
    for (let i = 0; i < listTable.length; i++) {

        wich = Math.floor(Math.random(i) * listTable.length)
        console.log(wich)
        return newTable(listTable[wich], wich)

    }
    taskDialog();


}
);
const sort = () => {
    $('.sort-table, .sort-list').sortable({
        tolerance: "pointer",
        connectWith: ".sort-connect",

    })
};
$('.sort-list').click(function () {
    console.log(10)


});
/* $('#table-container').on('click', 'button.delete-table-btn', e => {
    const accept = confirm('Are you sure you want to delete the table and all tasks in it? This can not be undone.');


    if (accept) {
        const uid = $(e).attr('id');
        const element = e.target.closest('.list');


        $(e).remove();


    }
}); */
/* Selectors */

const taskDialog = () => {
    $(".card-content").dialog({
        autoOpen: false,
        draggable: false,
        modal: true,
        buttons: {
            close: function () {
                $(this).dialog("close");
            },

            delete: function () {
                deleteTask(this);
            }
        },
        hide: {
            effect: "clip",
            duration: 350
        }
    });
}

/* $('.delete-table-btn').click(() => {
    (document.querySelectorAll('.list .delete') || []).forEach(($delete) => {
        const $list = $delete.parentNode;


        $delete.addEventListener('click', () => {
            $list.parentNode.remove($list);


        });
    });
}); */


