import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @Input() Counter;

  loginForm = new FormGroup({
    username: new FormControl("",[Validators.required, Validators.maxLength(8), Validators.minLength(6), Validators.pattern('^[a-zA-Z]+$')]),
    password: new FormControl(""), email: new FormControl("",Validators.email),
    address: new FormGroup({
      state: new FormControl('Kerala')
    })
  });

  constructor() { }

  ngOnInit() {
    console.log("Home Component Init");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Counter value changed");
    for (let propname in changes) {
      let change = changes[propname];
      let curval = JSON.stringify(change.currentValue);
      let prevval = JSON.stringify(change.previousValue);

      console.log("CurVal: "+curval);
      console.log("prevval: "+prevval);
    }
  }

  ngOnDestroy() {
    console.log("Home Component destroyed");
  }

  login() {
    console.log(this.loginForm.value);
  }

}
