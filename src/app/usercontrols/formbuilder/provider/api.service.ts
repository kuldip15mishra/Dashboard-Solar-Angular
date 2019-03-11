import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { APIService } from '../../../providers';

/**
 * 
 * 
 * @export
 * @class APIService
 */
@Injectable()
export class FormBuilderService {


    constructor(private service: APIService) {

    }

    postData(Params : any):Observable<any> {

        return this.service.get(Params).catch((error: any) => Observable.throw((error)));
    }
}