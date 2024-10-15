function upDate(previewPic) {
    console.log("Event triggered");
    
    // Atualizar o fundo e texto da imagem grande
    document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
    document.getElementById('image').innerHTML = previewPic.alt;
    
    console.log(`Image URL: ${previewPic.src}`);
    console.log(`Image Alt Text: ${previewPic.alt}`);
}

function unDo() {
    console.log("Undoing changes");

    // Resetar o fundo e texto da imagem grande para o original
    document.getElementById('image').style.backgroundImage = '';
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
    
    console.log('Resetting background image and text to original.');
}

// Adiciona tabindex dinamicamente via JavaScript para permitir navegação com teclado
document.querySelectorAll('.preview').forEach(function(img) {
    img.setAttribute('tabindex', '0');
});
