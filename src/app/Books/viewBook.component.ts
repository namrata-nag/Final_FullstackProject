import { BookService } from './books.service';
import { Component,OnInit } from '@angular/core';


@Component({
      selector:'view-books',
      templateUrl:'./viewBook.component.html',
      styleUrls:['./viewBook.component.css']
})
export class ViewBook implements OnInit{
  
    books:any[];
    search:string;
    searchBy:string;

constructor(private bookservice:BookService){}
    
    ngOnInit(){
        
        this.books=this.bookservice.getBook();
        console.log("Initialising Books List...");
        console.log(this.books);
    }

     deleteBook(id:any){
        this.bookservice.deleteBook(id);
     this.books=this.bookservice.getBook();}
    
   

}