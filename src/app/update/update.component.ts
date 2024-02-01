import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../books';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public id!:number;
  public books:any;
  public bookToUpdate!:Books;

 constructor(private service:ServiceService, private roter:Router, private arouter:ActivatedRoute ) {
 }

 ngOnInit(): void {
   this.books = new Books();
   this.id = this.arouter.snapshot.params['id'];
   this.service.getBooksById(this.id).subscribe((data: any)=>{
     console.info(data);
     this.books=data;
   },error=>console.warn(error));
 }



 update(){
   this.service.update(this.books).subscribe((data: any) => {
     console.log(data);
     this.goToBookslist();
   }, error=>console.log(error));
 }

 goToBookslist(){
   this.roter.navigateByUrl('/list');
 }
}
