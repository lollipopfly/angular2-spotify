import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LastfmService } from '../services/lastfm.service';

export interface Artist {
  artist: string;
  page: string;
  perPage: string;
  total: string;
  totalPages: string;
}

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {
  artist: Artist;
  albums: any;
  artistName: string;

  constructor(
    private lastfmService: LastfmService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => { // Get param from url
      this.artistName = params['name'];

      this.lastfmService.getArtist(this.artistName).then(data => {
        this.artist = data['@attr'];
        this.albums = data.album
      }).catch(function(error) {
        console.log(error);
      });
    });
  }

}
