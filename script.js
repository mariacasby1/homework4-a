
var counter = 0;
$(document).ready(function () {


    $(myDiv).hide();

    $("#start").click(function () {
        $("#start").hide();
        $(myDiv).show(1000);
        $('#part2').removeClass('display');

        $("#myCounter").text(counter);
        myTimer();

    });

    $("li").mouseenter(function () {
        $(this).css("background-color", "yellow");
    });
    $("li").mouseleave(function () {
        $(this).css("background-color", "tan");
    });


    $("li").click(function () {

        var index = $("li").index(this);

        if (index == currentQuestion[4]) {
            $("h4").text("correct");
            $("#myCounter").text(++counter);
  
        } else {
            $("h4").text("wrong");
        }

    });


});
    var questions = new Array();
    questions[0] = new Array("Name the capital of Afghanistan", "Kabul", "Baku", "Tirana", 0);
    questions[1] = new Array("Name the capital of Poland", "Prague", "Warsaw", "Bucharest", 1);
    questions[2] = new Array("Name the capital of Belgium", "London", "Sofia", "Brussels", 2);
    questions[3] = new Array("Name the capital of Burkina Faso", "Gaborone", "Niamey", "Ouagadougou", 2);
    questions[4] = new Array("Name the capital of Pakistan", "Islamabad", "Kinshasa", "Manila", 0);
    questions[5] = new Array("Name the capital of Colombia", "Muscat", "Bogota", "Brussels", 1);
    questions[6] = new Array("Name the capital of Poland", "Prague", "Warsaw", "Bucharest", 1);
    questions[7] = new Array("Name the capital of Belgium", "London", "Sofia", "Brussels", 2);
    questions[8] = new Array("Name the capital of Burkina Faso", "Gaborone", "Niamey", "Ouagadougou", 2);
    questions[9] = new Array("Name the capital of Pakistan", "Islamabad", "Kinshasa", "Manila", 0);
    questions[10] = new Array("Name the capital of Colombia", "Muscat", "Bogota", "Brussels", 1);


    var myQ = document.createElement("p");
    var myDiv = document.createElement("div");
    var myOL = document.createElement("ol");
    var myLI1 = document.createElement("li");
    var myLI2 = document.createElement("li");
    var myLI3 = document.createElement("li");
    var currentQuestion = questions[0];
    myQ.textContent = currentQuestion[0];
    myLI1.textContent = currentQuestion[1];
    myLI2.textContent = currentQuestion[2];
    myLI3.textContent = currentQuestion[3];
    myOL.appendChild(myLI1);
    myOL.appendChild(myLI2);
    myOL.appendChild(myLI3);
    myDiv.appendChild(myQ);
    myDiv.appendChild(myOL);
    //$("#main").append(myDiv);
    document.getElementById("main").appendChild(myDiv);

    var i = 0;
    var nextQuestion = function () {

        i++;
        currentQuestion = questions[i];
        myQ.textContent = currentQuestion[0];
        myLI1.textContent = currentQuestion[1];
        myLI2.textContent = currentQuestion[2];
        myLI3.textContent = currentQuestion[3];
    }


var value;
var myName;

    var myTimer = function () {
        var counters = 30;

        setInterval(function () {
            counters--;
            if (counters >= 0) {
                span = document.getElementById("count");
                span.innerHTML = counters;
            }

            if (counters === 0) {

                clearInterval(counters);
                span.innerHTML = `Time is Over. Your score is ${counter}`
                $(myDiv).hide(1000);
                $('#part2').hide(1000);
                $('#part3').removeClass('nodisplay');
                $('#part3').addClass('display1');
                $('#result').text(counter);
                $("#nameButton").click(function () {
                    $("#scorewrap").removeClass('nodisplay');
                    value = $('input').val()
                    $("#displayname").text(value);
                
                    localStorage.setItem("counter", counter);
                    localStorage.setItem("name", value);
                   
                   });
               
            }

        }, 1000);

       
    };

    var lastscore = localStorage.getItem("counter", counter);
    var lastname = localStorage.getItem("name", value);
    $('.getname').text(lastname);
    $('.getscore').text(lastscore);
    console.log(lastscore  + lastname)





