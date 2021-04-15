import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: Book = {
    id: 0,
    name: "name",
    author: "author",
    description: "description"
  };
  sub: Subscription | any;
  id: any;

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getBook(this.id);
    })
  }

  ngOnInit(): void {
  }

  getBook(id: number) {
    this.bookService.getBookById(id).subscribe(book => {
      this.book = book;
    });
  }

  updateBook() {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
