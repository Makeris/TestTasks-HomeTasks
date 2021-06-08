import { IArrPosts } from "../interface/adminBlogInterface/admin-blog-interface";

    export class AdminBlog implements IArrPosts {

        constructor (
           public id: number,
           public date: any,
           public autor: string,
           public title: string,
           public text: string,
           public image?: string,
        ) {

        }
    }