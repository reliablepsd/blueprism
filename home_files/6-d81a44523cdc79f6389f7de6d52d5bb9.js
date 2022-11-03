(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1455:
/*!***************************************************!*\
  !*** ../player/components/media/video/Video.scss ***!
  \***************************************************/
/*! no static exports found */
/*! exports used: hideCursor, hideVideo, video */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,c){e.exports={video:"_1l-KU",hideCursor:"_3OgU3",hideVideo:"_3-9KU"}},961:
/*!********************************************************!*\
  !*** ../player/components/utils/customHooks/useMux.ts ***!
  \********************************************************/
/*! exports provided: getExperimentName, default */
/*! exports used: default */function(e,t,c){"use strict";var b=c(/*! react */366),s=c(/*! react-redux */368),l=c(/*! ../../utils/customHooks/useStoreSelector */369),n=c(/*! mux-embed */1456),f=c.n(n),n=c(/*! hls.js */960),j=c.n(n);t.a=function(t,c){var n=Object(l.a)("visitorId"),r=Object(l.b)("playerUuid"),a=Object(l.b)("accountId"),u=Object(s.d)(function(e){return e.config.chapters[e.playback.currentChapter].videoId}),o=Object(s.d)(function(e){return null===(e=null===(e=e.config.chapters[e.playback.currentChapter].sources)||void 0===e?void 0:e.hls)||void 0===e?void 0:e[0].url}),i=Object(s.d)(function(e){var t=e.config,e=t.onComplete,t=t.chapterLoop;return"loop"===e||!!t});Object(b.useEffect)(function(){var e=!i&&Math.random()<=.15;t.current&&(void 0===c||c.current)&&e&&f.a.monitor("."+t.current.classList[0],{debug:!1,disableCookies:!0,hlsjs:c?c.current:void 0,Hls:c?j.a:void 0,data:{env_key:"vfhbo3jsnvrutdkuee1akd0lj",player_name:"Pomo Player",player_init_time:window.__startTime,player_version:"1e7783d39cda8214787933860946f582a52d2b21",video_id:u,video_series:r,video_title:u,video_stream_type:"on-demand",viewer_user_id:n,page_type:window.location!==window.parent.location?"iframe":"watchpage",sub_property_id:a,experiment_name:(e=o)&&/.+\/media\//.test(e)?"jit-video":null}})},[t,a,u,r,c,n,i,o])}},998:
/*!**************************************************************!*\
  !*** ../player/components/media/video/Video.tsx + 3 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/utils/customHooks/usePostRoll.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/utils/customHooks/usePrevious.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/utils/customHooks/useShouldRenderCaptions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/utils/customHooks/useStoreSelector.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/utils/saveUserInteraction.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/utils/userBrowserChecker/UserBrowserChecker.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/state/playback/actions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/state/ui/actions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../player/state/ui/thunks.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../player/components/media/video/Video.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-redux/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../player/node_modules/unfetch/dist/unfetch.mjs */function(e,t,c){"use strict";var Z=c(366),$=c.n(Z),ee=c(368),n=c(371),te=c.n(n),ce=c(610),ne=c(369),re=c(398),ae=c(379),ue=c(372),oe=c(948),o=c(135);function i(e){return"track-"+e.id}function ie(){var r=Object(ee.d)(function(e){var t=e.playback.currentChapter;return e.config.chapters[t].captions}),a=Object(ee.d)(function(e){e=e.config.userBrowser;return Object(re.d)(e)}),e=Object(Z.useState)({}),t=e[0],u=e[1];return Object(Z.useEffect)(function(){for(var n={},e=0,t=r;e<t.length;e++)!function(t){a?Object(o.a)(t.vttUrl,{method:"GET"}).then(function(e){return e.blob()}).then(function(e){n[i(t)]=URL.createObjectURL(e)}):n[i(t)]=t.vttUrl}(t[e]);return u(n),function(){if(a)for(var e=0,t=r;e<t.length;e++){var c=t[e];URL.revokeObjectURL(n[i(c)]),u({})}}},[r,a]),$.a.createElement($.a.Fragment,null,r.map(function(e){return $.a.createElement("track",{id:i(e),key:e.id,kind:"captions",label:e.name,srcLang:e.language,src:t[i(e)]})}))}var b=c(947);function be(n){var r=Object(ee.c)(),a=Object(ne.c)("canPlay"),u=Object(ne.c)("caption"),o=Object(b.a)();Object(Z.useEffect)(function(){var e;if(a){var c=null===(e=n.current)||void 0===e?void 0:e.textTracks;if(c)for(var t=0;t<c.length;t++)!function(e){var t=c[e];o&&null!==u&&t.id===i(u)?(t.oncuechange=function(){var e=Array.from(t.activeCues);r(Object(ae.b)(e))},t.mode="hidden"):"disabled"!==t.mode&&(t.mode="disabled")}(t)}},[u,o,a,r,n])}var se=function(){for(var e=0,t=0,c=arguments.length;t<c;t++)e+=arguments[t].length;for(var n=Array(e),r=0,t=0;t<c;t++)for(var a=arguments[t],u=0,o=a.length;u<o;u++,r++)n[r]=a[u];return n};var le=c(1455),fe=c(441),je=c(530);t.a=Object(Z.forwardRef)(function(t,e){var u=Object(ee.c)(),c=Object(ne.b)("pauseDisabled"),n=Object(ne.b)("chapterLoop"),r=Object(ne.b)("redirectWholePage"),a=Object(ne.b)("redirectUrl"),o=Object(ne.b)("disableRedirect"),i=Object(ne.b)("onComplete"),b=Object(ne.b)("background"),s=Object(ne.b)("userBrowser"),l=Object(ne.b)("disableCtas"),f=Object(ne.b)("preload"),j=Object(ne.b)("autoplay"),d=Object(ne.b)("firstFrame"),O=Object(ne.c)("currentChapter"),v=Object(ne.c)("paused"),p=Object(ne.c)("mute"),k=Object(ne.c)("seekTo"),m=Object(ne.c)("seekFrom"),h=Object(ne.c)("speed"),y=Object(ne.c)("volume"),g=Object(ne.c)("canPlay"),w=Object(ne.c)("time"),E=Object(ne.c)("duration"),C=Object(ne.c)("captionsEnabled"),_=Object(ne.d)("splashScreen"),D=Object(ne.d)("userActive"),P=Object(ne.d)("fullscreen"),T=Object(fe.a)(),U=Object(Z.useState)(!0),R=U[0],x=U[1],A=Object(ee.d)(function(e){var t=e.playback.currentChapter;return e.config.chapters[t].name}),L=Object(ee.d)(function(e){return 0===e.playback.currentChapter}),M=Object(ee.d)(function(e){return e.playback.currentChapter===e.config.chapters.length-1}),U=Object(ee.d)(function(e){var t=e.ui,e=t.userActive,t=t.controlsLocked;return!e&&!t}),F=Object(ee.d)(function(e){var t=e.ui.playerDimensions;return e.playback.duration/t.width}),S=Object(ee.d)(function(e){return!(null===(e=e.ui.eventState[null==T?void 0:T.id])||void 0===e||!e.playDisabled)}),I=Object(ee.d)(function(e){return null===(e=e.ui.eventState[null==T?void 0:T.id])||void 0===e?void 0:e.dismissed}),H=Object(je.a)(I),B=T&&"vyFreePostRoll"===T.eventType,K=Object(Z.useRef)(null),N=Object(Z.useRef)(v),J=Object(Z.useRef)(),V=Object(Z.useRef)();Object(Z.useImperativeHandle)(e,function(){return K.current});var W={start:function(){K.current&&(Math.abs(K.current.currentTime-w)>=F&&u(Object(ae.H)(K.current.currentTime)),J.current=window.requestAnimationFrame(function(){var e;return null===(e=V.current)||void 0===e?void 0:e.start()}))},stop:function(){null!=J.current&&cancelAnimationFrame(J.current),J.current=void 0}};Object(Z.useEffect)(function(){V.current=W},[W]);var q=Object(Z.useCallback)(function(){var e;g&&(v?null!==(e=K.current)&&void 0!==e&&e.pause():(e=null===(e=K.current)||void 0===e?void 0:e.play())instanceof Promise?e.catch(function(){var e;!N.current&&K.current&&K.current.paused&&!K.current.muted&&2!==j?u(Object(ae.l)()):2===j&&R&&K.current&&((Object(re.j)(s)||Object(re.h)(s))&&(e=K.current.src,K.current.src="",K.current.src=e),u(Object(ae.j)()),u(Object(ue.E)()))}).finally(function(){x(!1)}):x(!1))},[g,v,j,R,u,s]);Object(Z.useEffect)(function(){0<j&&!_&&u(Object(ae.k)())},[j,_,u]),Object(Z.useEffect)(function(){var e;0!==j||d||_||null!==(e=K.current)&&void 0!==e&&e.focus()},[j,d,_]),Object(Z.useEffect)(function(){q()},[q]),Object(Z.useEffect)(function(){N.current=v},[v]),Object(Z.useEffect)(function(){K.current&&(K.current.muted=p)},[p]),Object(Z.useEffect)(function(){var e;null!==(e=K.current)&&void 0!==e&&e.paused&&!v&&p&&q()},[p,v,q]),Object(Z.useEffect)(function(){g&&0<=k&&K.current&&k<=K.current.duration&&(Number.isFinite(k)&&(K.current.currentTime=k,u(Object(ae.H)(k))),u(Object(ae.r)()))},[g,k,u]),Object(Z.useEffect)(function(){K.current&&(K.current.volume=y)},[y]),Object(Z.useEffect)(function(){g&&K.current&&(K.current.playbackRate=h)},[g,h]),Object(Z.useEffect)(function(){return function(){u(Object(ae.y)(!1))}},[u]);var G,z,Q,X=Object(Z.useCallback)(function(){if(n)return u(Object(ae.h)()),u(Object(ae.a)()),void q();if(!M)return u(Object(ae.t)(O+1)),void u(Object(ae.a)());switch(u(Object(ae.m)()),u(Object(oe.b)(0)),i){case"redirect_url":o?(u(Object(ue.E)()),u(Object(ue.s)(!1)),u(Object(ae.o)()),u(Object(ae.a)())):r?setTimeout(function(){window.top.location.replace(a)},1e3):setTimeout(function(){window.location.replace(a)},1e3);break;case"final_frame":u(Object(ae.j)()),u(Object(ue.s)(!1));break;case"loop":u(Object(ae.i)()),u(Object(ae.a)()),q();break;case"splash_screen":u(Object(ue.E)()),u(Object(ue.s)(!1)),u(Object(ae.o)()),u(Object(ae.a)())}},[n,O,u,M,i,a,r,o,q]);Object(Z.useEffect)(function(){S||!1!==H||!I||B||X()},[X,S,I,H,B]),Object(Z.useEffect)(function(){u(Object(oe.c)(O))},[O,u]),be(K),G=Object(ne.b)("pauseDisabled"),z=Object(ne.b)("hiddenControls"),Q=Object(ee.c)(),Object(Z.useEffect)(function(){if(navigator.mediaSession){var e=G||z?[]:[["play",function(){return Q(Object(ae.k)())}],["pause",function(){return Q(Object(ae.j)())}],["stop",null],["seekbackward",null],["seekforward",null],["seekto",null]];G&&(e=se(e,[["play",function(){}],["stop",function(){}],["pause",function(){}]]));for(var t=0,c=e=z?se(e,[["seekbackward",function(){}],["seekforward",function(){}],["seekto",function(){}]]):e;t<c.length;t++){var n=c[t],r=n[0],n=n[1];try{navigator.mediaSession.setActionHandler(r,n)}catch(e){}}}},[G,z,Q]);function Y(){var e;(Object(re.h)(s)||Object(re.f)(s)||Object(re.j)(s))&&Object(ce.a)(),c||u((v?Object(ae.k):Object(ae.j))()),null!==(e=K.current)&&void 0!==e&&e.focus()}e=te()(le.video,((e={})[le.hideCursor]=U,e[le.hideVideo]=_,e));return $.a.createElement("video",{"aria-label":A,preload:f,crossOrigin:"anonymous",ref:K,className:e,style:{backgroundColor:b},playsInline:!0,onDurationChange:function(){K.current&&isFinite(K.current.duration)&&u(Object(ae.e)(K.current.duration))},onTimeUpdate:function(){-1===k&&K.current&&u(Object(ae.H)(K.current.currentTime))},onContextMenu:function(e){e.preventDefault()},onClick:function(){Y()},onKeyDown:function(e){switch(e.key){case"Enter":case"Spacebar":case" ":case"k":Y();break;case"ArrowLeft":e.preventDefault(),u(Object(ae.s)(Math.max(w-5,0)));break;case"ArrowRight":e.preventDefault(),u(Object(ae.s)(Math.min(w+5,E)));break;case"ArrowUp":e.preventDefault(),u(Object(ae.F)(Math.min(y+.1,1)));break;case"ArrowDown":e.preventDefault(),u(Object(ae.F)(Math.max(y-.1,0)));break;case"m":u(Object(ae.I)());break;case"j":u(Object(ae.s)(Math.max(w-10,0)));break;case"l":u(Object(ae.s)(Math.min(w+10,E)));break;case"<":u(Object(ae.C)(Math.max(h-.5,.5)));break;case">":u(Object(ae.C)(Math.min(h+.5,2)));break;case"Home":case"0":u(Object(ae.s)(0));break;case"End":u(Object(ae.s)(E));break;case"1":u(Object(ae.s)(.1*E));break;case"2":u(Object(ae.s)(.2*E));break;case"3":u(Object(ae.s)(.3*E));break;case"4":u(Object(ae.s)(.4*E));break;case"5":u(Object(ae.s)(.5*E));break;case"6":u(Object(ae.s)(.6*E));break;case"7":u(Object(ae.s)(.7*E));break;case"8":u(Object(ae.s)(.8*E));break;case"9":u(Object(ae.s)(.9*E));break;case"f":u(Object(ue.s)(!P));break;case"c":var t={setByUser:!0};u((C?Object(ae.c):Object(ae.f))(t));break;case"N":M||(u(Object(ae.t)(O+1)),u(Object(ae.a)()));break;case"P":L||(u(Object(ae.t)(O-1)),u(Object(ae.a)()))}},onEnded:function(){W.stop(),!l&&T||X()},onPause:function(){var e;c?null!==(e=K.current)&&void 0!==e&&e.play():W.stop()},onPlay:function(){v||u(Object(ae.k)()),W.start()},onCanPlayThrough:function(){u(Object(ae.x)(!1))},onCanPlay:function(){u(Object(ae.y)(!0))},onSeeked:function(){m!==k&&u(Object(oe.b)(w))},onProgress:function(){if(K.current)for(var e=K.current,t=e.buffered,c=e.currentTime,n=e.duration,r=0;r<t.length;r++)if(t.start(t.length-1-r)<c){var a=t.end(t.length-1-r)/n;u(Object(ae.A)(a));break}},onWaiting:function(){u(Object(ae.x)(!0))},onPlaying:function(){var e;u(Object(ae.x)(!1)),null!==(e=t.onPlaying)&&void 0!==e&&e.call(t)},onLoadedData:function(){var e;null!==(e=t.onLoadedData)&&void 0!==e&&e.call(t)},"data-testid":t.testDataId||"video",tabIndex:D?-1:0},$.a.createElement(ie,null))})}}]);