
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

// interface DotStatus {
//   bgColor: string;
//   width: number;
//   height: number;
//   radius: number;
// }

@Directive({
  selector: '[dotStatus]',
})
export class DotStatusDirective implements AfterViewInit {
  @Input('dotStatus')
  dotStatus: {
    bgColor: string;
    width: number;
    height: number;
    radius: number;
  } = {
    bgColor: 'blue',
    width: 10,
    height: 10,
    radius: 100,
  };

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const s = this.el.nativeElement.style;

    s.display = 'block';
    s.width = `${this.dotStatus.width}px`;
    s.height = `${this.dotStatus.height}px`;
    s.background = `${this.dotStatus.bgColor}`;
    s.borderRadius = `${this.dotStatus.radius}%`;
  }
}
