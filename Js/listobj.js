const tableColors = [
    'gray',
    'red',
    'black'


];
const listColors = [
    'blue',
    'green',
    'yellow',
    'green'

]

let listTable =
{

    title: 'yes',
    color: 'gray',
    list: [
        {
            title: 'back',
            description: 'this isa',
            color: 'blue',

        }
    ]
};




function newList(list, id, tableId) {

    const lid = `list-${id}-${tableId}`;
    const listItem = $('<li>').addClass(`card table ${list.color}`).attr('data-id', `#${lid}`);
    const listHeader = $('<span>').addClass(`card-header`);
    const listTitle = $('<strong>').addClass('card-header-title').text(list.title);
    const listHeaderbtn = $('<button>').addClass(`card-header-icon button is-danger`);
    const listHeadericon = $('<span>').addClass(`icon`);
    const listIcon = $('<i>').addClass('fas fa-times');
    const listFooter = $('<span>').addClass('card-footer');
    const listContent = $('<article>').addClass('card-content')
    const listDesc = $('<div>').addClass('.content').text(list.description);
    const listTabs = $('<div>').attr('id', `${lid}-tabs`);

    listItem.append(listHeader);
    listHeader.append(listTitle);
    listItem.append(listContent);
    listHeader.append(listHeadericon);
    listHeadericon.append(listHeaderbtn);
    listHeaderbtn.append(listIcon);
    listContent.append(listDesc);
    listItem.append(listTabs);
    listItem.append(listFooter)

    return listItem;

}

function newTable(table, tableId) {
    const tableItem = $('<li>').addClass(`table card`).attr('id', `table-id-${tableId}`);
    const tableHeader = $('<h3>').addClass(`table-header card-header-title ${table.color}`).text(table.title);
    const tableList = $('<ul>').addClass('sort-table sort-connect card-content');
    const newTableBtn = $('<button>').addClass('add-table-btn button is-success').text('+ table');
    const deleteTableBtn = $('<button>').addClass('delete-table-btn button is-danger').text('Delete table');

    $('#table-container').append(tableItem);
    tableItem.append(tableHeader);
    table.list.forEach((list, id) => {
        const tableItem = newList(list, id, tableId);
        tableList.append(tableItem);
    });

    tableItem.append(tableList);
    tableItem.append(newTableBtn);
    tableItem.append(deleteTableBtn);

    return tableItem;
}

newTable(listTable, 2);
console.log(listTable.title)


