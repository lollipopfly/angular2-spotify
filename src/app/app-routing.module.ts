import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { AboutComponent }      from './about/about.component';
import { ContactComponent }  from './contact/contact.component';
import { ArtistComponent }  from './artist/artist.component';
import { AlbumComponent }  from './album/album.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'artist/:name', component: ArtistComponent },
  { path: 'album/:name/:album', component: AlbumComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}