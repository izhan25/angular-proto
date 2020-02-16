import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Post } from "src/app/models/Post";

@Component({
  selector: "add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  @Output() addPost: EventEmitter<any> = new EventEmitter();

  title: string;
  body: string;

  constructor() {}

  ngOnInit(): void {}

  handleAddPost() {
    this.validate(() => {
      const post = {
        title: this.title,
        body: this.body,
        userId: 1
      };
      this.addPost.emit(post);
      this.reset();
    });
  }

  validate(callback) {
    if (
      !this.title && 
      this.title !== "" && 
      !this.body && 
      this.body !== ""
    ) {
      callback();
    }
  }

  reset() {
    this.body = "";
    this.title = "";
  }
}
