import {json, post} from './http.service';

describe('Http Service', () => {

    let response;

    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(response));
    });

    describe('json request', () => {

        it('should get the correct data from server', () => {
            response = {ok: true, json: () => ([{name: 'test'}])};

            return expect(json('/test')).resolves.toEqual([{name: 'test'}]);
        });

        it('should throw an error on invalid response from server', () => {
            response = {status: 404, statusText: 'bad error'};

            return expect(json('/test')).rejects.toEqual(new Error('bad error'));
        });
    });

    describe('post request', () => {

        it('should post data to the server', () => {
            response = {ok: true, json: () => ([{name: 'test'}])};

            return expect(post('/todo', {name: 'test'})).resolves.toEqual([{name: 'test'}]);
        });

        it('should throw an error on invalid response from server', () => {
            response = {status: 404, statusText: 'bad error'};

            return expect(post('/todo', {name: 'test'})).rejects.toEqual(new Error('bad error'));
        });
    });
});
