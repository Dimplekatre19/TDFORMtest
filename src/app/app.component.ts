import {  Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 

  ngOnInit(): void {
      setTimeout(() => {
        this.signUpform.controls['userName'].valueChanges
        .subscribe(data=>{
           if(data && data.length>=12){
              this.usernameflag=true
           }else{
              this.usernameflag=false 
           }
        })
      }, 500);
  }
  title = 'test9';
  usernameflag:boolean=false
   @ViewChild('signUpform') signUpform !:NgForm

   contactarr=[
     {mode:"phone", id:1},
     {mode:"email", id:2}
   ]
  
   onsignin(){
    if(this.signUpform.valid){
     let  formvalue={
       ...this.signUpform.value,
       isSubscribed:this.signUpform.controls['isSubscribed']?.value ?? false
     }
     console.log(formvalue);
    }
    this.signUpform.reset()
  
    
  }
  
}
