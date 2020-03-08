import { Component, OnInit } from '@angular/core';
import {StateHolder} from "../service/state.holder";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public state:StateHolder) { }

  ngOnInit() {
  }
setWork(){
  for(let s in this.state.state){
    this.state.state[s] = false; 
  }
  this.state.state.works = true;
}
setHire(){
  for(let s in this.state.state){
    this.state.state[s] = false; 
  }
  this.state.state.hire = true;
}
}
