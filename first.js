$(document).ready(function() {
    $('img.thumbnail').click(function() {
        window.location.href = this.id + '.html';
    });
});