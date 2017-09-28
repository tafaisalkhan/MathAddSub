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
  templateUrl: 'addition.html',
  animations: [
   
    trigger('divTrigger', [
      state('off', style({
        color: 'white',
        'border': 'solid',
        'border-color': 'red'
        
      })),
      state('on', style({
        color: 'white',
        'border': 'solid',
        'border-color': 'red'
      })),
      transition('* => *', [ group ([
        animate('4s ease-in' , style({
          transform: ' rotateY( -180deg )',
        })),
        animate('2s ease-out' , style({
          //width: '50px',
        })),
        animate('6s ease-out' , style({
          transform: '  scale(1.2)',
        })),
      ])]),
      /*transition('on => off', [ group ([
        animate('4s ease-in' , style({
          transform: 'rotateY(360deg)',
        })),
        animate('2s ease-out' , style({
          opacity: 1,
        })),
        animate('6s ease-out' , style({
          transform: '  scale(1.5)',
        })),
      ])]),*/
  ] )
  ,trigger('TestDiv', [
    state('final' , style({ opacity: 0, display: 'block' ,  transform:'translateX(0%)'})),
    state('final1' , style({ opacity: 1, display: 'block' ,  transform:'translateX(0%)'})),
    
    transition('* => *', animate('1s'))
  ]),
/*  trigger('statement1Contents', [
    state('statement1Highlight' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red'})),
    state('Statement2' , style({ opacity: 1, display: 'block', left: '85%', width: '50%', transform: 'translateX(-143%)'})),
    
    transition('* => *', animate('1s'))
  ]),*/
  trigger('statement1Contents', [
    state('inactive', style({
      backgroundColor: '#eee',
      transform: 'scale(1)'
    })),
    state('active',   style({
      backgroundColor: '#cfd8dc',
      transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ]),
  trigger('statementContent1', [
    state('true' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red', fontSize: 'smaller'})),
    state('false', style({ opacity: 1, display: 'block'})),
    // transition
    transition('* => *', animate('5000ms')),
  ]),
  trigger('statementContent2', [
    state('true' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red', fontSize: 'smaller'})),
    state('false', style({ opacity: 1, display: 'block'})),
    // transition
    transition('* => *', animate('5000ms')),
  ]),
  trigger('statementContent3', [
    state('true' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red', fontSize: 'smaller'})),
    state('false', style({ opacity: 1, display: 'block'})),
    // transition
    transition('* => *', animate('5000ms')),
  ]),

  trigger('toggleResult1', [
    state('true' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red'})),
    state('false', style({ maxHeight: 0, padding: 0, display: 'none' })),
    state('result1' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red', fontSize: 'smaller'})),
    state('result2' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red',fontSize: 'smaller'})),
    state('result3' , style({ opacity: 1, display: 'block'})),
    // transition
    transition('* => *', animate('5000ms ease-in')),
  ]),
  trigger('toggleResult2', [
    state('true' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red'})),
    state('false', style({ maxHeight: 0, padding: 0, display: 'none' })),
    state('result1' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red', fontSize: 'smaller'})),
    state('result2' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red', fontSize: 'smaller'})),
    state('result3' , style({ opacity: 1, display: 'block'})),
    // transition
    transition('* => *', animate('5000ms')),
  ]),
  trigger('toggleResult3', [
    state('true' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red'})),
    state('false', style({ maxHeight: 0, padding: 0, display: 'none' })),
    state('result1' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red', fontSize: 'smaller'})),
    state('result2' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red', fontSize: 'smaller'})),
    state('result3' , style({ opacity: 1, display: 'block'})),
    // transition
    // transition
    transition('* => *', animate('5000ms')),
  ]),
  trigger('toggleCari1', [
    state('true' , style({  })),
    state('false', style({ maxHeight: 0, padding: 0, display: 'none' })),
    state('selectedCri1' , style({ opacity: 1, display: 'block', color: 'white', 'border': 'solid', 'border-color': 'red', fontSize: 'smaller'})),
    // transition
    transition('* => *', animate('5000ms')),
  ]),
  trigger('toggleCari2', [
    state('true' , style({  })),
    state('false', style({ maxHeight: 0, padding: 0, display: 'none' })),
    state('selectedCri2' , style({ opacity: 1, display: 'block',  color: 'white',  'border': 'solid', 'border-color': 'red', fontSize: 'smaller'})),
    // transition
    transition('* => *', animate('5000ms')),
  ]),
  trigger('visibilityResult', [
    state('shown' , style({ opacity: 1, display: 'block' , top: '52%',width:'85%', transform:'translateY(0%)'})),
    state('hidden', style({ opacity: 1, display: 'none' , transform:'translateY(-800%)' })),
    transition('* => *', animate('1s'))
  ]),
  ]
})

export class AdditionPage {
  cells;
  firstNumber: string;
  secNumber: string;
  enterAnimation: string = "off"; 
  firstNumberArray: any[]= [];
  secNumberArray: any[] = [];
  test : string ="void";
  statment1: boolean = false;
  statment2: boolean = false;
  statment3: boolean = false;
  result1: string = "false";
  result2: string = "false";
  result3: string = "false";
  cari1: string = "false";
  cari2: string = "false";
  resultMiddle1: boolean = false;
  resultMiddle2: boolean = false;
  resultMiddle3: boolean = false;
  result: any[] = [];
  finalResult: string ;
  totalStatementDone: number  = 2;
  currentStatementDone: number  = 0;
  resultDiv = "hidden";
  constructor(public navCtrl: NavController, public navParams: NavParams, public gameProvider:GameProvider, private media: Media) {
    this.firstNumber= this.navParams.get('firstName');
    this.secNumber= this.navParams.get('secNumber');
    this.finalResult = this.navParams.get('finalResult');

  }

  ionViewDidLoad() {
   
    this.cells = document.querySelectorAll('.cell');
    //console.log(this.cells);
    this.loadData();
    this.calculateResult();
    
    
  }

  first(){
   // this.cari2 = "false";
   // this.cari1 = "false";
   // this.test = "fly";
    //this.enterAnimation = "on";
    this.statment1 = this.statment1 ? false : true ;
    document.getElementById("r3").innerText = document.getElementById("d4").innerText + " + " + document.getElementById("d8").innerText ;
    
    //this.resultMiddle1 = this.resultMiddle1 ? false : true;
  }

  sec(){
       
    this.result1 =   "result1" ; //this.result1 == "true" ? "false" : "true";
   // this.resultMiddle1 = this.resultMiddle1 ? false : true;
   // this.cari2 =  this.cari2 == "true" ? "selectedCri1" : "true"; 
    //this.enterAnimation = "off";
    //this.test = "final1";
  }

  third(){
    document.getElementById("r3").innerText = this.result[0]
    this.result1 =   "result2"
   // this.cari2 =  this.cari2 ? false : true ;
   //this.result1 =  this.result1 == "true" ? "false" : "true";
  }

  four(){
   // this.cari2 =  this.cari2 ? false : true ;
   //document.getElementById("r3").innerText = this.result[2]
   if(this.result[0] > 10){
      document.getElementById("r3").innerText = (this.result[0] - 10 ) +""
   }
   else{
    document.getElementById("r3").innerText = (this.result[0]  ) +""
   }
   this.result1 =   "result3"
   if(this.result[0] - 10 > 0){
      this.cari2 =  "true"; 
   }
   this.statment1 = this.statment1 ? false : true ;
   this.statment2 = this.statment1 ? false : true ;
   //this.result1 =  this.result1 == "true" ? "false" : "true";
  }
  five(){
    if(this.result[0] - 10 > 0){
  
       this.cari2 = "selectedCri2";
    }
  }
 
  six(){
    if(this.result[0] - 10 > 0){
      document.getElementById("r2").innerText = document.getElementById("d3").innerText + " + " + document.getElementById("d7").innerText + " + " + document.getElementById("c2").innerText;
    }
    else{
      document.getElementById("r2").innerText = document.getElementById("d3").innerText + " + " + document.getElementById("d7").innerText
    }
    this.result2 = "result1" ;
  }
  seven(){
    document.getElementById("r2").innerText =  this.result[1];
    this.result2 = "result2" ;
  }
  eight(){
    if(this.result[1] - 10 > 0){
      document.getElementById("r2").innerText = (this.result[1] - 10 ) +""
      this.cari1 =  "true"; 
    }
    else{
      document.getElementById("r2").innerText = (this.result[1]  ) +""
    }
    this.result2 =   "result3";
    
    this.statment2 = this.statment2 ? false : true ;
    this.statment3 = this.statment3 ? false : true ;
  }

  ninth(){
    if(this.result[1] - 10 > 0){
      this.cari1 =  "selectedCri1"; 
    }
   
    this.statment3 = this.statment3 ? false : true ;
    //this.statment3 = this.statment3 ? false : true ;
  }
  ten(){
    if(this.result[0] - 10 > 0){
        document.getElementById("r1").innerText = document.getElementById("d2").innerText + " + " + document.getElementById("d6").innerText + " + " + document.getElementById("c1").innerText;
    }
    else{
      document.getElementById("r1").innerText = document.getElementById("d2").innerText + " + " + document.getElementById("d6").innerText 
    }

        this.result3 = "result1" ;
    }
eleventh(){
  document.getElementById("r1").innerText = this.result[2]
  this.result3 =   "result2"
}

twelve(){
  //document.getElementById("r1").innerText = this.result[0]
  this.statment3 = this.statment3 ? false : true ;
  this.cari1 =  "true";
  this.result3 =   "result3"
}
  loadData(){
   
    document.getElementById("d2").innerText = this.firstNumber.substr(0,1);
    this.firstNumberArray.push(Number(this.firstNumber.substr(0,1)))
    document.getElementById("d3").innerText = this.firstNumber.substr(1,1);
    this.firstNumberArray.push(Number(this.firstNumber.substr(1,1)))
    document.getElementById("d4").innerText  =this.firstNumber.substr(2,3);
    this.firstNumberArray.push(Number(this.firstNumber.substr(2,3)))

  
    document.getElementById("d6").innerText  = this.secNumber.substr(0,1);
    this.secNumberArray.push(Number(this.secNumber.substr(0,1)))
    document.getElementById("d7").innerText  = this.secNumber.substr(1,1);
    this.secNumberArray.push(Number(this.secNumber.substr(1,1)))
    document.getElementById("d8").innerText  = this.secNumber.substr(2,3);
    this.secNumberArray.push(Number(this.secNumber.substr(2,3)))
    
  }

   calculateResult(){
    var temRresult  = Number(this.secNumber.substr(2,3)) + Number(this.firstNumber.substr(2,3));
    var caridOut = 0;
    //document.getElementById("r3").innerText = temRresult +"";
    //document.getElementById("r3").innerText = this.secNumber.substr(2,3) + " + " + this.firstNumber.substr(2,3);
    if (temRresult >= 10){
      //document.getElementById("c2").innerText = "1";
      caridOut = 1;
      //document.getElementById("r3").innerText = (temRresult - 10) +"";
    } 
    else{
      //document.getElementById("c2").innerText = "";
      caridOut = 0;
    }
    this.result.push(temRresult);
    temRresult  = Number(this.secNumber.substr(1,1)) + Number(this.firstNumber.substr(1,1) ) + Number(caridOut);
    //document.getElementById("r2").innerText = (temRresult + caridOut) +"";
    if (temRresult >= 10){
      //document.getElementById("c1").innerText = "1";
      caridOut = 1;
      //document.getElementById("r2").innerText = ((temRresult  + caridOut) - 10) +"";

    } 
    else{
      //document.getElementById("c1").innerText = "";
      caridOut = 0;
    }
    this.result.push(temRresult);

    var temRresult  = Number(this.secNumber.substr(0,1)) + Number(this.firstNumber.substr(0,1)) + Number(caridOut) ;
    //document.getElementById("r1").innerText = (temRresult + caridOut) +""; 
    this.result.push(temRresult);
    //
    this.statment1 = this.statment1 ? false : true ;

   }
  
   statementContent1Started(event){
    
   }
 
   statementContent1Done(event){
   
    if(event.phaseName == "done"){
      this.currentStatementDone ++;
    }

    if(this.totalStatementDone == this.currentStatementDone){
      this.currentStatementDone = 0;
      document.getElementById("r3").innerText = document.getElementById("d4").innerText + " + " + document.getElementById("d8").innerText ;
      this.result1 =   "result1"
    }
   
    
   }

   toggleResult1Started(event){
    

   }
   toggleResult1Done(event){
    
   
     if(event.toState == "result1"){
      document.getElementById("r3").innerText = this.result[0]
      this.result1 =   "result2"
     }
     else if(event.toState == "result2"){
      if(this.result[0] >= 10){
        document.getElementById("r3").innerText = (this.result[0] - 10 ) +""
     }
     else{
      document.getElementById("r3").innerText = (this.result[0]  ) +""
     }
    
     if(this.result[0] - 10 >= 0){
          document.getElementById("c2").innerText = "1"  
          this.cari2 =  "true"; 

     }
     this.statment1 =  false ;
     this.statment2 =  true ;
     if(this.result[0] - 10 >= 0){
      document.getElementById("c2").innerText = "1"
       this.cari2 = "selectedCri2";
    }
    //this.result1 =   "result3"
     //this.cari2 = "selectedCri2";
     //this.result1 =   "result3"
     }
     /*
     else if(event.toState == "result3"){
      //if(this.result[0] - 10 >= 0){
       //     document.getElementById("c2").innerText = "1"
       //      this.cari2 = "selectedCri2";
       //   }
      if(this.result[0] - 10 >= 0 || document.getElementById("c2").innerText == "1") {
        document.getElementById("r2").innerText = document.getElementById("d3").innerText + " + " + document.getElementById("d7").innerText + " + " + document.getElementById("c2").innerText;
      }
      else{
        document.getElementById("r2").innerText = document.getElementById("d3").innerText + " + " + document.getElementById("d7").innerText
      }
      this.result2 = "result1" ;
     }
*/
   }

   toggleResult2Started(event){
   
  }
  toggleResult2Done(event){
    
   
    if(event.toState == "result1"){
      document.getElementById("r2").innerText =  this.result[1];
      this.result2 = "result2" ;
     }
     else if(event.toState == "result2"){
      if(this.result[1] - 10 >= 0){
        document.getElementById("c1").innerText = "1"
        document.getElementById("r2").innerText = (this.result[1] - 10 ) +""
        this.cari2 =  "true"; 
      }
      else{
        document.getElementById("r2").innerText = (this.result[1]  ) +""
        this.cari2 =  "true";
      }
      this.result2 =   "result3";
      this.cari1 =  "true"; 
      this.statment2 =  false ;
      this.statment3 =  true ;
      if(this.result[1] - 10 >= 0){
        document.getElementById("c1").innerText = "1"
        this.cari1 =  "selectedCri1"; 
      }
    }
     /*
     else if(event.toState == "result3"){
      //this.statment3 = this.statment3 ? false : true ;
      
      
      if(this.result[1] - 10 >= 0 || document.getElementById("c1").innerText == "1"){
        document.getElementById("c1").innerText = "1"
        document.getElementById("r1").innerText = document.getElementById("d2").innerText + " + " + document.getElementById("d6").innerText + " + " + document.getElementById("c1").innerText;
      }
      else{
        document.getElementById("r1").innerText = document.getElementById("d2").innerText + " + " + document.getElementById("d6").innerText 
      }

     
      
      
      this.result3 = "result1" ;
      
     }
*/
  }

  toggleResult3Started(event){
    //console.log(event);

  }
  toggleResult3Done(event){
   
    if(event.toState == "result1"){
      if(this.result[1] - 10 > 0){
        this.cari1 =  "true"; 
      }

      document.getElementById("r1").innerText = this.result[2]
      this.result3 =   "result2"
      this.statment3 =  false  ;  
     
      //this.statment3 = this.statment3 ? false : true ;
    }
  
    else if(event.toState == "result2"){
      this.resultDiv = "shown"
    }
  
  }
  statementContent2Done(event){
      console.log(event);
      if(event.toState == 1){
        if(this.result[0] - 10 >= 0 || document.getElementById("c2").innerText == "1") {
          document.getElementById("r2").innerText =  document.getElementById("c2").innerText + " + " + document.getElementById("d3").innerText + " + " + document.getElementById("d7").innerText ;
        }
        else{
          document.getElementById("r2").innerText = document.getElementById("d3").innerText + " + " + document.getElementById("d7").innerText
        }
        this.result2 = "result1"
      }
  }

  statementContent2Started(event){
   
  }

  statementContent3Done(event){
    console.log(event);
    if(event.toState == 1){
      if(this.result[1] - 10 >= 0 || document.getElementById("c1").innerText == "1"){
        document.getElementById("c1").innerText = "1"
        document.getElementById("r1").innerText =  document.getElementById("c1").innerText + " + " + document.getElementById("d2").innerText + " + " + document.getElementById("d6").innerText ;
      }
      else{
        document.getElementById("r1").innerText = document.getElementById("d2").innerText + " + " + document.getElementById("d6").innerText 
      }

     this.result3 = "result1"
    }
  }

  statementContent3Started(event){
    
  }

  showResult(){
  
     setTimeout(function(){ 
     
       this.resultDiv = "shown"
       }, 3000);
       
   }
}
