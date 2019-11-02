import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextContentService {
  constructor(private http: HttpClient) {}

  public readContentFor(title: string): Observable<string> {

    return this.http.get('assets/text-content/' + title + '.txt', {responseType: 'text'});
  }
}
