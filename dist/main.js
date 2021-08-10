const body = document.querySelector('body');


// Test importing module with default export
import('./module.js').then((moduleDefaultFunction) => {
    const moduleContent1 = moduleDefaultFunction();
    const moduleElement1 = document.querySelector('#moduleElement1');
    if (moduleContent1) {
        console.log('module default content found');
        moduleElement1.textContent = moduleContent1;
        moduleElement1.classList.remove('error');
        moduleElement1.classList.add('success');
    }      
});

   
// Test importing module with simple export
import { moduleFunction } from './module.js';
const moduleContent2 = moduleFunction();
const moduleElement2 = document.querySelector('#moduleElement2');
if (moduleContent2) {
    console.log('module content found');
    moduleElement2.textContent = moduleContent2;
    moduleElement2.classList.remove('error');
    moduleElement2.classList.add('success');
}




// Test invoke command
const invoke = window.__TAURI__.invoke;

// Promise with no error hanlding
const element1 = document.querySelector('#invokeCommandPromiseNoErrorHandling');

invoke('promise_no_error_handling', { invokeMessage: 'Hello From UI!' })
    .then((message) => { 
        element1.textContent = message;
        element1.classList.remove('error');
        element1.classList.add('success');
    });
    
    
// Promise with error hanlding
const element2 = document.querySelector('#invokeCommandPromiseWithErrorHandling');

invoke('promise_with_error_handling', { invokeMessage: 'success' })
    .then((message) => { 
        element2.textContent = message;
        element2.classList.remove('error');
        element2.classList.add('success');
    })
    .catch((err) => console.log('Error: '+ err));
