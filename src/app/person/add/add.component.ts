import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PersonService } from '../person.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [PersonService]
})
export class AddComponent implements OnInit {
  personForm: FormGroup;
  constructor(public fb: FormBuilder, public http: Http,
              private activatedRoute: ActivatedRoute, public router: Router,
              private _personService: PersonService) {
    this.personForm = fb.group({
        'firstName' : '',
        'lastName': '',
        'gender' : '',
    });
  }

  ngOnInit() {

  }

  submitForm(personForm: any): void{
    console.log('Form Data Request: ');
    console.log(personForm);

    this._personService.insert(personForm).subscribe(
        (res: Response) => {
          if (res) {
              console.log('Success! Element saved');
          }
          else {
              alert('Error al guardar');
          }
          this.router.navigate(['./person/list']);
        }
    );
  }
}
