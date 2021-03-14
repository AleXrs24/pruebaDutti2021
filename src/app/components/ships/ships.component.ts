import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
import { Ships } from 'src/app/interfaces/ships';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: Ships[] = [];
  dataLoading: boolean = false;

  constructor( private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.getShips();
  }

  pageChange(page: number): void {
    this.getShips(page);
  }

  getShips(page?: number): void {
    this.dataLoading = true;
    this.shipsService.getShips(page).subscribe((ships: Ships[]) => {
      this.dataList = ships;
      this.dataLoading = false;
    });
  }

}
