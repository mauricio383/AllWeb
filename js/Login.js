//Declarando variáveis.
let email = document.querySelector(".input__email");
let pass = document.querySelector(".input__pass");
let logar = document. querySelector(".btn__logar");

//Função de logar o usuário
logar.addEventListener('click', function() {
    //Caso o e-mail seja <= 3 e a senha seja <= 5 ele mostra um alerta e limpa os inputs.
    if(email.value.length <= 3 | pass.value.length <= 5) {
        swal("Ops...", "Preencha os campos corretamente!", "warning");
        email.value = "";
        pass.value = "";
    } else {
        //Aqui estamo chamando o firebase para confirmar a conexão, puxando os valores
        firebase.auth().singInWithEmailAndPassword(email.value, pass.value)
        //Caso os valores estejam certos ele mostra um alerta de "Usuário logado!" e limpa os inputs. 
        .then( (value)=> {
            swal("Usuário logado!", "Aguarde um pouco que vamos redirecionar você!", "sucess");
            email.value = "";
            pass.value = "";

            //Para levar a próxima página quando os dados estiverem certos.
            setTimeout( ()=> {
                window.location.href = "https://github.com/mauricio383/AllWeb"
            }, 1000)
        })

        //Caso o if e o then forem falsos ele exibirá um alerta de erro "Usuário não encontrado!" e limpará os inputs.
        .catch( (error)=> {
            swal("Ops...", "Usuário não encontrado!", "error");
            email.value = "";
            pass.value = "";
        })
    }
})