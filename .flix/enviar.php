<?php

// Criamos Variáveis que vai receber os valores dos input, por meio da tag 'Name' e do Method= "Post"

$Nome    = $_POST['Nome'];
$Email   = $_POST['Email'];
$Assunto = $_POST['Assunto'];
$Mensagem = $_POST['Mensagem'];



$para = "kawanpassos5000@gmail.com";
$descricao = "Coleta de dados - .Flix";

$corpo = "Nome:".''.$Nome."\n"."Email:".''.$Email."\n"."Assunto:".''.$Assunto."\n"."Mensagem:".''.$Mensagem."\n";


$cabeca = "From: sitee.flix@gmail.com"."\n"."Reply-to:".$Email."\n"."X=Mailer:PHP/".phpversion();

if(mail($para,$descricao,$corpo,$cabeca )){
  echo("E-mail enviado com sucesso");
}else{
  echo("Houve um erro ");
  
}