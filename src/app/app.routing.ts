import { UpdateBook } from './Books/updateBook.component';
import { ViewDetail } from './Books/viewDetail.component';
import { ViewBook } from './Books/viewBook.component';
import { AddBook } from './Books/addBook.component';
import {Routes,RouterModule} from'@angular/router';

const routing:Routes=[
    { path: '', component:ViewBook  },
    {path:'addBook',component:AddBook},
    {path:'detail/:ISBN',component:ViewDetail},
     {path:'updateBook/:ISBN',component:UpdateBook}
    
];
export const map=RouterModule.forRoot(routing); 