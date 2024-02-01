import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Books } from '../books';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public books: any;

  constructor(private bookService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();

  }
  public getBooks() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    })
  }
  public delete(id: number) {
   this.bookService.DeleteBook(id).subscribe((data) => {
    console.log(data);
    this.getBooks();
   });
  }
}

    
  
