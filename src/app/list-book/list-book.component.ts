import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  listBook: Book[] = [];
  constructor(private bookService: BookService, private router: Router) {
    this.getAllBook();
   }

  ngOnInit(): void {
  }

  
  getAllBook(){
    this.bookService.getAllBook().subscribe((books) => {
      this.listBook = books;
    })
  }

  deleteBook(id: any){
    if (confirm ('You want delete?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.getAllBook();
        this.router.navigate(['/']);
      });  
    }
  
  }

  
}