(function(){
  const pages={'index.html':'inicio','':'inicio','como-ajudar.html':'como-ajudar','transparencia.html':'transparencia','contato.html':'contato','sobre.html':'sobre','privacidade.html':'privacidade','cookies.html':'cookies','termos.html':'termos'};
  const file=(location.pathname.split('/').pop()||'index.html');
  const active=document.body.dataset.page||pages[file]||'inicio';
  const nav=[['inicio','index.html','Início'],['como-ajudar','como-ajudar.html','Como ajudar'],['transparencia','transparencia.html','Transparência'],['contato','contato.html','Contato'],['sobre','sobre.html','Sobre']];
  const instagram='https://www.instagram.com/missao.rua/';
  const whatsapp='https://wa.me/5511998675130?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Miss%C3%A3o%20Rua.';
  const pixKey='214.794.088-75';
  const emails={
    contato:'contato@missaorua.com.br',
    doacoes:'doacoes@missaorua.com.br',
    parcerias:'parcerias@missaorua.com.br',
    voluntarios:'voluntarios@missaorua.com.br'
  };
  const style=document.createElement('style');
  style.textContent=`
    .site-icon{width:50px;height:50px;border-radius:50%;object-fit:cover;border:3px solid #7c3511;box-shadow:0 8px 22px rgba(126,62,16,.22);background:#ffe4a8}
    .help-hero-grid{display:grid;grid-template-columns:minmax(0,.82fr) minmax(480px,1.18fr);gap:48px;align-items:center}
    .help-card-img{display:block;width:100%;border-radius:32px;box-shadow:0 22px 70px rgba(83,45,13,.13)}
    .smart-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
    .smart-card{position:relative;overflow:hidden;background:linear-gradient(145deg,#fffef8,#fff3df 70%,#f5dfb8);border:1px solid rgba(79,50,25,.14);box-shadow:0 16px 42px rgba(83,45,13,.09);border-radius:26px;padding:24px;display:flex;gap:18px;align-items:flex-start}
    .smart-card:after{content:'';position:absolute;right:-36px;bottom:-42px;width:128px;height:128px;border-radius:50%;background:rgba(198,106,31,.08)}
    .icon-badge{width:58px;height:58px;border-radius:20px;display:grid;place-items:center;background:linear-gradient(135deg,#fff6df,#f4c766);box-shadow:0 12px 26px rgba(83,45,13,.12);flex:0 0 auto;overflow:hidden;color:#11394a;font-weight:1000}
    .icon-badge img{display:block;max-width:36px;max-height:36px;object-fit:contain}.icon-badge--wide{width:88px}.icon-badge--wide img{max-width:74px;max-height:34px}
    .smart-card h3,.smart-card p,.smart-card a,.smart-card button{position:relative;z-index:1}.smart-card h3{margin-bottom:6px}.smart-card p{margin-bottom:14px}.smart-card .btn{min-height:42px;padding:10px 15px;font-size:.92rem}.copy-status{display:block;margin-top:8px;font-size:.9rem;font-weight:800;color:#826851}
    .official-email,.support-email{display:inline-flex;max-width:100%;color:#8e3f12!important;font-weight:950!important;text-decoration:underline;text-underline-offset:4px;overflow-wrap:anywhere;word-break:break-word}
    .official-email{margin-top:4px}.support-email{margin-top:14px}.official-email:hover,.support-email:hover{color:#5f280d!important}
    .footer__contacts{display:grid;gap:8px}.footer__contacts a{display:block;color:#f7ddbb!important;font-size:.91rem;line-height:1.35;overflow-wrap:anywhere}.footer__contacts a:hover{color:#fff!important}.footer__contacts span{display:block;color:#fff;font-size:.76rem;font-weight:900;text-transform:uppercase;letter-spacing:.06em}
    .whatsapp-float{position:fixed!important;right:22px!important;bottom:22px!important;width:52px!important;height:52px!important;display:flex!important;align-items:center!important;justify-content:center!important;z-index:90!important;background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;margin:0!important;line-height:0!important;overflow:visible!important}
    .whatsapp-float::before{content:none!important;display:none!important}.whatsapp-float svg{display:none!important}.whatsapp-float img{width:48px!important;height:48px!important;object-fit:contain!important;display:block!important;filter:drop-shadow(0 10px 18px rgba(37,211,102,.24))}.whatsapp-float:hover{transform:translateY(-2px)}
    .back-to-top{position:fixed;left:50%;bottom:var(--backtop-bottom,22px);z-index:89;width:50px;height:50px;display:grid;place-items:center;padding:0;border:1px solid rgba(255,255,255,.82);border-radius:999px;background:linear-gradient(145deg,rgba(255,255,255,.74),rgba(255,239,214,.48));color:#7d3510;box-shadow:0 14px 38px rgba(48,26,11,.19),inset 0 1px 0 rgba(255,255,255,.9);backdrop-filter:blur(14px) saturate(135%);-webkit-backdrop-filter:blur(14px) saturate(135%);cursor:pointer;opacity:0;visibility:hidden;pointer-events:none;transform:translate(-50%,18px) scale(.92);transition:opacity .25s ease,visibility .25s ease,transform .25s ease,background .25s ease,box-shadow .25s ease,bottom .25s ease}
    .back-to-top.is-visible{opacity:1;visibility:visible;pointer-events:auto;transform:translate(-50%,0) scale(1)}
    .back-to-top:hover{background:linear-gradient(145deg,rgba(255,255,255,.9),rgba(255,231,192,.7));box-shadow:0 18px 46px rgba(48,26,11,.24),inset 0 1px 0 rgba(255,255,255,.96);transform:translate(-50%,-3px) scale(1.04)}
    .back-to-top:active{transform:translate(-50%,0) scale(.96)}
    .back-to-top:focus-visible{outline:3px solid rgba(198,106,31,.34);outline-offset:4px}
    .back-to-top svg{width:24px;height:24px;display:block;fill:none;stroke:currentColor;stroke-width:2.35;stroke-linecap:round;stroke-linejoin:round}
    @media(max-width:1180px) and (min-width:901px){.footer__inner{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
    @media(max-width:900px){
      html,body{max-width:100%;overflow-x:hidden}
      .topbar{position:relative!important;top:auto!important;padding:14px 0!important}
      .topbar__inner{width:min(100% - 28px,1180px)!important;display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:14px!important;margin:0 auto!important;position:relative!important;padding-right:58px!important;box-sizing:border-box!important}
      .brand{width:100%!important;display:flex!important;align-items:center!important;gap:12px!important;min-height:52px!important}
      .brand__text strong{font-size:1rem!important}.brand__text span{font-size:.68rem!important;letter-spacing:.22em!important}
      .topbar__right{width:100%!important;display:block!important}
      .header-social{position:absolute!important;right:0!important;top:4px!important;width:46px!important;height:46px!important;display:grid!important;place-items:center!important;border-radius:50%!important;background:#fff!important;box-shadow:0 10px 26px rgba(83,45,13,.12)!important;border:1px solid rgba(79,50,25,.12)!important}
      .nav{width:100%!important;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important;overflow:visible!important;white-space:normal!important;margin-top:10px!important}
      .nav a{display:flex!important;align-items:center!important;justify-content:center!important;text-align:center!important;min-height:42px!important;padding:10px 8px!important;border-radius:999px!important;font-size:.92rem!important;background:#fffaf2!important;border:1px solid rgba(79,50,25,.12)!important;line-height:1.1!important}
      .nav a.active{background:#fff!important;color:#a74912!important;box-shadow:0 8px 20px rgba(83,45,13,.08)!important}
      .hero{padding-top:46px!important;padding-bottom:42px!important}.section{padding-top:44px!important;padding-bottom:44px!important}
      .wrapper--wide{width:min(100% - 28px,1180px)!important;margin-left:auto!important;margin-right:auto!important}
      .help-hero-grid,.hero .wrapper--wide[style*='grid-template-columns']{display:grid!important;grid-template-columns:1fr!important;gap:26px!important;align-items:start!important}
      h1{font-size:clamp(2.65rem,14vw,4.7rem)!important;line-height:.98!important;letter-spacing:-.06em!important;max-width:100%!important;word-break:normal!important;overflow-wrap:normal!important}
      .lead{font-size:1.08rem!important;line-height:1.55!important;max-width:100%!important;word-break:normal!important;overflow-wrap:normal!important}
      .actions{display:flex!important;flex-wrap:wrap!important;gap:10px!important}.actions .btn{flex:1 1 150px!important;text-align:center!important;justify-content:center!important}
      .help-card-img,.hero .wrapper--wide[style*='grid-template-columns'] img{width:100%!important;max-width:100%!important;border-radius:24px!important;margin:0!important;object-fit:contain!important}
      .smart-grid{grid-template-columns:1fr!important;gap:14px!important}.smart-card{padding:20px!important;gap:14px!important;border-radius:22px!important}.icon-badge{width:52px;height:52px}.icon-badge--wide{width:82px}
      .footer{padding:38px 0 18px!important}.footer__inner{grid-template-columns:1fr!important;gap:24px!important;align-items:start!important;width:min(100% - 28px,1180px)!important}
      .whatsapp-float{right:16px!important;bottom:16px!important;width:46px!important;height:46px!important}.whatsapp-float img{width:42px!important;height:42px!important}
      .back-to-top{width:46px;height:46px;border-color:rgba(255,255,255,.9);background:linear-gradient(145deg,rgba(255,255,255,.82),rgba(255,232,198,.56));box-shadow:0 13px 34px rgba(48,26,11,.19),0 0 0 4px rgba(255,255,255,.1),inset 0 1px 0 rgba(255,255,255,.96);backdrop-filter:blur(16px) saturate(140%);-webkit-backdrop-filter:blur(16px) saturate(140%)}
      .back-to-top svg{width:22px;height:22px;stroke-width:2.4}
    }
    @media(max-width:430px){.nav{grid-template-columns:1fr 1fr!important}.nav a{font-size:.86rem!important}.site-icon{width:44px!important;height:44px!important}.hero{padding-top:36px!important}h1{font-size:clamp(2.45rem,16vw,4.2rem)!important}.kicker{font-size:.72rem!important;padding:12px 18px!important}.lead{font-size:1rem!important}.header-social{top:2px!important;width:44px!important;height:44px!important}.topbar__inner{padding-right:54px!important}.whatsapp-float{width:42px!important;height:42px!important}.whatsapp-float img{width:38px!important;height:38px!important}.back-to-top{width:44px;height:44px}.back-to-top svg{width:21px;height:21px}}
    @media(prefers-reduced-motion:reduce){.back-to-top{transition:opacity .15s ease,visibility .15s ease}.back-to-top:hover,.back-to-top:active{transform:translate(-50%,0) scale(1)}}
  `;
  document.head.appendChild(style);
  const iconInstagram='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"></circle></svg>';
  const headerTarget=document.getElementById('site-header');
  if(headerTarget){headerTarget.innerHTML=`<header class="topbar"><div class="topbar__inner"><a class="brand" href="index.html" aria-label="Página inicial da Missão Rua"><img class="site-icon" src="assets/img/logo-missao.svg" alt=""><span class="brand__text"><strong>Missão Rua</strong><span>Juntos somos mais fortes</span></span></a><div class="topbar__right"><nav class="nav" aria-label="Menu principal">${nav.map(([key,href,label])=>`<a class="${active===key?'active':''}" href="${href}">${label}</a>`).join('')}</nav><a class="header-social" href="${instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram oficial da Missão Rua">${iconInstagram}<span class="sr-only">Instagram</span></a></div></div></header>`;}
  const footerTarget=document.getElementById('site-footer');
  if(footerTarget){footerTarget.innerHTML=`<footer class="footer" style="min-height:160px;padding:58px 0 22px;display:flex;align-items:flex-end;"><div class="footer__inner" style="grid-template-columns:1fr 1.25fr .72fr .9fr;align-items:start;"><div><strong class="footer__title">Missão Rua</strong><p>Juntos somos mais fortes.</p><a class="footer-social" href="${instagram}" target="_blank" rel="noopener noreferrer">@missao.rua</a></div><div><strong class="footer__title">Canais oficiais</strong><div class="footer__contacts"><a href="mailto:${emails.contato}"><span>Contato geral</span>${emails.contato}</a><a href="mailto:${emails.doacoes}"><span>Doações</span>${emails.doacoes}</a><a href="mailto:${emails.parcerias}"><span>Parcerias</span>${emails.parcerias}</a><a href="mailto:${emails.voluntarios}"><span>Voluntariado</span>${emails.voluntarios}</a></div></div><nav class="footer__links footer__links--policies" aria-label="Políticas"><a href="privacidade.html">Privacidade</a><a href="cookies.html">Cookies</a><a href="termos.html">Termos</a></nav><div><strong class="footer__title">Projeto solidário</strong><p class="credit">Site solidário desenvolvido por <a href="https://xgreat.com.br" target="_blank" rel="noopener noreferrer">XGR Digital</a>.</p></div></div></footer>`;}

  if(active==='contato'){
    const contactGrid=document.querySelector('#whatsapp .smart-grid');
    if(contactGrid&&!contactGrid.querySelector('[data-email-card]')){
      const emailCards=[
        ['✉️','Contato geral',emails.contato,'Dúvidas, informações e mensagens gerais para a Missão Rua.'],
        ['🎁','Doações',emails.doacoes,'Combine entrega de alimentos, roupas, cobertores, utensílios, ração e outros itens.'],
        ['🏢','Parcerias',emails.parcerias,'Canal para empresas, comércios, apoiadores e projetos que desejam colaborar.'],
        ['🙋','Voluntariado',emails.voluntarios,'Participe do preparo, organização, logística e entrega nas próximas ações.']
      ];
      contactGrid.insertAdjacentHTML('afterbegin',emailCards.map(([icon,title,address,description])=>`<article class="smart-card" data-email-card><span class="icon-badge" aria-hidden="true">${icon}</span><div><h3>${title}</h3><p>${description}</p><a class="official-email" href="mailto:${address}">${address}</a></div></article>`).join(''));
    }
  }

  if(active==='como-ajudar'){
    const supportMap={'Roupas e cobertores':emails.doacoes,'Alimentos':emails.doacoes,'Utensílios':emails.doacoes,'Ração':emails.doacoes,'Preparação':emails.voluntarios,'Entrega':emails.voluntarios};
    document.querySelectorAll('.smart-card h3').forEach(function(title){
      const address=supportMap[title.textContent.trim()];
      if(!address)return;
      const content=title.closest('.smart-card')?.querySelector('.support-card__content');
      if(content&&!content.querySelector('.support-email')){
        const label=address===emails.doacoes?'Combinar esta doação':'Participar como voluntário';
        content.insertAdjacentHTML('beforeend',`<a class="support-email" href="mailto:${address}">${label}: ${address}</a>`);
      }
    });
    const shareCard=Array.from(document.querySelectorAll('.smart-card')).find(card=>card.querySelector('h3')?.textContent.trim()==='Compartilhamento');
    if(shareCard&&!document.querySelector('[data-partnership-card]')){
      shareCard.insertAdjacentHTML('beforebegin',`<article class="smart-card" data-partnership-card><span class="icon-badge" aria-hidden="true">🏢</span><div><h3>Parcerias</h3><p>Empresas, comércios e apoiadores podem colaborar com produtos, estrutura, serviços e divulgação.</p><a class="official-email" href="mailto:${emails.parcerias}">${emails.parcerias}</a></div></article>`);
    }
    const pixCard=Array.from(document.querySelectorAll('.smart-card')).find(card=>card.querySelector('h3')?.textContent.trim()==='Contribuição via Pix');
    if(pixCard&&!pixCard.querySelector('.official-email')){
      pixCard.querySelector('div')?.insertAdjacentHTML('beforeend',`<a class="official-email" href="mailto:${emails.doacoes}">Dúvidas sobre doações: ${emails.doacoes}</a>`);
    }
  }

  if(active==='inicio'){
    const volunteerLink=document.querySelector('.participation-banner .actions a:nth-child(2)');
    if(volunteerLink){volunteerLink.href=`mailto:${emails.voluntarios}`;volunteerLink.textContent='Quero ser voluntário';}
  }

  let wa=document.querySelector('.whatsapp-float');
  if(!wa){wa=document.createElement('a');wa.className='whatsapp-float';document.body.appendChild(wa);}
  wa.href=whatsapp;
  wa.setAttribute('aria-label','Falar pelo WhatsApp oficial da Missão Rua');
  wa.setAttribute('title','WhatsApp da Missão Rua');
  wa.setAttribute('target','_blank');
  wa.setAttribute('rel','noopener noreferrer');
  wa.innerHTML='<img src="assets/img/Whats.png?v=1" alt="WhatsApp">';

  let backTop=document.querySelector('.back-to-top');
  if(!backTop){
    backTop=document.createElement('button');
    backTop.className='back-to-top';
    backTop.type='button';
    backTop.setAttribute('aria-label','Voltar ao início da página');
    backTop.setAttribute('title','Voltar ao topo');
    backTop.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14.5 12 8l6 6.5"></path></svg>';
    document.body.appendChild(backTop);
  }
  const updateBackTopVisibility=function(){backTop.classList.toggle('is-visible',window.scrollY>420);};
  const updateBackTopOffset=function(){
    const banner=document.getElementById('cookieBanner');
    let bottom=window.innerWidth<=900?82:22;
    if(banner&&!banner.classList.contains('is-hidden')&&getComputedStyle(banner).display!=='none'){
      const rect=banner.getBoundingClientRect();
      if(rect.height>0&&rect.bottom>0){bottom=Math.max(bottom,window.innerHeight-rect.top+14);}
    }
    backTop.style.setProperty('--backtop-bottom',`calc(${Math.round(bottom)}px + env(safe-area-inset-bottom, 0px))`);
  };
  backTop.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  window.addEventListener('scroll',updateBackTopVisibility,{passive:true});
  window.addEventListener('resize',updateBackTopOffset,{passive:true});
  const cookieBanner=document.getElementById('cookieBanner');
  if(cookieBanner){new MutationObserver(updateBackTopOffset).observe(cookieBanner,{attributes:true,attributeFilter:['class','style']});}
  updateBackTopVisibility();
  updateBackTopOffset();

  document.querySelectorAll('[data-copy-pix]').forEach(function(button){button.addEventListener('click',function(){const value=button.getAttribute('data-copy-pix')||pixKey;const status=document.querySelector(button.getAttribute('data-copy-target')||'');const done=function(){if(status){status.textContent='Chave Pix copiada.';}};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(value).then(done).catch(done);}else{const input=document.createElement('input');input.value=value;document.body.appendChild(input);input.select();document.execCommand('copy');document.body.removeChild(input);done();}});});
})();