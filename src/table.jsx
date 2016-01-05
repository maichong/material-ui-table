/**
 * table.jsx
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-01-05
 * @author Liang <liang@maichong.it>
 */

'use strict';

import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

const UITable = React.createClass({

  propTypes: {
    className: React.PropTypes.string,
    //... http://www.material-ui.com/#/components/table
    header: React.PropTypes.object,
    body: React.PropTypes.object,
    footer: React.PropTypes.string,
    title: React.PropTypes.string,
    columns: React.PropTypes.array,
    data: React.PropTypes.array,
  },

  render(){

    let {title,header,body,footer,columns,data,...other}=this.props;
    columns = columns || [];
    data = data || [];

    let titleElement = title ? (
      <TableRow>
        <TableHeaderColumn colSpan={columns.length} style={{textAlign: 'center'}}>{title}</TableHeaderColumn>
      </TableRow>
    ) : null;

    let headerRowElement = (
      <TableRow>
        {
          columns.map((col,index)=><TableHeaderColumn
            key={index}
            columnNumber={col.columnNumber}
            tooltip={col.tooltip}
            tooltipStyle={col.tooltipStyle}
            style={col.style}
          >{col.label}</TableHeaderColumn>)
          }
      </TableRow>
    );

    let footerElement = footer && typeof footer == 'string' ? (
      <TableFooter>
        <TableRow>
          <TableRowColumn colSpan={columns.length} style={{textAlign: 'center'}}>{footer}</TableRowColumn>
        </TableRow>
      </TableFooter>
    ) : null;

    return (
      <Table {...other} >
        <TableHeader {...header}>
          {titleElement}
          {headerRowElement}
        </TableHeader>
        <TableBody {...body}>
          {
            data.map((r,index)=>{
              let cols=[];
              columns.forEach(col=>{
                let value=r[col.key]||null;
                cols.push(<TableRowColumn key={col.key}>{value}</TableRowColumn>);
                });
              return <TableRow
                key={index}
                displayBorder={r._displayBorder}
                hoverable={r._hoverable}
                rowNumber={r._rowNumber}
                selectable={r._selectable}
                selected={r._selected}
                striped={r._striped}
                style={r._style}
              >
                {cols}
              </TableRow>
              })
            }
        </TableBody>
        {footerElement}
      </Table>
    );
  }
});

export default UITable;
