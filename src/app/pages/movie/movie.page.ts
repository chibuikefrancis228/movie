import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import {MoviService} from 'src/app/services/movi.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
movies =[];
currentPage = 1;
imageBaseUrl = environment.image;
 
  constructor(private moviService: MoviService, private loadingctrl: LoadingController) { }

  ngOnInit() {
    this.loadMovie();
  }
  
async loadMovie(event?){
  const Loading = await this.loadingctrl.create({
    message: 'Loading..',
    spinner: 'bubbles',
  });
  await Loading.present();

  this.moviService.getTopRatedmovie(this.currentPage).subscribe((res) =>{
    this.loadingctrl.dismiss();
    this.movies =[...this.movies, ...res.results]
    console.log(res);

    event?.target.complete();
    if (event){
      event.target.disable = res.total_pages === this.currentPage;
    }
  })
}
loadMore(event:InfiniteScrollCustomEvent){
  this.currentPage++;
  this.loadMovie(event)
}

}
