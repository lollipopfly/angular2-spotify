import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'Contact'
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, illo, unde! Ex, sunt? Omnis repellendus, repudiandae maxime ipsam nesciunt nulla, doloribus, deleniti accusantium natus saepe veniam odio, laboriosam facere dolorem.';

  constructor() { }

  ngOnInit() {
    console.log(21);
  }

}
