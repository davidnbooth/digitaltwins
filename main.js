function togglecheck(entity) {
    $(entity).closest('tr').toggleClass("highlight", entity.checked);
    $(entity).closest('tr').prev('tr').toggleClass("highlight", entity.checked);
}

$('table input[type=checkbox]').click(function () {
    togglecheck(this)
});

function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked !== source.checked) {
            checkboxes[i].checked = source.checked;
            togglecheck(checkboxes[i])
        }
    }
}

const downloadViaBrowser = url => {
    window.open(url, '_blank');
}
