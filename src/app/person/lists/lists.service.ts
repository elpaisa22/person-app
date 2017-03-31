import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { Person } from './person';
import 'rxjs/add/operator/map';

@Injectable()
export class ListsService{
    // Class constructor with Jsonp injected
    constructor(public http: Http) { }

    loadLists(){
        return this.http.get('http://localhost:8080/person')
                         .map(response => <Person[]>response.json());
                         //.subscribe(data => console.log(data), error => console.log(error));
    }

    getById(id) {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          let options = new RequestOptions({ headers: headers, method: RequestMethod.Delete });
          return this.http.get('http://localhost:8080/person/'+id).map((data => data.json()));
    }
}
