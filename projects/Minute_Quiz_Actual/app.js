// console.log($);
    // const obj = {
    //     url: 'https://opentdb.com/api.php?amount=1',
    //     success: (data) =>{
    //         console.log(data);
    //     },
    //     error: () => {
    //         console.log('bad request');
    //     }
    // }

$(( ) => {
//         $.ajax({
//             url: 'https://opentdb.com/api.php?amount=1'
//             // data: {
//             //     "$limit": 1
//             // }
//         }).then((data) => {

                /////////////////////////////
                //// Append attempts ////////
                /////////////////////////////


//             data.Search.forEach((el)=> {
//                 const $questions =$('.questions')
//                 const $div = $(`<div><span>${el.Category}</span><span>${el.Type}</span><span>${el.Difficulty}</span><span>${el.Question}{/span}<br/><hr></div>`);
//                 $questions.append($div)
//             })
//         },
//             // console.log(data);


                // $('#category').html(data.Category);
                // $('#type').html(data.Type);
                // $('#difficulty').html(data.Difficulty);
                // $('#question').html(data.Question);
//             }),
        //     () =>{
        //         console.log('bad');
        //     }
        // );
                    /////////////////////////////////////////
                    //// Start button created and tested ////
                    /////////////////////////////////////////
        //
            const buttonClick = $('.button').on('click', (event) => {
                event.preventDefault()
            //
                const userInput = $('input[type="text"]').val()
                let startButton = $(event.target).attr('id')

                    /////////////////////////////
                    /// AJAX to retrieve data ///
                    /////////////////////////////

                $.ajax({
                    url: 'https://opentdb.com/api.php?amount=1',
                    success: (data) => {


                    // + buttonClick
                    // }).then((data) => {

                /// for loop to run through data ////

                        // for (let i = 0; i < data.length; i++) {
                        //     const $data = $('<dd>').attr('class', 'data')
                        //     $('.questions').append($data)
                        //     $readout.html("Category :" + data[i].readout)

            /// OR putting specific data right on page /////

                        $('#category').html(data.results[0].category);
                        $('#type').html(data.results[0].type);
                        $('#difficulty').html(data.results[0].difficulty);
                        $('#question').html(data.results[0].question);
                    },
                    error: () => {
                        console.log('no no no');
                    }
                });
        //         // console.log(userInput)
        //         // console.log(startButton)
        //         // let start = () => {
        //         // let link = 'https://opentdb.com/api.php?amount=1'


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
    //

                    //////////////////////
                    /// API connected ////
                    //////////////////////

    // $.ajax({
    //     url: 'https://opentdb.com/api.php?amount=1',
    //     success: (data) => {
    //         console.log(data);
    //     },
    //     error: ()=>{
    //         console.log('bad request');
    //     }
    // });


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

    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');

    const openModal = () => {
        $modal.css('display', 'block');
    }
    const closeModal = () => {
        $modal.css('display','none');
    }

    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);
});
})
