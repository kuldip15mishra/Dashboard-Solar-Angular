import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

/**
 * 
 * 
 * @export
 * @class APIService
 */
@Injectable()
export class APIService {

    headers: Headers;
    options: RequestOptions;
    BaseUrl = "http://localhost:3000/";

    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.of(errMsg);
    }

    get(config) {
        if (!config) return Observable.throw("Error : Null Parameters");
        let updatedURL = this.buildAbsoulteURL(config.uri, config.params);
        console.log("updatedURL " + JSON.stringify(updatedURL));
        return this._http.get(updatedURL)
            .map((res: Response) => {
                let responseData = res.json();
                if (responseData) {
                    return responseData;
                } else {
                    return false;
                }
            })
            .catch((error: any) => Observable.throw((error)));

    }


    post(config) {
        if (!config) return Observable.throw("Error : Null Parameters");
        let updatedURL = this.buildAbsoulteURL(config.uri);
        return this._http.post(updatedURL, config.data)
            .map((res: Response) => {
                let responseData = res.json();
                if (responseData) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch((error: any) => Observable.throw(console.log(error)));
    }
    patch(config) {
        if (!config) return Observable.throw("Error : Null Parameters");
        let updatedURL = this.buildAbsoulteURL(config.uri);

        return this._http.patch(updatedURL, config.data)
            .map((res: Response) => {
                let responseData = res.json();
                if (responseData) {
                    return responseData;
                } else {
                    return responseData;
                }
            })
            .catch((error: any) => Observable.throw(console.log(error)));
    }
    getmulti(config): Observable<any> {
        let array_http = [];
        config.forEach(element => {
            array_http.push(this.getnew(element))
        });
        return Observable.forkJoin(array_http)
            .map(responses => {
                return responses;
            });
    }

    getnew(config): Observable<any> {
        if (!config) return Observable.throw("Error : Null Parameters");

        let updatedURL = this.buildAbsoulteURLnew(config.uri);
        let options = this.getComplexObjectAsQueryString(config);
        console.log("Updated URL: " + JSON.stringify(updatedURL));
        return this._http.get(updatedURL, options)
            .map(this.extractData)
            .catch(this.handleError);
    }


    buildAbsoulteURL(uri: any, params: any = null) {
        let updatedURL = this.BaseUrl + uri + this.extractParams(params);
        return updatedURL;
    }

    buildAbsoulteURLnew(uri: any, params: any = null) {
        let updatedURL = this.BaseUrl + uri;// + this.extractParams(params);
        return updatedURL;
    }
    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    extractParams(params: any) {
        if (params) {
            let id = "/" + params;
            return id;
        } else {
            return "";
        }

    }
    getComplexObjectAsQueryString(config) {

        try {
            let params: URLSearchParams = new URLSearchParams();
            for (var key in config.params) {
                if (config.params.hasOwnProperty(key)) {
                    let val = config.params[key];
                    params.set(key, val);
                }
            }
            return this.options = new RequestOptions({ headers: this.headers, search: params });
        }
        catch (e) {

        }

    }

}