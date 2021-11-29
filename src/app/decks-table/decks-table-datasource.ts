import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DecksTableItem {
  deck: string;
  id: number;
  total: number;
  workout: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DecksTableItem[] = [
  {id: 1, deck: 'Hydrogen', total: 23, workout: 'Treino de braços'},
  {id: 2, deck: 'Helium', total: 23, workout: 'Treino de braços'},
  {id: 3, deck: 'Lithium', total: 23, workout: 'Treino de braços'},
  {id: 4, deck: 'Beryllium', total: 23, workout: 'Treino de braços'},
  {id: 5, deck: 'Boron', total: 23, workout: 'Treino de braços'},
  {id: 6, deck: 'Carbon', total: 23, workout: 'Treino de braços'},
  {id: 7, deck: 'Nitrogen', total: 23, workout: 'Treino de braços'},
  {id: 8, deck: 'Oxygen', total: 23, workout: 'Treino de braços'},
  {id: 9, deck: 'Fluorine', total: 23, workout: 'Treino de braços'},
  {id: 10, deck: 'Neon', total: 23, workout: 'Treino de braços'},
  {id: 11, deck: 'Sodium', total: 23, workout: 'Treino de braços'},
  {id: 12, deck: 'Magnesium', total: 23, workout: 'Treino de braços'},
  {id: 13, deck: 'Aluminum', total: 23, workout: 'Treino de braços'},
  {id: 14, deck: 'Silicon', total: 23, workout: 'Treino de braços'},
  {id: 15, deck: 'Phosphorus', total: 23, workout: 'Treino de braços'},
  {id: 16, deck: 'Sulfur', total: 23, workout: 'Treino de braços'},
  {id: 17, deck: 'Chlorine', total: 23, workout: 'Treino de braços'},
  {id: 18, deck: 'Argon', total: 23, workout: 'Treino de braços'},
  {id: 19, deck: 'Potassium', total: 23, workout: 'Treino de braços'},
  {id: 20, deck: 'Calcium', total: 23, workout: 'Treino de braços'},
];

/**
 * Data source for the DecksTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DecksTableDataSource extends DataSource<DecksTableItem> {
  data: DecksTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<DecksTableItem[]> {
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
  private getPagedData(data: DecksTableItem[]): DecksTableItem[] {
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
  private getSortedData(data: DecksTableItem[]): DecksTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'deck': return compare(a.deck, b.deck, isAsc);
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
