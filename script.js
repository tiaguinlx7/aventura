document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', () => {
        const proximo = button.getAttribute('data-proximo');
        document.querySelector('.passo.ativo').classList.remove('ativo');
        document.getElementById(`passo-${proximo}`).classList.add('ativo');
    });
});
