import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighestVote]'
})
export class HighestVoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='rgba(159, 219, 166, 1)';

  }

}
