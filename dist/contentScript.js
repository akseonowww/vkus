/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contentScript/player/default/defaultAdaptive.tsx":
/*!**************************************************************!*\
  !*** ./src/contentScript/player/default/defaultAdaptive.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerDefaultAdaptive": () => (/* binding */ playerDefaultAdaptive)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player */ "./src/contentScript/player/player.ts");

let playerDefaultAdaptive = (statusModeDev = !1) => {
    const modeDev = statusModeDev
        ? `
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.is},
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.is} *,
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.text["in"]},
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.is}:active,
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.is},
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is},
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} div:has(> button),
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} > div > div:last-child,
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.other.is},
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.other.is} button,
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.progressbar.is},
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.is},
.vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.is} button,
{
   box-sizing: border-box;
   border: 1px solid #E64646;
}
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.is} {
      border: 2px solid #447BBA;
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.is} {
      border: 2px solid #696969;
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.main.is} button {
      border: 2px solid red;
   }

   /* Репит+Порядок */ 
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.other.is} {
      border: 2px solid #A55FFF;
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.other.is} button {
      border: 2px solid #F45FFF;
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.other.is} button {
      border: 2px solid #F45FFF;
   }

   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} {
      border: 2px solid #0077FF;
   }

   /* группа кнопок рядом с микшером */ 
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} > div > div:last-child {
      border: 1px solid green;
   }

   /* КНОПКИ */
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} div:has(> button) {
      border: 2px solid #4fd5df;   
   }

   /* ДОРОГА ТРЕКА */
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.progressbar.is} {      
      border: 2px solid #59ADFF;
   }

   /*=======================*/
   /* ДОП КНОПКИ (СПРАВА ВВЕРХУ) */
   /*=======================*/
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.is} {
      border: 2px solid #005b0a;
   }
   /*кнопка нажата*/
   .vkus-player-new .div-click-button {
      border: 2px solid red;
   }

   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.text.is} {
      border: 2px solid #FFC700;
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.is}:active {
      border: 2px solid red;
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.image}:hover {
      border: 2px solid #f1f1f126; 
   }
   /* COVER */
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.is} {
      border: 2px solid #FF7A00;
   }

   /* Анимация фона */
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.image} > div.animate {
      border: 2px solid red;
   }

   /* & ОПСИАНИЕ ТРЕКА */
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.is} {
      border: 2px solid #FF5F5F;
   }
`
        : "";
    // ======================
    // Контейнер
    // ======================
    let is = `
   :root {
      --progressbar: 4px;
      --progressbar-point: 8px;
      --cover-size: 88px;
      /* --cover-radius: 12px; */
      --cover-radius: var(--vkui--size_border_radius--regular);
      --title-size: 14px;
      --artist-size: 14px;
   }
   #page_layout .vkus-player-new  ${_player__WEBPACK_IMPORTED_MODULE_0__.player.is} {
      padding: 0;
      z-index: 100;
   }

   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player["in"]} {
      display: flex;
      height: 120px; 
      padding: 16px;
   }

`;
    // ======================
    // Инфа
    // ======================
    let info = `
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.is} {
      width: 100%;
   } 

   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.text.is} {
      height: 100%;
      width: 70%;
   }

   /* Название трека */ 
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.text.title} a {
      font-size: var(--title-size);
      line-height: normal;
      /*font-weight: 600;*/   
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.text.artist} {
      font-size: var(--artist-size);
      line-height: normal;
      font-weight: 400;
   }

   /*================================*/
   /* Explicit Content */
   /*================================*/
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.text.badge} {
      position: relative;
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.text.badge} svg {
      font-size: 20px;
      padding: 0;
      cursor: pointer;
   	translate: 4px -2.6px;
      min-width: 15px;  
      min-height: 15px;
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.text.badge}::before {
      content: "Explicit Content — содержит ненормативную лексику.";
      position: absolute;
      top: 0;
      right: -208px;
      text-align: left;
      width: 200px;
      background: #333;
      color: #fff;
      font-size: 14px;
      border-radius: 8px;
      padding: 12px 14px;
      box-sizing: border-box;
      z-index: 10;
      transition: all .5s;
      opacity: 0;
      transform: translate(-104px, -30px) scale(0);
      /* background-size: contain; */
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.text.badge}:hover::before {
      opacity: 1;   
      transform: translate(0, 0) scale(1);
   }
`;
    // ======================
    // Обложка
    // ======================
    let cover = `
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.is} {
   margin-right: 12px;
   padding-right: 0;
   transition: transform 0.7s, background-image 0.7s;
   transition: all 0.7s;
}
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.is} {
   cursor: pointer;
}
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.image} {
   height: var(--cover-size); width: var(--cover-size); 
   border-radius: var(--cover-radius);
   position: relative;
   z-index: 3;
   transition: transform 0.7s, scale .5s, translateX .6s, 
   border-radius 0.2s, z-index 0.7s;
}
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.image} img { 
   transition: all .5s;
}   
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.image}:has(img):hover {
   border-radius: 2px;
}
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.image} img:hover {
   border-radius: 2px;
   z-index: 10;
   transform: translate(28px, 18px) scale(2);
}
/*
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.is}:active img {
   transform: scale(.9);
   border: 2px solid red;
}
*/
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.image}:has(svg) {
   border: var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);
}
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.image} div[class*='border'] {
   display: none;
}
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.is} svg {
   width: calc(var(--cover-size) -30px);
   height: calc(var(--cover-size) -30px);
   margin-top: 0px;
   scale: 2;
}

/* Анимация фона */
#page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.info.cover.is} .animate {
   opacity: .8;
   background-color: var(--vkui--color_background_content);
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   position: absolute;
   top: 0;
   left: 0;
   z-index: -2;
   translate: 0px -1px; 
   filter: blur(8px);
   animation: sizeBig 10s ease 0s infinite normal forwards;
}
`;
    // ======================
    // Главное управление
    // ======================
    let controlsMain = `
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.is} {
      box-sizing: border-box;
      padding: 0;

      position: absolute;
      left: 50%;
      bottom: 16px;
      margin-left: -100px;
      width: 200px;

      transform: translate(36px, 0px);
   }

   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.main.is} {
      order: 2;
   }

   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.main.play} {
      transform: translate(calc(0px + 62px), 0.5px) scale(1);
   } 

   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.main.next} {
      transform: translate(calc(0px + 62px), 0.5px) scale(1.05);
   } 

   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.main.prev} {
      transform: translate(calc(0px + 62px), 0.5px) scale(1.05);
   } 

   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.main.prev} svg,
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.main.next} svg {
      width: 30px;
      height: 30px;
   }

   /* Репит+Порядок */ 
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.other.is} {
      /*padding: 2px;
      margin: 4px;
      */
   }

   /* Повторять */
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.other.repeat} {
      transform: translate(-124px, 1px);
   } 
/*
   /* Порядок */
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.other.shuffle} {
      transform: translate(-118px, 1px);
   } 
*/
*/`;
    // ======================
    // Другие кнопки
    // ======================
    let otherExtenstion = ` 
   /* Реки */ 
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.recoms} {
      position: absolute;
      bottom: 2px;
	   right: 873px;
	   translate: 563px 64px;
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.recoms} * {
      cursor: pointer;
   }


   
   /*=======================*/
   /* ДОП КНОПКИ (СПРАВА ВВЕРХУ) */
   /*=======================*/
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.is} {
      position: absolute;
      top: 12px;
      right: 14px;
      box-sizing: border-box;
      height: 28px;
      width: 240px;
      display: flex;
      justify-content: end;
      gap: 8px;
   }

   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.is} * {
      padding: 0;
      margin: 0;
   }

   /* BlackList */
   #page_layout .vkus-player-new [data-testid="audioplayerplaybackbody-audiobutton"]:has(${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.blacklist}) {
      order: 10;
   }  
      
   /* Add/Remove */
   #page_layout .vkus-player-new [data-testid="audioplayerplaybackbody-audiobutton"]:has(${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.add}),
   #page_layout .vkus-player-new [data-testid="audioplayerplaybackbody-audiobutton"]:has(${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.remove}) {
      order: 8;
   }
   /* Доб/удал из Библиотеки */ 
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.add},
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.remove}  {
      margin-left: 0;
   } 

   /* lyric */
   #page_layout .vkus-player-new [data-testid="audioplayerplaybackbody-audiobutton"]:has(${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.lyric}) {
      order: 9;
   }

   /* recoms */
   #page_layout .vkus-player-new [data-testid="audioplayerplaybackbody-audiobutton"]:has(${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.recoms}) {
      order: -1;
   }
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.is} > div:last-of-type {
      padding: 0;
   }
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.buttons.is} button svg {
      margin-left: 0; 
   }

   /*=======================*/
   /* Blue Player */
   /*=======================*/
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} ._1PM4_D6LjB  {
      width: 24px;
      height: 24px;
      transform: translate(calc(0px + 62px), 0px) scale(.95);
   }
   #page_layout .vkus-player-new div[id*="1724280875835"] {
      margin: 0;
   }
   #page_layout .vkus-player-new div[id*="4402108012"] {
      scale: 1;
      width: 24px;
      margin: 2px 8px 0;
   }
      
   /*=======================*/
   /* VK Next */
   /*=======================*/
   /* Скачать */
   #page_layout .vkus-player-new .e47qq1XqMPp6oTp7 {
      position: absolute;
      bottom: 8px;
      right: 236px;
      bottom: -15px;
      right: 858px;
      translate: 594px -17px;
   }
   /* Эквалайзер */
   #page_layout .vkus-player-new .e47qq1XqMPp6oTp7:nth-child(1) {
      position: absolute;
      bottom: -14px;
      right: 857px;
      translate: 326px -17px;
      scale: 1.08;
   }
`;
    // ======================
    // Юзер кнопки + Микшер
    // ======================
    let controlsUser = `
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} > div {
      display: flex;
      justify-content: end;
   }

   /* группа кнопок рядом с микшером */ 
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} > div > div:last-child {
      display: flex;
   }

   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} div[class*="AudioPlayerUserControlsContainer-module__userButton"] {
      order: -1;
   }

   /* КНОПКИ */
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} div:has(> button) {
      border-radius: 20px;
   }

   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.share} {
      position: absolute;
      bottom: -16px; 
      left: 0px;
	   translate: -92px -18px;
   } 

   #page_layout .vkus-player-new button${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.broadcastOn},
   #page_layout .vkus-player-new button${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.broadcastOff} {
      position: absolute;
      z-index: -2;
      bottom: -17px;
	   left: -653px;
	   transform: translate(82px, -17px);
   }

   .vkus-player-new button${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.broadcastOn}:hover,
   .vkus-player-new button${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.broadcastOff}:hover {
      z-index: 15;
   }

   #page_layout .vkus-player-new button${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.broadcastOn}::before,
   #page_layout .vkus-player-new button${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.broadcastOff}::before {
      content: "Не транслируется";
      position: absolute;
      width: 130px;
      text-align: left;
      color: var(--vkui--color_text_secondary);
      margin: 4px 0 0 20px;
   }
      
   #page_layout .vkus-player-new button${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.broadcastOff}::before {
      content: "Транслируется";
      color: var(--vkui--color_icon_accent);
   }

   /*===============*/
   /* МИКШЕР */
   /*===============*/
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.is} {
      display: flex;
      justify-content: end;
      position: absolute;
      bottom: 16px;
      right: -16px;
      width: 240px;
      height: 28px;
      padding: 0;
      z-index: 2;
   } 

   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.sound.is} {
      order: 10;
      padding: 0;
   }
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.sound.bar} {
      width: 100px;
   }
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.sound.icon} {
      position: relative;
      /*margin-right: 8px;*/
   }
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.sound.icon} svg {
      width: 24px;
      height: 24px;
      /*transform: translate(124px, 2px);*/
   }

   /*фон дорожки звука*/
   .vkus-player-new .Slider-module__backTrackBackground--LegyH.Slider-module__sliderPrimary--HV2wY::before {
      background-color: var(--vkui--color_search_field_background);
   }`;
    // ======================
    // Дорожка аудио
    // ======================
    let progressbar = `
   #page_layout .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.progressbar.is} {    
      bottom: 35px;
      width: 94%;
   }

   .vkus-player-new .Slider-module__sliderSizeL--JOS_t .Slider-module__fill--Gxkxh,
   .vkus-player-new .AudioPlayerPlaybackProgressBar-module__pending--pZhBg,
   .Slider-module__sliderSizeL--JOS_t::before
   {
      height: var(--progressbar);
      border-radius: 30px;
   }

   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.progressbar.is} .Slider-module__fill--Gxkxh.Slider-module__fillTrackBuffered--DzV0t::after,
   .vkus-player-new ${_player__WEBPACK_IMPORTED_MODULE_0__.player.controls.user.sound.is} .Slider-module__fill--Gxkxh.Slider-module__fillTrackBuffered--DzV0t::after 
   {
      content: '';
      position: absolute;
      
      background: var(--vkui--color_track_buffer);
      border-radius: 30px;
      transition: all .5s;

      top: auto;
      right: -4px;
      height: 16px;
      width: 16px;
      bottom: -3.9px;
      right: -7px;
      max-height: 12px;
      width: 12px;
      opacity: 1;
   }
`;
    // ======================
    // Эффекты
    // ======================
    let effects = `
   /* Кнопка нажата */
   .vkus-animate__click-button-container {
      position: relative;
      border: 2px solid #F21CDC;
   }
   .vkus-animate__click-button {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 52px;
      height: 52px;
      z-index: 19999;
      margin-left: calc(-26px + 0px);
      margin-left: calc(-26px + 80px);
      margin-top: -26px;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      border-radius: 26px;
      pointer-events: none;
   /*
      color: var(--vkui--color_icon_secondary);
      background: var(--vkui--color_background);
   */
      display: flex;
      justifu-content: center;
      align-items: center;
      display: none; 
      animation: moveAndRotate 2s infinite alternate;
   }

   .vkus-animate__click-button-container .vkus-animate__click-button {
      left: 50%;
      top: 50%;
      width: 52px;
      height: 52px;
      z-index: 19999;
      margin-left: calc(-26px + 70px);
      margin: 0;
      margin-top: -26px;
      margin-left: calc(-26px + 0px);
   }
   .vkus-animate__fixed {
      position: fixed;
   }
   .vkus-animate__click-button.animate {
      display: block;
      animation: 500ms linear -12.6131ms 1 normal forwards running fadeout;
   }
   @keyframes fadeout {
      from {
         opacity: 1;
         transform: scale(1);
      }
      50% {
         opacity: 1;
      }
      to {
         opacity: 0;
         transform: scale(3);
      }
   } 
      
   /* Анимация для фона обложки */ 
   @keyframes sizeBig {
      from {
         transform: scale(0.9) translate(3px, 3px);
         opacity: 0.1;
      }
      20% {
         transform: scale(1.9) translate(-18px, -15px);
         filter: blur(9px);
         border-radius: 30px;
         opacity: 0.2;
      }
      40% {
         transform: scale(1.5) translate(-10px, -12px);
         opacity: 0.3;
      }
      60% {
         transform: scale(1.9) translate(-18px, -15px);
         filter: blur(9px);
         border-radius: 30px;
         opacity: 0.2;
      }
      to {
         transform: scale(0.9) translate(3px, 3px);
         opacity: 0.1;
      }
   }

   @keyframes point-scale {
      from {
         transform: scale(0);
         opacity: 0;
      } 
      to {
         transform: scale(1);
         opacity: 1;
      }
   }
`;
    // ======================
    // HEADER
    // ======================
    let headerPlayer = `
   `;
    // ======================
    // VideoInPostBorderRadius
    // ======================
    let videoInPostBorderRadius = `
   .inline_video_wrap {
      border-radius: var(--mg-border-radius-wrapper);
      --border-width: var(--cover-radius);
      box-sizing: border-box;
      box-shadow: 0 0 0 var(--border-width) var(--vkui--color_separator_secondary);
   }`;
    // ======================
    // Fixed Player
    // ======================
    let fixedPlayer = `
   [class*="AudioPlayerBlockDefaultLayout__fixed"] {
      top: auto;
      transform: translate(0, 0px);
      bottom: -2px;
   }
      
   [class*="AudioPlayerBlockDefaultLayout__fixed"] section {
      border-radius: var(--vkui--size_border_radius_paper--regular) var(--vkui--size_border_radius_paper--regular) 0 0;
   }
   `;
    // ======================
    // Fixed Player
    // ======================
    let aboutMe = `
   .aboutMe {
      padding: 8px 20px 150px;
   }
   `;
    // Все стили в один
    let styles = is +
        controlsMain +
        controlsUser +
        otherExtenstion +
        cover +
        info +
        progressbar +
        headerPlayer +
        // videoInPostBorderRadius +
        fixedPlayer +
        aboutMe +
        modeDev;
    return effects + styles.replace(/;/g, " !important;");
};


/***/ }),

/***/ "./src/contentScript/player/player.ts":
/*!********************************************!*\
  !*** ./src/contentScript/player/player.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
let player = {
    is: '[class*="AudioPlayerBlock"] section',
    in: "[data-testid='audioplayerblocksectionslayout']",
    buttons: {
        is: '[class*="vkitAudioPlayerPlaybackBody__audioButtons"]',
        // is: '[data-testid="audioplayerplaybackbody-audiobutton"]',
        add: '[data-testid="audio-player-block-add-audio-from-my-music-button"]',
        remove: '[data-testid="audio-player-block-delete-audio-to-my-music-button"]',
        blacklist: '[aria-label="Не нравится"]',
        recoms: '[href*="/audio?audio_id"]',
        lyric: '[data-testid="audio-player-block-lyrics-button"]',
    },
    controls: {
        is: '[data-testid="audioplayerblocksectionslayout-playbackcontrols"]',
        main: {
            is: '[class*="AudioPlayerPlaybackControlsContainer-module__playbackControls"]',
            prev: '[data-testid="audio-player-controls-backward-button"]',
            play: '[data-testid="audio-player-controls-state-button"]',
            next: '[data-testid="audio-player-controls-forward-button"]',
        },
        other: {
            is: '[class*="AudioPlayerPlaybackControlsContainer-module__playbackButtonsContainer"]',
            shuffle: '[data-testid="audio-player-block-shuffle-button"]',
            repeat: '[data-testid="audio-player-block-repeat-button"]',
        },
        user: {
            is: '[data-testid="audioplayerblocksectionslayout-usercontrols"]',
            broadcastOn: '[data-testid="audio-player-block-broadcast-enable-button"]',
            broadcastOff: '[data-testid="audio-player-block-broadcast-disable-button"]',
            share: '[data-testid="audio-player-block-share-button"]',
            sound: {
                is: '[class*="AudioPlayerUserControlsContainer-module__volumeSlider"]',
                in: '[data-testid="audioplayervolumeslider"]',
                bar: '[data-testid="audioplayervolumeslider"] > div',
                icon: '[data-testid="audioplayervolumeslider"] button',
            },
        },
    },
    info: {
        is: '[data-testid="audioplayerblocksectionslayout-playbackbody"]',
        cover: {
            is: '[data-testid="audioplayerplaybackbody-cover"]',
            image: '[data-testid="audioplayerplaybackbody-cover"] > div',
        },
        text: {
            is: '[data-testid="audioplayerplaybackbody-audioinfo"]',
            in: '[data-testid="audioplayeraudioinfo"][class*="AudioPlayerAudioInfo-module__root"]',
            title: '[class*="AudioPlayerAudioInfo__title"] > div',
            titleType: '[class*="AudioPlayerAudioInfo-module__title"] > div > span',
            artist: '[data-testid="audioplayeraudioinfo-subtitle"] > div',
            badge: '[data-testid="audioplayeraudioinfo-ageratedbadge"]',
        },
    },
    progressbar: {
        is: '[data-testid="audioplayerplaybackbody-progressbar"]',
        value: ".Slider-module__sliderSizeL--JOS_t .Slider-module__fill--Gxkxh",
        download: '[class*="Slider-module__fill"][class*="Slider-module__fillTransparent"]',
        bg: '[class*="Slider-module__sliderSizeL"]',
        timer: '[data-testid="audioplayerplaybackbody-progresstime"]',
    },
    header: {
        controls: {
            is: '#page_header [data-testid="audioplayerblocksectionslayout-playbackcontrols"]',
            main: {
                is: '[class*="AudioPlayerPlaybackControlsContainer-module__playbackControls"]',
                prev: '#page_header [accesskey="j"]',
                play: '#page_header [data-testid="audio-player-controls-state-button"]',
                next: '#page_header [accesskey="l"]',
            },
        },
        info: {
            is: '#page_header [data-testid="audioplayerblocksectionslayout-playbackbody"]',
            cover: {
                is: '#page_header [data-testid="audioplayerplaybackbody-cover"]',
                image: '#page_header [data-testid="audioplayerplaybackbody-cover"] > div',
            },
            text: {
                is: '#page_header [data-testid="audioplayerplaybackbody-audioinfo"]',
                in: '#page_header [data-testid="audioplayeraudioinfo"][class*="AudioPlayerAudioInfo-module__root"]',
                title: '#page_header [class*="AudioPlayerAudioInfo-module__title"] > div',
                titleType: '#page_header [class*="AudioPlayerAudioInfo-module__title"] > div > span',
                artist: '#page_header [data-testid="audioplayeraudioinfo-subtitle"] > div',
                badge: '#page_header [data-testid="audioplayeraudioinfo-ageratedbadge"]',
            },
        },
    },
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc": () => (/* binding */ doc),
/* harmony export */   "docAll": () => (/* binding */ docAll)
/* harmony export */ });
/* harmony import */ var _player_default_defaultAdaptive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/default/defaultAdaptive */ "./src/contentScript/player/default/defaultAdaptive.tsx");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/player */ "./src/contentScript/player/player.ts");


// import "animate.css";
// Загрузка...
chrome.runtime.sendMessage("[VKUS] https://vk.com/vkus_epta", (response) => {
    console.log("[VKUS]", "https://vk.com/vkus_epta");
    // console.log("[VKUS] Код для ВКонтакте");
    updatePlayer(_player_player__WEBPACK_IMPORTED_MODULE_1__.player, true);
});
// Загрузка закончена!
window.onload = (event) => {
    // console.log("[VKUS]", "Страница загружена");
};
// ================
// Обновляем стили
// ================
function updatePlayer(player, isEnable) {
    if (isEnable) {
        function updateStyles(styles) {
            // Добавляем вкусный класс
            const audioPageLayout = document.querySelector("._audio_page_layout");
            if (audioPageLayout) {
                audioPageLayout.classList.add("vkus-player-new");
            }
            else {
                console.warn("[VKUS] Элемент с указанными классами не найден");
            }
            // Добавляем стили
            if (!doc("#vkusStyles")) {
                const styleElement = document.createElement("style");
                styleElement.id = "vkusStyles";
                document.head.appendChild(styleElement);
            }
            document.getElementById("vkusStyles").textContent = styles;
        }
        updateStyles((0,_player_default_defaultAdaptive__WEBPACK_IMPORTED_MODULE_0__.playerDefaultAdaptive)());
        // ================
        // # Иконка дизлайка
        // ================
        // {
        //    console.log(
        //       "[VKUS] player.buttons.blacklist",
        //       doc(player.buttons.blacklist)
        //    );
        //    let iconBlock = document.createElement("button");
        //    iconBlock.className = "vkusIconBlock";
        //    iconBlock.addEventListener("click", () => {
        //       doc(player.buttons.blacklist).click();
        //    });
        //    iconBlock.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        // <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C16.9706 3 21 7.02944 21 12C21 14.125 20.2635 16.078 19.0319 17.6177L6.38231 4.9681C7.92199 3.73647 9.87499 3 12 3ZM3 12C3 16.9706 7.02944 21 12 21C14.125 21 16.078 20.2635 17.6177 19.0319L4.9681 6.38231C3.73647 7.92199 3 9.87499 3 12Z" fill="#828282"/>
        // </svg>
        // `;
        //    // doc(player.buttons.blacklist).insertAdjacentElement('afterend', iconBlock);
        // }
        // ================
        // HotKey
        // ================
        // Функция Показа кнопки
        const showDivClickButton = (state, position = "center", event = null) => {
            let divClickButton = document.createElement("div");
            let iconsState = {
                play: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.882 24.7513C35.8482 25.3096 35.8482 26.7053 34.882 27.2637L22.3968 34.4776C21.4305 35.036 20.2227 34.3381 20.2227 33.2215V18.7935C20.2227 17.677 21.4305 16.979 22.3968 17.5373L34.882 24.7513Z" fill="#FFFFFF"/>
      </svg>
      `,
                pause: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.7773 19.6441C18.7773 18.8351 18.7773 18.4306 18.9348 18.1217C19.0733 17.8498 19.2942 17.629 19.566 17.4905C19.875 17.333 20.2794 17.333 21.0885 17.333H22.244C23.053 17.333 23.4575 17.333 23.7665 17.4905C24.0383 17.629 24.2592 17.8498 24.3977 18.1217C24.5551 18.4306 24.5551 18.8351 24.5551 19.6441V32.3552C24.5551 33.1643 24.5551 33.5687 24.3977 33.8777C24.2592 34.1495 24.0383 34.3704 23.7665 34.5089C23.4575 34.6663 23.053 34.6663 22.244 34.6663H21.0885C20.2794 34.6663 19.875 34.6663 19.566 34.5089C19.2942 34.3704 19.0733 34.1495 18.9348 33.8777C18.7773 33.5687 18.7773 33.1643 18.7773 32.3552V19.6441Z" fill="#FFFFFF"/>
      <path d="M27.4453 19.6441C27.4453 18.8351 27.4453 18.4306 27.6028 18.1217C27.7413 17.8498 27.9621 17.629 28.234 17.4905C28.5429 17.333 28.9474 17.333 29.7564 17.333H30.912C31.721 17.333 32.1255 17.333 32.4344 17.4905C32.7063 17.629 32.9271 17.8498 33.0656 18.1217C33.2231 18.4306 33.2231 18.8351 33.2231 19.6441V32.3552C33.2231 33.1643 33.2231 33.5687 33.0656 33.8777C32.9271 34.1495 32.7063 34.3704 32.4344 34.5089C32.1255 34.6663 31.721 34.6663 30.912 34.6663H29.7564C28.9474 34.6663 28.5429 34.6663 28.234 34.5089C27.9621 34.3704 27.7413 34.1495 27.6028 33.8777C27.4453 33.5687 27.4453 33.1643 27.4453 32.3552V19.6441Z" fill="#FFFFFF"/>
      </svg>
      `,
                prev: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.8607 33.2218C20.459 33.2218 20.944 32.7367 20.944 32.1384V27.5483L31.2225 33.0587C32.127 33.5436 33.2218 32.8883 33.2218 31.862V20.137C33.2218 19.1107 32.127 18.4554 31.2225 18.9404L20.944 24.4507V19.861C20.944 19.2627 20.459 18.7776 19.8607 18.7776C19.2624 18.7776 18.7773 19.2627 18.7773 19.861V32.1384C18.7773 32.7367 19.2624 33.2218 19.8607 33.2218Z" fill="#FFFFFF"/>
      </svg>`,
                next: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.1385 18.7773C31.5402 18.7773 31.0551 19.2624 31.0551 19.8607V24.4508L20.7766 18.9404C19.8721 18.4555 18.7773 19.1107 18.7773 20.1371V31.8621C18.7773 32.8884 19.8721 33.5436 20.7766 33.0587L31.0551 27.5483V32.1382C31.0551 32.7365 31.5402 33.2215 32.1385 33.2215C32.7367 33.2215 33.2218 32.7365 33.2218 32.1382V19.8607C33.2218 19.2624 32.7367 18.7773 32.1385 18.7773Z" fill="#FFFFFF"/>
      </svg>`,
                soundOn: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2224_3283)">
<path d="M29 17C29.5523 17 30 17.4477 30 18V34C30 34.5523 29.5523 35 29 35C28.3585 35 27.7422 34.7509 27.2808 34.3052L21.7901 29H19C17.8954 29 17 28.1046 17 27V25C17 23.8954 17.8954 23 19 23H21.765L27.2794 17.6934C27.7417 17.2485 28.3584 17 29 17ZM34.3841 20.3431C34.7355 19.9917 35.3054 19.9917 35.6569 20.3431C38.781 23.4673 38.781 28.5327 35.6569 31.6569C35.3054 32.0083 34.7355 32.0083 34.3841 31.6569C34.0326 31.3054 34.0326 30.7355 34.3841 30.3841C36.8053 27.9628 36.8053 24.0372 34.3841 21.6159C34.0326 21.2645 34.0326 20.6946 34.3841 20.3431ZM31.8385 22.8887C32.1899 22.5373 32.7598 22.5373 33.1113 22.8887C34.8296 24.607 34.8296 27.393 33.1113 29.1113C32.7598 29.4627 32.1899 29.4627 31.8385 29.1113C31.487 28.7598 31.487 28.1899 31.8385 27.8385C32.8538 26.8231 32.8538 25.1769 31.8385 24.1615C31.487 23.81 31.487 23.2402 31.8385 22.8887Z" fill="#99A2AD"/>
<path d="M30.25 18C30.25 17.3096 29.6904 16.75 29 16.75C28.2938 16.75 27.615 17.0236 27.1061 17.5133L21.6642 22.75H19C17.7574 22.75 16.75 23.7574 16.75 25V27C16.75 28.2426 17.7574 29.25 19 29.25H21.6891L27.1071 34.4849C27.6151 34.9757 28.2937 35.25 29 35.25C29.6904 35.25 30.25 34.6904 30.25 34V18ZM35.8336 20.1664C35.3845 19.7173 34.6564 19.7173 34.2073 20.1664C33.7582 20.6155 33.7582 21.3436 34.2073 21.7927C36.5309 24.1163 36.5309 27.8837 34.2073 30.2073C33.7582 30.6564 33.7582 31.3845 34.2073 31.8336C34.6564 32.2827 35.3845 32.2827 35.8336 31.8336C39.0555 28.6118 39.0555 23.3882 35.8336 20.1664ZM33.288 22.712C32.8389 22.2628 32.1108 22.2628 31.6617 22.712C31.2126 23.1611 31.2126 23.8892 31.6617 24.3383C32.5794 25.256 32.5794 26.744 31.6617 27.6617C31.2126 28.1108 31.2126 28.8389 31.6617 29.288C32.1108 29.7371 32.8389 29.7371 33.288 29.288C35.104 27.4721 35.104 24.5279 33.288 22.712Z" stroke="black" stroke-opacity="0.12" stroke-width="0.5"/>
</g>
<defs>
<filter id="filter0_d_2224_3283" x="11.5" y="11.5" width="32" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2224_3283"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2224_3283" result="shape"/>
</filter>
</defs>
</svg>
`,
                soundOff: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2224_3288)">
<path d="M20.7147 17.2953L34.7015 31.2852C35.092 31.6758 35.0919 32.309 34.7014 32.6995C34.341 33.06 33.7738 33.0877 33.3815 32.7827L33.2873 32.6995L30 29.411V34C30 34.5128 29.614 34.9355 29.1166 34.9933L29 35C28.3585 35 27.7422 34.7509 27.2808 34.3052L21.7901 29H19C17.8954 29 17 28.1046 17 27V25C17 23.8954 17.8954 23 19 23H21.765L22.695 22.104L19.3006 18.7096C18.9101 18.319 18.9101 17.6858 19.3007 17.2953C19.6912 16.9048 20.3242 16.9048 20.7147 17.2953ZM29 17C29.5523 17 30 17.4477 30 18V23.76L25.574 19.334L27.2794 17.6934C27.6955 17.293 28.2366 17.0517 28.8084 17.0074L29 17Z" fill="#99A2AD"/>
<path d="M20.8915 17.1185L20.8915 17.1185C20.4034 16.6304 19.612 16.6304 19.1239 17.1185C18.6357 17.6066 18.6357 18.3981 19.1238 18.8863L19.1238 18.8863L22.3381 22.1007L21.6642 22.75H19C17.7574 22.75 16.75 23.7574 16.75 25V27C16.75 28.2426 17.7574 29.25 19 29.25H21.6891L27.1071 34.4849C27.6151 34.9757 28.2937 35.25 29 35.25H29.0072L29.0144 35.2496L29.131 35.2429L29.1383 35.2424L29.1455 35.2416C29.7674 35.1694 30.25 34.6412 30.25 34V30.0147L33.1105 32.8762L33.116 32.8817L33.1218 32.8868L33.2161 32.9701L33.2219 32.9753L33.2281 32.9801C33.7186 33.3615 34.4275 33.327 34.8782 32.8763C35.3663 32.3882 35.3664 31.5967 34.8783 31.1085L20.8915 17.1185ZM29 16.75V16.7498L28.9903 16.7502L28.7987 16.7576L28.7987 16.7574L28.7891 16.7581C28.1597 16.8069 27.5641 17.0725 27.1061 17.5132C27.1061 17.5132 27.1061 17.5132 27.1061 17.5133L25.4007 19.1538L25.217 19.3305L25.3972 19.5108L29.8232 23.9368L30.25 24.3636V23.76V18C30.25 17.3096 29.6904 16.75 29 16.75Z" stroke="black" stroke-opacity="0.12" stroke-width="0.5"/>
</g>
<defs>
<filter id="filter0_d_2224_3288" x="11.5" y="11.5" width="28.9961" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2224_3288"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2224_3288" result="shape"/>
</filter>
</defs>
</svg>

`,
            };
            divClickButton.innerHTML = iconsState.play;
            divClickButton.classList.add("vkus-animate__click-button");
            // Выбираем положение
            if (position === "center") {
                divClickButton.classList.add("vkus-animate__fixed");
                document.body.insertAdjacentElement("afterbegin", divClickButton);
            }
            else if (event != null) {
                event.target.offsetParent.classList.add("vkus-animate__click-button-container");
                doc(".vkus-animate__click-button-container").insertAdjacentElement("afterbegin", divClickButton);
                // console.group("event ##################################");
                // console.log("event.target.classList", event.target.classList);
                // console.log("event.target.offsetParent.classList", event.target.offsetParent.classList);
                // console.log("event", event);
                // console.groupEnd();
            }
            // Сбрасываем остальные кнокпи
            docAll(".vkus-animate__click-button.animate").forEach((el) => {
                setTimeout(() => divClickButton.classList.remove("animate"), 500);
            });
            divClickButton.classList.add("animate");
            // Выбираем иконку кнопки
            switch (state) {
                case "play":
                    // Ищим источник состояния
                    let statePlayer;
                    if (doc(player.controls.main.play)) {
                        statePlayer = doc(player.controls.main.play).getAttribute("aria-label");
                    }
                    else {
                        statePlayer = doc(`${player.header.controls.main.play} > div`).innerText;
                    }
                    // Узнаем какой щас состояние
                    switch (statePlayer) {
                        case "Воспроизвести":
                            divClickButton.innerHTML = iconsState.play;
                            break;
                        case "Приостановить":
                            divClickButton.innerHTML = iconsState.pause;
                            break;
                    }
                    break;
                case "prev":
                    divClickButton.innerHTML = iconsState.prev;
                    break;
                case "next":
                    divClickButton.innerHTML = iconsState.next;
                    break;
                case "sound":
                    if (!!doc("#page_layout .vkuiIcon--volume_outline_20")) {
                        divClickButton.innerHTML = iconsState.soundOff;
                    }
                    else {
                        divClickButton.innerHTML = iconsState.soundOn;
                    }
                    break;
            }
            // Удаляем через 500 мс
            setTimeout(() => divClickButton.remove(), 1 * 600);
        };
        // ================
        // Показ кнопки
        // ================
        {
            document.addEventListener("keydown", function (event) {
                let eventTarget = event.target;
                // Проверка на input
                if (eventTarget.tagName.toLowerCase() !== "input" &&
                    !(eventTarget.hasAttribute("contenteditable") &&
                        eventTarget.getAttribute("contenteditable") === "true")) {
                    switch (event.code) {
                        // Пауза
                        case "Space":
                            event.preventDefault();
                            console.log("Пробел нажат!");
                            // Проверка есть ли кнопки вшапке
                            if (!!doc(player.header.controls.main.play)) {
                                // Показываем значок (либо игра, либо пауза)
                                showDivClickButton("play");
                                // Клик
                                doc(player.header.controls.main.play).click();
                            }
                            else if (doc(player.controls.main.play)) {
                                // Показываем значок (либо игра, либо пауза)
                                showDivClickButton("play");
                                // Клик
                                doc(player.controls.main.play).click();
                            }
                            // console.log("[VKUS] play ---------------------", [
                            // doc(player.header.controls.main.play),
                            // ]);
                            break;
                        // Пауза
                        case "KeyS":
                            console.log("Нажата клавиша S");
                            // Проверка есть ли кнопки вшапке
                            if (!!doc(player.header.controls.main.play)) {
                                // Показываем значок (либо игра, либо пауза)
                                showDivClickButton("play");
                                // Клик
                                doc(player.header.controls.main.play).click();
                            }
                            else if (doc(player.controls.main.play)) {
                                // Показываем значок (либо игра, либо пауза)
                                showDivClickButton("play");
                                // Клик
                                doc(player.controls.main.play).click();
                            }
                            break;
                        // Предыдущий трек
                        case "KeyA":
                            console.log("Нажата клавиша A");
                            // Проверка есть ли кнопки вшапке
                            if (!!doc(player.header.controls.main.play) ||
                                doc(player.controls.main.play)) {
                                // Показываем значок
                                showDivClickButton("prev");
                                // Клик
                                doc(player.controls.main.prev).click();
                            }
                            break;
                        // Следующий трек
                        case "KeyD":
                            console.log("Нажата клавиша D");
                            // Проверка есть ли кнопки вшапке
                            if (!!doc(player.header.controls.main.play) ||
                                doc(player.controls.main.play)) {
                                // Показываем значок
                                showDivClickButton("next");
                                // Клик
                                doc(player.controls.main.next).click();
                            }
                            break;
                        // Звук (!) - доработать
                        case "KeyW":
                            console.log("Нажата клавиша W");
                            // Клик
                            console.log(doc(player.controls.user.sound.icon));
                            // Проверка есть ли кнопки вшапке
                            if (!!doc(player.header.controls.main.play)) {
                                // Показываем значок
                                showDivClickButton("sound");
                                // Клик
                                doc(player.header.controls.main.next).click();
                            }
                            else if (doc(player.controls.main.play)) {
                                // Показываем значок (либо игра, либо пауза)
                                showDivClickButton("sound");
                                // Клик
                                doc(player.controls.user.sound.icon).click();
                            }
                            break;
                    }
                }
            });
        }
        // ================
        // Пауза при клике на обложку
        // ================
        {
            document
                .querySelector(player.info.cover.is)
                .addEventListener("click", (e) => {
                doc(player.controls.main.play).click();
                // Показ кнопки
                // showDivClickButton("play", "here", e);
            });
        }
        // ================
        // # Скролл громкости
        // ================
        // {
        //    const volumeSlider = doc('[data-testid="audioplayervolumeslider"]');
        //    const fillBar = volumeSlider.querySelector(".Slider-module__fill--Gxkxh");
        //    const slider = volumeSlider.querySelector(".Slider-module__root--_8EdI");
        //    let isHovering = false;
        //    // Устанавливаем флаг при наведении и убираем при уходе
        //    volumeSlider.addEventListener("mouseenter", () => {
        //       isHovering = true;
        //    });
        //    volumeSlider.addEventListener("mouseleave", () => {
        //       isHovering = false;
        //    });
        //    // Обработчик события для прокрутки колесика мыши
        //    window.addEventListener("wheel", (event) => {
        //       if (!isHovering) return; // Если курсор не над слайдером, выходим
        //       //event.preventDefault(); // Предотвращаем прокрутку страницы
        //       const delta = Math.sign(event.deltaY);
        //       let currentVolume = parseFloat(slider.getAttribute("aria-valuenow"));
        //       // Изменяем громкость
        //       if (delta === 1 && currentVolume > 0) {
        //          // Прокрутка вниз
        //          currentVolume = Math.max(0, currentVolume - 0.1);
        //          doc(
        //             ".Slider-module__root--_8EdI.Slider-module__sliderSizeL--JOS_t.Slider-module__sliderPrimary--HV2wY.Slider-module__backTrackBackground--LegyH"
        //          ).click();
        //       } else if (delta === -1 && currentVolume < 1) {
        //          // Прокрутка вверх
        //          currentVolume = Math.min(1, currentVolume + 0.1);
        //          doc(
        //             ".Slider-module__root--_8EdI.Slider-module__sliderSizeL--JOS_t.Slider-module__sliderPrimary--HV2wY.Slider-module__backTrackBackground--LegyH"
        //          ).click();
        //       }
        //       // Обновляем значение слайдера и заливки
        //       slider.setAttribute("aria-valuenow", currentVolume);
        //       fillBar.style.width = currentVolume * 100 + "%";
        //    });
        // }
        // ================
        // # BlackList
        // ================
        // const myBlackList = ["mzlff"];
        // ================
        // Инфа о треке + Анимация фона
        // ================
        {
            let coverSVG = doc(`${player.info.cover.image} svg`);
            let showInfo = false;
            // Меняем обложку
            // console.log("1 [VKUS] coverSVG", !coverSVG);
            let coverURL;
            if (!!coverSVG) {
                coverURL = doc(`${player.header.info.cover.image} img`).src;
                console.log("2 [VKUS] coverURL:", doc(`${player.info.cover.image}`));
                doc(`${player.info.cover.image} > div`).classList.add("animate");
                doc(`${player.info.cover.image} > div`).style = `background-image: url(${coverURL});`;
            }
            else {
                doc(`${player.info.cover.image} > div`).style = `background-image: none;`;
            }
            // Свотка
            if (showInfo) {
                console.group("3 [VKUS] Сейчас играет:");
                console.log("Название:", doc(player.info.text.title).innerText);
                console.log("Артист(ы):", Array.from(docAll(player.info.text.artist)).map((el) => el.innerText));
                console.groupEnd();
            }
            // Слежка
            const observer = new MutationObserver((mutations) => {
                // Ищем есть ли иконка по умолчаниюсм
                let coverSVG = doc(`${player.info.cover.image} svg`);
                let coverURL = "";
                // Вывод
                if (showInfo) {
                    console.group("[VKUS]======================");
                    // console.log("[VKUS] coverSVG", coverSVG);
                    // console.log("[VKUS] coverURL", coverURL);
                    // console.log("[VKUS] mutations", mutations);
                    console.groupEnd();
                }
                // Меняем обложку
                if (!coverSVG) {
                    // нет иконки
                    coverURL = doc(`${player.info.cover.image} img`).src;
                    // добавляем класс и картинку
                    doc(`${player.info.cover.image} > div`).classList.add("animate");
                    doc(`${player.info.cover.image} > div`).style = `background-image: url(${coverURL});`;
                }
                else {
                    // есть иконка
                    const elements = docAll(`${player.info.cover.image} > div`);
                    const filteredElements = Array.from(elements).filter((element) => element.classList.contains("animate"));
                    // сброс фона
                    filteredElements.forEach((element) => {
                        element.classList.remove("animate");
                        element.style = `background-image: none;`;
                    });
                }
                // дополнение к названию треку (ост и т.п.)
                let titleType = doc(player.info.text.titleType);
                if (titleType) {
                    titleType = titleType.innerText;
                }
                else {
                    titleType = "";
                }
                // Итог
                if (showInfo) {
                    console.group("3 [VKUS] Сейчас играет трек:");
                    // console.log("[VKUS] BlackList %%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
                    console.log("Обложка:", [coverURL]);
                    console.log("Название:", [
                        doc(player.info.text.title).innerText,
                        titleType,
                    ]);
                    console.log("Артист(ы):", Array.from(docAll(player.info.text.artist)).map((el) => el.innerText));
                    console.groupEnd();
                }
            });
            observer.observe(doc(player.info.is), {
                characterData: true,
                subtree: true,
                childList: true,
                characterDataOldValue: true, // передавать старое значение в колбэк
            });
        }
    }
    // ================
    // # About
    // ================
    {
        // Находим элемент, после которого нужно вставить новый div
        const audioPageLayout = document.querySelector("._audio_page_layout");
        // Язык
        let isRussian = true;
        if (document.documentElement.lang !== "ru") {
            isRussian = false;
        }
        const contentElements = {
            version: chrome.runtime.getManifest().version,
            date: ["1", "марта", "2025"],
            month: "March",
            author: ["Руслан Аксёнов", "Ruslan Akseonow"],
            links: {
                subscribe: "https://vk.com/vkus_epta",
                post: "https://vk.com/vkus_epta",
                authorProfile: "https://vk.com/akseonowww",
            },
        };
        const content = isRussian
            ? `
        <h2 class="CatalogBlock__title CatalogSearchGlobalClipsHeader">
            VKUS • Плеер для ВКонтакте — 
            <a href="${contentElements.links.subscribe}" target="_blank">Подписаться</a>
        </h2>
        <p>VK Universe Sound — Вселенная звука ВКонтакте.</p>
        <p><strong>Версия:</strong> ${contentElements.version} 
        </p>
        <p><strong>Дата:</strong> ${contentElements.date[0]} ${contentElements.date[1]} ${contentElements.date[2]}</p>
        <p><strong>Автор:</strong> 
            <a href="${contentElements.links.authorProfile}" target="_blank">${contentElements.author[0]}</a>
        </p>
    `
            : `
        <h2 class="CatalogBlock__title CatalogSearchGlobalClipsHeader">
            VKUS • VK Player — 
            <a href="${contentElements.links.subscribe}" target="_blank">Subscribe</a>
        </h2>
        <p>VK Universe Sound.</p>
        <p><strong>Version:</strong> ${contentElements.version} 
        </p>
        <p><strong>Date:</strong> ${contentElements.date[0]} ${contentElements.month} ${contentElements.date[2]}</p>
        <p><strong>Author:</strong> 
            <a href="${contentElements.links.authorProfile}" target="_blank">${contentElements.author[1]}</a>
        </p>
    `;
        if (!document.querySelector(".aboutMe")) {
            // Создаем новый div
            const aboutMe = document.createElement("div");
            aboutMe.classList.add("aboutMe");
            // Добавляем описание расширения, версию, автора и призыв
            aboutMe.innerHTML = content;
            // Вставляем новый div после существующего
            audioPageLayout.insertAdjacentElement("afterend", aboutMe);
        }
    }
}
// При загрузке страницы проверяем состояние из chrome.storage
chrome.storage.sync.get(["isNewPlayerEnabled"], (result) => {
    var _a;
    // console.log("[VKUS] ", chrome.storage.sync.get(["isNewPlayerEnabled"]));
    updatePlayer(_player_player__WEBPACK_IMPORTED_MODULE_1__.player, (_a = result.isNewPlayerEnabled) !== null && _a !== void 0 ? _a : false);
});
// Слушаем сообщения от popup для переключения состояния в реальном времени
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "TOGGLE_PLAYER") {
        updatePlayer(_player_player__WEBPACK_IMPORTED_MODULE_1__.player, message.state);
    }
});
// Вспомогательные функции
const doc = (node) => {
    return document.querySelector(node);
};
const docAll = (node) => {
    return document.querySelectorAll(node);
};

})();

/******/ })()
;
//# sourceMappingURL=contentScript.js.map