document.addEventListener("DOMContentLoaded", function() {
    // Código anterior

    // Initialize Firebase Realtime Database (or Firestore)
    const db = firebase.database();
    // (use this line for Firestore)
    // const db = firebase.firestore();

    function exibirComentarios() {
        // Get comments from Firebase Realtime Database (or Firestore)
        db.ref("comentarios").once("value", function(snapshot) {
            const comentarios = snapshot.val() || [];
            comentariosLista.innerHTML = '';

            comentarios.forEach(comentario => {
                // Código para exibir comentários (sem alteração)
            });
        });
        // (use these lines for Firestore)
        // db.collection("comentarios").get().then((querySnapshot) => {
        //     comentariosLista.innerHTML = '';
        //
        //     querySnapshot.forEach((doc) => {
        //         const comentario = doc.data();
        //         // Código para exibir comentários (sem alteração)
        //     });
        // });
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

                // Save comment to Firebase Realtime Database (or Firestore)
        const newCommentRef = db.ref("comentarios").push();
        newCommentRef.set({ name, comment }, function(error) {
            if (error) {
                console.error("Erro ao salvar o comentário:", error);
            } else {
                // Limpar campos do formulário
                document.getElementById("name").value = "";
                document.getElementById("comment").value = "";

                exibirComentarios();
            }
        });

        // (use these lines for Firestore)
        // db.collection("comentarios").add({
        //     name: name,
        //     comment: comment
        // })
        // .then((docRef) => {
        //     // Limpar campos do formulário
        //     document.getElementById("name").value = "";
        //     document.getElementById("comment").value = "";
        //
        //     exibirComentarios();
        // })
        // .catch((error) => {
        //     console.error("Erro ao salvar o comentário:", error);
        // });
    });

    exibirComentarios();
});

