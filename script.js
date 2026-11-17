/* ---- Fill these in: data URIs or file paths for your images / song ---- */
var A={song:"assets/song.mp3",flr:"assets/flr.webp",fll:"assets/fll.webp",p1:"assets/p1.jpg",p2:"assets/p2.jpg",p3:"assets/p3.jpg",p4:"assets/p4.jpg",fl:""};
var WHATSAPP="";               // digits only, e.g. "237XXXXXXXXX"; empty = pick the contact
var TARGET=new Date("2026-12-19T11:00:00+01:00");
/* ---------------------------------------------------------------------- */
var R=document.documentElement.style;
["p1","p2","p3","p4"].forEach(function(k){if(A[k])R.setProperty("--"+k,'url("'+A[k]+'")')});
function flowerSVG(){var f=function(n){return +n.toFixed(1)},o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><defs><radialGradient id="p"><stop offset="0" stop-color="#f6a27f"/><stop offset=".65" stop-color="#e2673f"/><stop offset="1" stop-color="#b9421f"/></radialGradient><radialGradient id="q"><stop offset="0" stop-color="#ffd3b4"/><stop offset="1" stop-color="#ee8559"/></radialGradient></defs>';
 function br(x,y,a,L,n){var s='<g transform="translate('+x+' '+y+') rotate('+a+')"><path d="M0 0Q'+L/2+' -14 '+L+' 0" stroke="#5f8b75" fill="none" stroke-width="2"/>';for(var i=1;i<=n;i++){var t=i/n;s+='<ellipse cx="'+f(L*t)+'" cy="'+f(-28*t*(1-t)+(i%2?9:-9))+'" rx="'+f(12-t*4)+'" ry="7" fill="'+(i%2?'#8db39e':'#6f9c87')+'"/>'}return s+'</g>'}
 function pe(x,y,R){var s='<g transform="translate('+x+' '+y+')">';[[1,9,0],[.72,8,20],[.45,7,10],[.22,6,30]].forEach(function(r,i){for(var k=0;k<r[1];k++)s+='<ellipse rx="'+f(R*.34*r[0])+'" ry="'+f(R*.5*r[0])+'" cy="'+f(-R*.42*r[0])+'" fill="url(#'+(i%2?'q':'p')+')" stroke="#b9421f55" stroke-width=".8" transform="rotate('+f(k*360/r[1]+r[2])+')"/>'});return s+'<circle r="'+f(R*.1)+'" fill="#f4c35a"/></g>'}
 o+=br(0,40,28,200,10)+br(40,0,64,210,10)+br(0,130,6,130,7)+br(60,0,80,120,6)+pe(95,90,56)+pe(175,38,36)+pe(38,172,34)+pe(138,150,26)+pe(215,105,20);return o+'</svg>'}
R.setProperty("--flr",'url("'+A.flr+'")');R.setProperty("--fll",'url("'+A.fll+'")');R.setProperty("--fl",'url("'+(A.fl||"data:image/svg+xml,"+encodeURIComponent(flowerSVG()))+'")');

function cal(id,hi,off){var h="";["Mo","Tu","We","Th","Fr","Sa","Su"].forEach(function(d){h+='<span class="h">'+d+'</span>'});
  h+="<span></span>";for(var d=1;d<=31;d++)h+='<span'+(d==hi?' class="on"':d==off?' class="off"':'')+'>'+d+'</span>';
  document.getElementById(id).innerHTML=h}
cal("c1",19,26);cal("c2",26,19);

var hall='<svg viewBox="0 0 350 200"><rect y="178" width="350" height="22" fill="#e6e1d6"/><polygon points="55,50 175,14 295,50" fill="#f6d7c3" stroke="#0e5d49" stroke-width="2"/><rect x="62" y="50" width="226" height="128" fill="#fff" stroke="#0e5d49" stroke-width="2"/><rect x="150" y="60" width="50" height="14" fill="#fff" stroke="#0e5d49"/><path d="M135 178v-48a40 40 0 0 1 80 0v48z" fill="#0e5d49"/><g fill="#0e5d49"><rect x="88" y="92" width="9" height="84"/><rect x="118" y="92" width="9" height="84"/><rect x="223" y="92" width="9" height="84"/><rect x="253" y="92" width="9" height="84"/></g><rect x="172" y="2" width="24" height="11" fill="#c8560f"/><ellipse cx="32" cy="172" rx="16" ry="28" fill="#2e8f73"/><ellipse cx="318" cy="172" rx="16" ry="28" fill="#2e8f73"/></svg>';
var church='<svg viewBox="0 0 350 200"><rect y="178" width="350" height="22" fill="#e6e1d6"/><rect x="142" y="30" width="66" height="30" fill="#fff" stroke="#0e5d49" stroke-width="2"/><path d="M136 30h78l-8-10h-62z" fill="#0e5d49"/><path d="M175 12v14M168 19h14" stroke="#c8560f" stroke-width="3"/><polygon points="100,100 175,56 250,100" fill="#f6d7c3" stroke="#0e5d49" stroke-width="2"/><rect x="108" y="100" width="134" height="78" fill="#fff" stroke="#0e5d49" stroke-width="2"/><circle cx="175" cy="84" r="9" fill="#c8560f" stroke="#0e5d49" stroke-width="2"/><path d="M158 178v-34a17 17 0 0 1 34 0v34z" fill="#0e5d49"/><rect x="122" y="116" width="18" height="30" rx="9" fill="#e8895a" stroke="#0e5d49" stroke-width="2"/><rect x="210" y="116" width="18" height="30" rx="9" fill="#e8895a" stroke="#0e5d49" stroke-width="2"/><ellipse cx="62" cy="170" rx="16" ry="26" fill="#2e8f73"/><ellipse cx="288" cy="170" rx="16" ry="26" fill="#2e8f73"/></svg>';
var arc='<svg viewBox="0 0 350 200"><rect y="178" width="350" height="22" fill="#e6e1d6"/><rect x="50" y="70" width="250" height="108" fill="#fff" stroke="#0e5d49" stroke-width="2"/><rect x="40" y="54" width="270" height="18" fill="#f6d7c3" stroke="#0e5d49" stroke-width="2"/><g fill="#0e5d49"><path d="M75 178v-44a20 20 0 0 1 40 0v44z"/><path d="M155 178v-44a20 20 0 0 1 40 0v44z"/><path d="M235 178v-44a20 20 0 0 1 40 0v44z"/></g><circle cx="175" cy="38" r="9" fill="#c8560f"/><path d="M175 47v7" stroke="#0e5d49" stroke-width="2"/></svg>';
var V=[[hall,"Maroua Town Hall","Civil wedding · Dec 19 · 11 AM","Hôtel+de+ville+Maroua+Cameroun"],
 [church,"Patmos Baptist Church","Church ceremony · Dec 26 · 1 PM · Jouvence","Patmos+Baptist+Church+Jouvence+Yaound%C3%A9"],
 [arc,"Le Mistral Banquet Hall","Reception · Dec 26 · 7 PM · montée Jouvence","Salle+des+f%C3%AAtes+Le+Mistral+Jouvence+Yaound%C3%A9"]];
document.getElementById("vl").innerHTML=V.map(function(v){return '<div class="vn">'+v[0]+'<h3>'+v[1]+'</h3><div class="cap">'+v[2]+'</div><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query='+v[3]+'">Click here for directions</a></div>'}).join("");

/* music */
var au=new Audio();au.loop=true;au.preload="auto";
if(A.song)au.src=A.song;
var mus=document.getElementById("mus");
var ctx,mt,st=0,nx=0;
var CH=[[38,62,66,69,74],[45,61,64,69,73],[47,62,66,71,74],[43,62,67,71,74]],PT=[1,2,3,2,3,2,1];
function nt(m,t,d,v,ty){var o=ctx.createOscillator(),g=ctx.createGain();o.type=ty||"sine";o.frequency.value=440*Math.pow(2,(m-69)/12);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.0008,t+d);o.connect(g);g.connect(ctx.out);o.start(t);o.stop(t+d+.05)}
function sched(){while(nx<ctx.currentTime+.6){var c=CH[Math.floor(st/8)%4],s=st%8,E=.42;if(s==0){nt(c[0],nx,3.2,.22,"triangle");nt(c[4],nx+E*2,2.6,.05)}else{var m=c[PT[s-1]];nt(m,nx,1.4,.13);nt(m+12,nx,.5,.03)}nx+=E;st++}}
function startGen(){if(!ctx){ctx=new(window.AudioContext||window.webkitAudioContext)();var o=ctx.createGain(),d=ctx.createDelay(1),fb=ctx.createGain();o.gain.value=.6;d.delayTime.value=.42;fb.gain.value=.42;d.connect(fb);fb.connect(d);o.connect(d);d.connect(ctx.destination);o.connect(ctx.destination);ctx.out=o}ctx.resume();nx=ctx.currentTime+.1;clearInterval(mt);mt=setInterval(sched,200)}
function stopGen(){clearInterval(mt);if(ctx)ctx.suspend()}
function setM(on){mus.classList.toggle("off",!on);if(A.song){on?(function(){var q=au.play();if(q&&q.catch)q.catch(function(){mus.classList.add("off")})})():au.pause()}else{on?startGen():stopGen()}}
mus.addEventListener("click",function(){setM(mus.classList.contains("off"))});
var env=document.getElementById("env");
var opened=false;env.addEventListener("click",function(){if(opened)return;opened=true;env.classList.add("go");setM(true);setTimeout(function(){env.classList.add("open");window.scrollTo(0,0)},950)});
env.addEventListener("transitionend",function(){});
var pls=document.createElement("div");pls.className="pls";document.body.appendChild(pls);
setInterval(function(){if(!env.classList.contains("open"))return;var p=document.createElement("i"),c=["#f3cdb5","#e9875a","#fbf3ea","#7aa48c"];p.style.cssText="left:"+Math.random()*100+"%;width:"+(8+Math.random()*8)+"px;height:"+(6+Math.random()*6)+"px;background:"+c[Math.random()*4|0]+";animation-duration:"+(8+Math.random()*6)+"s";pls.appendChild(p);setTimeout(function(){p.remove()},15000)},900);
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".cal,.vn svg,.vn h3,.panel>*,.arc .arch,.dress>:not(.fl),.gift>*,.sw,.verse,.rs,.pill").forEach(function(el){el.classList.add("rv");io.observe(el)});
document.getElementById("bk").addEventListener("click",function(){env.classList.remove("open");env.classList.remove("go");opened=false});

/* countdown */
function p(x){return String(x).padStart(2,"0")}
function tick(){var S=Math.floor(Math.max(0,TARGET-new Date())/1000);
  var dd=Math.floor(S/86400),hh=Math.floor(S%86400/3600),mm=Math.floor(S%3600/60),ss=S%60;[["d",dd,dd/60],["h",hh,hh/24],["m",mm,mm/60],["s",ss,ss/60]].forEach(function(x){var r=document.getElementById("r"+x[0]);r.style.setProperty("--p",Math.min(x[2],1)*360+"deg");r.firstChild.textContent=x[0]=="d"?x[1]:p(x[1])})}
tick();setInterval(tick,1000);
var hr=document.querySelector(".hero");for(var i=0;i<18;i++){var s=document.createElement("i");s.className="sp";s.style.cssText="left:"+Math.random()*96+"%;top:"+Math.random()*70+"%;animation-delay:"+Math.random()*4+"s;animation-duration:"+(3+Math.random()*3)+"s";hr.appendChild(s)}

/* rsvp */
document.getElementById("rb").addEventListener("click",function(){document.getElementById("f").classList.toggle("show")});
document.getElementById("f").addEventListener("submit",function(e){e.preventDefault();
  var ev=[].map.call(document.querySelectorAll("#f input[type=checkbox]:checked"),function(c){return "• "+c.value});
  var t="Hello! RSVP for Collins & Trésor’s wedding.\n\nName: "+document.getElementById("nm").value+"\nGuests: "+document.getElementById("n").value+"\nAttending:\n"+(ev.length?ev.join("\n"):"• (none selected)")+(document.getElementById("msg").value?"\n\nMessage: "+document.getElementById("msg").value:"");
  window.open("https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(t),"_blank")});
