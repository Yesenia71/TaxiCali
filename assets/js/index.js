const iconClose = document.querySelectorAll('.icon-close');
const btnClose = document.querySelectorAll('.btn-close');

const closeModal = () => {
    document.querySelector('#video_uber').pause();
    document.querySelector('#video_registro_app').pause();
    document.querySelector('#video_iniciar_sesion').pause();
    document.querySelector('#video_iniciar_viaje').pause();
    document.querySelector('#video_conectar_app').pause();
}

iconClose.forEach(element => element.addEventListener('click', closeModal))
btnClose.forEach(element => element.addEventListener('click', closeModal))