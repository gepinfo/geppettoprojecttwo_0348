import { Component, OnInit } from '@angular/core';
import { CreateuserService } from './createuser.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss'],
})

export class CreateuserComponent implements OnInit {
    public newen = {
        name: '',
        email: '',
    }

    constructor (
        private createuserService: CreateuserService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createuserService.GpCreate(this.newen).subscribe(data => {
            this.newen.name = ''
 	 	this.newen.email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}