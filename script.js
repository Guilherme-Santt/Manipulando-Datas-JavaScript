const data = new Date();
console.log(data);
document.getElementById("date").innerHTML = data;  

let ano = data.getFullYear();
console.log(ano);
document.getElementById("ano").innerHTML = "O ano atual é " + ano;  

// CONVERTENDO DIA DO MÊS PARA NOME UTILIZANDO O SWITCH
let mes = data.getMonth();
console.log(mes);
switch(mes){
    case 0: document.getElementById('mes').innerHTML = "O mês feito com switch é aneiro";
    break;
    case 1: document.getElementById('mes').innerHTML = "O mês feito com switch é Fevereiro";
    break;
    case 2: document.getElementById('mes').innerHTML = "O mês feito com switch é Março";
    break;
    case 3: document.getElementById('mes').innerHTML = "O mês feito com switch é Abril";
    break;
    case 4: document.getElementById('mes').innerHTML = "O mês feito com switch é Maio";
    break;
    case 5: document.getElementById('mes').innerHTML = "O mês feito com switch é Junho";
    break;
    case 6: document.getElementById('mes').innerHTML = "O mês feito com switch é Julho";
    break;
    case 7: document.getElementById('mes').innerHTML = "O mês feito com switch é Agosto";
    break;
    case 8: document.getElementById('mes').innerHTML = "O mês feito com switch é Setembro";
    break;
    case 9: document.getElementById('mes').innerHTML = "O mês feito com switch é Outubro";
    break;
    case 10: document.getElementById('mes').innerHTML = "O mês feito com switch é Novembro";
    break;
    case 11: document.getElementById('mes').innerHTML = "O mês feito com switch é Dezembro";
    break;
}
// CONVERTENDO NUMERO MÊS PARA NOME UTILIZANDO ARRAY
let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
mesEscrito = meses[mes];
console.log(mesEscrito);
document.getElementById("mesarray").innerHTML = "Mês feito com array é " + mesEscrito;

// SOLICITANDO O DIA DO MÊS
let diaMes = new Date().getDate();
console.log(diaMes);
document.getElementById("dia").innerHTML = "O dia do mês é " + diaMes;  

// SOLICITANDO DIA DA SEMANA
let = diaSemana = new Date().getDay();
console.log(diaSemana)
// CONVERTENDO DIA DA SEMANA PARA NOME DO DIA DA SEMANA
let nomeDia = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"]
let dia = nomeDia[diaSemana];
console.log(dia)
document.getElementById("diaSemana").innerHTML = "O dia da semana é " + dia;

// PSOLICITANDO HORAS
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
let milesimos = data.getMilliseconds();
document.getElementById("data").innerHTML = "Data: " + dia + " " + AddZero(diaMes) + "/" + meses[mes] + "/" + ano + "<br> Hora: " + hora + ":" + minutos + ":" + segundos + ":" + milesimos; 

// SOLICITANDO DATA NO PADRÃO BR
let DataBr = data.toLocaleString('pt-BR');
let Data = data.toLocaleString('pt-BR', { dateStyle: 'short'});
let Hora = data.toLocaleString('pt-BR', { timeStyle: 'short'});

document.getElementById("DataBr").innerHTML = "Data ja convertida no padrão br-> " + DataBr;
document.getElementById("Data").innerHTML = "Somente data ja convertida no padrão br-> " + Data;
document.getElementById("Hora").innerHTML = "Somente hora ja convertida no padrão br-> " + Hora;

function AddZero(x){
    return x < 10 ? "0" + x : "" + x;
}


// VENCIMENTO
var dataProduto = new Date();
var vencimento = new Date(2024, 1, 17);
console.log(dataProduto);
console.log(vencimento);

if(dataProduto > vencimento){
    document.getElementById("p").innerHTML = "Seu produto venceu!";
}else{
    document.getElementById("p").innerHTML = "Seu produto ainda não venceu!";
}
