"use strict";(self.webpackChunkreact_home=self.webpackChunkreact_home||[]).push([[635],{248:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var a=r(7294),i=r(4184),o=r.n(i),l=r(9250),n=r(5906),s=r(5140),c=r(1931),d=r(6689);const u=e=>{const[t,r]=(0,a.useState)(1);return(0,a.useEffect)((()=>{const t=()=>{const t=((e,t,r)=>e>=t?1:Math.floor(e)/(Math.floor(t*r)-1))(window.scrollY,window.innerHeight,e);r(1-t)};return window.addEventListener("scroll",t),t(),()=>window.removeEventListener("scroll",t)}),[]),t},m={"block--theme-dark":"src-3_features-DetailContent-ui-DetailContent-DetailContent-module__block--theme-dark-Cuk6o",picture:"src-3_features-DetailContent-ui-DetailContent-DetailContent-module__picture-dLzE_","intro-main":"src-3_features-DetailContent-ui-DetailContent-DetailContent-module__intro-main-RpaDo","container-editor":"src-3_features-DetailContent-ui-DetailContent-DetailContent-module__container-editor-e4Jbn"};var h=r(1572),_=r(7775),D=r(4544);const f={intro:"src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-yOD8K","intro--theme-light":"src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro--theme-light-JjHqg","intro--theme-dark":"src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro--theme-dark-zA9MB","intro-content":"src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-content-V1wD4","toolbar-category":"src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__toolbar-category-ggGuZ",title:"src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__title-sgMpQ","column-title":"src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__column-title-qnse9","column-cat":"src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__column-cat-VomYl"};var g=r(5893);const x=e=>{const{data:t,theme:r,isLoading:a,className:i}=e,l=u(1),n=t?.tags?.data,s=t?.category?.data,m=t?.main?.previewInverted;return(0,g.jsx)("div",{className:o()(f.intro,f[`intro--${r}`],i),children:(0,g.jsx)(d.W,{children:(0,g.jsxs)("div",{hidden:l<0,className:o()(f["intro-content"]),children:[(0,g.jsxs)("div",{className:o()(D.Z.grid),children:[(0,g.jsx)("div",{className:o()(D.Z["grid__col-2"],D.Z["grid__col-lap-3"],D.Z["grid__col-mob-4"],f["column-title"]),children:(0,g.jsxs)("h1",{className:o()(f.title),children:[!a&&(0,g.jsxs)(g.Fragment,{children:[t?.main?.previewTitle,(0,g.jsx)("br",{}),t?.main?.previewCaption]}),a&&(0,g.jsx)(_.O,{strings:2,mode:_.a.LINES})]})}),(0,g.jsx)("div",{className:o()(D.Z["grid__col-2"],D.Z["grid__col-lap-1"],D.Z["grid__col-mob-4"],f["column-cat"]),children:(0,g.jsx)("div",{className:o()(f["toolbar-category"]),children:s&&(0,g.jsx)(h.Fo,{data:s,themeProp:r,mode:h.Z2.STATIC})})})]}),(0,g.jsx)("div",{className:o()(f["main-content"]),children:(0,g.jsx)("div",{className:o()(D.Z.grid,f.grid),children:(0,g.jsx)("div",{className:o()(D.Z["grid__col-2"],D.Z["grid__col-mob-4"]),children:n&&n?.length>0&&(0,g.jsx)(h.Y2,{children:n.map((e=>(0,g.jsx)(h.s_,{data:e,themeProp:m?c.SJ.DARK:c.SJ.LIGHT},e.id)))})})})})]})})})};var b=r(4204);const j={editor:"src-5_shared-ui-Editor-Editor-module__editor-HsrXa","editor--theme-light":"src-5_shared-ui-Editor-Editor-module__editor--theme-light-Zx_xN","editor--theme-dark":"src-5_shared-ui-Editor-Editor-module__editor--theme-dark-ktzIZ"},p=e=>{const{data:t,children:r,themeProp:a,className:i}=e,{theme:l}=(0,s.F)();return t?(0,g.jsx)("div",{className:o()(j.editor,j[`editor--${a||l}`],i),dangerouslySetInnerHTML:{__html:t}}):(0,g.jsx)("div",{className:o()(j.editor,j[`editor--${a||l}`],i),children:r})},v={block:"src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block-OAksJ","block--theme-light":"src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block--theme-light-9USvZ","block--theme-dark":"src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block--theme-dark-Uj701"},N=e=>{const{children:t}=e;return(0,g.jsx)("div",{className:o()("src-5_shared-ui-EditorWrapper-EditorWrapper-module__block-JaNUN"),children:t})},k={figure:"src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__figure-IkDXf",figcaption:"src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__figcaption-qOQIj",text:"src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__text-dsaE0",caption:"src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption-bKPNO","caption--theme-light":"src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption--theme-light-rn1I0","caption--theme-dark":"src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption--theme-dark-SUPBD"},C=e=>{const{children:t}=e;return(0,g.jsx)(N,{children:(0,g.jsx)("p",{children:t})})},S=e=>{const{data:t,isLoading:r,className:i}=e,{theme:l}=(0,s.F)();return(0,g.jsx)("div",{className:o()(v.block,v[`block--${l}`],i),children:(0,g.jsxs)(p,{className:o()(v.editor),children:[r&&(0,g.jsx)(C,{children:(0,g.jsx)(_.O,{strings:40,mode:_.a.LINES})}),!r&&t&&(0,g.jsx)(b.i,{content:t,blocks:{paragraph:e=>{let{children:t}=e;return C({children:t})},image:e=>{let{image:t}=e;return(e=>{const{image:t}=e,{theme:r}=(0,s.F)(),i=(e=>{const[t,r]=(0,a.useState)("#");return(0,a.useEffect)((()=>{if(!e)return;let t="";e.caption&&(t=e.caption),e.alternativeText&&(t?t+=` — ${e.alternativeText}`:t=e.alternativeText),r(t)}),[e]),t})(t),l=t?.formats?.large?.url||t?.formats?.medium?.url||t?.formats?.small?.url;return(0,g.jsxs)("figure",{className:o()(k.figure),children:[l&&(0,g.jsx)("img",{alt:i,loading:"lazy",src:`https://api.egor-badulin.ru${l}`}),(0,g.jsx)("figcaption",{className:o()(k.figcaption),children:(0,g.jsxs)(N,{children:[t?.caption&&(0,g.jsx)("p",{className:o()(k.text),children:t.caption}),t?.alternativeText&&(0,g.jsx)("p",{className:o()(k.caption,k[`caption--${r}`]),children:t.alternativeText})]})})]})})({image:t})},heading:e=>{let{children:t,level:r}=e;return(e=>{const{level:t,children:r}=e,i=`h${t>0&&t<7?t:6}`;return(0,g.jsx)(N,{children:a.createElement(i,null,r)})})({children:t,level:r})},link:e=>{let{children:t,url:r}=e;return(e=>{const{url:t,children:r}=e;return(0,g.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:r})})({children:t,url:r})},code:e=>{let{children:t}=e;return(e=>{const{children:t}=e;return(0,g.jsx)(N,{children:(0,g.jsx)("pre",{children:(0,g.jsx)("code",{children:t})})})})({children:t})},list:e=>{let{children:t,format:r}=e;return(e=>{const{format:t,children:r}=e,i="ordered"===t?"ol":"ul";return(0,g.jsx)(N,{children:a.createElement(i,null,r)})})({children:t,format:r})},quote:e=>{let{children:t}=e;return(e=>{const{children:t}=e;return(0,g.jsx)(N,{children:(0,g.jsx)("blockquote",{children:t})})})({children:t})}}})]})})};var T=r(8258),I=r(1072),E=r(122),w=r(9725);const P={block:"src-3_features-Share-ui-Share-module__block-wOa20",title:"src-3_features-Share-ui-Share-module__title-TfwVU",button:"src-3_features-Share-ui-Share-module__button-xh3YL","button--theme-light":"src-3_features-Share-ui-Share-module__button--theme-light-jImGQ","button--theme-dark":"src-3_features-Share-ui-Share-module__button--theme-dark-SzEVg",icon:"src-3_features-Share-ui-Share-module__icon-bXEVd","icon--theme-light":"src-3_features-Share-ui-Share-module__icon--theme-light-bN3DZ","icon--theme-dark":"src-3_features-Share-ui-Share-module__icon--theme-dark-HE9TX",controls:"src-3_features-Share-ui-Share-module__controls-eV95A"},L=e=>{const{themeProp:t,className:r}=e,{theme:a}=(0,s.F)(),{t:i}=(0,I.$G)(),l=t||a;return(0,g.jsxs)("div",{className:o()(P.block,r),children:[(0,g.jsx)("span",{className:o()(P.title),children:i("share")}),(0,g.jsxs)(E.Z,{className:o()(P.controls),children:[(0,g.jsx)(T.vK,{url:"vk.com",resetButtonStyle:!1,className:o()(P.button,P[`button--${l}`]),children:(0,g.jsx)(w.K9,{iconKey:w.Ol.VK,className:o()(P.icon,P[`icon--${l}`])})}),(0,g.jsx)(T.B,{url:"twitter.com",resetButtonStyle:!1,className:o()(P.button,P[`button--${l}`]),children:(0,g.jsx)(w.K9,{iconKey:w.Ol.X,className:o()(P.icon,P[`icon--${l}`])})}),(0,g.jsx)(T.Dk,{url:"fb.com",resetButtonStyle:!1,className:o()(P.button,P[`button--${l}`]),children:(0,g.jsx)(w.K9,{iconKey:w.Ol.FB,className:o()(P.icon,P[`icon--${l}`])})}),(0,g.jsx)(T.tq,{url:"tg.com",resetButtonStyle:!1,className:o()(P.button,P[`button--${l}`]),children:(0,g.jsx)(w.K9,{iconKey:w.Ol.TG,className:o()(P.icon,P[`icon--${l}`])})})]})]})},y=e=>{const{date:t,className:r}=e,{i18n:i}=(0,I.$G)(),l=((e,t)=>{const[r,i]=(0,a.useState)("");return(0,a.useEffect)((()=>{if(!e)return void i("");const r=new Date(e);if(Number.isNaN(r.getTime()))return void i("");const a=r.toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"});i("ru"===t?a.slice(0,-3):a)}),[e,t]),r})(t,i.language);return(0,g.jsx)("time",{className:o()("src-5_shared-ui-DateInfo-DateInfo-module__block-lrfxz",r),children:l})};var $;function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},O.apply(this,arguments)}const Z=e=>a.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 43"},e),$||($=a.createElement("path",{fillRule:"evenodd",d:"m24 35.364 16.628-15.685 2.744 2.91L22 42.749.628 22.59l2.744-2.91L20 35.364V0h4v35.364Z",clipRule:"evenodd"}))),K={footer:"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-oL_iU","footer--theme-light":"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer--theme-light-PzUx_","footer--theme-dark":"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer--theme-dark-wk4q4","footer-grid":"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-grid-O5NsU","column-date":"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__column-date-qreo7","column-button":"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__column-button-P4Cqn","column-share":"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__column-share-P_D6w",button:"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__button-Bvp6U",icon:"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon-jISxf","icon--theme-light":"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon--theme-light-ZcEXj","icon--theme-dark":"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon--theme-dark-NIjSd",share:"src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__share-LgZYA"},B=(0,a.forwardRef)(((e,t)=>{const{data:r,theme:a,isLoading:i,className:l}=e;return(0,g.jsx)("div",{ref:t,id:"scroll-anchor",className:o()(K.footer,K[`footer--${a}`],l),children:(0,g.jsxs)("div",{className:o()(K["footer-grid"]),children:[(0,g.jsx)("div",{className:o()(K["column-date"]),children:!i&&r?.publishedAt&&(0,g.jsx)(y,{date:r?.publishedAt,className:o()(K.time)})}),(0,g.jsx)("div",{className:o()(K["column-button"]),children:(0,g.jsx)("a",{href:"#scroll-anchor",className:o()(K.button),children:(0,g.jsx)(Z,{className:o()(K.icon,K[`icon--${a}`])})})}),(0,g.jsx)("div",{className:o()(K["column-share"]),children:!i&&r&&(0,g.jsx)(L,{themeProp:a,className:o()(K.share)})})]})})})),U=e=>{const{data:t,className:r,isLoading:i}=e,{theme:l}=(0,s.F)(),n=u(.75),[h,_]=(0,a.useState)(l);return(0,a.useEffect)((()=>{void 0!==t?.main?.previewInverted&&_(t.main.previewInverted?c.SJ.DARK:c.SJ.LIGHT)}),[t]),(0,g.jsxs)("div",{className:o()(m.block,m[`block--${l}`],r),children:[(0,g.jsx)("picture",{style:{opacity:n},className:o()(m.picture),children:t?.main?.preview?.data?.url&&(0,g.jsx)("img",{src:`https://api.egor-badulin.ru${t?.main?.preview?.data?.url}`,alt:"#"})}),(0,g.jsx)(x,{data:t,theme:h,isLoading:i}),(0,g.jsxs)("div",{className:o()(m["intro-main"]),children:[(0,g.jsx)(d.W,{children:(0,g.jsx)(B,{data:t,theme:h,isLoading:i})}),t?.main?.content&&(0,g.jsx)(d.W,{className:o()(m["container-editor"]),children:(0,g.jsx)(S,{isLoading:i,data:t.main.content})})]})]})};var q=r(9581),A=r(7191),V=r(2505),F=r(7087),H=r(9282);const J={},z={[H.Qh.POST]:A.O1,[H.Qh.DEV]:q.nK,[H.Qh.PHOTO]:V.Yf},G=function(e){let{mode:t}=e;const{slug:r}=(0,l.UO)(),{data:a,isLoading:i}=z[t](r||"none");return(0,g.jsxs)(F.o,{className:o()(J.main),children:[(0,g.jsx)(n.b,{isLoading:i,data:a?.seo||void 0}),(0,g.jsx)(U,{data:a,isLoading:i})]})}}}]);