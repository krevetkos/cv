import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  items = [
    {
      path: '../../assets/images/works/bagTwo.png',
      title: 'Afrodyta',
      link:  'https://krevetkos.github.io/Afrodyta/',
      class: 'carousel_item'
    },
    {
      path: '../../assets/images/works/bicycle.png',
      title: 'Tanatos',
      link:  'https://krevetkos.github.io/Tanatos/',
      class: 'carousel_item'
    },
    {
      path: '../../assets/images/works/whil.png',
      title: 'Calendar',
      link:  'https://github.com/krevetkos/Calendar',
      class: 'carousel_item'
    },
    {
      path: '../../assets/images/works/whil.png',
      title: 'XO',
      link:  'https://github.com/krevetkos/Calendar',
      class: 'carousel_item'
    },
    {
      path: '../../assets/images/works/whil.png',
      title: 'Catch-the-Ball',
      link:  'https://github.com/krevetkos/Calendar',
      class: 'carousel_item'
    }
  ]
currentImg = [];
state: number = 3;
FirstItem: number = 0;
LastItem: number = this.state;
  constructor() { }

  ngOnInit() {
    this.makeCurImg(this.items, this.currentImg, this.FirstItem, this.LastItem);
    console.log(this.currentImg)
  }

  makeCurImg = function(store, curImg, first, last) {
    if (first > last) {
        for (let i = first; i < store.length; i++) {
            curImg.push(store[i]);
        }
        for (let i = 0; i < last; i++) {
            curImg.push(store[i]);
        }
        curImg[0].class = 'carousel_item';
        curImg[1].class = 'carousel_item active';
        curImg[2].class = 'carousel_item';
    } else {
        for (let i = first; i < last; i++) {
            curImg.push(store[i]);
        }
        curImg[0].class = 'carousel_item';
        curImg[1].class = 'carousel_item active';
        curImg[2].class = 'carousel_item';
    }
}
clearHTML = function(container) {
  if (container.length != 0) {
      while (container.length > 0) {
          container.pop();
      }
  }
}
moveLeft = function(container) {
  if (this.FirstItem === 0) {
      this.FirstItem = container.length;
  }
  if (this.LastItem === 0) {
      this.LastItem = container.length;
  }
  this.FirstItem--;
  this.LastItem--;
}
moveRight = function(container) {
  this.FirstItem++;
  this.LastItem++;
  if (this.FirstItem === container.length) {
      this.FirstItem = 0;
  }
  if (this.LastItem === container.length) {
      this.LastItem = 0;
  }
}

left = function () {
    this.clearHTML(this.currentImg)
    this.moveLeft(this.items);
    this.makeCurImg(this.items, this.currentImg, this.FirstItem, this.LastItem);
}
right = function () {
    this.clearHTML(this.currentImg)
    this.moveRight(this.items);
    this.makeCurImg(this.items, this.currentImg, this.FirstItem, this.LastItem);
}
}
