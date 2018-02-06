import {IEvent} from './IEvent';

class Request {

    async post(url: string, token: string, event: IEvent): Promise<any> {
        return new Promise((resolve, reject) => {
            let xhr = (<any>window).XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            xhr.open('POST', url);
            xhr.onreadystatechange = () => {
                xhr.readyState > 3 && xhr.status == 200 ? resolve(xhr.responseText) : reject();
            };
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
            xhr.send(JSON.stringify(event));
        });
    }
}

export const request = new Request();