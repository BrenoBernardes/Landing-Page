function sendForm() {
  let sendName = document.getElementById("nameUser").value;
  let sendTel = document.getElementById("telUser").value;
  let sendEmail = document.getElementById("emailUser").value;

  document.getElementById("formInput").reset(); // reset do formulário

  const userData = {
      nome: sendName,
      telefone: sendTel,
      email: sendEmail
    }

  user_json = JSON.stringify(userData);

  localStorage.setItem("userData", user_json); // salvamento no local storage
  
  // colocar mensagem de confirmação
}

