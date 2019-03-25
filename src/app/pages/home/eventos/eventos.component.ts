import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { PagerService } from '../../../services/pager.service';

@Component({
    selector: 'app-eventos',
    templateUrl: './eventos.component.html',
    styleUrls: ['./eventos.component.css'],
    providers: [PagerService]
})
export class EventosComponent implements OnInit {
    public events = [
        {
            id: 1,
            title: 'BRUNCH WEEKEND',
            description: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO',
            images: [{ url: './assets/desktop/layout/foto-evento-desktop.png' }],
            created_at: '19-02-19'
        },
        {
            id: 2,
            title: 'BRUNCH WEEKEND',
            description: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO',
            images: [{ url: './assets/desktop/layout/foto-evento-desktop.png' }],
            created_at: '19-02-19'
        },
        {
            id: 3,
            title: 'BRUNCH WEEKEND',
            description: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO',
            images: [{ url: './assets/desktop/layout/foto-evento-desktop.png' }],
            created_at: '19-02-19'
        },
        {
            id: 4,
            title: 'BRUNCH WEEKEND',
            description: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO',
            images: [{ url: './assets/desktop/layout/foto-evento-desktop.png' }],
            created_at: '19-02-19'
        }
    ];
    // array of all items to be paged
    private allItems = this.events;

    // pager object
    public pager: any = {};

    // paged items
    public pagedItems: any[];

    public activeEvents = {
        todos: true,
        entretenimento: false,
        gastronomia: false,
        botanica: false
    };

    public navDevice: string;

    constructor(public breakpointObserver: BreakpointObserver, private pagerService: PagerService) { }

    ngOnInit() {
        this.mediaMatch();
        // console.log(this.pagerService);
        this.setPage(1);
    }
    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(15, page, 8);
        // console.log(this.pager);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    private mediaMatch(): any {
        this.breakpointObserver
            .observe(['(max-width: 992px)'])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.requisition(3);
                    this.navDevice = 'mobile-nav';
                } else {
                    this.requisition(8);
                    this.navDevice = 'desktop-nav';
                }

            });
    }

    private requisition(qtd: number): void {
        // console.log(qtd);
    }

    public changeCategory(category: string): void {
        this.activeEvents.todos = false;
        this.activeEvents.entretenimento = false;
        this.activeEvents.gastronomia = false;
        this.activeEvents.botanica = false;
        switch (category) {
            case 'entretenimento':
                this.activeEvents.entretenimento = true;
                break;
            case 'gastronomia':
                this.activeEvents.gastronomia = true;
                break;
            case 'botanica':
                this.activeEvents.botanica = true;
                break;
            default:
                this.activeEvents.todos = true;
                break;
        }
    }
}
