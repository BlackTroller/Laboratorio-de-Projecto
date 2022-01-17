import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface CardsTableItem {
  id: number;
  value: number;
  description: string;
  imgpath: string;
  deckName: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CardsTableItem[] = [
  {id: 1, value: 20, description: 'Hydrogen', imgpath: 'xd', deckName: 'xD'},
  {id: 2, value: 20,description: 'Helium', imgpath: 'xd', deckName: 'xD'},
  {id: 3, value: 20,description: 'Lithium', imgpath: 'xd', deckName: 'xD'},
  {id: 4, value: 20,description: 'Beryllium', imgpath: 'xd', deckName: 'xD'},
  {id: 5, value: 20,description: 'Boron', imgpath: 'xd', deckName: 'xD'},
  {id: 6, value: 20,description: 'Carbon', imgpath: 'xd', deckName: 'xD'},
  {id: 7, value: 20,description: 'Nitrogen', imgpath: 'xd', deckName: 'xD'},
  {id: 8, value: 20,description: 'Oxygen', imgpath: 'xd', deckName: 'xD'},
  {id: 9, value: 20,description: 'Fluorine', imgpath: 'xd', deckName: 'xD'},
  {id: 10, value: 20,description: 'Neon', imgpath: 'xd', deckName: 'xD'},
  {id: 11, value: 20,description: 'Sodium', imgpath: 'xd', deckName: 'xD'},
  {id: 12, value: 20,description: 'Magnesium', imgpath: 'xd', deckName: 'xD'},
  {id: 13, value: 20,description: 'Aluminum', imgpath: 'xd', deckName: 'xD'},
  {id: 14, value: 20,description: 'Silicon', imgpath: 'xd', deckName: 'xD'},
  {id: 15, value: 20,description: 'Phosphorus', imgpath: 'xd', deckName: 'xD'},
  {id: 16, value: 20,description: 'Sulfur', imgpath: 'xd', deckName: 'xD'},
  {id: 17, value: 20,description: 'Chlorine', imgpath: 'xd', deckName: 'xD'},
  {id: 18, value: 20,description: 'Argon', imgpath: 'xd', deckName: 'xD'},
  {id: 19, value: 20,description: 'Potassium', imgpath: 'xd', deckName: 'xD'},
  {id: 20, value: 20,description: 'Calcium', imgpath: 'xd', deckName: 'xD'},
];

/**
 * Data source for the CardsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CardsTableDataSource extends DataSource<CardsTableItem> {
  data: CardsTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CardsTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: CardsTableItem[]): CardsTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CardsTableItem[]): CardsTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.description, b.description, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
