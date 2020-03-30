function buttonclc() {
    const btn = document.querySelector('#share-btn');
    const theClipboard = navigator.clipboard;
    console.log(theClipboard);

    btn.addEventListener('click', () => {
        let answer = confirm('Скопировать в буфер обмена???');
        if (answer) alert('теперь вы стали обладателем рибки фугу')
    })
}



function btnForImg() {
    let count = 0;
    const countPlace = document.getElementById('count-here');
    document.getElementById('btn-for-img').addEventListener('click', () =>{
        count++;
        countPlace.innerText = count;

    });
}

document.addEventListener('DOMContentLoaded', () => {
    buttonclc();
    btnForImg();
});

