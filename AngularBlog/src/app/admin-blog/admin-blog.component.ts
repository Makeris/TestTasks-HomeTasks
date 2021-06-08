import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
// import { title } from 'node:process';
import { Subscription } from 'rxjs';
import { IArrPosts } from '../interface/adminBlogInterface/admin-blog-interface';
import { AdminBlog } from '../models/adminBlogModel';
import { AdminBlogServiceService } from '../service/adminBlogService/admin-blog-service.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit,OnDestroy {

  adminTitle: string;
  adminAutor: string;
  adminTextarea: string;

  adminBlogSubscription: Subscription;

  arrBlogs: Array<IArrPosts> = [];
  
  confirmChanges = false;

  indexOfChangedItem;

  constructor(
    private AdminBlogService: AdminBlogServiceService,
  ) { }

  ngOnInit(): void {
    this.loadBlogsFromDB();
    this.clearFields();
    console.log();
    
  }

ngOnDestroy(): void {
  this.adminBlogSubscription.unsubscribe();
  
}

addPostBtn() : void {

  if(this.adminAutor != '' && this.adminTextarea != '' && this.adminTitle !='') {

    const post = new AdminBlog(1,new Date,this.adminAutor,this.adminTitle,this.adminTextarea,"https://de.med-auto.com/uploads/img/bmv_750_e38_nestareyushaya_klassika_po_dostupnoj_cene_aa.jpg");
    if(this.arrBlogs.length > 0) {
      post.id = this.arrBlogs.length + 1;
  
    }
    console.log(post);
    console.log(this.adminAutor != '' && this.adminTextarea != '' && this.adminTitle !='');
    
    this.AdminBlogService.addPosts(post).subscribe(data => {
      this.loadBlogsFromDB();
      this.clearFields();
    });
  } else {
    console.log('Empty');
  }
    


}


  editPostBtn(post: IArrPosts,index: number) {

    
    this.adminAutor = this.arrBlogs[index].autor;
    this.adminTitle = this.arrBlogs[index].title;
    this.adminTextarea = this.arrBlogs[index].text;
    this.confirmChanges = true;
    this.indexOfChangedItem = index;
    
    
  }

  savePostBtn(index: number) : void {
    this.arrBlogs[index].autor =this.adminAutor;
    this.arrBlogs[index].title = this.adminTitle;
    this.arrBlogs[index].text = this.adminTextarea;
    this.AdminBlogService.updatePost(this.arrBlogs[index]).subscribe(data => {

      this.clearFields();
      this.loadBlogsFromDB();
    });
    this.confirmChanges = false;
  }
    
  
  deletePostBtn(post: any) {

    this.AdminBlogService.deletePost(post).subscribe(data => {

      this.loadBlogsFromDB();
    });

    // this.arrBlogs.splice(index,1);
  }


  clearFields() {
    this.adminAutor = '';
    this.adminTitle = ''
    this.adminTextarea = '';
  
  }

  loadBlogsFromDB() : void {
    this.adminBlogSubscription = this.AdminBlogService.getPosts().subscribe( blogsResponse => {

      if(blogsResponse) {
        this.arrBlogs = blogsResponse;
      }
    }, error => {
      throw new Error('Something went wrong');
    });
  }

  



}
