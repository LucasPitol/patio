import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class FilterService {

    filter: any;

    @Output() applyFilter: EventEmitter<any> = new EventEmitter();

    storeFilter(filter)
    {
        this.filter = filter;

        this.applyFilter.emit(filter);
    }
}