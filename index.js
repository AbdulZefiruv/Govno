const buttonElement =  document.querySelector('button');
const modalElement =  document.querySelector('.modal');

modalElement.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 200ms ease-in-out;
`;
const closeModal = event => {
    const target = event.target;

    if (target === modalElement || target.closest(`.modal_close`)) {
        modalElement.style.opacity = `0`;
    }
    setTimeout(()=> {
        modalElement.style.visibility = 'hidden';
    } ,200)
}

const openModal = () => {
    modalElement.style.visibility = `visible`;
    modalElement.style.opacity = `1`;
};

buttonElement.addEventListener('click', openModal);
modalElement.addEventListener('click', closeModal);