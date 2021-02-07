const cat = document.getElementById('cat');
function createPiece() {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    cat.appendChild(piece);
};
