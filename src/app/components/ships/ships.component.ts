import { Component, OnInit } from '@angular/core';

// Services
// import { ShipsService } from 'src/app/services/ships.service';

// Interfaces
import { Ships } from 'src/app/interfaces/ships';
// Ngrx
import { Store } from '@ngrx/store';
import { loadShips } from './store/ship/ship.actions';
import { getStateData } from './store/ship/ship.selectors';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: Ships[] = [];
  loading: boolean = false;

  constructor(
    // private shipsService: ShipsService,
    private shipStore: Store<{ shipState: any }>
  ) {}

  ngOnInit(): void {
    // this.loading = true;
    this.getShips();
  }

  pageChange(page: number): void {
    // this.loading = true;
    this.getShips(page);
  }

  getShips(page?: number): void {
    // this.shipsService.getShips(page).subscribe((ships: Ships[]) => {
    //   this.dataList = ships;
    //   this.loading = false;
    // });
    this.shipStore.dispatch(loadShips({page: page}));
    this.shipStore.select(getStateData).subscribe((data: Ships[]) => {
      if (data) 
        this.dataList = data;
    });
  }

}
