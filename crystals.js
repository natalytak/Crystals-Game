'use strict';

$(document).ready(function () {
    // get the container
    var $container = $('.container');
    $container.css('background', '#def4fa');

    var randomNumber;
    var arr = [];
    var score = 0;
    var wins = 0;
    var losses = 0;
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#random-number").text(randomNumber);
    $("#your-score").text(score);

    function getNumber(){
        var min = 1;
        var max = 12;
        while(arr.length < 4){
        var numbers = Math.floor(Math.random()* (max - min)) + min;
        if(arr.indexOf(numbers) === -1) arr.push(numbers);
        }
    };

    function reset() {
        score = 0;
        arr = [];
        $("#your-score").text(score);
        randomNumber = 19 + Math.floor(Math.random() * 100);
        $("#random-number").text(randomNumber);
        getNumber();
        console.log(randomNumber, arr);
 
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
        score += arr[0];
        $("#your-score").text(score);
        checkScore();
    });

    $("#image2").on("click", function () {
        score += arr[1];
        $("#your-score").text(score);
        checkScore();
    });

    $("#image3").on("click", function () {
        score += arr[2];
        $("#your-score").text(score);
        checkScore();
    });

    $("#image4").on("click", function () {
        score += arr[3];
        $("#your-score").text(score);
        checkScore();
    });


});