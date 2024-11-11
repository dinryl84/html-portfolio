const blanks = document.querySelectorAll('.blank');
const words = document.querySelectorAll('.word');

words.forEach(word => {
    word.addEventListener('dragstart', dragStart);
});

blanks.forEach(blank => {
    blank.addEventListener('dragover', dragOver);
    blank.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.textContent);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const correctAnswer = event.target.dataset.correct;

    if (data === correctAnswer) {
        event.target.textContent = data;
        event.target.style.borderBottom = 'none';
    } else {
        alert('Try again!');
    }
}
