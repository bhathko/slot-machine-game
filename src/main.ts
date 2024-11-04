import './style.css'

function rollAll() {


  const numIcons = 9;
  const reelList = document.querySelectorAll('.reel');
  reelList.forEach((reel, index) => {
    reel.style.transition = `background-position-y ${(index + 2) * 400}ms cubic-bezier(.41,-0.01,.63,1.09)`;
    const random = Math.floor((Math.random() + 1) * numIcons);
    reel.style.backgroundPositionY = `${random * 80 *random  - random * random }px `;

    // setTimeout(() => {
    //   reel.style.transition = 'none';
    //   reel.style.backgroundPositionY = `0`;
    // }, (5 + 2) * 400 + 1000);
  });
}


(window as any).rollAll = rollAll;