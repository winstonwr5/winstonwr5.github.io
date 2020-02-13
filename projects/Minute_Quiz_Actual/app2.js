$(( ) => {

    //////////////////////////////////////////////////////
    ///// I initially wanted to push the number of ///////
    ///// right and wrong answers into an array, but /////
    ///// I wasn't able to get it to work.... ////////////
    //////////////////////////////////////////////////////

    // let numberRight = []
    //
    // let numberWrong = []

                    ///////////////////////////////////////
                    //// Opening Modal with Game Rules ////
                    ///////////////////////////////////////
    let correctAnswer
    // let timeUp = function() {
    //     $('#correctAnswer').html('')
    // }
    const submitAnswer = $('.data').on('submit', (event) => {
        event.preventDefault()
        let userInputLowerCase = $('input[type="text"]').val().toLowerCase()
        let answerLowerCase = correctAnswer.toLowerCase()

        if (userInputLowerCase === answerLowerCase) {
            alert('CORRECT!!')
            // console.log(correctAnswer)
            // $('#correctAnswer').html(correctAnswer)

            // setTimeout(timeUp, 2000)
            // numberRight.push(rightAnswer)
            $('input[type="text"]').val('')
            getQuestion()
            } else {
                alert('INCORRECT!! The Correct Answer is ' + correctAnswer)
                // console.log(correctAnswer)
                // $('#correctAnswer').html(correctAnswer)
                // numberWrong.push(wrongAnswer)
                // setTimeout(timeUp, 2000)
                $('input[type="text"]').val('')
                getQuestion()
            }
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
    const closeGameEndModal = () => {
        // event.preventDefault()
        $gameEndModal.css('display', 'none')
    }
    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)
    $closeOutBtn.on('click', closeGameEndModal)
            ////////////////////////////////////////////
            // function for modals and game countdown //
            ////////////////////////////////////////////

        const $secondsTimer = $('#seconds-timer')
        let secondsTimer = 60
        function hide() {
        $('#start-button').hide()
        $('#openModal').hide();
    }
        function show(event) {
            // event.preventDefault()
        $('#game-end-modal').show();
    }
        function endHide() {
        $('#game-end-modal').hide();
    }
        function gameTimer(event) {
            setInterval(() => {
                secondsTimer--;
                if (secondsTimer <= 0) {
                    clearInterval(gameTimer);
                    $('#game-timer').html('<h2>Time!<h2>');
                    // event.preventDefault();
                    show();
                    // closeGameEndModal();
                    return;
    /// This was an attempt to make the Game Over modal disappear ///
                    // endHide();
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
                correctAnswer = (data.results[0].correct_answer)
                    // console.log($('#correctAnswer'));
                    // console.log(data.results);
                },
                error: () => {
                console.log('bad request');
            }
        })
    }
});
