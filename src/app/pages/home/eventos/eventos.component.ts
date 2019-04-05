import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { PagerService } from '../../../services/pager.service';
import { CmsService } from '../../../services/cms.service';


@Component({
    selector: 'app-eventos',
    templateUrl: './eventos.component.html',
    styleUrls: ['./eventos.component.css'],
    providers: [PagerService, CmsService]
})
export class EventosComponent implements OnInit {
    public events;

    // pager object
    public pager: any = {};

    // paged items
    public pagedItems: any[];

    public activeEvents = '';

    public navDevice: string;
    public load: boolean;

    public perPage: any;

    constructor(
        public breakpointObserver: BreakpointObserver,
        private pagerService: PagerService,
        private cmsService: CmsService
    ) { }

    ngOnInit() {

        this.breakpointObserver
            .observe(['(max-width: 992px)'])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.perPage = 3;
                    this.activeEvents = '';
                    this.requisition();
                    this.navDevice = 'mobile-nav';
                } else {
                    this.perPage = 8;
                    this.activeEvents = '';
                    this.requisition();
                    this.navDevice = 'desktop-nav';
                }
            });

        // console.log(this.pagerService);
    }
    setPage(page: number, total: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(total, page,  this.perPage);

        // get current page of items
        this.pagedItems = this.events.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    public changePage(page): void {
        if ( this.activeEvents !== '' && this.activeEvents !== null) {
            this.requisition([['categories.name', this.activeEvents]], page );
            // console.log('foi no if');
        } else {
            this.requisition(null, page );
            // console.log('foi no elese');
        }
        // window.scroll({       // 1
        //     top: document
        //     .querySelector('#events')
        //     .offsetTop,       // 2
        //     left: 0,
        //     behavior: 'smooth'// 3
        // });
        // console.log(this.activeEvents)
    }

    private requisition(filter?, page?): void {
        // console.log(this.perPage)
        this.load = true;
        this.events = [];
        this.cmsService.get(filter ? filter : null, this.perPage, page).subscribe((response: any) => {
            this.events = response.data;
            this.events.map((event: any ) => {
                event.images = JSON.parse(event.images);
                event.thumbs = JSON.parse(event.thumbs);
            });
            // console.log(response);
            this.setPage(response.current_page, response.total);
            this.load = false;
        });
    }




    public changeCategory(category: string): void {

        this.activeEvents = category;

        if (category !== undefined && category !== '') {
            this.requisition([['categories.name', category]]);
        } else {
            this.requisition();
        }

    }
}
