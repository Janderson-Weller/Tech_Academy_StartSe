// const animation = document.querySelectorAll('.animation');

const animation = document.getElementById('animation-button');
console.log(animation);

// animation.style.backgroundColor = 'red';
// ani.style.color = 'red';

const animationDiv = () => {

    // animation.forEach(option => {
        // option.addEventListener('click', () => {
        //     console.log(option);
        //     const escolha = document.querySelector('.button-animation-' + option.attributes.id.value);
        animation.style.transition = '3s'
        animation.style.display = 'block';
        //     console.log(escolha);
        //     // escolha.style.color = 'black';
        //     escolha.style.display = 'block';
        // });

        
    // });
}
setTimeout(animationDiv, 5*1000); // 5 segundos

// animationDiv();
