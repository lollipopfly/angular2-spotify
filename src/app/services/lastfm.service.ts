import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Artist } from '../artist';

import 'rxjs/add/operator/toPromise'; // ??


@Injectable()
export class LastfmService {
  apiKey:string = '1bddd723fef77f70c24a37ac2f8e7f5d';
  url: string = 'http://ws.audioscrobbler.com/2.0/?format=json&api_key=' +
                this.apiKey;
  artistSearchType:string = 'artist.search';
  artistGetAlbumsType:string = 'artist.gettopalbums';
  artistGetAlbumInfo:string = 'album.getinfo';

  constructor(private http: Http) {  }

  getArtist(name:string):any {
    return this.http.get(this.url + '&method=' + this.artistGetAlbumsType +
                        '&artist=' + name)
    .toPromise()
      .then(function(response) {
        var data = response.json();
        return data.topalbums;
      }).catch(function(error) {
        console.log(error);
      });
  }

  getAlbum(name:string, album:string):any {
    return this.http.get(this.url + '&method=' + this.artistGetAlbumInfo +
                         '&artist=' + name + '&album=' + album)
    .toPromise()
      .then(function(response) {
        var data = response.json();
        return data.album;
      }).catch(function(error) {
        console.log(error);
      });
  }

  getArtists(queryString: string): Promise<Artist[]> {
    return this.http.get(this.url + '&method=' + this.artistSearchType +
                         '&artist=' + queryString)
    .toPromise()
      .then(function(response) {
        var data = response.json();

        return data.results.artistmatches.artist;
      }).catch(function(error) {
        console.log(error);
      });
  }

}