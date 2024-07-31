import { useEffect } from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import s from './Toaster.module.scss';
import { addToast, removeToast } from './toastManager';
import { infiniteQueryOptions } from '@tanstack/react-query';

export const useToast = (isOpen="false", status="true",text = "success", gravity='top',duration=2500) => {
  const showToast = () => {
    const toastInstance = Toastify({
      text,
      duration,
      newWindow: true,
      close: false,
      dismissing:'',
      gravity, // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      className: status ? `${s.success_style}` : `${s.success_style} ${s.error}`,
      onClick: function () { }, // Callback after click
    });
    toastInstance.showToast();

    addToast(toastInstance);

    setTimeout(() => {
      removeToast(toastInstance);
    }, 2500);
  };

  useEffect(() => {
    if (isOpen) {
      showToast();
    }
  }, [isOpen]);
};
