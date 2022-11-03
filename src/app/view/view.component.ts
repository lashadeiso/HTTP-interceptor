import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit, AfterViewInit {
  loadingStatus: boolean = false;
  constructor(private loader: LoadingService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.loader.loadingEmitter.subscribe((res) => {
      this.loadingStatus = res;
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {}
}
