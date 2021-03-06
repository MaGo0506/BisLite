export const readMore = () => {
    const parentContainer = document.querySelector('.js-aboutContainer');
  if (parentContainer) {
    parentContainer.addEventListener('click', (e) => {
  
      const current = e.target,
          readBtn = current.className.includes('js-readBtn'),
          readBtnParentNode = current.parentNode,
          isReadBtnParent = current.closest('.js-readBtn'),
          readBtnTrigger = isReadBtnParent ? readBtnParentNode : readBtn;
  
          const triggerParent = readBtnTrigger.parentNode,
              readBtnText = readBtnTrigger.querySelector('#js-readTextBtn');
  
          if (readBtnText) {
            if (triggerParent.className.includes('active')) {
                triggerParent.classList.remove('active');
                readBtnText.innerHTML = "Read More";
            } else {
                triggerParent.classList.add('active');
                readBtnText.innerHTML = "Read Less";
          }
        }
    })
  }
}