<div id="livros"></div>
<script>
  fetch('http://localhost:3000/livros')
    .then(response => response.json())
    .then(data => {
      const livrosDiv = document.getElementById('livros');
      data.forEach(livro => {
        livrosDiv.innerHTML += `<p>${livro.nome} - ${livro.autor}</p>`;
      });
    });
</script>