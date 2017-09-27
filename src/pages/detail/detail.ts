import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  animations:[
    trigger('resultVisiable', [
      state('shown' , style({ opacity: 1, display: 'block' ,  transform:'translateX(0%)'})),
      state('hidden', style({ opacity: 0, display: 'none' , transform:'translateX(800%)' })),
      transition('* => *', animate('1s'))
    ]),
   
  ]
})
export class DetailPage {
  resultreadonly :boolean = true;
  result: string = "hidden";
  type: string = "add";
  inputNumber1:   number;
  inputNumber2:   number;
  completeResult: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    
  }
  showResult(){

  
    var firstNumber = Number(this.inputNumber1);
    var secNumber = Number(this.inputNumber2);
    if(firstNumber != NaN || secNumber != NaN){
      this.completeResult = firstNumber + secNumber;
      this.result = "shown";
    }
    else{
      
      this.showAlert("Please Enter Valid Number");
    } 
    
  }
  showInAnimation(){
    this.result = "hidden";
    
  this.completeResult = Number(this.inputNumber1) + Number(this.inputNumber2);
     
    this.navCtrl.push('AdditionPage',{
      firstName: (this.inputNumber1+"").length == 1 ? this.pad(this.inputNumber1,3): (this.inputNumber1+"").length == 2 ? this.pad(this.inputNumber1,3) : this.inputNumber1+"",
      secNumber: (this.inputNumber2+"").length == 1 ? this.pad(this.inputNumber2,3): (this.inputNumber2+"").length == 2 ? this.pad(this.inputNumber2,3) : this.inputNumber2+"",
      finalResult: this.completeResult
    });
  }

  reset(){
    
    this.result = "hidden";
  }

  pad(inputString, number){
    var s = String(inputString);
    while (s.length < (number || 2)) {s = "0" + s;}
    return s;
  }

  showAlert(txt) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: txt,
      buttons: ['OK']
    });
    alert.present();
  }

  
}
