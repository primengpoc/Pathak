import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FileUploadComponent} from './file-upload/file-upload.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fileupload', component: FileUploadComponent},
  {path: '*', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
