/* const listTitle = $('<li></li>').addClass('card-header').appendTo('#todoContainer');
const listContent = $('<li></li>').addClass('card-content').appendTo('#todoContainer');
const listFooter = $('<li></li>').addClass('card-footer').appendTo('#todoContainer');


 */
const newTableBtn = $('<button>').addClass('add-table-btn button is-success').text('+ table');
$('#table-container').append(newTableBtn);
$(newTableBtn).click(function () {
    newTable(listTable[0], 2),
        newTable(listTable[1], 2),
        newTable(listTable[2], 2)

}
)