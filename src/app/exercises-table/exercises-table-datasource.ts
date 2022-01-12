import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ExercisesTableItem {
  id: number;
  name: string;
  description: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ExercisesTableItem[] = [
  {id: 1, name: 'Hydrogen', description: 'lorem Ipsum'},
  {id: 2, name: 'Helium', description: 'lorem Ipsum'},
  {id: 3, name: 'Lithium', description: 'lorem Ipsum'},
  {id: 4, name: 'Beryllium', description: 'lorem Ipsum'},
  {id: 5, name: 'Boron', description: 'lorem Ipsum'},
  {id: 6, name: 'Carbon', description: 'lorem Ipsum'},
  {id: 7, name: 'Nitrogen', description: 'lorem Ipsum'},
  {id: 8, name: 'Oxygen', description: 'lorem Ipsum'},
  {id: 9, name: 'Fluorine', description: 'lorem Ipsum'},
  {id: 10, name: 'Neon', description: 'lorem Ipsum'},
  {id: 11, name: 'Sodium', description: 'lorem Ipsum'},
  {id: 12, name: 'Magnesium', description: 'lorem Ipsum'},
  {id: 13, name: 'Aluminum', description: 'lorem Ipsum'},
  {id: 14, name: 'Silicon', description: 'lorem Ipsum'},
  {id: 15, name: 'Phosphorus', description: 'lorem Ipsum'},
  {id: 16, name: 'Sulfur', description: 'lorem Ipsum'},
  {id: 17, name: 'Chlorine', description: 'lorem Ipsum'},
  {id: 18, name: 'Argon', description: 'lorem Ipsum'},
  {id: 19, name: 'Potassium', description: 'lorem Ipsum'},
  {id: 20, name: 'Calcium', description: 'lorem Ipsum'},
];

/**
 * Data source for the ExercisesTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ExercisesTableDataSource extends DataSource<ExercisesTableItem> {
  data: ExercisesTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<ExercisesTableItem[]> {
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
  private getPagedData(data: ExercisesTableItem[]): ExercisesTableItem[] {
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
  private getSortedData(data: ExercisesTableItem[]): ExercisesTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
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
