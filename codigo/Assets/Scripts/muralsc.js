window.addEventListener("load", () => {
    const text = document.getElementById("postagem");
    const post = document.querySelector("#form_post button");

    text.addEventListener("focus", function(){
        post.classList.remove("d-none");
    }, false);

    text.addEventListener("blur", function(){
        setTimeout(function() {
            post.classList.add("d-none");
          }, 100);
    }, false);

    post.addEventListener("click", function(event){
        event.preventDefault();
        let postagem = text.value.trim();
        if(postagem == ""){
            alert("Campo de postagem não pode ser enviado vazio!");
        }else{
            alert("Postado!");
            text.value = "";
        }
    }, false);
});