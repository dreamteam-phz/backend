'use strict';

const clearMessage = () =>{
    const messagearea = document.getElementById('messagearea');
    messagearea.textContent = '';
    messagearea.removeAttribute('class');
}