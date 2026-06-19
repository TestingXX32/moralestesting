const EXAM = [
  { sec:"Concepto y naturaleza de la administración", questions:[
    { type:"mc", q:"¿Cuáles son las cuatro funciones del proceso administrativo?",
      opts:["Producir, vender, comprar y pagar","Planear, organizar, dirigir y controlar","Analizar, medir, corregir y repetir","Liderar, motivar, premiar y sancionar"], correct:1 },
    { type:"mc", q:"La palabra «administración» viene del latín ad y minister, que significa:",
      opts:["Mandar y obedecer","Dirección hacia + subordinación o servicio","Dinero y poder","Orden y castigo"], correct:1 },
    { type:"mc", q:"La administración se puede interpretar de tres maneras:",
      opts:["Ciencia, arte y técnica","Teoría, práctica y método","Pasado, presente y futuro","Pública, privada y mixta"], correct:0 },
    { type:"mc", q:"La administración como ARTE se define principalmente por:",
      opts:["El uso de máquinas","La creatividad y la intuición","Las leyes y normas","Los registros contables"], correct:1 },
    { type:"mc", q:"Considerar la administración como CIENCIA implica que:",
      opts:["Se basa en la suerte","Solo la practican expertos","Posee principios y se basa en la observación","No se puede aprender"], correct:2 },
  ]},
  { sec:"Eficiencia, eficacia y elementos", questions:[
    { type:"mc", q:"La EFICIENCIA es:",
      opts:["Lograr objetivos sin importar el costo","Obtener los mejores resultados con la menor cantidad de recursos","Trabajar muchas horas","Cumplir solo lo mínimo"], correct:1 },
    { type:"mc", q:"La EFICACIA es:",
      opts:["Ahorrar recursos","La capacidad de lograr los objetivos y metas propuestas","Evitar errores","Reducir personal"], correct:1 },
    { type:"mc", q:"La PLANEACIÓN consiste en:",
      opts:["Castigar a los empleados","Definir los objetivos y los medios para alcanzar las metas","Vender productos","Contratar personal"], correct:1 },
    { type:"mc", q:"La DIRECCIÓN se refiere a:",
      opts:["Guardar el dinero","La orientación y conducción de los recursos hacia los objetivos","Limpiar la empresa","Comprar materia prima"], correct:1 },
    { type:"mc", q:"El ADMINISTRADOR es:",
      opts:["El dueño del dinero","La persona encargada de la tarea administrativa en la organización","Un cliente","Un proveedor"], correct:1 },
  ]},
  { sec:"Evolución histórica de la administración", questions:[
    { type:"mc", q:"En Sumeria (5000 a.C.), ¿qué permitió el surgimiento de los primeros centros administrativos?",
      opts:["La rueda","La escritura (registros en tablillas de arcilla)","La moneda","El fuego"], correct:1 },
    { type:"mc", q:"En Babilonia, el modo de vida se basaba en:",
      opts:["El comercio marítimo","La ley y la justicia","La agricultura","La guerra"], correct:1 },
    { type:"mc", q:"El filósofo que sentó las bases para mejorar el gobierno en China fue:",
      opts:["Sócrates","Confucio","Platón","Aristóteles"], correct:1 },
    { type:"mc", q:"Aristóteles distinguió tres formas de administración pública:",
      opts:["Monarquía, aristocracia y democracia","Capitalismo, socialismo y comunismo","Norte, centro y sur","Pasado, presente y futuro"], correct:0 },
    { type:"mc", q:"La Revolución Industrial se caracterizó principalmente por:",
      opts:["El descubrimiento de América","La mecanización de la industria y la máquina de vapor","La invención de internet","La caída del Imperio Romano"], correct:1 },
  ]},
  { sec:"Organización y empresa", questions:[
    { type:"mc", q:"¿Cuál es la principal diferencia entre una organización y una empresa?",
      opts:["La empresa es más pequeña","La empresa tiene ánimo de lucro","La organización no tiene personas","No hay ninguna diferencia"], correct:1 },
    { type:"mc", q:"La EMPRESA es una unidad económico-social que, mediante capital, trabajo y recursos, produce:",
      opts:["Solo dinero","Bienes y servicios","Solo empleos","Solo impuestos"], correct:1 },
    { type:"mc", q:"La SINERGIA es el efecto mediante el cual:",
      opts:["Cada quien trabaja por su lado","El trabajo en conjunto supera la suma de esfuerzos individuales","Se reducen los costos","Se despide personal"], correct:1 },
    { type:"mc", q:"La DIVISIÓN DEL TRABAJO consiste en:",
      opts:["Repartir las ganancias","Descomponer una actividad compleja en tareas simples","Dividir la empresa en dos","Trabajar menos horas"], correct:1 },
    { type:"mc", q:"La MISIÓN de una empresa es:",
      opts:["El logo de la empresa","La finalidad o razón de ser de la organización","El edificio","La lista de empleados"], correct:1 },
  ]},
  { sec:"Clasificación de empresas y sistemas", questions:[
    { type:"mc", q:"Una empresa funciona como SISTEMA ABIERTO con los elementos:",
      opts:["Norte, sur, este y oeste","Entradas, procesamiento, salida y retroalimentación","Jefe, empleado, cliente y proveedor","Lunes, martes, miércoles y jueves"], correct:1 },
    { type:"mc", q:"Según su TAMAÑO, las empresas se clasifican en:",
      opts:["Buenas y malas","Micro, pequeña, mediana y grande","Nuevas y viejas","Locales e internacionales"], correct:1 },
    { type:"mc", q:"Las empresas que producen bienes transformando materias primas son:",
      opts:["Comerciales","Industriales","De servicios","Públicas"], correct:1 },
    { type:"mc", q:"Las empresas que son intermediarias entre el productor y el consumidor son:",
      opts:["Industriales","Comerciales","De servicios","Privadas"], correct:1 },
    { type:"mc", q:"Según el origen de su capital, las empresas se clasifican en:",
      opts:["Privadas y públicas","Grandes y pequeñas","Industriales y comerciales","Nacionales y extranjeras"], correct:0 },
    { type:"open", q:"Desarrolla: menciona los cinco tipos de recursos de una empresa.",
      sol:["Recursos humanos","Recursos financieros","Recursos materiales (o físicos)","Recursos administrativos","Recursos mercadológicos"],
      ans:"Humanos, financieros, materiales, administrativos y mercadológicos." },
  ]},
  { sec:"Teorías administrativas: Taylor, Fayol y Weber", questions:[
    { type:"mc", q:"El padre de la ADMINISTRACIÓN CIENTÍFICA es:",
      opts:["Henri Fayol","Frederick W. Taylor","Elton Mayo","Max Weber"], correct:1 },
    { type:"mc", q:"El padre del PROCESO ADMINISTRATIVO, que formuló 14 principios, es:",
      opts:["Frederick W. Taylor","Henri Fayol","Abraham Maslow","Confucio"], correct:1 },
    { type:"mc", q:"¿Cuántos principios administrativos formuló Henri Fayol?",
      opts:["4","7","14","20"], correct:2 },
    { type:"mc", q:"Max Weber es el representante de la:",
      opts:["Teoría de las relaciones humanas","Teoría de la burocracia","Administración científica","Teoría matemática"], correct:1 },
    { type:"open", q:"Desarrolla: menciona los cuatro principios de la administración científica de Taylor.",
      sol:["Asignación científica de tareas","Selección y formación","Colaboración","División del trabajo"],
      ans:"Asignación científica de tareas, selección y formación, colaboración y división del trabajo." },
  ]},
  { sec:"Teoría de las relaciones humanas", questions:[
    { type:"mc", q:"¿Quién fue el fundador de la teoría de las relaciones humanas?",
      opts:["Taylor","Elton Mayo","Fayol","Maslow"], correct:1 },
    { type:"mc", q:"La teoría de las relaciones humanas surgió en:",
      opts:["Los años 30","La Edad Media","El año 2000","La prehistoria"], correct:0 },
    { type:"mc", q:"El experimento HAWTHORNE buscaba establecer la relación entre:",
      opts:["El precio y la demanda","La satisfacción del trabajador y su productividad","El capital y el trabajo","La oferta y la demanda"], correct:1 },
    { type:"mc", q:"¿Cuántas fases tuvo el experimento Hawthorne?",
      opts:["2","3","4","5"], correct:2 },
    { type:"mc", q:"El proceso básico de la comunicación es:",
      opts:["Receptor → Canal → Emisor","Emisor → Mensaje → Canal → Receptor","Mensaje → Emisor → Receptor","Canal → Mensaje → Emisor"], correct:1 },
    { type:"mc", q:"La organización FORMAL es la estructura oficial; la organización INFORMAL son:",
      opts:["Las reglas escritas","Las relaciones sociales espontáneas","Los organigramas","Los contratos"], correct:1 },
    { type:"mc", q:"Según Elton Mayo, el trabajador no se motiva solo por dinero, sino también por:",
      opts:["Más horas de trabajo","Recompensas sociales (sentirse valorado)","Más máquinas","Menos descanso"], correct:1 },
    { type:"open", q:"Desarrolla: menciona los cinco niveles de la pirámide de Maslow (de abajo hacia arriba).",
      sol:["Necesidades fisiológicas","Necesidades de seguridad","Necesidades sociales","Necesidades de estima","Autorrealización"],
      ans:"Fisiológicas, seguridad, sociales, estima y autorrealización." },
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
      if(item.type==="mc"){
        totalMC++;
        const optsHTML=item.opts.map((o,i)=>
          `<div class="opt" data-q="${id}" data-i="${i}" onclick="pick('${id}',${i},${item.correct},${si})">
             <span class="key">${KEYS[i]}</span><span>${o}</span><span class="mark"></span>
           </div>`).join("");
        card.innerHTML=`<div class="q-top"><span class="q-n">${n}</span>
            <div><span class="q-text">${item.q}</span></div></div>
          <div class="opts" id="opts-${id}">${optsHTML}</div>`;
      } else {
        const solLines=item.sol.map(l=>`<div class="line">${l}</div>`).join("");
        card.innerHTML=`<div class="q-top"><span class="q-n">${n}</span>
            <div><span class="q-text">${item.q}</span></div></div>
          <div class="open-actions">
            <button class="btn" onclick="toggleSol('${id}',this)">Ver respuesta</button>
          </div>
          <div class="sol" id="sol-${id}">
            <div class="sol-label">Respuesta modelo</div>${solLines}
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
  updateSecProg(si); updateScore();
}

function updateSecProg(si){
  const sec=document.querySelector(`section[data-si="${si}"]`); if(!sec)return;
  const el=document.getElementById("prog-s"+si); if(!el)return;
  const ids=[...sec.querySelectorAll(".opts")].map(o=>o.id.replace("opts-",""));
  const done=ids.filter(x=>answered[x]).length;
  el.textContent=`${done}/${sec.dataset.mc}`;
  if(done==+sec.dataset.mc)el.style.color="var(--green)";
}

let shown=0;
function updateScore(){
  const right=Object.keys(gotRight).length;
  const elNow=document.getElementById("scoreNow");
  cancelAnimationFrame(window._cu);
  const start=shown, t0=performance.now(), target=right;
  function step(t){const p=Math.min(1,(t-t0)/300);const v=Math.round(start+(target-start)*p);
    elNow.textContent=v; shown=v; if(p<1)window._cu=requestAnimationFrame(step);}
  window._cu=requestAnimationFrame(step);
  document.getElementById("barFill").style.width=(totalMC?right/totalMC*100:0)+"%";

  let n=0,mc=0;
  EXAM.forEach(b=>b.questions.forEach(item=>{n++;if(item.type==="mc"&&answered["q"+n])mc++;}));
  if(mc===totalMC && totalMC>0){
    const pct=Math.round(right/totalMC*100);
    document.getElementById("finalGrade").textContent=right+" / "+totalMC;
    let msg;
    if(pct>=80)msg="¡Excelente! Te sabes la teoría muy bien. 🎉";
    else if(pct>=60)msg="¡Bien! Repasa los que fallaste y quedas lista. 💪";
    else msg="Tranquila, repite el simulacro y verás cómo mejoras. 📚";
    document.getElementById("endMsg").textContent=msg;
    const sb=document.getElementById("scorebar");
    sb.classList.remove("done"); void sb.offsetWidth; sb.classList.add("done");
    if(!window._celebrated){window._celebrated=true; if(pct>=60)confetti();}
  }
}

function toggleSol(id,btn){
  const sol=document.getElementById("sol-"+id);
  const open=sol.classList.toggle("show");
  btn.textContent=open?"Ocultar respuesta":"Ver respuesta";
  btn.classList.toggle("ghost",open);
}

function resetExam(){window._celebrated=false; shown=0; buildExam(); window.scrollTo({top:0,behavior:"smooth"});}

let io;
function observeReveals(){
  if(io)io.disconnect();
  io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

function confetti(){
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  const colors=["#7C5CFF","#4FB6F7","#1E9E6B","#221C40"];
  for(let i=0;i<70;i++){
    const c=document.createElement("div"); c.className="confetti";
    c.style.left=Math.random()*100+"vw"; c.style.background=colors[i%colors.length];
    c.style.animation=`fall ${1.6+Math.random()*1.4}s ${Math.random()*0.4}s linear forwards`;
    c.style.opacity=0.9; document.body.appendChild(c);
    setTimeout(()=>c.remove(),3600);
  }
}

buildExam();
