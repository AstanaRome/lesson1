import { Directive, HostListener, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appMainMenu]'
})
export class MainMenuDirective {

  constructor(private el: ElementRef) {

  }

  @Input()
  public appMainMenu: string = 'red';
  @HostListener('mouseenter')

  public enter() {
    let ul = this.el.nativeElement.querySelector("ul");
    ul.style.display = 'block'
    ul.style.color = this.appMainMenu;
  }


  @HostListener('mouseleave')
  public leave() {
    let ul = this.el.nativeElement.querySelector("ul");
    ul.style.display = 'none'
    ul.style.color = this.appMainMenu;
  }


}
