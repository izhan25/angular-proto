import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts
    })
  }

  addPost(post) {
    this.postService.addPost(post).subscribe(post => {
      this.posts.unshift(post);
    });
  }

  deletePost(post) {
    this.posts = this.posts.filter(p => p.id !== post.id);
    this.postService.deletePost(post).subscribe();

  }

}
