const EXAM = [
  { sec:"Conjuntos numéricos", questions:[
    { type:"mc", q:"¿A qué conjunto pertenece el número √7?",
      opts:["Naturales","Enteros","Racionales","Irracionales"], correct:3 },
    { type:"mc", q:"¿Cuál de estos números NO es racional?",
      opts:["3/4","0.25","√5","−8"], correct:2 },
    { type:"mc", q:"El conjunto que incluye TANTO a los racionales como a los irracionales es el de los números:",
      opts:["Naturales","Enteros","Reales","Complejos"], correct:2 },
    { type:"mc", q:"¿Cuál afirmación es verdadera?",
      opts:["Todo número entero es natural","Todo número natural es entero","√−1 es un número real","Los irracionales se escriben como fracción"], correct:1 },
  ]},
  { sec:"Exponentes y radicales", questions:[
    { type:"mc", q:"¿Cuánto vale 7⁰ (cualquier número elevado a cero)?",
      opts:["0","1","7","No existe"], correct:1 },
    { type:"mc", q:"La expresión 2⁻³ es igual a:",
      opts:["−8","−6","1/8","6"], correct:2 },
    { type:"mc", q:"La raíz cuadrada del monomio 9a²b⁴ es:", expr:"√(9a²b⁴)",
      opts:["±3ab²","3a²b²","9ab²","3ab⁴"], correct:0 },
  ]},
  { sec:"Productos notables y expresiones", questions:[
    { type:"mc", q:"Una expresión algebraica con TRES términos se llama:",
      opts:["Monomio","Binomio","Trinomio","Coeficiente"], correct:2 },
    { type:"mc", q:"El desarrollo de (x + 5)² es:", expr:"(x + 5)²",
      opts:["x² + 25","x² + 10x + 25","x² + 5x + 25","x² + 10x + 5"], correct:1 },
    { type:"mc", q:"El producto (a + b)(a − b) es igual a:", expr:"(a + b)(a − b)",
      opts:["a² + b²","a² − b²","a² − 2ab + b²","(a − b)²"], correct:1 },
  ]},
  { sec:"Casos de factorización", questions:[
    { type:"open", q:"Factoriza por factor común:", expr:"36xy − 6y²",
      sol:["Factor común de 36xy y 6y² → 6y","36xy − 6y² = 6y · 6x − 6y · y"],
      note:"Sacas lo que se repite en ambos términos.", ans:"6y(6x − y)" },
    { type:"open", q:"Factoriza el trinomio cuadrado perfecto:", expr:"x² + 6x + 9",
      sol:["√x² = x ,  √9 = 3","Verifica el término central: 2·(x)·(3) = 6x ✓","Centro positivo → suma"],
      ans:"(x + 3)²" },
    { type:"open", q:"Factoriza la diferencia de cuadrados:", expr:"x² − 49y²",
      sol:["√x² = x ,  √49y² = 7y","a² − b² = (a + b)(a − b)"], ans:"(x − 7y)(x + 7y)" },
    { type:"open", q:"Factoriza el trinomio de la forma x² + bx + c:", expr:"x² − 9x + 18",
      sol:["Dos números que multiplicados den 18 y sumados den −9","−6 · −3 = 18   y   −6 + (−3) = −9 ✓"],
      ans:"(x − 6)(x − 3)" },
    { type:"open", q:"Factoriza el trinomio de la forma ax² + bx + c:", expr:"5x² − 7x − 6",
      sol:["Multiplico 5 · (−6) = −30","−10 · 3 = −30 ,  −10 + 3 = −7 ✓","5x² − 10x + 3x − 6","5x(x − 2) + 3(x − 2)"],
      ans:"(5x + 3)(x − 2)" },
    { type:"open", q:"Factoriza la suma de cubos:", expr:"t³ + 8",
      sol:["∛t³ = t ,  ∛8 = 2","a³ + b³ = (a + b)(a² − ab + b²)"], ans:"(t + 2)(t² − 2t + 4)" },
    { type:"open", q:"Factoriza la diferencia de cubos:", expr:"27 − x³",
      sol:["∛27 = 3 ,  ∛x³ = x","a³ − b³ = (a − b)(a² + ab + b²)"], ans:"(3 − x)(9 + 3x + x²)" },
    { type:"open", q:"Factoriza por agrupación:", expr:"a² + ab + ac + bc",
      sol:["Agrupo de a dos: (a² + ab) + (ac + bc)","a(a + b) + c(a + b)","Factor común (a + b)"],
      ans:"(a + b)(a + c)" },
    { type:"mc", q:"¿Cuál de estos binomios es una diferencia de cuadrados factorizable?",
      opts:["x² + 16","x² − 16","x³ − 8","x² + 8x"], correct:1 },
  ]},
  { sec:"Ecuaciones cuadráticas", questions:[
    { type:"open", q:"Resuelve la ecuación:", expr:"b² − 27b + 140 = 0",
      sol:["Dos números: multiplicados 140, sumados −27","−20 · −7 = 140 ,  −20 + (−7) = −27 ✓","(b − 20)(b − 7) = 0"],
      ans:"b = 20  ó  b = 7" },
    { type:"open", q:"Resuelve la ecuación:", expr:"36y² − 25 = 0",
      sol:["Diferencia de cuadrados: (6y)² − (5)²","(6y − 5)(6y + 5) = 0","6y − 5 = 0 → y = 5/6","6y + 5 = 0 → y = −5/6"],
      ans:"y = 5/6  ó  y = −5/6" },
    { type:"open", q:"Resuelve la ecuación:", expr:"x² + 7x + 12 = 0",
      sol:["3 · 4 = 12 ,  3 + 4 = 7 ✓","(x + 3)(x + 4) = 0"], ans:"x = −3  ó  x = −4" },
    { type:"open", q:"Resuelve la ecuación:", expr:"x² − 36 = 0",
      sol:["Diferencia de cuadrados: (x)² − (6)²","(x − 6)(x + 6) = 0"], ans:"x = 6  ó  x = −6" },
  ]},
  { sec:"Funciones", questions:[
    { type:"mc", q:"La fórmula f(x) = mx + b corresponde a una función:", expr:"f(x) = mx + b",
      opts:["Cuadrática","Lineal / afín","Exponencial","Logarítmica"], correct:1 },
    { type:"mc", q:"La gráfica de una función cuadrática f(x) = ax² + bx + c es:",
      opts:["Una recta","Una parábola","Una curva oscilante","Una asíntota"], correct:1 },
    { type:"mc", q:"El producto cartesiano A × B es el conjunto de todos los:",
      opts:["Números reales","Pares ordenados (a, b)","Subconjuntos de A","Valores de salida"], correct:1 },
    { type:"mc", q:"En una función, el conjunto de valores de ENTRADA (x) se llama:",
      opts:["Rango","Imagen","Dominio","Asíntota"], correct:2 },
    { type:"mc", q:"La función exponencial f(x) = aˣ se caracteriza por tener:",
      opts:["Un vértice","Una asíntota horizontal","Pendiente constante","Tres términos"], correct:1 },
  ]},
  { sec:"Fracciones algebraicas", questions:[
    { type:"open", q:"Simplifica la fracción:", expr:"(x² − y²) / (x + y)",
      sol:["Factorizo el numerador (diferencia de cuadrados)","x² − y² = (x − y)(x + y)","= (x − y)(x + y) / (x + y)","Cancelo (x + y)"],
      ans:"x − y" },
    { type:"open", q:"Simplifica la fracción:", expr:"(a² − b²) / (a + b)²",
      sol:["Numerador: a² − b² = (a − b)(a + b)","Denominador: (a + b)² = (a + b)(a + b)","Cancelo un (a + b)"],
      ans:"(a − b) / (a + b)" },
  ]},
];

const KEYS=["A","B","C","D","E"];
let totalMC=0, answered={}, gotRight={};

function buildExam(){
  const root=document.getElementById("exam");
  root.innerHTML=""; totalMC=0; answered={}; gotRight={};
  let n=0;
  EXAM.forEach((block,si)=>{
    const sec=document.createElement("section");
    sec.classList.add("reveal");
    const secNum=String(si+1).padStart(2,"0");
    const mcInSec=block.questions.filter(q=>q.type==="mc").length;
    const prog=mcInSec?`<span class="sec-prog" id="prog-s${si}">0/${mcInSec}</span>`:"";
    sec.innerHTML=`<div class="sec-head"><span class="sec-num">${secNum}</span><h2>${block.sec}</h2>${prog}</div>`;
    sec.dataset.si=si; sec.dataset.mc=mcInSec;

    block.questions.forEach(item=>{
      n++; const id="q"+n;
      const card=document.createElement("div"); card.className="q";
      const exprHTML=item.expr?`<div class="expr">${item.expr}</div>`:"";
      if(item.type==="mc"){
        totalMC++;
        const optsHTML=item.opts.map((o,i)=>
          `<div class="opt" data-q="${id}" data-i="${i}" onclick="pick('${id}',${i},${item.correct},${si})">
             <span class="key">${KEYS[i]}</span><span>${o}</span><span class="mark"></span>
           </div>`).join("");
        card.innerHTML=`<div class="q-top"><span class="q-n">${n}</span>
            <div><span class="q-text">${item.q}</span>${exprHTML}</div></div>
          <div class="opts" id="opts-${id}">${optsHTML}</div>`;
      } else {
        const solLines=item.sol.map(l=>`<div class="line">${l}</div>`).join("");
        const noteHTML=item.note?`<div class="note">${item.note}</div>`:"";
        card.innerHTML=`<div class="q-top"><span class="q-n">${n}</span>
            <div><span class="q-text">${item.q}</span>${exprHTML}</div></div>
          <div class="open-actions">
            <button class="btn" onclick="toggleSol('${id}',this)">Ver solución</button>
          </div>
          <div class="sol" id="sol-${id}">
            <div class="sol-label">Solución</div>${solLines}${noteHTML}
            <span class="ans">→ ${item.ans}</span>
          </div>`;
      }
      sec.appendChild(card);
    });
    root.appendChild(sec);
  });
  document.getElementById("scoreTotal").textContent=totalMC;
  document.getElementById("finalGrade").textContent="—";
  document.getElementById("endMsg").textContent="Responde las de opción múltiple para ver tu resultado.";
  updateScore(); observeReveals();
}

function pick(id,i,correct,si){
  if(answered[id])return;
  answered[id]=true;
  document.querySelectorAll(`#opts-${id} .opt`).forEach(o=>{
    const idx=+o.dataset.i; o.classList.add("locked");
    if(idx===correct){o.classList.add("correct");o.querySelector(".mark").textContent="correcta";}
    else if(idx===i){o.classList.add("wrong");o.querySelector(".mark").textContent="tu elección";}
    else o.classList.add("dim");
  });
  if(i===correct)gotRight[id]=true;
  updateSecProg(si);
  updateScore();
}

function updateSecProg(si){
  const sec=document.querySelector(`section[data-si="${si}"]`);
  if(!sec)return;
  const el=document.getElementById("prog-s"+si);
  if(!el)return;
  const ids=[...sec.querySelectorAll(".opts")].map(o=>o.id.replace("opts-",""));
  const done=ids.filter(x=>answered[x]).length;
  el.textContent=`${done}/${sec.dataset.mc}`;
  if(done==+sec.dataset.mc)el.style.color="var(--green)";
}

let shown=0;
function updateScore(){
  const right=Object.keys(gotRight).length;
  const ansCount=Object.keys(answered).filter(k=>k.startsWith("q")).length;
  // count-up
  const target=right;
  const elNow=document.getElementById("scoreNow");
  cancelAnimationFrame(window._cu);
  const start=shown;
  const t0=performance.now();
  function step(t){
    const p=Math.min(1,(t-t0)/300);
    const v=Math.round(start+(target-start)*p);
    elNow.textContent=v; shown=v;
    if(p<1)window._cu=requestAnimationFrame(step);
  }
  window._cu=requestAnimationFrame(step);

  document.getElementById("barFill").style.width=(totalMC?right/totalMC*100:0)+"%";

  // finished all MC?
  const answeredMC=countAnsweredMC();
  if(answeredMC===totalMC && totalMC>0){
    const pct=Math.round(right/totalMC*100);
    document.getElementById("finalGrade").textContent=right+" / "+totalMC;
    let msg;
    if(pct>=80)msg="¡Excelente! Vas muy bien para el sábado. 🎉";
    else if(pct>=60)msg="¡Bien! Repasa los que fallaste y quedas lista. 💪";
    else msg="Tranquila, repite el simulacro y verás cómo mejoras. 📚";
    document.getElementById("endMsg").textContent=msg;
    const sb=document.getElementById("scorebar");
    sb.classList.remove("done"); void sb.offsetWidth; sb.classList.add("done");
    if(!window._celebrated){window._celebrated=true; if(pct>=60)confetti();}
  }
}
function countAnsweredMC(){
  let c=0;
  EXAM.forEach((b,si)=>b.questions.forEach((q,qi)=>{}));
  // count answered ids that are mc
  let n=0,mc=0;
  EXAM.forEach(b=>b.questions.forEach(item=>{n++;if(item.type==="mc"&&answered["q"+n])mc++;}));
  return mc;
}

function toggleSol(id,btn){
  const sol=document.getElementById("sol-"+id);
  const open=sol.classList.toggle("show");
  btn.textContent=open?"Ocultar solución":"Ver solución";
  btn.classList.toggle("ghost",open);
}

function resetExam(){
  window._celebrated=false; shown=0;
  buildExam();
  window.scrollTo({top:0,behavior:"smooth"});
}

/* reveal on scroll */
let io;
function observeReveals(){
  if(io)io.disconnect();
  io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

/* lightweight confetti */
function confetti(){
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  const colors=["#FF5C4D","#FFB23E","#1E9E6B","#1B2440"];
  for(let i=0;i<70;i++){
    const c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.background=colors[i%colors.length];
    c.style.animation=`fall ${1.6+Math.random()*1.4}s ${Math.random()*0.4}s linear forwards`;
    c.style.opacity=0.9;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3600);
  }
}

buildExam();
