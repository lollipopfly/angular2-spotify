import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LastfmService } from '../services/lastfm.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any;

  constructor(
    private lastfmService: LastfmService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.lastfmService
        .getAlbum(params['name'], params['album']))
        .subscribe(album => this.album = album);
  }

}
