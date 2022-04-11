import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighestVote]'
})
export class HighestVoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.color='rgba(240, 52, 52, 1)';

  }

}
