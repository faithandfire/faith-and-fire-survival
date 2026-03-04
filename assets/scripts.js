// Load header/footer partials and init behaviors
(async function loadPartials(){
  const slots=document.querySelectorAll('[data-include]');
  for(const el of slots){
    const url=el.getAttribute('data-include');
    try{const res=await fetch(url); if(!res.ok) throw new Error(url+': '+res.status); el.outerHTML=await res.text();}
    catch(e){console.error('Include failed',e);}
  }
  setTimeout(()=>{
    const burger=document.querySelector('.burger');
    const menu=document.querySelector('.menu');
    burger?.addEventListener('click',()=>{const open=menu.classList.toggle('open');burger.setAttribute('aria-expanded', String(open));});
    const here=location.pathname.split('/').pop()||'index.html';
    document.querySelectorAll('nav a[href]').forEach(a=>{if(a.getAttribute('href')===here)a.setAttribute('aria-current','page');});
    const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  },50);
})();
