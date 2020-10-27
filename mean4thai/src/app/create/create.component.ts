import { Component, OnInit , Input} from '@angular/core';
import { catagory } from '../../catagory';
import { CreateService } from '../service/create.service';
import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  user_data: any;
  reviewAdd = {
    'user_id': '',
    'user_name': '',
    'catagory': '',
    'namemovie': '',
    'title': '',
    'description': ''
  };
  catagorys = catagory;
  constructor(private createService: CreateService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(data => this.user_data = data);
    this.reviewAdd = {
      'user_id': this.user_data._id,
      'user_name': this.user_data.fullname,
      'catagory': '',
      'namemovie': '',
      'title': '',
      'description': ''
    };
  }
  submitReviewAdd() {
    this.createService.postReview(this.reviewAdd).subscribe((response: {}) =>
      alert('บันทึกเรียบร้อย'),
    );
  }
}
