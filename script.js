// data completa
let data = new Date();
//console.log(data)
document.write(data)
document.write("<br>")

//pega o dia
let data1 = new Date().getDate()
document.write("<br>")
document.write(data1)
document.write("<br>")

//pega o mes
let data2 = new Date().getMonth()+1;
document.write(data2)
document.write("<br>")

//pega o ano
let data3 = new Date().getFullYear();
document.write(data3)
document.write("<br>")

//pega o dia atual de um array
let data4 = new Date();
let diaSemana = ['Domingo', 'Seguda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
document.write(diaSemana[data4.getDay()]);
document.write("<br>")

//padrao americano completo
let data5 = new Date();
document.write(data5.toDateString());
document.write("<br>")

//padrao navegador completo
let data6 = new Date();
document.write(data6.toLocaleDateString());
document.write("<br>")

// criando formatação completa
let data7 = new Date();
let Dia = ('0'+data7.getDate()).slice(-2)
let Mes = data7.getMonth();
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let ano = data.getFullYear();
document.write(Dia + ' de ' + meses[Mes] + ' de ' + ano);
document.write("<br>")

//Horas
// pegando a hora
let horas = new Date();
document.write(horas.getHours());
document.write("<br>")

// pegando os minutos
let minutos = new Date();
document.write(minutos.getMinutes());
document.write("<br>")

// pegando os segundos
let segundos = new Date();
document.write(segundos.getSeconds());
document.write("<br>")

// Manipular datas

let horas1 =  new Date();
document.write(horas1.getHours());
document.write("<br>")
horas.setHours(horas1.getHours() + 4);
document.write("<br>")
document.write(horas1.getHours());

//pega a data/hora completa
let horas2 =  new Date();
document.write(horas2.toLocaleString());
document.write("<br>")

//Funcoes settimeout e setinterval 
function BemVindo(){
    alert("Olá, seja Bem-Vindo!")
}
//executa uma unica vez depois de 1 segundo, por exemplo
setTimeout(BemVindo, 1000)

function tempo(){
    let relogio = document.querySelector("#div1")
    let hora = new Date();
    relogio.innerHTML = (hora.toLocaleDateString()).slice(-8)
}
