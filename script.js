const data = new Date();
console.log(data);
document.getElementById("date").innerHTML = data;  

let ano = data.getFullYear();
console.log(ano);
document.getElementById("ano").innerHTML = "O ano atual é " + ano;  

let mes = data.getMonth();
console.log(mes);
switch(mes){
    case 0 : document.getElementById('mes').innerHTML = "O mês feito com switch é Janeiro";
    break;
    case 1 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Fevereiro";
    break;
    case 2 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Março";
    break;
    case 3 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Abril";
    break;
    case 4 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Maio";
    break;
    case 5 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Junho";
    break;
    case 6 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Julho";
    break;
    case 7 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Agosto";
    break;
    case 8 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Setembro";
    break;
    case 9 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Outubro";
    break;
    case 10 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Novembro";
    break;
    case 11 : document.getElementById('mes').innerHTML = "O mês feito com switch é  Dezembro";
    break;
}

let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
mesEscrito = meses[mes];
document.getElementById("mesarray").innerHTML = "Mês feito com array é " + mesEscrito;
console.log(mesEscrito);