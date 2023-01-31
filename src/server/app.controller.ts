import {
  Controller,
  Param,
  Get,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as paths from '../shared/constants/routes';
import { ParamsInterceptor } from './params.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(paths.home)
  @Render('blogs')
  @UseInterceptors(ParamsInterceptor)
  home() {
    return {};
  }

  @Get(paths.blogs)
  @Render('blogs')
  @UseInterceptors(ParamsInterceptor)
  blogs() {
    return {};
  }

  @Get(paths.blog)
  @Render('blog')
  @UseInterceptors(ParamsInterceptor)
  public blog() {
    return {};
  }

  @Get(paths.blogs_api)
  public listBlogPosts() {
    return this.appService.getBlogPosts();
  }

  @Get(paths.blog_api)
  public getBlogPostById(@Param('id') id: string) {
    return this.appService.getBlogPost(parseInt(id));
  }
}
