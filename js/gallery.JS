function upDate(previewPic) {
    console.log("Event triggered");
    // 1) Alterar a URL da imagem de fundo do div com id "image" para o src da imagem de pré-visualização
    document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
    
    // 2) Alterar o texto do div com id "image" para o alt da imagem de pré-visualização
    document.getElementById('image').innerHTML = previewPic.alt;

    // Verificar os valores no console
    console.log(`Image URL: ${previewPic.src}`);
    console.log(`Image Alt Text: ${previewPic.alt}`);
}

function unDo() {
    console.log("Undoing changes");
    // 1) Retornar a URL da imagem de fundo do div com id "image" para a original (sem imagem)
    document.getElementById('image').style.backgroundImage = '';

    // 2) Alterar o texto do div com id "image" para o texto original
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';

    // Verificar no console
    console.log('Resetting background image and text to original.');
}
