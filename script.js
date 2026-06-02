
function analisar(){
let n=document.getElementById('nivel').value;
let r=document.getElementById('resultado');
if(n<30){r.innerHTML='🔰 Você está iniciando sua jornada em IA';}
else if(n<70){r.innerHTML='💻 Você possui conhecimento intermediário sobre IA';}
else{r.innerHTML='🚀 Você demonstra perfil avançado e interesse por inovação';}
}
