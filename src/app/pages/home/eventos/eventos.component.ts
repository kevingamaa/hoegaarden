import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { PagerService } from 'src/app/services/page.service';

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
            title: 'Titulo do evento',
            description: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO',
            images: [{ url: './assets/desktop/layout/foto-evento-desktop.png' }],
            created_at: '19-02-19'
        },
        {
            id: 2,
            title: 'Titulo do evento',
            description: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO',
            images: [{ url: './assets/desktop/layout/foto-evento-desktop.png' }],
            created_at: '19-02-19'
        },
        {
            id: 3,
            title: 'Titulo do evento',
            description: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO',
            images: [{ url: './assets/desktop/layout/foto-evento-desktop.png' }],
            created_at: '19-02-19'
        },
        {
            id: 4,
            title: 'Titulo do evento',
            description: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO',
            images: [{ url: './assets/desktop/layout/foto-evento-desktop.png' }],
            created_at: '19-02-19'
        }
    ];
    // array of all items to be paged
    private allItems = this.events;

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    constructor(public breakpointObserver: BreakpointObserver, private pagerService: PagerService) { }

    ngOnInit() {
        this.mediaMatch();
        // console.log(this.pagerService);
        this.setPage(1);
    }
    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(15, page, 8);
        console.log(this.pager)
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    private mediaMatch(): any {
        this.breakpointObserver
        .observe(['(max-width: 992px)'])
        .subscribe((state: BreakpointState) => {
            if (state.matches) {
                this.requisition(3);
            } else {
                this.requisition(8);
            }

        });
    }

    private requisition(qtd: number): void {
        // console.log(qtd);
    }

}
