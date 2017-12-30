import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { BookService } from "./books.service";

import "rxjs/add/operator/map";
@Component({
    selector:'view-detail',
     templateUrl: './viewDetail.component.html',
    styleUrls: []
})
export class ViewDetail implements OnInit{
    ISBN:any;
    book:any;
    constructor(private bookDetail:BookService,private route: ActivatedRoute, private location: Location){}
    ngOnInit():void{
         this.route.params.forEach((params: Params) => {
            this.ISBN = +params['ISBN'];
        });
        this.book = this.bookDetail.getBooks(this.ISBN);
    }
    goBack(){
        this.location.back();
    }

}
