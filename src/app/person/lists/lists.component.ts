import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [PersonService]
})
export class ListsComponent implements OnInit {

  lists: Observable<Person[]>;

  constructor(public http: Http, private _personService: PersonService) { }

  ngOnInit() {
    this.lists = this._personService.loadAll();
  }

  deleteInfo(id){
      if (confirm('Are you sure you want to delete info ' + id)) {
        this._personService.delete(id).subscribe(
            (res: Response) => {
              if (res) {
                  console.log('Success! Element deleted');
              }
              else {
                  alert('Error al eliminar');
              }
              this.lists = this._personService.loadAll();
            }
        );
      }
  }
}
