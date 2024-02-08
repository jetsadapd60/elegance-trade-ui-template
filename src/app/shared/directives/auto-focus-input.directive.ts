import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[autoFocusInput]'
})
export class AutoFocusInputDirective implements OnInit {
    constructor(private el: ElementRef, private renderer2: Renderer2) {}

    ngOnInit(): void {
        this.renderer2.selectRootElement(this.el.nativeElement).focus();
    }
}