import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Tabulator from 'tabulator-tables';

@Component({
  selector: 'app-tabulator-demo',
  template: `<div #table></div>`,
  styleUrls: ['./tabulator-demo.component.css']
})
export class TabulatorDemoComponent implements OnInit {
  @ViewChild('table', { static: true }) tableRef!: ElementRef;
  table!: Tabulator;

  ngOnInit() {
    this.table = new Tabulator(this.tableRef.nativeElement, {
      height: '400px',
      layout: 'fitColumns',
      columns: [
        { title: 'ID', field: 'id', editor: 'input' },
        { title: 'Name', field: 'name', editor: 'input' },
        { 
          title: 'Status', 
          field: 'status', 
          editor: 'select', 
          editorParams: { values: ['active', 'inactive'] } 
        },
        {
          title: 'Action',
          field: 'action',
          formatter: (cell) => {
            const rowData = cell.getRow().getData();
            const disabled = rowData.status === 'inactive' ? 'disabled' : '';

            return `<button class="btn-action" ${disabled}>Click Me</button>`;
          },
          cellClick: (e, cell) => {
            const rowData = cell.getRow().getData();
            if (rowData.status !== 'inactive') {
              alert(`Button clicked for ${rowData.name}`);
            }
          },
        }
      ],
      data: [
        { id: 1, name: 'John', status: 'active' },
        { id: 2, name: 'Doe', status: 'inactive' },
        { id: 3, name: 'Jane', status: 'active' }
      ],
      cellEdited: (cell) => {
        const row = cell.getRow();
        row.update({ ...row.getData() }); // Force re-render of the row
      }
    });
  }
}
