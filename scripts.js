document.addEventListener("DOMContentLoaded", function() {
    // Código anterior

    const form = document.getElementById("comment-form");
    const comentariosLista = document.getElementById("comentarios-lista");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

        const comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");

        const comentarioNome = document.createElement("h3");
        comentarioNome.innerText = name;

        const comentarioTexto = document.createElement("p");
        comentarioTexto.innerText = comment;

                comentarioDiv.appendChild(comentarioNome);
        comentarioDiv.appendChild(comentarioTexto);

        comentariosLista.appendChild(comentarioDiv);

        // Limpar campos do formulário
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    });
});

       
