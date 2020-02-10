// console.log("hello world");


$(() => {

            /////////////////////////////////////////
            //// Start button created and tested ////
            /////////////////////////////////////////

    $('.button').on('click', (event) => {
        event.preventDefault()

        let userInput = $('input[type="text"]').val()
        let startButton = $(event.target).attr('id')
        // console.log(userInput)
        // console.log(startButton)
        // let start = () => {

        })

    ///////////////////////////////////////////////////////
    //// Make answers more forgiving - Doesn't work yet ///
    ///////////////////////////////////////////////////////
    //
    //     const formatResponse = (userInput) => {
    //         return userInput[0].toLowerCase()
    //     }
    //
    //     const greet = () => {
    //         alert('Hi!')
    //     }
    //
    //     const depart = () => {
    //         alert('Bye!')
    //     }
    //
    //     let answer = prompt('Are you (g)oing or (s)taying', 'Going or Staying?')
    //
    //     let softAnswer = formatResponse(userInput)
    //
    //     if (softAnswer === 'g') {
    //         greet()
    //     } else if (softAnswer === 's') {
    //         depart()
    //     }
    // })
            /////////////////////////////////////////
            ////////// Variables for Game ///////////
            /////////////////////////////////////////
    // let userInput =
    // let startButton = $(event.target).attr('id')
    // let link = 'https://opentdb.com/api.php?amount=1'

                    //////////////////////
                    /// API connected ////
                    //////////////////////

    // $.ajax({
    //     url: 'https://opentdb.com/api.php?amount=30',
    //     success: (data) => {
    //         console.log(data);
    //     },
    //     error: ()=>{
    //         console.log('bad request');
    //     }

                    /////////////////////////////
                    /// AJAX to retrieve data ///
                    /////////////////////////////

        // $.ajax({
        //     url: link,
        //     (data) => {
        //
        //     }
        // }).then(data) {
        //     const
        // }
        // })

                    //////////////////////////
                    /// Variables for Game ///
                    //////////////////////////

    //     const $body = $('body')
    //     let remaining = 60;
    //     let timerGo = setInterval(() => {
    //
    //     })
    // })

                /////////////////////////////////
                // function for game countdown //
                /////////////////////////////////

    // const $secondsTimer = $('#seconds-timer');
    // let secondsTimer = 60
    //
    // let gameTimer = setInterval(function() {
    //     secondsTimer--;
    //     if (secondsTimer <= 0) {
    //         clearInterval(gameTimer);
    //         $('#game-timer').html('<h2>Time!<h2>');
    //         return;
    //     } else {
    //         $('#countdown').text(secondsTimer);
    //         console.log("Game-timer -->" + secondsTimer);
    //     }
    // }, 1000);


// });
        /////////////////////////////////////////////////////
        ///// Variable for message when Time has elapsed ////
        /////////////////////////////////////////////////////

    // let timeUp = function() {
    //     alert('Time\'s Up!!!')
    // }
    // setTimeout(timeUp, 10000)

            ///////////////////////////////////////
            //// Opening Modal with Game Rules ////
            ///////////////////////////////////////

    // const $openBtn = $('#openModal');
    // const $modal = $('#modal');
    // const $closeBtn = $('#close');
    //
    // const openModal = () => {
    //     $modal.css('display', 'block');
    // }
    // const closeModal = () => {
    //     $modal.css('display','none');
    // }
    //
    // $openBtn.on('click', openModal);
    // $closeBtn.on('click', closeModal);
});
