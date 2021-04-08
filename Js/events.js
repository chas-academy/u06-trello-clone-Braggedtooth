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