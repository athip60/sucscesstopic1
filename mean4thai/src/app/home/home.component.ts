import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../service/home.service';
import { catagory } from '../../catagory';
import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reviews: any;
  user_data: any;
  catagorys = catagory;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','option'];
  constructor(private homeService: HomeService, private authService: AuthService) { }

  ngOnInit() {
    this.fetchData();
    this.authService.getUser().subscribe(data => this.user_data = data);
  }
  fetchData() {
    this.homeService.getReviews().subscribe(response => {
      this.reviews = response;
    });
  }
  pageroute(data: any) {
    console.log(data);
  }

  deleteData(data: any) {
    console.log(data);
    this.homeService.deleteReview(data).subscribe((response: {}) => alert('ลบเรียบร้อย'));
    this.fetchData();
  }
}
