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
    color: tableColors[3],
    list: [
        {
            title: 'back',
            description: 'this isa',
            color: listColors[1],

        }
    ]
},



    ;
function newList(list, id, tableId) {

    const lid = `list-${id}`;
    const listItem = $('<li>').addClass(`card table ${list.color}`).attr('data-id', `#${lid}`);
    const listTitle = $('<strong>').text(table.title);
    const listContent = $('<article>').addClass('table-content')
    const listTabs = $('<div>').attr('id', `${lid}-tabs`);

    listItem.append(listTitle);
    listItem.append(listContent);
    listItem.append(listTabs);

    return newList;

}

function newTable(table, tableId) {
    const tableItem = $('<li>').addClass(`table`).attr('id', `table-id-${tableId}`);
    const tableHeader = $('<h3>').addClass(`table-header ${table.color}`).text(table.title);
    const tableList = $('<ul>').addClass('sort-table sort-connect');
    const newTableBtn = $('<button>').addClass('add-table-btn').text('+ table');
    const deleteTableBtn = $('<button>').addClass('delete-table-btn').text('Delete table');

    $('#table-container').append(tableItem);
    tableItem.append(tableHeader);
    table.list.forEach((table, id) => {
        const tableItem = newList(table, id, tableId);
        taskList.append(tableItem);
    });

    tableItem.append(tableList);
    tableItem.append(newTableBtn);
    tableItem.append(deleteTableBtn);

    return newTable;
}

newTable(listTable, 2);
console.log(listTable.title)


