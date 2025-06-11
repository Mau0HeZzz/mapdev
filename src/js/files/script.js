// Подключение функционала "Чертоги Фрилансера"
import { debounce, isMobile, menuClose } from "./functions.js";
// Подключение списка активных модулей
import { mhzModules } from "./modules.js";


export const md577 = matchMedia('(width <= 36.0625rem)');

document.addEventListener('DOMContentLoaded', () => {
  const orderItems = document.querySelectorAll('[style*="--order-mobile"]');
  if (orderItems.length) {
    orderItems.forEach(item=>{
      const order = getComputedStyle(item).getPropertyValue('--order-mobile');
      if (Number(order) % 2 !== 0) {
        item.classList.add('_reversed');
      }
    })
  }
})

window.addEventListener('load', () => {
  const atroposEls = document.querySelectorAll('.atropos');
  if (atroposEls.length) {
    atroposEls.forEach(el=>{
      el.style.setProperty('--left', `${el.getBoundingClientRect().left}px`)
    })
  }
})

document.addEventListener('click', (e) => {
  if (!e.target.closest('.header__menu.menu')||e.target.closest('[data-goto]')) {
    menuClose();
  }
})

document.addEventListener('beforePopupOpen', (e) => {
  const { popup } = e.detail;
  
  if (popup?.hash === "#examplesPopup") {
    onExamplesOpen(popup)
  }
})

document.addEventListener("afterPopupOpen", t => {
    t.detail.popup.hash && setTimeout( () => {
        document.querySelector(t.detail.popup.hash).scrollTo({
            top: 0
        })
    }
    , 50)
});

function onExamplesOpen(popup) {
  const { triggerButton } = popup;
  
  const popupEl = popup?.targetOpen?.element;
  const src = triggerButton?.getAttribute('data-src');
  const img = triggerButton.querySelector('img');
  if (!src||!popupEl) return;

  const content = triggerButton?.getAttribute('data-content');
  const titleEl = triggerButton?.querySelector('.examples__itemtitle');

  const popupTitleEl = popupEl.querySelector('.examplesPopup__title');
  const popupTextEl = popupEl.querySelector('.examplesPopup__text');
  const popupFrameEl = popupEl.querySelector('.examplesPopup__frame');

  if (popupTitleEl&&titleEl) {
    popupTitleEl.innerHTML = titleEl.innerHTML;
  }

  if (popupTextEl&&content) {
    popupTextEl.innerHTML = content;
  }

  if (popupFrameEl) {
    popupFrameEl.classList.add('_skeleton');
    let str = '';
    if (!md577.matches) {
      str = `<iframe src="${src}" frameborder="0" onload="this.parentElement.classList.remove('_skeleton')"></iframe>`;
    } else {
      if (img&&img.src) {
        str = `<img src="${img.src}" onload="this.parentElement.classList.remove('_skeleton')"></img>`;
      } else {
        popupFrameEl.hidden = true;
      }
    }
    popupFrameEl.innerHTML = str;
  }
}