const body = document.querySelector('body');

// Test importing module
import makeModule from './module.js';
const moduleContent = makeModule();
const moduleElement = document.querySelector('moduleElement');
if (moduleContent) {
    moduleElement.textContent = moduleContent;
    moduleElement.classList.remove('error');
    moduleElement.classList.add('success');
}


// Test invoke command
const invoke = window.__TAURI__.invoke;

// Promise with no error hanlding
const element1 = document.querySelector('#invokeCommandPromiseNoErrorHandling')';

invoke('promise_no_error_handling', { invokeMessage: 'Hello From UI!' })
    .then((message) => { 
        element1.textContent = message;
        element1.classList.remove('error');
        element1.classList.add('success');
    });
    
    
// Promise with error hanlding
const element2 = document.querySelector('#invokeCommandPromiseWithErrorHandling')';

invoke('promise_with_error_handling', { invokeMessage: 'success' })
    .then((message) => { 
        element1.textContent = message;
        element1.classList.remove('error');
        element1.classList.add('success');
    })
    .catch((err) => console.log(err));
