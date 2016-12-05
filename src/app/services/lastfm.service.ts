import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Artist } from '../artist';

import 'rxjs/add/operator/toPromise'; // ??

@Injectable()
export class LastfmService {

  apiKey:string = '1bddd723fef77f70c24a37ac2f8e7f5d'
  url: string = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&format=json'

  constructor(private http: Http) { }

  getArtists(queryString: string): Promise<Artist[]> {
    return this.http.get(this.url + '&api_key=' + this.apiKey + '&artist='
                          + queryString)
    .toPromise()
      .then(function(response) {
        var data = response.json();

        return data.results.artistmatches.artist;
      }).catch(function(error) {
        console.log(error);
      });
  }

}