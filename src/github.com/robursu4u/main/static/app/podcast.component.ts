import { Component} from '@angular/core';

import {Cast} from './cast';


@Component({
  selector: 'podcast-list',
  template: `


<div class="audio_container"><paper-audio-player src={{current_audio}} title={{current_title}} ></paper-audio-player></div>

<main>

  <div class="table_row">

    <div class="table_column">
      <div class="table_header">#</div>
      <div *ngFor="let cast of casts" class="table_list">{{cast.order}}</div>
    </div>

    <div class="table_column">
      <div class="table_header">Title</div>
      <div *ngFor="let cast of casts" class="table_list">{{cast.title}}</div>
    </div>

    <div class="table_column">
      <div class="table_header">Date</div>
      <div *ngFor="let cast of casts" class="table_list">{{cast.date}}</div>
    </div>
    
    <div class="table_column">
      <div class="table_header">Listen</div>
      <div *ngFor="let cast of casts" class="list_button"><button (click)="selectAudio(cast)">Listen Now</button></div>
    </div>  

  </div>

</main>
  `,
  styles: [`
    .audio_container{
      position: fixed;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
    }
    button{
      border-radius: 10px;
    }
    .table_row{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font:  30px 'Noir';
      width: 810px;
    }
    .table_column{
      display: flex;
      flex-direction: column;
      justify-content: center;
      font:  30px 'Noir';
    }
    .table_header{
      border-bottom-style: double;
      border-left-style: double;
      border-right-style: double;
      border-color: #0dba83;
      border-width: 8px;
      padding: 8px;
      color: #0dba83;
      font-size: 50px; 
      text-align: center;
    }
    .list_button{
      font-size: 30px; 
      text-align: center;
      padding: 10px;
      border-bottom-style: solid;
      border-color: #0dba83;
      border-width: 5px;
      color: #8a2be2;
    }
    .table_list{
      font-size: 30px; 
      text-align: center;
      padding: 13px;
      border-bottom-style: solid;
      border-color: #0dba83;
      border-width: 5px;
    }
  `]
})

export class PodcastComponent {
  
  casts = [
  { order: 1, title: 'Test Title for Bobcast', date: '10-14-2016', audio: './audio/eskmo.mp3', people: 'Robert, Joe, Jill, Dylan'},
  { order: 2, title: 'Title 2', date: '10-15-2016', audio: './audio/song.mp3', people: 'All of america'}
  ];

  audio = '';
  current_audio = '';
  current_title = 'Select a cast in the "Listen Now" section!';

  selectAudio(cast) {
    this.current_audio = cast.audio;
    this.current_title = cast.title;
    console.log(this.current_audio);
  }
  
}