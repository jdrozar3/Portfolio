$(document).ready(() => {
    $('.hide').fadeIn(2000).removeClass();




    $('#lab').on("click", () => {
        $('body').css('background-image', 'url("./Imgs/art2.png")');



    });
    $('#lab').on("dblclick", () => {
        $('body').css('background-image', 'url("./Imgs/artnew.png")');



    });
});
