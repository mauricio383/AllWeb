//Declaração de variáveis 
let nome = document.querySelector(".input__name");
let email = document.querySelector(".input__email");
let pass = document.querySelector(".input__pass");
let ConfirmPass = document.querySelector(".input__ConfirmPass");
let registrar = document.querySelector(".btnRegistrar");

//Caso o nome que o usuário colocar for <= 2 vai mudar a cor para vermelho e se for > 2 ficará preto.
nome.addEventListener("keyup", function(){
    if(nome.value.length <= 2) {
        nome.style.color = "red"
    } else {
        nome.style.color = "black"
    }
});

//Caso o e-mail que o usuário colocar for <= 5 vai mudar a cor para vermelho e se for > 5 ficará preto.
email.addEventListener("keyup", function(){
    if(email.value.length <= 5) {
        email.style.color = "red"
    } else {
        email.style.color = "black"
    }
});

//Caso as senha que o usuário colocar for <= 5 caracteres vai mudar a cor para vermelho e se for > 5 ficará preto.
pass.addEventListener("keyup", function() {
    if(pass.value.length <= 5) {
        pass.style.color = "red"
    } else {
        pass.style.color = "black"
    }
});

//Caso a confirmação de senha não for igual a senha ela ficara vermelha até que sejam compatíveis ficando preta.
ConfirmPass.addEventListener("keyup", function(){
    if(pass.value != ConfirmPass.value) {
        ConfirmPass.style.color = "red"
    } else {
        ConfirmPass.style.color = "black"
    }
});

//Função para o botão registrar
registrar.addEventListener("click", function() {
    //Caso o nome for < 3 ou e-mail for < 5 ou senha for < 5 ele da uma alerta de para "Preencher os campos corretamente" e limpará os valores dos inputs.
    if(nome.value.length <= 3 | email.value.length <= 5 | pass.value.length <= 5){ 
        swal("Ops...", "Preencha os campos corretamente!", "warning");
        nome.value = "";
        email.value = "";
        pass.value = "";
        ConfirmPass.value = ""
        //Se as senha e corfimação de senha forem != ele da um alerta dizendo que "As senhas não correspondem" e limpará os inputs Senha e Confirmar senha.  
    } else if (pass.value != ConfirmPass.value) {
        swal("Ops...", "As senhas não correspondem!", "error");
        pass.value = "";
        ConfirmPass.value = "";
    } else {
        
        firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
        .then( (value)=> {
            swal("Tudo ok!", "Usuário cadastrado com sucesso!", "success");

            nome.value = "";
            email.value = "";
            pass.value = "";
            ConfirmPass.value = "";
        })

        .catch( (error)=> {
            swal("Ops...", "Não conseguimos cadastrar o usuário!", "error");
        })
    }
});

