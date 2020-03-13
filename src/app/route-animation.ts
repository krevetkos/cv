import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';


export const slider = trigger('sliderAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true}),
    query(':enter', [
      style({ right: '-100%'})
    ], { optional: true}),
    group([
      query(':leave', [
        animate('1s ease', style({ right: '150%'}))
      ], { optional: true}),
      query(':enter', [
        animate('1s ease', style({ right: '0%'}))
      ],{ optional: true})
    ]),
  ]),
])
