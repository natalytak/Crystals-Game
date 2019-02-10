'use strict';

$(document).ready(function () {
    // get the container
    var $container = $('.container');
    $container.css('background', '#def4fa');

    var randomNumber;
    var number1;
    var number2;
    var number3;
    var number4;
    var score = 0;
    var wins = 0;
    var losses = 0;
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#random-number").text(randomNumber);
    $("#your-score").text(score);



    function reset() {
        score = 0;
        $("#your-score").text(score);
        randomNumber = 19 + Math.floor(Math.random() * 100);
        $("#random-number").text(randomNumber);
        number1 = 1 + Math.floor(Math.random() * 12);
        number2 = 1 + Math.floor(Math.random() * 12);
        number3 = 1 + Math.floor(Math.random() * 12);
        number4 = 1 + Math.floor(Math.random() * 12);
        console.log(randomNumber, number1, number2, number3, number4);
 
    };
    reset();


    function checkScore() {
        if (randomNumber === score) {
            wins++;
            $("#wins").text(wins);
            $("#message").text("YOU WON!");
            reset();
        } else if (randomNumber < score) {
            losses++;
            $("#losses").text(losses);
            $("#message").text("YOU LOST");
            reset();
        } else {
            $("#message").empty();
        }

    };


    $("#image1").on("click", function () {
        score += number1;
        $("#your-score").text(score);
        checkScore();
    });

    $("#image2").on("click", function () {
        score += number2;
        $("#your-score").text(score);
        checkScore();
    });

    $("#image3").on("click", function () {
        score += number3;
        $("#your-score").text(score);
        checkScore();
    });

    $("#image4").on("click", function () {
        score += number4;
        $("#your-score").text(score);
        checkScore();
    });


});