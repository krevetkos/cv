import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import {Router} from "@angular/router";
// import { map} from 'rxjs/operators';
// import { from, pipe } from 'rxjs';
import {StateHolder} from "./service/state.holder";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'global';
  transition:string;
  trigger:boolean = false;
  @ViewChild('background', {static: false}) background: ElementRef;
  
  constructor(public state:StateHolder, public rout: Router) { }

  ngOnInit() {
    console.log(window.location.pathname)
    for(let s in this.state.state){
      this.state.state[s] = false;
      if(window.location.pathname.slice(1) === s){
        this.state.state[s] = !this.state.state[s];
      }
      if(window.location.pathname == "/"){
        this.state.state.home = true;
      }
    }  
  }
   parallaxX($event){
     this.transition = `translate(${$event.clientX/10}px,${$event.clientY/10}px)`
  };
  navTrigger(){
    this.trigger = !this.trigger;
  }
  showThis($event){
    this.state.lineController($event);
  }
  showIt($event){
    console.log($event.target.innerHTML);
    this.state.navController($event);
  }
  setHire(){
    for(let s in this.state.state){
      this.state.state[s] = false; 
    }
    this.state.state.hire = true;
  }
  setHome(){
    for(let s in this.state.state){
      this.state.state[s] = false; 
    }
    this.state.state.home = true;
  }
}