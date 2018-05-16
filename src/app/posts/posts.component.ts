import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';
import {MessageService} from '../message.service';
import {Post} from '../Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];

  showPosts(): void {
    this.postsService.getPosts()
      .subscribe((data: Post[]) => {
        for (let i = 0; i < data.length; i++) {
          this.posts.push({
            userId: data[i]['userId'],
            id: data[i]['id'],
            title: data[i]['title'],
            body: data[i]['body']
          });
        }
        this.messageService.add('Posts loaded!');
      });
  }

  constructor(private postsService: PostsService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.showPosts();
  }

}
