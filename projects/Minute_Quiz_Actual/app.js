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
        // //
        //     const buttonClick = $('.button').on('click', (event) => {
        //         event.preventDefault()
        //     //
        //         const userInput = $('input[type="text"]').val()
        //         let startButton = $(event.target).attr('id')
// $(( ) => {
//             let numberRight = []
//
//             let numberWrong = []
//
//
//
//                     /////////////////////////////////
//                     /// Function to retrieve data ///
//                     /////////////////////////////////
//             function getQuestion() {
//                 $.ajax({
//                     url: 'https://opentdb.com/api.php?amount=1',
//                     success: (data) => {
//
//
//                     // + buttonClick
//                     // }).then((data) => {
//
//                 /// for loop to run through data ////
//
//                         // for (let i = 0; i < data.length; i++) {
//                         //     const $data = $('<dd>').attr('class', 'data')
//                         //     $('.questions').append($data)
//                         //     $readout.html("Category :" + data[i].readout)
//
//             /// OR putting specific data right on page /////
//                         console.log(data.results[0]);
//                         $('#category').html(data.results[0].category)
//                         $('#type').html(data.results[0].type)
//                         $('#difficulty').html(data.results[0].difficulty)
//                         $('#question').html(data.results[0].question)
//                         $('#correctAnswer').html(data.results[0].correct_answer)
//                     },
//                     error: () => {
//                         console.log('no no no');
//                     }
//                 });
//             }
//
//             const startGame = $('#start-button').on('click', (event) => {
//                 event.preventDefault()
//                 getQuestion();
//             ;
//         });
//         ;})
//
//             const submitAnswer = $('.submitAnswer').on('click', (event) => {
//                 event.preventDefault()
//                 let userInputLowerCase = $('input[type="text"]').val().toLowerCase()
//                 let answerLowerCase = correctAnswer.toLowerCase()
//
//                 if (userInputLowerCase === answerLowerCase) {
//                     console.log('Correct!')
//                     numberRight.push(rightAnswer)
//                     $('#correctAnswer').html(data.results[0].correct_answer)
//                     getQuestion()
//                     console.log(correctAnswer)
//                     $('input[type="text"]').val('')
//                 } else {
//                     console.log('Incorrect!')
//                     numberWrong.push(wrongAnswer)
//                     $('#correctAnswer').html(data.results[0].correct_answer)
//                     getQuestion()
//                     $('input[type="text"]').val('')
//                 }
//             });
//
//             const buttonClick = $('.button').on('click', (event) => {
//                     event.preventDefault()
//                     //
//         //         // console.log(userInput)
//         //         // console.log(startButton)
//         //         // let start = () => {
//         //         // let link = 'https://opentdb.com/api.php?amount=1'
//
//
//     ///////////////////////////////////////////////////////
//     //// Make answers more forgiving - Doesn't work yet ///
//     ///////////////////////////////////////////////////////
//     //
//     //     const formatResponse = (userInput) => {
//     //         return userInput[0].toLowerCase()
//     //     }
//     //
//     //     const greet = () => {
//     //         alert('Hi!')
//     //     }
//     //
//     //     const depart = () => {
//     //         alert('Bye!')
//     //     }
//     //
//     //     let answer = prompt('Are you (g)oing or (s)taying', 'Going or Staying?')
//     //
//     //     let softAnswer = formatResponse(userInput)
//     //
//     //     if (softAnswer === 'g') {
//     //         greet()
//     //     } else if (softAnswer === 's') {
//     //         depart()
//     //     }
//     // })
//             /////////////////////////////////////////
//             ////////// Variables for Game ///////////
//             /////////////////////////////////////////
//     // let userInput =
//     // let startButton = $(event.target).attr('id')
//     //
//
//                     //////////////////////
//                     /// API connected ////
//                     //////////////////////
//
//     // $.ajax({
//     //     url: 'https://opentdb.com/api.php?amount=1',
//     //     success: (data) => {
//     //         console.log(data);
//     //     },
//     //     error: ()=>{
//     //         console.log('bad request');
//     //     }
//     // });
//
//
//         // }
//         // })
//
//                     //////////////////////////
//                     /// Variables for Game ///
//                     //////////////////////////
//
//     //     const $body = $('body')
//     //     let remaining = 60;
//     //     let timerGo = setInterval(() => {
//     //
//     //     })
//     // })
//
//                 /////////////////////////////////
//                 // function for game countdown //
//                 /////////////////////////////////
//
//     const $secondsTimer = $('#seconds-timer');
//     let secondsTimer = 60
//
//     let gameTimer = setInterval(function() {
//         secondsTimer--;
//         if (secondsTimer <= 0) {
//             clearInterval(gameTimer);
//             $('#game-timer').html('<h2>Time!<h2>');
//             return;
//         } else {
//             $('#countdown').text(secondsTimer);
//             console.log("Game-timer -->" + secondsTimer);
//         }
//     }, 1000);
//
//
// // });
//         /////////////////////////////////////////////////////
//         ///// Variable for message when Time has elapsed ////
//         /////////////////////////////////////////////////////
//

//
//             ///////////////////////////////////////
//             //// Opening Modal with Game Rules ////
//             ///////////////////////////////////////
//
//     const $openBtn = $('#openModal');
//     const $modal = $('#modal');
//     const $closeBtn = $('#close');
//     const $endModal = $('#game-end-modal');
//
//
//     const openModal = () => {
//         $modal.css('display', 'block');
//     }
//     const endModal = () => {
//         $modal.css('display', 'block');
//     }
//     const closeModal = () => {
//         $modal.css('display', 'none');
//     }
//     $openBtn.on('click', openModal);
//     $closeBtn.on('click', closeModal);
$(( ) => {
    // let numberRight = []
    //
    // let numberWrong = []

                    ///////////////////////////////////////
                    //// Opening Modal with Game Rules ////
                    ///////////////////////////////////////
    let correctAnswer

    const submitAnswer = $('.data').on('submit', (event) => {
        event.preventDefault()
        let userInputLowerCase = $('input[type="text"]').val().toLowerCase()
        let answerLowerCase = correctAnswer.toLowerCase()

    })

    const $openBtn = $('#openModal');
    const $firstModal = $('#first-modal');
    const $gameEndModal = $('#game-end-modal');
    const $closeBtn = $('#close');
    const $closeOutBtn = $('#game-close');

    const openModal = () => {
        $firstModal.css('display', 'block');
    }

    const closeModal = () => {
        $firstModal.css('display', 'none');
    }

    const gameEndModal = () => {
        $gameEndModal.css('display', 'block');
    }

    const closeGameEndModal = (event) => {
        event.preventDefault()
        $gameEndModal.css('display', 'none')


    }

    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);
    $closeOutBtn.on('click', closeGameEndModal);

        /////////////////////////////////
        // function for game countdown //
        /////////////////////////////////

        const $secondsTimer = $('#seconds-timer');
        let secondsTimer = 60

        function hide() {
        $('#start-button').hide()
        $('#openModal').hide();
    }
        function show() {
        $('#game-end-modal').show();
    };

        function gameTimer() {
            setInterval(() => {
                secondsTimer--;
                if (secondsTimer <= 0) {
                    clearInterval(gameTimer);
                    $('#game-timer').html('<h2>Time!<h2>');
                    show();
                    return;
                } else {
                    $('#countdown').text(secondsTimer + " secs");
                    // console.log("Game-timer -->" + secondsTimer);
                }
            }, 1000);
        };

        // const closeModal = $('.modal-button').on('click', (event) => {
        //     event.preventDefault()
        // });

        const startButton = $('#start-button').on('click', (event) => {
        event.preventDefault()
        gameTimer()
        getQuestion()
        hide()

    })

    function getQuestion() {
        $.ajax({
            url: 'https://opentdb.com/api.php?amount=1',
            success: (data) => {
                console.log(data.results[0]);
                $('#category').html(data.results[0].category)
                $('#type').html(data.results[0].type)
                $('#difficulty').html(data.results[0].difficulty)
                $('#question').html(data.results[0].question);
                $('#correctAnswer').html(data.results[0].correct_answer)
                console.log(correctAnswer);
                if (userInputLowerCase === answerLowerCase) {
                    console.log('right!')
                    // console.log(correctAnswer)
                    $('#correctAnswer').html(data.results[0].correct_answer)
                    let timeUp = function() {
                        $('#correctAnswer').html('')
                    }
                    setTimeout(timeUp, 2000)
                    // numberRight.push(rightAnswer)
                    $('input[type="text"]').val('')
                    getQuestion()
                    } else {
                        console.log('wrong')
                        // console.log(correctAnswer)
                        $('#correctAnswer').html(data.results[0].correct_answer)
                        // numberWrong.push(wrongAnswer)
                        $('input[type="text"]').val('')
                        getQuestion()
                    }
                    // console.log($('#correctAnswer'));
                    // console.log(data.results);
                }
            }),
                error: ()=>{
                console.log('bad request');

            }
        }
});

    // function handleAnswer(answer) {
    //
    //             }
// })



        // const submitAnswer = $('.submit-answer').on('click', (event) => {
        //     event.preventDefault()
        //     let userInputLowerCase = $('input[type="text"]').val().toLowerCase()
        //     let answerLowerCase = correctAnswer.toLowerCase()
        //
        //     if (userInputLowerCase === answerLowerCase) {
        //         console.log('right!')
        //         console.log(correctAnswer)
        //         $('#correctAnswer').html(data.results[0].correct_answer)
        //         // numberRight.push(rightAnswer)
        //         $('input[type="text"]').val('')
        //         getQuestion()
        //         } else {
        //             console.log('wrong')
        //             console.log(correctAnswer)
        //             $('#correctAnswer').html(data.results[0].correct_answer)
        //             // numberWrong.push(wrongAnswer)
        //             $('input[type="text"]').val('')
        //             getQuestion()
        //         }
        //     });

        // const buttonClick = $('.button').on('click', (event) => {
        //     event.preventDefault()
        //     //
        //     const userInput = $('input[type="text"]').val()




    ;
