import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnInit{

  @Input('display') displayBoxes: string = 'box';
  @Input() hoverColor: string = '10px 5px 5px red;';
  @Input() styleNone: string ="0px 0px 0px transparent";


  // @HostBinding('style.box-shadow') noneDisplay:string = this.StyleNone;
  @HostBinding('style.box-shadow') displayBox: string = this.displayBoxes;

  constructor(private elementReferance: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementReferance.nativeElement, 'zoom', '50%');
  }

  @HostListener('mouseenter') mouseEnter() {
    this.displayBox = this.hoverColor;
    this.renderer.setStyle(this.elementReferance.nativeElement, 'zoom', '100%');   

  }
  

  @HostListener('mouseleave') mouseleave() {
    this.displayBox = this.styleNone;
    this.renderer.setStyle(this.elementReferance.nativeElement, 'zoom', '50%');   
  }
}
