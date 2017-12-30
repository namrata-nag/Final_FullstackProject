
import { BookService } from './books.service';
import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
    selector:'add-book',
    templateUrl:'./addBook.component.html',
})
export class AddBook{

    constructor(private add:BookService,private router: Router){}
    onSubmit(value:any){
         console.log("Form Value = " + JSON.stringify(value, null, 4));
        let bookCount=this.add.getBookCount();
        let newBook={
                    Title:value.title,
	                Author:value.author,
	                ISBN:bookCount+1,
	                Publication_Date:value.date,
	                Publisher:value.publisher,
                    Price:value.price,
	                Genre :value.genre,
	                Format :value.format
        };
        this.add.addBook(newBook);
        this.router.navigate(['']);
    }
}