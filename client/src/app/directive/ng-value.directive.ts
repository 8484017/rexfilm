import { Directive, forwardRef, Renderer2, ElementRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgValueDirective),
      multi: true
    }

  ],
  selector: '[ngValue]'
})
export class NgValueDirective implements ControlValueAccessor {
  constructor(
    private rend: Renderer2,
    private el: ElementRef
  ) { }
  @Input() ngValue
  @Input() ngModel: any[]
  onChange = (val: any) => { }
  onTouch = () => { }

  ngOnInit() {
    this.el.nativeElement.addEventListener("change", (e) => {
      if (e.target.checked) {
        this.onChange([this.ngValue, ...this.ngModel])
      } else {
        this.onChange(this.ngModel.filter(s => s !== this.ngValue))
      }
    })
  }

  writeValue(obj: any[]): void {
    if (obj != null && obj.includes(this.ngValue)) {
      this.rend.setProperty(this.el.nativeElement, "checked", true);
    } else {
      this.rend.setProperty(this.el.nativeElement, "checked", false);
    }
  }


  registerOnChange(fn: any): void {
    this.onChange = fn
  }


  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }


  setDisabledState?(isDisabled: boolean): void { }


}
