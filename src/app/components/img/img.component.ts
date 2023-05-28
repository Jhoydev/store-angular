import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img = ''
  @Output() loaded = new EventEmitter<string>();
  public imageDefault = './assets/images/default.jpg'

  public imgError(): void {
    this.img = this.imageDefault;
  }

  imgLoaded(): void {
    this.loaded.emit('ok')
  }
}
