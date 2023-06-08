
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btsOpenModal = document.querySelectorAll('.show-modal');

        //to open modal
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btsOpenModal.length; i++)
 btsOpenModal[i].addEventListener('click',openModal);

        //to close modal
 const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
 };
 btnCloseModal.addEventListener('click', closeModal);
 overlay.addEventListener('click',closeModal);

 document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
 });