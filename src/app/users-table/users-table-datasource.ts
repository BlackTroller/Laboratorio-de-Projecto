import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface UsersTableItem {
  name: string;
  id: number;
  email: string;
  address: string;
  age: number;
  password: string;
  role: string;
  blocked: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: UsersTableItem[] = [
  {id: 1, name: 'Hydrogen', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 2, name: 'Helium', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 3, name: 'Lithium', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 4, name: 'Beryllium', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 5, name: 'Boron', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 6, name: 'Carbon', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 7, name: 'Nitrogen', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 8, name: 'Oxygen', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 9, name: 'Fluorine', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 10, name: 'Neon', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 11, name: 'Sodium', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 12, name: 'Magnesium', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 13, name: 'Aluminum', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 14, name: 'Silicon', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 15, name: 'Phosphorus', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 16, name: 'Sulfur', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 17, name: 'Chlorine', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 18, name: 'Argon', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 19, name: 'Potassium', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
  {id: 20, name: 'Calcium', email:'teste@gmail.com', address: 'rua 123 do Porto', age: 20, password: '*********', role: 'user', blocked: 'false'},
];

/**
 * Data source for the UsersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersTableDataSource extends DataSource<UsersTableItem> {
  data: UsersTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<UsersTableItem[]> {
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
  private getPagedData(data: UsersTableItem[]): UsersTableItem[] {
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
  private getSortedData(data: UsersTableItem[]): UsersTableItem[] {
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
