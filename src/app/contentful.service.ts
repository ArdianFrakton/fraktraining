import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: "vuvkra9skroj",
  accessToken: "OuoBuoe1Lo7bjRgNJbqjNgUmGJRntKJ8x_WXf1io2Y0",
  contentTypeIds: {
    MoviesComponent: 'movies'
  }
}

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getMovies(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.MoviesComponent
    }, query))
    .then(res => res.items);
  }
}
