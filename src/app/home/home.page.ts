import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  rutadetabla:any;
  ledstatus:boolean=false;
  ledstatus2:boolean=false;
  ledstatus3:boolean=false;
  ledstatus4:boolean=false;
  ledstatust:boolean=false;
  constructor(private db:Firestore) {}

  async apagar() {
    this.rutadetabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
    await setDoc(this.rutadetabla, { encender: false });//CAMBIA EL ATRIBUTO DE LA TABLA
}

  async encender() {
  this.rutadetabla = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutadetabla, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA
}

  async toogleState(){
    this.ledstatus=!this.ledstatus
    this.rutadetabla = doc(this.db,"controlLed","LED1");
    await setDoc(this.rutadetabla,{encender:this.ledstatus})
    console.log(this.ledstatus)
  }

  async toogleState2(){
    this.ledstatus2=!this.ledstatus2
    this.rutadetabla = doc(this.db,"controlLed","LED2");
    await setDoc(this.rutadetabla,{encender:this.ledstatus2})
    console.log(this.ledstatus2)
  }

  async toogleState3(){
    this.ledstatus3=!this.ledstatus3
    this.rutadetabla = doc(this.db,"controlLed","LED3");
    await setDoc(this.rutadetabla,{encender:this.ledstatus3})
    console.log(this.ledstatus3)
  }

  async toogleState4(){
    this.ledstatus4=!this.ledstatus4
    this.rutadetabla = doc(this.db,"controlLed","LED4");
    await setDoc(this.rutadetabla,{encender:this.ledstatus4})
    console.log(this.ledstatus4)
  }

  async toogleStatet(){
    this.ledstatust=!this.ledstatust
    this.rutadetabla = doc(this.db,"controlLed","LED1");
    await setDoc(this.rutadetabla,{encender:this.ledstatus})
    
    this.rutadetabla = doc(this.db,"controlLed","LED2");
    await setDoc(this.rutadetabla,{encender:this.ledstatus2})
    
    this.rutadetabla = doc(this.db,"controlLed","LED3");
    await setDoc(this.rutadetabla,{encender:this.ledstatus3})
    
    this.rutadetabla = doc(this.db,"controlLed","LED4");
    await setDoc(this.rutadetabla,{encender:this.ledstatus4})
    console.log(this.ledstatust)
    this.ledstatus=this.ledstatust
    this.ledstatus2=this.ledstatust
    this.ledstatus3=this.ledstatust
    this.ledstatus4=this.ledstatust
  }

  
}
