import {json, post} from "./http.service";
import {mock, restore} from "fetch-mock";

describe('Http Service', () => {

    afterEach(() => restore());

    describe('json request', () => {

        it('should get the correct data from server', async() => {
            mock('/todo', [{name: 'test'}]);

            const response = await json('/todo');

            response.should.eql([{name: 'test'}]);
        });

        it('should throw an error on invalid response from server', done => {
            mock('/todo', {status: 404});

            json('/todo').catch(() => done());
        });
    });

    describe('post request', () => {

        it('should post data to the server', async() => {
            mock('/todo', {name: 'test'});

            const response = await post('/todo', {name: 'test'});

            response.should.eql({name: 'test'});
        });

        it('should throw an error on invalid response from server', done => {
            mock('/todo', {status: 404});

            post('/todo', {name: 'test'}).catch(() => done());
        });
    });
});
