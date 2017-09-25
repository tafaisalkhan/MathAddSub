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

   // left: 48px;
   // top: 349px;
   // width: 60%;
   // height: 17% !important
    trigger('moveMarker', [
      state('firTerm' , style({ opacity: 1, display: 'block' , height:'38%', transform:'translateX(15%)'})),
      state('firTermResult' , style({ opacity: 1, display: 'block', width: '45%' , left: '40%' ,height:'16%', transform:'translateY(249%)'})),
      state('firTermResultFinal' , style({ opacity: 1, display: 'block', width: '21%' , left: '64%' ,height:'16%', transform:'translateY(249%)'})),
      state('secTerm1', style({ opacity: 1, display: 'block' , left:'216px', top: '48px',  height:'57%',  transform:'translateX(-105%)' })),
      state('thirdTerm1', style({ opacity: 1, display: 'block' , left:'216px', top: '48px',  height:'57%',  transform:'translateX(-218%)' })),
      state('secTerm', style({ opacity: 1, display: 'block' , top: '45px', height:'76%' ,  transform:'translateX(-105%)' })),
      state('thiTerm1', style({ opacity: 1, display: 'block' , top: '45px', height:'76%', transform:'translateX(-230%)' })),
      state('thiTerm', style({ opacity: 1, display: 'block' , height:'57%', transform:'translateX(-230%)' })),
      state('hideMarker', style({ opacity: 0, display: 'block' , width: '60%' , height:'57%', transform:'translateX(-230%)' })),
      state('final', style({ opacity: 1, display: 'block' , height: '17%', left: '-24px',top: '349px' , widht:'95px' })),
      state('secTermResult' , style({ opacity: 1, display: 'block', width: '45%' , left: '73px' ,height:'16%', transform:'translateY(249%)'})),
      transition('* => *', animate('1s'))
    ]),
    trigger('resultDiv', [
      state('firresult' , style({ opacity: 1, display: 'block', width: '40%', left: '43%', transform: 'translateX(0%)'})),
      state('firresultRoate' , style({ opacity: 1, display: 'block' , transform:'rotateY(360deg)'})),
      state('firresultFinal' , style({ opacity: 1, display: 'block', width: '20%', left: '20%'})),
      state('firresultFirstCary' , style({ opacity: 1, display: 'block', left: '43%', width: '51px ', transform: 'translateX(21%)'})),
      state('firresultFirstCaryMove' , style({opacity: 1, display: 'block', left: '51%', width: '51px ',  transform: 'translateY(-381%)'})),
      state('hideResultDiv' , style({ opacity: 0, display: 'block', width: '20%', left: '63%'})),
      
      transition('* => *', animate('1s'))
    ]),
    trigger('resultDiv1', [
      state('secResultFirstCary' , style({ opacity: 1, display: 'block', left: '85%', width: '50%', transform: 'translateX(-143%)'})),
      state('secResultFinal' , style({ opacity: 1, display: 'block', width: '20%', left: '0%'})),
      state('secResultFirstCary1' , style({ opacity: 1, display: 'block', left: '23%', width: '51px ', transform: 'translateX(21%)'})),
      state('secResultFirstCaryMove' , style({opacity: 1, display: 'block', left: '33%', width: '51px ',  transform: 'translateY(-381%)'})),
      state('hideResultDiv' , style({ opacity: 0, display: 'block', width: '20%', left: '63%'})),
      
      transition('* => *', animate('1s'))
    ]),

    trigger('resultDiv2', [
      state('thirdResultFirstCary' , style({ opacity: 1, display: 'block', left: '85%', width: '50%', transform: 'translateX(-143%)'})),
      state('thirdResultFinal' , style({ opacity: 1, display: 'block', width: '20%', left: '0%'})),
      state('thirdResultFirstCary1' , style({ opacity: 1, display: 'block', left: '23%', width: '51px ', transform: 'translateX(21%)'})),
      state('thirdResultFirstCaryMove' , style({opacity: 1, display: 'block', left: '33%', width: '51px ',  transform: 'translateY(-381%)'})),
      state('thirdResultFinal' , style({ opacity: 1, display: 'block', width: '20%', left: '-20%'})),
      state('final' , style({ opacity: 0, display: 'block', width: '50%'})),
      state('hideResultDiv' , style({ opacity: 0, display: 'block', width: '20%', left: '63%'})),
      
      transition('* => *', animate('1s'))
    ]),
    trigger('moveFinalMarker', [
      state('final' , style({ opacity: 1, display: 'block' ,  transform:'translateX(0%)'})),
      
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
  firstNumber: string;
  secNumber: string;
  resultDivAimation:string = "";
  firstNumberArray: number[] =[];
  secNumberArray: number[] =[];

  firstTerm : number = 0;
  secTerm : number = 0;
  resultDivAimation1:string = "";
  resultDivAimation2:string = "";
  finalMarker:string ="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public gameProvider:GameProvider, private media: Media) {
    this.firstNumber= this.navParams.get('firstName');
    this.secNumber= this.navParams.get('secNumber');
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
    //this.marker = 'firTermResult';

    this.firstTerm =  this.firstNumberArray.pop();
    this.secTerm = this.secNumberArray.pop();
    document.getElementById("resultMovingDiv").innerText = this.firstTerm + " + " + this.secTerm;
    this.resultDivAimation = "firresult";
    
  }
  third(){
    //this.marker = 'firTermResultFinal';
    this.resultDivAimation = "firresultFinal";
    document.getElementById("resultMovingDiv").innerText = (Number(this.firstTerm)  + Number(this.secTerm))+"";
    //this.marker = 'thiTerm';
  }
four(){
  //this.marker = 'secTerm1';
  this.resultDivAimation = "firresultFirstCary"
  document.getElementById("result4").innerText = (Number(this.firstTerm)  + Number(this.secTerm))+"";
  //this.marker = 'hideMarker';
  var num = (Number(this.firstTerm)  + Number(this.secTerm)) - 10;
  document.getElementById("result4").innerText = num+"" ;
  document.getElementById("resultMovingDiv").innerText =  "1";
  //this.resultDivAimation = "firresultFirstCary";
  //this.resultDivAimation = "hideResultDiv";
}
five(){
  this.resultDivAimation = "firresultFirstCaryMove"
}
six(){
  this.marker = 'secTerm1';
}
seven(){
  this.firstTerm =  this.firstNumberArray.pop();
  this.secTerm = this.secNumberArray.pop();
  document.getElementById("resultMovingDiv1").innerText = this.firstTerm + " + " + this.secTerm + " + 1";
  this.resultDivAimation1 = 'secResultFirstCary';
}
eight(){
  //this.marker = 'firTermResultFinal';
 
  document.getElementById("resultMovingDiv1").innerText = (Number(this.firstTerm) + 1 + Number(this.secTerm)) +  "";
  this.resultDivAimation1 = "secResultFinal";
  //this.marker = 'thiTerm';
}

night(){
  this.resultDivAimation1 = "secResultFirstCary1"
  document.getElementById("result3").innerText = (Number(this.firstTerm)+ 1 + Number(this.secTerm))+"";
  //this.marker = 'hideMarker';
  var num = ((Number(this.firstTerm)  + Number(this.secTerm)) + 1) - 10;
  document.getElementById("result3").innerText = num+"" ;
  document.getElementById("resultMovingDiv1").innerText =  "1";
}

ten(){
  this.resultDivAimation1 = "secResultFirstCaryMove"
}
eleven(){
  this.marker = 'thirdTerm1';
}

twelve(){
  this.firstTerm =  this.firstNumberArray.pop();
  this.secTerm = this.secNumberArray.pop();
  document.getElementById("resultMovingDiv2").innerText = this.firstTerm + " + " + this.secTerm + " + 1";
  this.resultDivAimation2 = 'thirdResultFirstCary';
}
thirteen(){
  document.getElementById("resultMovingDiv2").innerText = (Number(this.firstTerm) + 1 + Number(this.secTerm)) +  "";
  this.resultDivAimation2 = "thirdResultFinal";
}

fourTeen(){
  document.getElementById("result2").innerText = (Number(this.firstTerm)+ 1 + Number(this.secTerm))+"";
  //this.marker = 'hideMarker';
  var num = ((Number(this.firstTerm)  + Number(this.secTerm)) + 1) ;
  document.getElementById("result2").innerText = num+"" ;
  this.resultDivAimation2 = "final";
}
fifTeen(){
  //document.getElementById("resultMovingDiv2").innerText = "1998";
  this.resultDivAimation2 = "final";
  this.finalMarker = "final";
  //this.marker =  "final";
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

      if(this.firstNumber.length == 3){
        document.getElementById("1").innerText = this.firstNumber.substr(0,1);
        this.firstNumberArray.push(Number(this.firstNumber.substr(0,1)))
        document.getElementById("2").innerText = this.firstNumber.substr(1,1);
        this.firstNumberArray.push(Number(this.firstNumber.substr(1,1)))
        document.getElementById("3").innerText  =this.firstNumber.substr(2,3);
        this.firstNumberArray.push(Number(this.firstNumber.substr(2,3)))
      }
      else  if(this.firstNumber.length == 2){
        document.getElementById("2").innerText = this.firstNumber.substr(0,1);
        this.firstNumberArray.push(Number(this.firstNumber.substr(0,1)))
        document.getElementById("3").innerText  =this.firstNumber.substr(1,1); 
        this.firstNumberArray.push(Number(this.firstNumber.substr(1,1)))
      }
      else{
        document.getElementById("3").innerText  =this.firstNumber.substring(0,1); 
        this.firstNumberArray.push(Number(this.firstNumber.substr(0,1)))
      }
      if(this.secNumber.length == 3){
        document.getElementById("4").innerText  = this.secNumber.substr(0,1);
        this.secNumberArray.push(Number(this.secNumber.substr(0,1)))
        document.getElementById("5").innerText  = this.secNumber.substr(1,1);
        this.secNumberArray.push(Number(this.secNumber.substr(1,1)))
        document.getElementById("6").innerText  = this.secNumber.substr(2,3);
        this.secNumberArray.push(Number(this.secNumber.substr(2,3)))
      }
      else if(this.secNumber.length == 2){
        document.getElementById("5").innerText  = this.secNumber.substr(0,1);
        this.secNumberArray.push(Number(this.secNumber.substr(0,1)))
        document.getElementById("6").innerText  = this.secNumber.substr(1,1);
        this.secNumberArray.push(Number(this.secNumber.substr(1,1)))
      }
      else{
        document.getElementById("6").innerText  = this.secNumber.substr(0,1);
        this.secNumberArray.push(Number(this.secNumber.substr(0 ,1)))
      }

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
