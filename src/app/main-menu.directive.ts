import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[appMainMenu]'
})
export class MainMenuDirective {

  constructor( private el: ElementRef) { 
   
  }


  @HostListener("click") 

  mouseenter() {
    console.log('mouseenter')
  }

}
