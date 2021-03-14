import { 
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
// Services
import { ShipsService } from 'src/app/services/ships.service';
declare var $: any;

@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit, OnChanges {

  @Input() dataList: any;
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>();
  config: any = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor(private shipsService: ShipsService) { 
  }
  
  ngOnInit(): void {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.dataList.count
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "dataList" changed
    if (changes['dataList']) {
      this.config.totalItems = this.dataList.count;
    }
  }

  getStarshipId(url) {
    let shipUrl = url.slice(0, -1);
    this.shipId = shipUrl.substring(shipUrl.lastIndexOf('/') + 1);
    const urlImage = this.shipsService.getShipImagesUrl() + `${this.shipId}.jpg`;
    return urlImage;
  }

  pageChanged(event){
    let toPage = event;
    this.pageChange.emit(toPage);
    this.config.currentPage = event
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
