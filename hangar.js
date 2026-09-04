const cartas=[
{valor:"A",nome:"Soco",dano:4},{valor:"2",nome:"Soco",dano:4},{valor:"3",nome:"Soco",dano:4},{valor:"4",nome:"Martelo Femur",dano:4-8},{valor:"5",nome:"Soco",dano:4},{valor:"6",nome:"Soco",dano:4},{valor:"7",nome:"Soco",dano:4},{valor:"8",nome:"Martelo Femur",dano:4-8},{valor:"9",nome:"Soco",dano:4},{valor:"10",nome:"Soco",dano:7},{valor:"11",nome:"Soco",dano:4},{valor:"12",nome:"Lingua",dano:4},{valor:"8",nome:"Codex",dano:3},{valor:"J",nome:"Jack Strike",dano:8},{valor:"Q",nome:"Queen Beam",dano:9},{valor:"K",nome:"King Nova",dano:10}
];
const grid=document.getElementById("cartas");
cartas.forEach(c=>{const el=document.createElement("article");el.className="carta";el.innerHTML=`<span class="carta-valor">${c.valor}</span><span class="carta-nome">${c.nome}</span><span class="carta-dano">Dano: <strong>${c.dano}</strong></span>`;grid.appendChild(el);});
document.querySelectorAll(".controles").forEach(grupo=>{grupo.querySelectorAll("button").forEach(botao=>{botao.addEventListener("click",()=>{grupo.querySelectorAll("button").forEach(b=>b.classList.remove("ativo"));botao.classList.add("ativo");});});});
