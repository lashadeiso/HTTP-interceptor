import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingEmitter = new EventEmitter<boolean>();
  loadings = new Map<string, boolean>();

  constructor() {}

  handle(url: string, loadingStatus: boolean): void {
    if (loadingStatus) {
      this.loadings.set(url, loadingStatus);
      this.loadingEmitter.emit(true);
    } else if (!loadingStatus && this.loadings.has(url)) {
      this.loadings.delete(url);
    }
    if (this.loadings.size == 0) {
      this.loadingEmitter.emit(false);
    }
  }
}
