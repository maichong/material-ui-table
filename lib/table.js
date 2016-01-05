/**
 * table.jsx
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-01-05
 * @author Liang <liang@maichong.it>
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _table = require('material-ui/lib/table/table');

var _table2 = _interopRequireDefault(_table);

var _tableBody = require('material-ui/lib/table/table-body');

var _tableBody2 = _interopRequireDefault(_tableBody);

var _tableFooter = require('material-ui/lib/table/table-footer');

var _tableFooter2 = _interopRequireDefault(_tableFooter);

var _tableHeader = require('material-ui/lib/table/table-header');

var _tableHeader2 = _interopRequireDefault(_tableHeader);

var _tableHeaderColumn = require('material-ui/lib/table/table-header-column');

var _tableHeaderColumn2 = _interopRequireDefault(_tableHeaderColumn);

var _tableRow = require('material-ui/lib/table/table-row');

var _tableRow2 = _interopRequireDefault(_tableRow);

var _tableRowColumn = require('material-ui/lib/table/table-row-column');

var _tableRowColumn2 = _interopRequireDefault(_tableRowColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var UITable = _react2.default.createClass({
  displayName: 'UITable',

  propTypes: {
    className: _react2.default.PropTypes.string,
    //... http://www.material-ui.com/#/components/table
    header: _react2.default.PropTypes.object,
    body: _react2.default.PropTypes.object,
    footer: _react2.default.PropTypes.string,
    title: _react2.default.PropTypes.string,
    columns: _react2.default.PropTypes.array,
    data: _react2.default.PropTypes.array
  },

  render: function render() {
    var _props = this.props;
    var title = _props.title;
    var header = _props.header;
    var body = _props.body;
    var footer = _props.footer;
    var columns = _props.columns;
    var data = _props.data;

    var other = _objectWithoutProperties(_props, ['title', 'header', 'body', 'footer', 'columns', 'data']);

    columns = columns || [];
    data = data || [];

    var titleElement = title ? _react2.default.createElement(
      _tableRow2.default,
      null,
      _react2.default.createElement(
        _tableHeaderColumn2.default,
        { colSpan: columns.length, style: { textAlign: 'center' } },
        title
      )
    ) : null;

    var headerRowElement = _react2.default.createElement(
      _tableRow2.default,
      null,
      columns.map(function (col, index) {
        return _react2.default.createElement(
          _tableHeaderColumn2.default,
          {
            key: index,
            columnNumber: col.columnNumber,
            tooltip: col.tooltip,
            tooltipStyle: col.tooltipStyle,
            style: col.style
          },
          col.label
        );
      })
    );

    var footerElement = footer && typeof footer == 'string' ? _react2.default.createElement(
      _tableFooter2.default,
      null,
      _react2.default.createElement(
        _tableRow2.default,
        null,
        _react2.default.createElement(
          _tableRowColumn2.default,
          { colSpan: columns.length, style: { textAlign: 'center' } },
          footer
        )
      )
    ) : null;

    return _react2.default.createElement(
      _table2.default,
      other,
      _react2.default.createElement(
        _tableHeader2.default,
        header,
        titleElement,
        headerRowElement
      ),
      _react2.default.createElement(
        _tableBody2.default,
        body,
        data.map(function (r, index) {
          var cols = [];
          columns.forEach(function (col) {
            var value = r[col.key] || null;
            cols.push(_react2.default.createElement(
              _tableRowColumn2.default,
              { key: col.key },
              value
            ));
          });
          return _react2.default.createElement(
            _tableRow2.default,
            {
              key: index,
              displayBorder: r._displayBorder,
              hoverable: r._hoverable,
              rowNumber: r._rowNumber,
              selectable: r._selectable,
              selected: r._selected,
              striped: r._striped,
              style: r._style
            },
            cols
          );
        })
      ),
      footerElement
    );
  }
});

exports.default = UITable;