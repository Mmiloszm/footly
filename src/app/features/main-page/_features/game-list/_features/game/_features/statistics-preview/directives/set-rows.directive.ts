import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Statistics } from 'src/app/core/models/games-statistics/_features/_features/statistics.model';

@Directive({
  selector: '[appSetRows]'
})
export class SetRowsDirective implements OnInit {

  @Input() statsLength!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

   ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, "grid-template-rows", `repeat(${this.statsLength + 2}, 1fr)`);
   }
}
