import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../services/lastfm.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artists: any;

  constructor(private lastfmService: LastfmService) { }

  ngOnInit() {
  }

  searchArtist(searchQuery:string):any {
    this.lastfmService.getArtists(searchQuery).then(data => {
      if(data == undefined) {
        this.artists = [];
        return true;
      }
      this.artists = data.slice(0, 30);
    }).catch(function(error) {
      console.log(error);
    });
  }

}