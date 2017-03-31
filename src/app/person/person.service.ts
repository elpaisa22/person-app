import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Person } from './person';

@Injectable()
export class PersonService{
    // Class constructor with Jsonp injected
    constructor(public http: Http) { }

    loadAll(){
      return this.http.get('http://localhost:8080/person')
                      .map(response => <Person[]>response.json());
    }

    getById(id) {
      return this.http.get('http://localhost:8080/person/'+id)
                      .map(res => <Person>res.json());
    }

    insert(person) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://localhost:8080/person', person, headers);
    }

    update(person) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });
      return this.http.put('http://localhost:8080/person/', person, headers);
    }

    delete(id){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers, method: RequestMethod.Delete });
      return this.http.delete('http://localhost:8080/person/'+id)
    }
}
