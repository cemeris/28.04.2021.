let count = 0;
$('#app a').click(function () {
    if (count % 2 == 0) {
        $(this).text('x');
    }
    else {
        $(this).text('o');
    }
    count++;
});