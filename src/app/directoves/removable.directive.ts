import { AuthService } from 'app/shared/auth.service';
import { DbService } from '../shared/db.service';
import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRemovable]'
})
export class RemovableDirective {
  @Input()
  cityName: string;
  constructor(private el: ElementRef, private db: DbService, private authService: AuthService) { }

  @HostListener('click')
  onClick() {
    let source = this.authService.currentUser().subscribe(u => {
      this.db.removeCity(u.uid, this.cityName);
      this.el.nativeElement.style.display = 'none';
    });
    source.unsubscribe();
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.querySelector('div').style.backgroundColor = '#A9A9A9';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.querySelector('div').style.backgroundColor = '';
  }
}
