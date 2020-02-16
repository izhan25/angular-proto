import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() deletePost: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteClick() {
    this.deletePost.emit(this.post);
  }

}
