import {IEvent} from './IEvent';
import {ISession} from './ISession';

class Request {

    async createSession(baseUrl: string, token: string): Promise<ISession> {
        return new Promise<ISession>(async (resolve) => {
            let xhr = (<any>window).XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            xhr.open('POST', `${baseUrl}/api/sessions`);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);

            xhr.onreadystatechange = () => {
                if (xhr.readyState > 3 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            };

            xhr.send();
        });
    }

    async sendEvent(url: string, token: string, event: IEvent): Promise<any> {
        return new Promise((resolve) => {
            let xhr = (<any>window).XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            xhr.open('POST', `${url}/api/events`);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);

            xhr.onreadystatechange = () => {
                if (xhr.readyState > 3 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            };

            xhr.send(JSON.stringify(event));
        });
    }
}

export const request = new Request();