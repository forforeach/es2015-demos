import { config } from './config';

export const get = (url) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status >= 200 && request.status < 400) {
                    resolve(request.responseText);
                } else {
                    reject(new Error(request.status));
                }
            }
        }
        request.onerror = () => {
            reject(new Error('Error getting results from API'));
        }
        request.open('GET', `${config.API_URL}${url}`);
        request.send();
    }).then(response => JSON.parse(response));
}