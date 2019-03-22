import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'hoegaarden';
    public questionAnswer: boolean;
    ngOnInit(): void {
        if (localStorage.getItem('answered') === 'yes') {
            this.questionAnswer = true;
        }
    }
    public can(answer): void {
        if (answer) {
            this.questionAnswer = true;
        } else {
            this.questionAnswer = false;
        }
        localStorage.setItem('answered', 'yes');
    }


}
