import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-evento',
    templateUrl: './evento.component.html',
    styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit, OnDestroy {
    public location = false;
    constructor( private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle('Evento - Greenhouse');
        document.getElementById('main-nav').classList.add('event-page');

        window.scroll({       // 1
            top: 50,       // 2
            left: 0,
            behavior: 'smooth'// 3
        });
    }

    ngOnDestroy(): void {
        document.getElementById('main-nav').classList.remove('event-page');
    }
}
