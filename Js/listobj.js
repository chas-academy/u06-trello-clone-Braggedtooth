const tableColors = [
    'gray',
    'red',
    'barry'


];
const listColors = [
    'blue',
    'green',
    'yellow',
    'green'

]

let listTable = [
    {

        title: 'Todo',
        color: tableColors[0],
        list: [
            {
                title: 'back',
                description: 'this isa',
                color: listColors[2],

            }
        ]
    },
    {

        title: 'Doing',
        color: tableColors[1],
        list: [
            {
                title: 'todoitem',
                description: 'this is a todo',
                color: listColors[0],

            }
        ]
    },
    {

        title: 'Done',
        color: tableColors[2],
        list: [
            {
                title: 'todoitem',
                description: 'this is a todo',
                color: listColors[3],

            },
            {
                title: 'todoitem 2',
                description: 'this is a todo2',
                color: listColors[3],

            }
        ]
    }];




function newList(list, id, tableId) {

    const lid = `list-${tableId}-${id}`;
    const listItem = $('<li>').addClass(`card table ${list.color}`).attr('id', `#${lid}`);
    const listHeader = $('<span>').addClass(`card-header`);
    const listTitle = $('<strong>').addClass('card-header-title').text(list.title);

    const listHeadericon = $('<span>').addClass(`icon`);
    const listIcon = $('<i>').addClass('delete');
    const listFooter = $('<span>').addClass('card-footer');
    const listContent = $('<article>').addClass('card-content')
    const listDesc = $('<div>').addClass('.content').text(list.description);
    const listTabs = $('<div>').attr('id', `${lid}-tabs`);

    listItem.append(listHeader);
    listHeader.append(listTitle);
    listItem.append(listContent);
    listHeader.append(listHeadericon);
    listHeadericon.append(listIcon);

    listContent.append(listDesc);
    listItem.append(listTabs);
    listItem.append(listFooter);
    sort();
    listItem.on('click', function () {
        const id = $(this).attr('id');
        $('#dialog').dialog({
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
        }

        )



    })

    return listItem;

}

function newTable(table, tableId) {
    const tableItem = $('<li>').addClass(`table card`).attr('id', `table-id-${tableId}`);
    const tableHeader = $('<h3>').addClass(`table-header card-header-title ${table.color}`).text(table.title);
    const tableList = $('<ul>').addClass('sort-list sort-connect card-content');

    const deleteTableBtn = $('<button>').addClass('delete-table-btn button is-danger').text('Delete table');
    const addTodo = $('<button>').addClass('add-todo-btn button is-warning').text('Add todo');

    $('#table-container').append(tableItem);
    tableItem.append(tableHeader);
    table.list.forEach((list, id) => {
        const tableItem = newList(list, id, tableId);
        tableList.append(tableItem);
    });

    tableItem.append(tableList);
    tableItem.append(addTodo);
    tableItem.append(deleteTableBtn);
    sort();

    return tableItem;
}





