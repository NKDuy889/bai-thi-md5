import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = {
    id: 0,
    name: "",
    author: "",
    description: ""
  }
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  createBook() {
    this.bookService.createBook(this.book)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
