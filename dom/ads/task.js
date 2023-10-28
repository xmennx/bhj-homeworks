function rotateText(rotatorElement) {
    const cases = rotatorElement.querySelectorAll('.rotator__case');
    let activeIndex = 0;
  
    cases[activeIndex].classList.add('rotator__case_active');
  
    setInterval(() => {
      cases[activeIndex].classList.remove('rotator__case_active');
  
      activeIndex = (activeIndex + 1) % cases.length;
  
      cases[activeIndex].classList.add('rotator__case_active');
    }, 1000);
  }
  
  const rotators = document.querySelectorAll('.rotator');
  
  rotators.forEach((rotator) => rotateText(rotator));
  