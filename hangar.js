const cartas=[
{valor:"A",nome:"Pulso Rosa",dano:5},{valor:"2",nome:"Impacto",dano:3},{valor:"3",nome:"Laser",dano:3},{valor:"4",nome:"Rajada",dano:4},{valor:"5",nome:"Choque",dano:4},{valor:"6",nome:"Neon Beam",dano:5},{valor:"7",nome:"Combo",dano:5},{valor:"8",nome:"Overdrive",dano:6},{valor:"9",nome:"Photon",dano:6},{valor:"10",nome:"Pink Burst",dano:7},{valor:"J",nome:"Jack Strike",dano:8},{valor:"Q",nome:"Queen Beam",dano:9},{valor:"K",nome:"King Nova",dano:10}
];
const grid=document.getElementById("cartas");
cartas.forEach(c=>{const el=document.createElement("article");el.className="carta";el.innerHTML=`<span class="carta-valor">${c.valor}</span><span class="carta-nome">${c.nome}</span><span class="carta-dano">Dano: <strong>${c.dano}</strong></span>`;grid.appendChild(el);});
document.querySelectorAll(".controles").forEach(grupo=>{grupo.querySelectorAll("button").forEach(botao=>{botao.addEventListener("click",()=>{grupo.querySelectorAll("button").forEach(b=>b.classList.remove("ativo"));botao.classList.add("ativo");});});});
