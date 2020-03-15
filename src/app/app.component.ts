import { Component,OnInit,ViewChild,ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { StateHolder } from "./service/state.holder";
import { slider } from './route-animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider]})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'global';
  trans:string;
  tri:boolean = false;
  constructor(public state:StateHolder, public rout: Router) { }

  @ViewChild('main', {static: true}) main: ElementRef;
  ngOnInit() {
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
  ngAfterContentInit(): void {
    console.log(this.main.nativeElement.offsetHeight)
  }

  prepareRouter( outlet: RouterOutlet ) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
   parallaxX($event){
     if((window.screen.width < window.screen.height)&&window.navigator.maxTouchPoints > 0){
       return
     }
     this.trans = `translate(${$event.clientX/10}px,${$event.clientY/10}px)`
  };
  navTrigger(){
    this.tri = !this.tri;
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
