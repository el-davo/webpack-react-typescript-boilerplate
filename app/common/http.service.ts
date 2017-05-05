import 'whatwg-fetch';
import {baseUrl} from './base-url';

export function json<T>(path: string): Promise<T> {
    return fetch(`${baseUrl}${path}`).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
    });
}

export function post<T>(path: string, body: any): Promise<T> {
    return fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
    });
}
