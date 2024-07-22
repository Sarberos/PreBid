
import JSZip from 'jszip';  

export const createZip = async (images, carName) => {  
    const zip = new JSZip();  

    await Promise.all(images.map(async (image) => {  
        const response = await fetch(image.img);  
        const blob = await response.blob();  
        zip.file(`${image.id}.jpg`, blob);  
    }));  

    const content = await zip.generateAsync({ type: "blob" });  

    const link = document.createElement('a');  
    link.href = URL.createObjectURL(content);  
    link.download = `${carName}.zip`;  
    link.click();  
};