import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlightDirective]'
})
export class HightlightDirectiveDirective {

  constructor(private element:ElementRef,private Renderer:Renderer2) { }
ngOnInit(){
  this.Renderer.setStyle(this.element.nativeElement,'backgroundColor','#FCE0F1')
}
}
