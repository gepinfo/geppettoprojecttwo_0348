import { Component, OnInit } from '@angular/core';
import { GetallusersService } from './getallusers.service';

@Component({
  selector: 'app-getallusers',
  templateUrl: './getallusers.component.html',
  styleUrls: ['./getallusers.component.scss'],
})

export class GetallusersComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Email', field: 'email'  },];
    public newen = {
        name: '',
        email: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallusersService: GetallusersService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallusersService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}