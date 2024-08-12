const inputImagem = document.getElementById('imagem');
const preview = document.getElementById('preview');

inputImagem.addEventListener('change', function () {
    const file = inputImagem.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        preview.src = e.target.result;
    };

    reader.readAsDataURL(file);
});


const campoPesquisa = document.querySelector('input[name="q"]');
const resultados = document.getElementById('resultados'); // Crie um elemento para exibir os resultados

campoPesquisa.addEventListener('input', function () {
    const termoPesquisa = campoPesquisa.value;
    // Faça uma busca assíncrona no servidor e exiba os resultados em 'resultados'
});
