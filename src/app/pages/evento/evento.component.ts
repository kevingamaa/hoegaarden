import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CmsService } from '../../services/cms.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-evento',
    templateUrl: './evento.component.html',
    styleUrls: ['./evento.component.css'],
    providers: [CmsService]
})
export class EventoComponent implements OnInit, OnDestroy {
    public location = false;
    public event: any;
    constructor(
        private titleService: Title,
        private cmsService: CmsService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.titleService.setTitle('Evento - Greenhouse');
        document.getElementById('main-nav').classList.add('event-page');

        window.scroll({       // 1
            top: 50,       // 2
            left: 0,
            behavior: 'smooth'// 3
        });

        this.requisition();
    }

    private requisition(): void {
        // this.cmsService.find()
        this.route.params.subscribe((parans: any) => {
            this.cmsService.find(parans.id).subscribe((event: any) => {
                // console.log(event);
                this.event = event;
                this.event.images = JSON.parse(event.images);
            });
        });
    }

    ngOnDestroy(): void {
        document.getElementById('main-nav').classList.remove('event-page');

    }
}
