import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = ''
  @Output() loaded = new EventEmitter<string>();
  public imageDefault: string = './assets/images/default.jpg'

  public imgError(): void {
    this.img = this.imageDefault;
  };

  imgLoaded(): void {
    this.loaded.emit('ok')
  }
}
