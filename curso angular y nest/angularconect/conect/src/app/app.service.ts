import { HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';


@Injectable()
export class AppService {
  url='http://localhost:3000?limit=3&offset=1'

  constructor(public conect:HttpClient) { }


   getmas():Observable<any>{
    
    
    return this.conect.get(this.url)
  }
}
