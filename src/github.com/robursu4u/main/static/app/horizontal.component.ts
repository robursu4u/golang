import { Component } from '@angular/core';

@Component({
  selector: 'horizontal-separator',
  template: `
    
<main>

<div class="separate_container"><div class="separate_left"></div></div>
<div class="separate_container"><div class="separate_right"></div></div>



</main>

  `,
  styles: [`
    .separate_left{
      position: absolute;
      background: #0dba83; 
      height: 8px;
      width: 100%;
      overflow: hidden;
    }
    .separate_right{
      position: absolute;
      background: #0dba83; 
      height: 8px;
      width: 106.55%;
      left:  20%;
      overflow: hidden;
    }    
    .separate_container{
      position: relative;
      padding: 7px;
      right: 25%;
      width: 130%;

    }
  `]
})

export class HorizontalComponent {}





