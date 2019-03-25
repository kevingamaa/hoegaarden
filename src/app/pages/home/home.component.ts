import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private route: ActivatedRoute, private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle('Hoegaarden Greenhouse');
        this.route.params.subscribe(param => {
            if (param.content !== undefined) {
                this.go(`#${param.content}`);
            }
        });
    }
    public go(elem): void {
        window.scroll({       // 1
            top: document
                .querySelector(elem)
                .offsetTop - 150,       // 2
            left: 0,
            behavior: 'smooth'// 3
        });
    }
}
