import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() postItem: Post;

constructor() { }

  ngOnInit() {
  }
  upVote() {
    this.postItem.loveIts += 1;
  }
  downVote() {
    this.postItem.loveIts -= 1;
  }

  getColor() {
    if (this.postItem.loveIts > 0) {
      return 'green';
    }else if (this.postItem.loveIts < 0 ) {
      return 'darkred';
    }
  }
}
