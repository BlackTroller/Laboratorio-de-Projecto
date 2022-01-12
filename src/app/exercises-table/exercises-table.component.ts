import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ExercisesTableDataSource, ExercisesTableItem } from './exercises-table-datasource';

@Component({
  selector: 'app-exercises-table',
  templateUrl: './exercises-table.component.html',
  styleUrls: ['./exercises-table.component.css']
})
export class ExercisesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ExercisesTableItem>;
  dataSource: ExercisesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'edit'];

  constructor() {
    this.dataSource = new ExercisesTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
