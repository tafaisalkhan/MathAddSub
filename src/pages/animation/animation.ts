import { Component } from '@angular/core';
import { state, group, trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider } from '../../providers/game/game';
import { Media, MediaObject } from '@ionic-native/media';
/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'animation.html',
  animations:[
    trigger('heightTrigger',[
      state('noHeight',style({
        height: 0
      })),
      state('fullHeight', style({
        height: '*'
      })),
      transition('noHeight <=> fullHeight', [animate('3s')]),
     
  ]),
  
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateX(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
          query(':leave', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 1, transform: 'translateX(0)', offset: 0}),
              style({opacity: .5, transform: 'translateX(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateX(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
      ])
    ]),
    trigger('listAnimationCell', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
          query(':leave', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
      ])
    ]),
    trigger('visibilityGameOver', [
      state('shown' , style({ opacity: 1, display: 'block' ,  transform:'translateY(0%)'})),
      state('hidden', style({ opacity: 1, display: 'none' , transform:'translateY(-800%)' })),
      transition('* => *', animate('1s'))
    ]),
    trigger('slideInOut', [
      state('in', style({opacity: 1, display: 'block' ,  transform:'translateY(0%)'
      })),
      state('out', style({
        opacity: 1, display: 'none' , transform:'translateY(-800%)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('moveMarker', [
      state('firTerm' , style({ opacity: 1, display: 'block' , height:'57%', transform:'translateX(15%)'})),
      state('secTerm1', style({ opacity: 1, display: 'block' ,  height:'57%',  transform:'translateX(-105%)' })),
      state('secTerm', style({ opacity: 1, display: 'block' , top: '45px', height:'76%' ,  transform:'translateX(-105%)' })),
      state('thiTerm1', style({ opacity: 1, display: 'block' , top: '45px', height:'76%', transform:'translateX(-230%)' })),
      state('thiTerm', style({ opacity: 1, display: 'block' , height:'57%', transform:'translateX(-230%)' })),
      transition('* => *', animate('1s'))
    ]),
  ]
})

export class AnimationPage {
  cells;
  tableRow: any[] = [];
  tableCell: any[] =[] ;
  sildeOut : string;
  heightTrigger: string = "noHeight";
  marker: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public gameProvider:GameProvider, private media: Media) {
  }

  ionViewDidLoad() {
   
    this.cells = document.querySelectorAll('.cell');
    //console.log(this.cells);
    this.startAimation();
  }

  reStartAnimation(){
    this.tableRow = [];
    this.tableCell = []; 
  }
  first(){
    this.marker = 'firTerm';
  }
  sec(){
    this.marker = 'secTerm';
  }
  third(){
    this.marker = 'thiTerm';
  }
four(){
  this.marker = 'secTerm1';
}
  startAimation(){
    this.tableRow.push(0);
    this.tableRow.push(1);
    //his.tableRow.push(2);
    //this.tableRow.push(3);
    this.tableCell.push(0);
    this.tableCell.push(1);
    this.tableCell.push(2);
    this.tableCell.push(3);
    
      for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].innerText = '';
      this.cells[i].style.removeProperty('background-color');

    }

    setTimeout(() => {
      this.heightTrigger = "fullHeight";

      document.getElementById("3").innerText  = "1"
      document.getElementById("2").innerText = "2"
      document.getElementById("1").innerText = "3"

      document.getElementById("4").innerText  = "1"
      document.getElementById("5").innerText  = "1"
      document.getElementById("6").innerText  = "1"
    }, 1000);
    
}

listAnimationDone(event){
  console.log(event);
  if(event.toState == 4){
    document.getElementById("6").innerText = "2"
    this.sildeOut = "out"
   
  }
  //
}
 
}
