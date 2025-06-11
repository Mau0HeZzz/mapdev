import 'atropos/css'
import Atropos from 'atropos';
import { md577 } from './script';

document.addEventListener('DOMContentLoaded', () => {
  const heroMediaItems = document.querySelectorAll('.hero__mediaitem');
  if (heroMediaItems.length) {
    heroMediaItems.forEach((item, index) => {
      item.style.setProperty('--i', index);
      item.closest('.hero__media')?.style.setProperty('--max-i', heroMediaItems.length);
    })
    
    if (!md577.matches) {
      const myAtropos = Atropos({
        el: '.my-atropos',
        shadow: false,
        highlight: false,
        onRotate(x, y) {
          heroMediaItems.forEach(item => {
            const inner = item.querySelector('.hero__mediainner');
            if (inner) {
              inner.style.setProperty('transform', `skew(${y - 15}deg)`)
            }
          })
        }
      });
    }
  }
})