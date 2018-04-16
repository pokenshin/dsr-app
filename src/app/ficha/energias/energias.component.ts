import { Component, OnInit, Input } from '@angular/core';
import { Energia } from 'shared/core/energias';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-ficha-energias',
  templateUrl: './energias.component.html',
  styleUrls: ['./energias.component.css']
})
export class EnergiasComponent implements OnInit {
  @Input() energias:Energia[];
  columnsToDisplay = ['sigla', 'quantidade'];
  dataSource = new MatTableDataSource(this.energias);

  constructor() { }

  ngOnInit() {
  }

}
