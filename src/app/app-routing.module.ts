import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  { path:"add", component:AddComponent},
  { path:"update/:id",component:UpdateComponent},
  { path:"list", component:ListComponent},
  { path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},

  { path:" ", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AppRoutingModule { }
