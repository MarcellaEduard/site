var nome = "Marcella Eduarda";
var ano = "2024";
var twitter = "@_mahedu";
var facebook = "Marcella Eduarda";
var instagram = "@_mahedu";
var linkedin = "Marcella Eduarda";
var sexo = "Feminino";
var localizacao = "Polo Higienópolis";

var conteudoRodape =
  "<p><strong>" +
  nome +
  "</strong><br>" +
  "Ano: " +
  ano +
  "<br>" +
  "Twitter: " +
  twitter +
  "<br>" +
  "Facebook: " +
  facebook +
  "<br>" +
  "Instagram: " +
  instagram +
  "<br>" +
  "LinkedIn: " +
  linkedin +
  "<br>" +
  "Sexo: " +
  sexo +
  "<br>" +
  "Localização: " +
  localizacao +
  "</p>";

document.getElementById("informacoes-ficticias").innerHTML = conteudoRodape;

function mostrarSaudacao() {
  const nomeCompleto = "Seu Nome Completo";
  const cidadeCurso = "SP/ADS-MACK";

  const dataAtual = new Date();
  const horaAtual = dataAtual.getHours();
  const diaSemana = dataAtual.toLocaleDateString("pt-BR", { weekday: "long" });

  let saudacao;
  if (horaAtual < 12) {
    saudacao = "Bom Dia!";
  } else if (horaAtual < 18) {
    saudacao = "Boa Tarde!";
  } else {
    saudacao = "Boa Noite!";
  }

  alert(
    `Sou a Marcella Eduarda dos Santos\n${cidadeCurso}\n${saudacao} Hoje é ${diaSemana}.`
  );
}

document.addEventListener("DOMContentLoaded", mostrarSaudacao);
