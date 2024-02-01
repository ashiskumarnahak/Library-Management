import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public books:any;

  constructor ( private service:ServiceService,
    private router: Router) {
     }
  ngOnInit(): void {
    this.books = new Books();
  }

  
  public saveBook(){
    console.log(this.books);
    this.service.createBook(this.books).subscribe(data =>{
      console.log(data);
      this.books=data;
      this.router.navigateByUrl('/list');
    },
      (error) => console.log(error));
  }

}
