
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BookService } from './books.service';
import {Component} from '@angular/core';
@Component({
    templateUrl:"./updateBook.component.html"
})
export class UpdateBook{
    id:any;
    book:any;

    constructor(private service:BookService,private routes:ActivatedRoute,private router:Router){}
    ngOnInit():void{
        this.routes.params.forEach((params:Params)=>{
               this.id=+params['ISBN'];
               
        });
        this.book=this.service.getBooks(this.id);
    }
    onSubmit(form:any){
        let Update={
                   Title:form.Title,
	                Author:form.Author,
	                ISBN:this.book.ISBN,
	                Publication_Date:form.Publishing_Date,
	                Publisher:form.Publisher,
                    Price:form.Price,
	                Genre :form.Genre,
	                Format :form.Format
        };
        this.service.updateBook(Update);
        this.router.navigate(['']);
    }
}