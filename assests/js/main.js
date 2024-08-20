$(document).ready(function () {
    $('#toggleSidebar').click(function () {
        $('#sidebar').toggleClass('visible');
        $('#main-content').toggleClass('shifted');
    });
});

