import { Directive, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverdirective]'
})
export class HoverdirectiveDirective {

  constructor(private element:ElementRef, private Renderer:Renderer2) { }

  @HostListener('mouseenter') mouseEnter(){
    this.Renderer.setStyle(this.element.nativeElement,'margin','5px 10px')
    this.Renderer.setStyle(this.element.nativeElement,'padding','30px 20px')
    this.Renderer.setStyle(this.element.nativeElement,'transition','0.10px')
  }
  @HostListener('mouseleave') mouseLeaving(){
    this.Renderer.setStyle(this.element.nativeElement,'margin','10px 20px')
    this.Renderer.setStyle(this.element.nativeElement,'padding','10px 20px')
    this.Renderer.setStyle(this.element.nativeElement,'transition','0.10px')
  }
}

