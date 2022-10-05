let radiologia = [
    {hora: "11:00 AM", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA"},
    {hora: "11:30 AM", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE"},
    {hora: "15:00 AM", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE"},
    {hora: "15:30 AM", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA"},
    {hora: "16:00 AM", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA"}
]

let traumatologia = [
{hora: "8:00 AM", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA"},
{hora: "10:00 AM", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE"},
{hora: "10:30 AM", especialista: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE"},
{hora: "11:00 AM", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE"},
{hora: "11:30 AM", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA"},
{hora: "12:00 AM", especialista: "ARTURO CAVAGNARO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE"},
{hora: "12:30 AM", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE"}
]

let dental = [
    {hora: "8:30 AM", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE"},
    {hora: "11:00 AM", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE"},
    {hora: "11:30 AM", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA"},
    {hora: "13:00 AM", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA"},
    {hora: "13:30 AM", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA"},
    {hora: "14:00 AM", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE"},
    ]
let i=0;


document.write("<p id='rgpu'> Primer paciente: "+radiologia[0].paciente+" - "+radiologia[0].prevision+" |  Último paciente: "+radiologia[radiologia.length-1].paciente+" - "+radiologia[radiologia.length-1].prevision+"</p>");
document.write("<p id='trpu'> Primer paciente: "+traumatologia[0].paciente+" - "+traumatologia[0].prevision+" |  Último paciente: "+traumatologia[traumatologia.length-1].paciente+" - "+traumatologia[traumatologia.length-1].prevision+"</p>");
document.write("<p id='depu'> Primer paciente: "+dental[0].paciente+" - "+dental[0].prevision+" |  Último paciente: "+dental[dental.length-1].paciente+" - "+dental[dental.length-1].prevision+"</p>");

//Tabla 1
document.write("<table id='tabla1' class='tabla1'>");
document.write("<tr>")
document.write("<th>Hora</th>")
document.write("<th>Especialista</th>")
document.write("<th>Paciente</th>")
document.write("<th>Rut</th>")
document.write("<th>Previsión</th>")
document.write("</tr>")

for(i=0;i<radiologia.length;i++){
    document.write("<tr>")
    document.write("<th>"+radiologia[i].hora+"</th>")
    document.write("<th>"+radiologia[i].especialista+"</th>")
    document.write("<th>"+radiologia[i].paciente+"</th>")
    document.write("<th>"+radiologia[i].rut+"</th>")
    document.write("<th>"+radiologia[i].prevision+"</th>")
    document.write("</tr>")
}

document.write("</table>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

//Tabla 2

document.write("<table id='tabla2' class='tabla2'>");
document.write("<tr>")
document.write("<th>Hora</th>")
document.write("<th>Especialista</th>")
document.write("<th>Paciente</th>")
document.write("<th>Rut</th>")
document.write("<th>Previsión</th>")
document.write("</tr>")

for(i=0;i<traumatologia.length;i++){
    document.write("<tr>")
    document.write("<th>"+traumatologia[i].hora+"</th>")
    document.write("<th>"+traumatologia[i].especialista+"</th>")
    document.write("<th>"+traumatologia[i].paciente+"</th>")
    document.write("<th>"+traumatologia[i].rut+"</th>")
    document.write("<th>"+traumatologia[i].prevision+"</th>")
    document.write("</tr>")
}

document.write("</table>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
//Tabla 3

document.write("<table id='tabla2' class='tabla2'>");
document.write("<tr>")
document.write("<th>Hora</th>")
document.write("<th>Especialista</th>")
document.write("<th>Paciente</th>")
document.write("<th>Rut</th>")
document.write("<th>Previsión</th>")
document.write("</tr>")

for(i=0;i<dental.length;i++){
    document.write("<tr>")
    document.write("<th>"+dental[i].hora+"</th>")
    document.write("<th>"+dental[i].especialista+"</th>")
    document.write("<th>"+dental[i].paciente+"</th>")
    document.write("<th>"+dental[i].rut+"</th>")
    document.write("<th>"+dental[i].prevision+"</th>")
    document.write("</tr>")
}

document.write("</table>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");