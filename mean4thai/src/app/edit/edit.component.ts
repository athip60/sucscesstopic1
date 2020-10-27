import { Component, OnInit } from '@angular/core';
import { catagory } from '../../catagory';
import { EditService } from '../service/edit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  catagorys = catagory;
  dataId: any;
  data: any;
  constructor(private route: ActivatedRoute, private editService: EditService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dataId = params.get('dataId');
    });
    this.editService.getReviewsById(this.dataId).subscribe(response => {
      this.data = response[0];
      console.log(this.data);
    });
  }

  submitUpdate() {
    this.editService.putUpdate(this.data).subscribe(response => {
      alert('แก้ไขเรียบร้อย');
    });
  }
}
