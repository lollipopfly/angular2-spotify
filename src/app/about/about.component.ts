import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = 'About'
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, illo, unde! Ex, sunt? Omnis repellendus, repudiandae maxime ipsam nesciunt nulla, doloribus, deleniti accusantium natus saepe veniam odio, laboriosam facere dolorem.';

  constructor() { }

  ngOnInit() {
  }

}
