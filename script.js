//DATA COMPLETA
let data = new Date()
document.write(data)
document.write("<br><br>")

//PEGA O DIA
let data1 = new Date().getDate()
document.write(data1)
document.write("<br><br>")

//USA 2 CARACTERES PARA MOSTRAR O DIA
let data2 = new Date().getDate()
document.write(('0' + data2).slice(0-2))
document.write("<br><br>")

//PEGA O MÊS
let data3 = new Date().getMonth()+1
document.write(data3)
document.write("<br><br>")

//PEGA O ANO
let data4 = new Date().getFullYear()
document.write(data4)
document.write("<br><br>")

//PEGA A DATA EM UM ARRAY
let data5 = new Date()
let diaDaSemana=['Domingo', 'Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
document.write(diaDaSemana[data5.getDay()])
document.write("<br><br>")

//RETORNA A DATA VALOR AMERICANO
let data6 = new Date()
document.write(data6.toDateString())
document.write("<br><br>")

//DATA MM/DD/AAAA
let data7 = new Date()
document.write(data6.toLocaleDateString())
document.write("<br><br>")

//FORMATAÇÃO DE DATA COMPLETA
msg = document.getElementById("msg")
let data8 = new Date()
let dia = ('0' +data8.getDate()).slice(-2)
let mes = data.getMonth()
let meses =['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
let ano = data8.getFullYear()
//document.write(dia + ' de ' +meses[mes]+ ' de ' +ano)
//document.write("<br><br>")
msg.innerHTML += `<p></p>${dia} de ${meses[mes]} de ${ano}</p>`
