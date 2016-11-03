import { Component} from '@angular/core';

import {Cast} from './cast';


@Component({
  selector: 'podcast-list',
  template: `


<div class="audio_container"><paper-audio-player src={{audio}} title={{cast_title}} ></paper-audio-player></div>

<main>

  <div class="table_container">
    <table class="table_style">

      <th><div class="table_header">Listen</div></th>
      <th><div class="table_header">#</div></th>
      <th><div class="table_header">Title</div></th> 
      <th><div class="table_header">Date</div></th>

      <tr>
        <td>
          <li >
            <div class="table_list"><button (click)="onClickMe0()">Listen Now</button></div>
            <div class="table_list"><button (click)="onClickMe1()">Listen Now</button></div>

          </li>
        </td>     
    		<td>
          <li *ngFor="let cast of casts">
            <div class="table_list">{{cast.order}}</div>
          </li>
        </td>
    		<td>
          <li *ngFor="let cast of casts">
            <div class="table_list">{{cast.title}}</div>
          </li>
        </td>
    		<td>
          <li *ngFor="let cast of casts">
            <div class="table_list">{{cast.date}}</div>
          </li>
        </td>
    	</tr>
    
    </table>
  </div>

</main>
  `,
  styles: [`
    .audio_container{
      position: fixed;
      z-index: 2;
      top: 0;
      left: -1%;
      width: 101%;
    }
    li{
      list-style-type: none;
    }
  	.table_style{
  	  width: 100%;
  	}
    .table_container{
      position: relative;
      font:  30px 'Noir';
    }
    .table_header{
      border-bottom-style: double;
      border-left-style: double;
      border-right-style: double;
      border-color: #0dba83;
      border-width: 8px;
      padding: 5px;
      color: #0dba83;
      font-size: 50px; 
      text-align: center;
    }
    .table_list{
      font-size: 30px; 
      text-align: center;
      padding: 8px;
      border-left-style: solid;
      border-right-style: solid;
      border-bottom-style: solid;
      border-color: #0dba83;
      border-width: 5px;
    }
  `]
})

export class PodcastComponent {
  
  casts = [
    new Cast(1, 'Test Title for Bobcast', '10-14-2016', 'Robert, Joe, Jill, Dylan'),
    new Cast(2, 'Revenge of harambe', '10-25-2016', 'Ghost council of Harambe')
  ];

  audio = '';

  cast_title = "Select a cast in the 'Listen Now' section!";

  onClickMe0() {
    this.audio = './audio/eskmo.mp3';
    this.cast_title = "Test Title for Bobcast";
  }
  onClickMe1() {
    this.audio = './audio/song.mp3';
    this.cast_title = "Revenge of harambe";
  }

  //@Input() cast: Cast;
  
}