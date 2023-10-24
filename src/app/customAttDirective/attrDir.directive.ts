import { Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
    selector : '[ChangeBackground]'
})

export class AttributeDirective implements OnInit {
constructor(private element : ElementRef){
}
ngOnInit(){
    this.element.nativeElement.style.backgroundColor = '#D1F2EB';
}
}