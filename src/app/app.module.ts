import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './person/lists/lists.component';
import { EditComponent } from './person/edit/edit.component';
import { AddComponent } from './person/add/add.component';

const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'person/list',  component: ListsComponent },
  { path: 'person/add', component: AddComponent },
  { path: 'person/edit/:id', component: EditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
