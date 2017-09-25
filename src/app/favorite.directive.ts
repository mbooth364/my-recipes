import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[recipeFavorite]'
})
export class FavoriteDirective {

    @HostBinding('class.is-favorite') isFavorite = true;

    @HostBinding('class.is-favorite-hovering') hovering = false;

    @HostListener('mouseenter') onMouseEnter(){
      this.hovering = true;
    }

    @HostListener('mouseleave') onmouseleave() {
      this.hovering = false;
    }

    @Input() set recipeFavorite(value) {
      this.isFavorite = value;
    }
  
    constructor() { }

}
