// console.log("hello world");

$(() => {
    $.ajax({
        url: 'https://opentdb.com/api.php?amount=10',
        success: (data) => {
            console.log(data);
        },
        error: ()=>{
            console.log('bad request');
        }
    })
});
