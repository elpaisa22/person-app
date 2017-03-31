import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PersonService]
})
export class EditComponent implements OnInit {
  personForm: FormGroup;
  infoId: number;

  constructor(public fb: FormBuilder, public http: Http,
              private activatedRoute: ActivatedRoute, public router: Router,
              private _personService: PersonService) {
    this.isEdit(fb);
  }

  ngOnInit() {
     this.activatedRoute.params.subscribe((params: Params) => {
       this.infoId = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });
  }

  submitForm(personForm: any): void{
    console.log('Form Data Request: ');
    console.log(personForm);
    console.log(this.infoId);
    this._personService.update(personForm).subscribe(
          (res: Response) => {
            if (res) {
                console.log('Success! Element updated');
            }
            else {
                alert('Error al guardar');
            }
            this.router.navigate(['./person/list']);
          }
      );
  }

  isEdit(fb){
      //console.log(params['id']);
      this.activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
        if(id){
          this._personService.getById(id).subscribe(
              (res: Person) => {
                // Set value in personForm
                this.personForm.setValue(res);
              }
          );
        }
        this.personForm = fb.group({
           'id' : '',
           'firstName' : '',
           'lastName': '',
           'gender' : '',
        });
      });
  }

}
