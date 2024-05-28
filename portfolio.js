document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.grid-galeria .imagem img');
    const modal = document.createElement('div');
    const modalImg = document.createElement('img');
    const modalClose = document.createElement('span');

    modal.id = 'myModal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1000';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.overflow = 'auto';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';

    modalImg.style.margin = 'auto';
    modalImg.style.display = 'block';
    modalImg.style.width = '80%';
    modalImg.style.maxWidth = '700px';

    modalClose.style.position = 'absolute';
    modalClose.style.top = '15px';
    modalClose.style.right = '35px';
    modalClose.style.color = '#f1f1f1';
    modalClose.style.fontSize = '40px';
    modalClose.style.fontWeight = 'bold';
    modalClose.style.cursor = 'pointer';

    modalClose.innerHTML = '&times;';

    modal.appendChild(modalImg);
    modal.appendChild(modalClose);
    document.body.appendChild(modal);

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});