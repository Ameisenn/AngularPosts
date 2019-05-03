import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
/*//////////////pour plus tard/////////////


  newPostTitle: string ='';
  newPostContent: string ='';
  isValid = true;


  addPost(){
    if(this.validate()){
      this.postList.push(
        new MyPost(this.newPostTitle,this.newPostContent)
      );
      this.newPostTitle ='';
      this.newPostContent ='';
    }
  }

  validate(){
    if(this.newPostTitle != '' && this.newPostContent != '')
      this.isValid = true;
    else
      this.isValid = false;

    return this.isValid;
  }
  /*///////////////////////*/

  constructor() { }


  ngOnInit() {
  }

}
