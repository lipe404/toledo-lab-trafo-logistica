'use client';
import { useState } from 'react';
const profiles=[
 {id:'fracionada',name:'Fracionada',lead:'Três pontos de consolidação',duration:'2 dias úteis',desc:'Vários lotes compartilham espaço. A rota passa por uma central antes da distribuição regional.',stops:['Contagem','João Monlevade','Ipatinga'],path:'M60 206 Q120 100 189 131 T330 64',points:[[60,206],[189,131],[330,64]],state:'EM CONSOLIDAÇÃO'},
 {id:'dedicada',name:'Dedicada',lead:'Uma operação, um veículo',duration:'1 dia útil',desc:'Um fluxo de coleta e entrega dedicado, sem redistribuição de volumes na central.',stops:['Contagem','Ipatinga'],path:'M60 206 Q253 267 330 64',points:[[60,206],[330,64]],state:'EM TRÂNSITO'},
 {id:'programada',name:'Programada',lead:'Volumes com janela definida',duration:'3 dias úteis',desc:'Uma rota de demonstração com janelas planejadas para recebimentos recorrentes.',stops:['Contagem','Itabira','Nova Era','Ipatinga'],path:'M60 206 Q90 147 124 166 T225 94 T330 64',points:[[60,206],[124,166],[225,94],[330,64]],state:'JANELA PROGRAMADA'},
] as const;
export default function Page(){
 const [selected,setSelected]=useState(0);
 const p=profiles[selected];
 return <><header><a className="identity" href="#"><span aria-hidden="true">▦</span>TRAFO<span>LOGÍSTICA</span></a><a href="#rotas">Painel demonstrativo</a></header><main>
 <section className="hero"><div className="eyebrow"><span>PROJETO CONCEITUAL</span><span>LOGÍSTICA B2B</span></div><h1>A rota fica<br/>mais <em>clara.</em></h1><p>Veja como diferentes perfis de carga mudam o caminho entre origem e destino.</p><a className="cta" href="#rotas">Explorar as rotas</a><div className="line" aria-hidden="true"/></section>
 <section id="rotas" className="dash"><div className="head"><div><p className="overline">CARGA / PLANEJAMENTO</p><h2>Painel de rota</h2></div><p className="demo">Dados simulados · Sem rastreio real</p></div>
 <div className="choices" role="group" aria-label="Perfil de carga">{profiles.map((x,i)=><button type="button" key={x.id} aria-pressed={i===selected} onClick={()=>setSelected(i)}>{x.name}</button>)}</div>
 <div className="views" aria-live="polite"><figure aria-label={'Trajeto ilustrativo de Contagem a Ipatinga: '+p.name}><svg width="400" height="268" viewBox="0 0 400 268" role="img" aria-label="Diagrama da rota, fora de escala"><defs><pattern id="mesh" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="#809595" strokeOpacity=".5"/></pattern></defs><rect width="400" height="268" fill="url(#mesh)"/><path d="M0 237L74 150l42 15 62-66 59 29 68-92L400 16M22 0l22 75 127 90 21 103M259 0l15 80 85 95 41 99" fill="none" stroke="#385b5b" strokeWidth="1"/><path key={p.id} className="route" d={p.path} pathLength="1" stroke="#c8ff68" strokeWidth="4" fill="none" strokeLinecap="round"/>{p.points.map(([x,y])=><circle key={x} cx={x} cy={y} r="5" fill="#eff9d9" stroke="#183034" strokeWidth="2"/>)}<text x="39" y="233" fill="#f3f8e8" fontSize="13">CONTAGEM</text><text x="308" y="43" fill="#f3f8e8" fontSize="13">IPATINGA</text></svg><figcaption>MINAS GERAIS / ESQUEMA NÃO GEOGRÁFICO</figcaption></figure>
 <article><p className="state">{p.state}</p><h3>{p.lead}</h3><p>{p.desc}</p><dl><dt>Prazo ilustrativo</dt><dd>{p.duration}</dd></dl><ol aria-label="Paradas na ordem da rota">{p.stops.map(x=><li key={x}>{x}</li>)}</ol></article></div>
 </section></main><footer><strong>TRAFO LOGÍSTICA</strong><span>Demonstração de portfólio. Não coleta dados.</span></footer></>;
}
