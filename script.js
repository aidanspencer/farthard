$(document).ready(function(){
    var cursors = ["url(cursors/dad.cur), auto;"];                
    $('.demo').each(function() {
        var rand = Math.floor(Math.random()*cursors.length);
        $(this).css("cursor", cursors[rand]);
    });
});