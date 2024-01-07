import { environment } from 'src/environments/environment';
import { MoviService } from 'src/app/services/movi.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
movie = null;
imageBaseUrl = environment.image;
  constructor(private router: ActivatedRoute, private moviService: MoviService) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.moviService.getmovieDetails(id).subscribe((res) =>{
      console.log(res)
      this.movie = res;
    })
  }

  openHomepage(){
    window.open(this.movie.homepage)
  }

}
