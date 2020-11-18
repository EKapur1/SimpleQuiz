let trenutno=0
function addPitanje(){
    let p1=pitanja[trenutno];
    let prikaz=document.querySelector(".pitanja");
    prikaz.innerHTML=p1.p;
    for (let i = 0; i < p1.o.length; i++) {
        prikaz.innerHTML+=`
        </br><input class="p" id="a${i}" type="radio" value="o${i+1}" name="odgovor">
        <label class="odg" id="aText"for="a${i}">${p1.o[i]}</label>
        `
    }
}
let odgovor=document.getElementsByName('odgovor');
function uncheck()
{
    for(let i=0;i<odgovor.length;i++)
    {
        odgovor[i].checked=false;
    }
}
let score=0;
function provjera(){
for(let i=0;i<odgovor.length;i++)
{
    if(odgovor[i].checked)
          if(odgovor[i].value==pitanja[trenutno].to)
          {
//              alert("tacno");
                score++;
          }
//else alert("netacno");
}};
let duzina=pitanja.length-1;
function displayResult()
{
    document.querySelector(".pitanja").style.display="none";
    document.querySelector("#pitanje").style.display="none";
    document.querySelector(".rezultat").innerHTML=`<div class="pitanja" style="margin: 50px;">Tacno ste odgovorili ${score} od ${pitanja.length} odgovora.</div>`;
    document.querySelector(".rezultat").style.display="block";
    score=0;
    
};
addPitanje();
document.getElementById("dalje").addEventListener('click', function(){
    
            provjera();
            trenutno++;
            if(trenutno<pitanja.length)
            {
                document.getElementById("dalje").innerText="Dalje";
                addPitanje();
                document.querySelector(".pitanja").style.display="block";
                document.querySelector("#pitanje").style.display="block";
                document.querySelector(".rezultat").style.display="none";
        
            }
            else 
            {
                displayResult();
                trenutno=0;
                document.getElementById("dalje").innerText="Ponovo";
                addPitanje();
                trenutno--;
            }
        
    })