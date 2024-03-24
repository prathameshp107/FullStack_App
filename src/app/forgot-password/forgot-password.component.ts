import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resetLinkSent: boolean = false;

    // Function to send reset password link
    sendResetLink() {
        // Assuming the link is sent successfully
        this.resetLinkSent = true;
    }

}
