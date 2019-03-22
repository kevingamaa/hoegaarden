import { Component, OnInit, HostListener,  Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    animations: [
        trigger('navEffect', [
            state('close', style({
                transform: 'translate(0, -200px)',
                opacity: 0
            })),
            state('open', style({
                transform: 'translate(0, 0)',
                opacity: 1
            })),
            transition('close => open', [
                animate('100ms 0.5s')
            ])
        ])
    ]
})
export class NavComponent implements OnInit {
    public navbar = 'nav-transparent';
    public animation = 'close';
    public showNav = '';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        setTimeout(() => {
            this.animation = 'open';
        }, 100);
    }

    @HostListener('window:scroll', ['$event'])
    doSomething(event) {
        if (600 <= window.pageYOffset) {
            this.navbar = 'bg-main fixed-top effect-down navbar-main shadow-sm';
        } else {
            this.navbar = 'nav-transparent';
        }
    }


    public show(): void {
        if ( this.showNav.length > 0) {
            this.showNav = '';
        } else {
            this.showNav = 'show';
        }
    }
}
