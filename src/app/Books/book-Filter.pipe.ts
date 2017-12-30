import { by } from 'protractor';
import {Pipe , PipeTransform} from '@angular/core';

@Pipe({name:'bookFilter'})
export class BookFilterPipe implements PipeTransform{
    transform(value:any[],args:string,args1:string):any[]{
        if(args1=="Genre"){
         
        let filter:string =args?args.toLocaleLowerCase(): null;
        return filter? value.filter((b)=> b.Genre.toLocaleLowerCase().startsWith(filter)!=false):value;
        }
        else if(args1=="Author"){
             
        let filter:string =args?args.toLocaleLowerCase(): null;
        return filter? value.filter((b)=> b.Author.toLocaleLowerCase().startsWith(filter)!=false):value;
        }
          else {
             
        let filter:string =args?args.toLocaleLowerCase(): null;
        return filter? value.filter((b)=> b.Title.toLocaleLowerCase().startsWith(filter)!=false):value;
        }
       
    }
}