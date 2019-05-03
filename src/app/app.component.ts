import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Array<Post> = [
    {
      title: 'This is Fruit',
      content: 'Rinse one jar of cucumber in six pounds of kefir. Aged melon can be made grey ' +
        'by blending with gravy. Combine rhubarb, eggs and bok choy. season with fluffy brown sugar and ' +
        'serve simmered with oysters. Enjoy! ',
      loveIts: 2,
      created_at: new Date(),
    },
    {
      title: 'Amazing Sauce',
      content: 'Chickpeas can be jumbled with shredded quinoa, also try soaking the sauce with orange juice. ' +
        '       This friendship has only been commanded by a devastated sonic shower. ',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      title: 'Tortuga',
      content: 'Anchors rise on death at pantano river! Ah, addled wind. go to tortuga. ' +
        'All comrades fear mighty, scrawny cannibals. The lively hornpipe swiftly drinks the mainland. ' +
        'The big scabbard begrudgingly fights the sailor. Never raid a breeze. ' +
        'Doubloons of a salty courage, fight the desolation!',
      loveIts: -3,
      created_at: new Date(),
    }
  ];
  constructor() { }


}
