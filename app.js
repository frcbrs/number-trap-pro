// Il sito legge da contenuti.js, che funziona anche aprendo index.html senza server locale.
const $=(s,ctx=document)=>ctx.querySelector(s);
const el=(tag,cls,text)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=text;return x};
let DATA=null, filter='Speciale', query='';
// Consente di evidenziare parole in grassetto tramite **testo** nei paragrafi.
// Tutto il resto viene aggiunto come testo, senza interpretare HTML.
function boldParagraph(value) {
  const paragraph = el('p');
  const parts = String(value).split(/(\*\*[^*]+\*\*)/g);
  for (const part of parts) {
    if (part.startsWith('**') && part.endsWith('**')) {
      paragraph.append(el('strong', null, part.slice(2, -2)));
    } else {
      paragraph.append(document.createTextNode(part));
    }
  }
  return paragraph;
}
function showRules(){const container=$('#rules-content');for(const s of DATA.sections){const art=el('article');art.id='regola-'+s.id;art.append(el('h3',null,s.title));for(const p of s.paragraphs)art.append(boldParagraph(p));container.append(art)}}
function showClarifications(){const grid=$('#clarification-grid');DATA.clarifications.forEach((c,i)=>{const article=el('article','note-card');article.append(el('span','flag',String(i+1)),el('h3',null,c.title),el('p',null,c.text));grid.append(article)});const examples=$('#examples-grid');DATA.examples.forEach(c=>{const d=el('article','example');d.append(el('h4',null,c.title),el('p',null,c.body));examples.append(d)})}
function openCard(c){const dlg=$('#card-dialog');$('#dialog-img').src=c.image;$('#dialog-img').alt='Carta originale '+c.name;$('#dialog-kicker').textContent=c.category.toUpperCase()+' • '+c.count+' NEL MAZZO';$('#dialog-title').textContent=c.name;$('#dialog-effect').textContent=c.effect;$('#dialog-description').textContent=c.details;dlg.showModal()}
function renderCards(){const grid=$('#cards-grid');grid.replaceChildren();const cards=DATA.cards.filter(c=>(c.category===filter)&&(c.name+' '+c.effect+' '+c.details).toLowerCase().includes(query));$('#no-results').hidden=cards.length>0;for(const c of cards){const btn=el('button','card-button');btn.type='button';btn.setAttribute('aria-label','Apri scheda '+c.name);const img=el('img');img.src=c.image;img.alt='Carta '+c.name;img.loading='lazy';img.width=530;img.height=747;const foot=el('span','card-foot');foot.append(el('strong',null,c.name),el('span','qty','×'+c.count));btn.append(img,foot);btn.addEventListener('click',()=>openCard(c));grid.append(btn)}}
function wire(){for(const b of document.querySelectorAll('.filter'))b.addEventListener('click',()=>{filter=b.dataset.filter;for(const x of document.querySelectorAll('.filter')){x.classList.toggle('is-active',x===b);x.setAttribute('aria-pressed',String(x===b))}renderCards()});$('#card-search').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();renderCards()});$('#close-dialog').addEventListener('click',()=>$('#card-dialog').close());$('#dialog-back').addEventListener('click',()=>$('#card-dialog').close());$('#card-dialog').addEventListener('click',e=>{if(e.target===$('#card-dialog'))e.target.close()})}
async function start(){try{DATA=window.NUMBER_TRAP_DATA;if(!DATA)throw new Error('Contenuti mancanti. Verifica che contenuti.js sia presente.');showRules();showClarifications();wire();renderCards()}catch(e){console.error(e);const box=$('#cards-grid');box.append(el('p',null,'Non è stato possibile caricare il catalogo. Verifica che tutti i file del sito si trovino nella stessa cartella.'))}}
start();
