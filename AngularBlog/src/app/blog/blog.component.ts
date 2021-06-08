import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IArrPosts } from '../interface/adminBlogInterface/admin-blog-interface';
import { AdminBlogServiceService } from '../service/adminBlogService/admin-blog-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit,OnDestroy {

  arrOfPosts: IArrPosts[] = [];
  dataBaseSubscribe: Subscription;

  constructor(
    private AdminBlogService: AdminBlogServiceService,
  ) { }

  ngOnInit(): void {
    this.loadBlogsFromDB();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.dataBaseSubscribe.unsubscribe();
  }


  loadBlogsFromDB() : void {
  this.dataBaseSubscribe = this.AdminBlogService.getPosts().subscribe( dataBaseBlogResponse => {

    if(dataBaseBlogResponse) {
      this.arrOfPosts = dataBaseBlogResponse;
    }

  }, error => {
	throw new Error('Something went wrong');
  
    });
  }


}
