import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TextService {
  constructor(private http: HttpClient) {}

  getMockText() {
    return new Promise<string>(function (resolve) {
      resolve('A year ago I was in the audience at a gathering of designers in San Francisco. ' +
        'There were four designers on stage, and two of them worked for me. I was there to support them. ' +
        'The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. ' +
        'What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, ' +
        'that modern design problems were very complex. And we ought to need a license to solve them.');
    });
  }

  // method for getting the synonyms of selected part of a text
  getSynonyms(synonym: string): Observable<object> {
    return this.http.get(`https://api.datamuse.com/words?ml=${synonym}`);
  }
}
