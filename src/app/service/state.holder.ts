import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class StateHolder {
    state = {
      home:true,
      works:false,
      about:false,
      contacts:false,
      hire:false
    }
    constructor() {
    }
  lineController($event: { target: { offsetParent: { children: { children: { textContent: any; }[]; }[]; }; }; }){
    let container:any = $event.target.offsetParent.children[0].children[1].textContent;
    for(let s in this.state){
      this.state[s] = false;
      
      if(container === s){
        this.state[s] = !this.state[s];
      }
    }
  }  
  navController($event: { target: { innerHTML: string; }; }){
    for(let s in this.state){
      this.state[s] = false;
      
      if($event.target.innerHTML === s){
        this.state[s] = !this.state[s];
      }
    }
  }
}