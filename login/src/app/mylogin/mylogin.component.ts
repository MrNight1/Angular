import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css']
})
export class MyloginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  googleLogin(): void {
    this.authService.doLoginGoogle();
  }

}
