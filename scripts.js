document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("comment-form");
    const comentariosLista = document.getElementById("comentarios-lista");

    const db = firebase.database();

    function exibirComentarios() {
        db.ref("comentarios").once("value", function (snapshot) {
            const comentarios = snapshot.val() || [];
            comentariosLista.innerHTML = '';

            for (const key in comentarios) {
                const comentario = comentarios[key];
                const div = document.createElement("div");
                div.classList.add("comentario");

                const h3 = document.createElement("h3");
                h3.textContent = comentario.name;
                div.appendChild(h3);

                const p = document.createElement("p");
                p.textContent = comentario.comment;
                div.appendChild(p);

                comentariosLista.appendChild(div);
            }
        });
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

        const newCommentRef = db.ref("comentarios").push();
        newCommentRef.set({ name, comment }, function (error) {
            if (error) {
                console.error("Erro ao salvar o comentário:", error);
            } else {
                document.getElementById("name").value = "";
                document.getElementById("comment").value = "";

                exibirComentarios();
            }
        });
    });

    exibirComentarios();
});
