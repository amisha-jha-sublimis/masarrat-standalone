import React, { useEffect } from 'react';

const Carousel = ({ items, controls }) => {

 

  useEffect(() => {
    setNav();
    setInitialState();
    useControls();
  }, []);

  const setInitialState = () => {
    items[0].className = 'gallery-item-first';
    items[1].className = 'gallery-item-previous';
    items[2].className = 'gallery-item-selected';
    items[3].className = 'gallery-item-next';
    items[4].className = 'gallery-item-last';

    document.querySelector('.gallery-nav').childNodes[0].className = 'gallery-nav-item gallery-item-first';
    document.querySelector('.gallery-nav').childNodes[1].className = 'gallery-nav-item gallery-item-previous';
    document.querySelector('.gallery-nav').childNodes[2].className = 'gallery-nav-item gallery-item-selected';
    document.querySelector('.gallery-nav').childNodes[3].className = 'gallery-nav-item gallery-item-next';
    document.querySelector('.gallery-nav').childNodes[4].className = 'gallery-nav-item gallery-item-last';
  }
  

  const setCurrentState = (target, selected, previous, next, first, last) => {
    selected.forEach(el => {
      el.classList.remove('gallery-item-selected');

      if (target.className === 'gallery-controls-previous') {
        el.classList.add('gallery-item-next');
      } else {
        el.classList.add('gallery-item-previous');
      }
    });

    previous.forEach(el => {
      el.classList.remove('gallery-item-previous');

      if (target.className === 'gallery-controls-previous') {
        el.classList.add('gallery-item-selected');
      } else {
        el.classList.add('gallery-item-first');
      }
    });

    next.forEach(el => {
      el.classList.remove('gallery-item-next');

      if (target.className === 'gallery-controls-previous') {
        el.classList.add('gallery-item-last');
      } else {
        el.classList.add('gallery-item-selected');
      }
    });

    first.forEach(el => {
      el.classList.remove('gallery-item-first');

      if (target.className === 'gallery-controls-previous') {
        el.classList.add('gallery-item-previous');
      } else {
        el.classList.add('gallery-item-last');
      }
    });

    last.forEach(el => {
      el.classList.remove('gallery-item-last');

      if (target.className === 'gallery-controls-previous') {
        el.classList.add('gallery-item-first');
      } else {
        el.classList.add('gallery-item-next');
      }
    });
  }

  const setNav = () => {
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    galleryControlsContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';

    items.forEach(item => {
      const nav = galleryControlsContainer.lastElementChild;
      nav.appendChild(document.createElement('li'));
    });
  }

  const useControls = () => {
    const triggers = [...document.querySelectorAll('.gallery-controls button')];

    triggers.forEach(control => {
      control.addEventListener('click', () => {
        const target = control;
        const selectedItem = document.querySelectorAll('.gallery-item-selected');
        const previousSelectedItem = document.querySelectorAll('.gallery-item-previous');
        const nextSelectedItem = document.querySelectorAll('.gallery-item-next');
        const firstCarouselItem = document.querySelectorAll('.gallery-item-first');
        const lastCarouselItem = document.querySelectorAll('.gallery-item-last');

        setCurrentState(target, selectedItem, previousSelectedItem, nextSelectedItem, firstCarouselItem, lastCarouselItem);
      });
    });
  }

  const renderControls = () => {
    return (
        <div className="gallery-controls">
            <button className="gallery-controls-previous">{controls[0]}</button>
            <button className="gallery-controls-next">{controls[1]}</button>
        </div>);
    }
           
    console.log("Carousel Items", items)
    return (
        <div className="gallery">
            <div className="gallery-items">
                {items.map(item => <div className="gallery-item" key={item.id}>{item.content}</div>)}
            </div>
                {renderControls()}
        </div>
    );
};
        
export default Carousel;
