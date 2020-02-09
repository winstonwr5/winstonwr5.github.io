// console.log("hello world");

$(() => {
    // $.ajax({
    //     url: 'https://opentdb.com/api.php?amount=30',
    //     success: (data) => {
    //         console.log(data);
    //     },
    //     error: ()=>{
    //         console.log('bad request');
    //     }

    /// variables list ////
    //     const $body = $('body')
    //     let remaining = 60;
    //     let timerGo = setInterval(() => {
    //
    //     })
    // })
    
 ///// Variable for message when Time has elapsed ////
    let timeUp = function() {
        alert('Time\'s Up!!!')
    }
    setTimeout(timeUp, 10000)
});
