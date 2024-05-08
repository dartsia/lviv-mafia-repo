import React, { useEffect } from 'react';
import "./modal.css"

const Modal = ({active, setActive, children}) => {
    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [active]);

    return (
      <div className={active ? "modal active" : "modal"} onClick={()=>setActive(false)}>
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
}

export default Modal;
