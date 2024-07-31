let activeToasts = [];

export const addToast=(toastInstance)=>{
  if(activeToasts.length >=2){
    const [firstItem]=activeToasts;
    firstItem.hideToast();
    activeToasts.shift()
  }
    activeToasts.push(toastInstance);
  
}

export const removeToast=(toastInstance)=>{
  activeToasts=activeToasts.filter(t=>t!==toastInstance)
}

