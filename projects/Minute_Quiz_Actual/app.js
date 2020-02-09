// console.log("hello world");


$(() => {
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

                    //////////////////////////
                    /// Variables for Game ///
                    //////////////////////////

    //     const $body = $('body')
    //     let remaining = 60;
    //     let timerGo = setInterval(() => {
    //
    //     })
    // })



 ///// Variable for message when Time has elapsed ////
    // let timeUp = function() {
    //     alert('Time\'s Up!!!')
    // }
    // setTimeout(timeUp, 10000)

//// Initial Modal with Game Rules ////
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
