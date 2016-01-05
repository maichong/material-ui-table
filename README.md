#[material-ui-table](https://github.com/maichong/material-ui-table)

## Installation

material-ui-table is available as an [npm package](https://www.npmjs.org/package/material-ui-table).

```sh
npm i material-ui-table
```

## Usage

```js
import React from 'react';
import Table from 'material-ui-table';

export default class MyAwesomeReactComponent extends React.Component  {
  constructor(props) {
    super(props);
  }
  render(){
    let columns=[
      {key:'id',label:'ID'},
      {key:'title',label:'Title'},
      {key:'link',label:'Link'},
    ];
    let data=[{
      id:1,
      title:'React',
      link:<a href="https://github.com/facebook/react">React</a>,
      _selected:true, //Table Row Props
      _striped:false
    },{
      id:2,
      title:'Material UI',
      link:<a href="https://github.com/callemall/material-ui"/>Material UI</a>
    }];
    return (
      <Table
        columns={columns}
        data={data}
      />
    )
  }
}
```


## Props

header `object` Table Header Props

body `object` Table Body Props

title `string`

footer `string`

columns `array`

data `array`

...others [Table Props](http://www.material-ui.com/#/components/table)

## Contribute

* [Maichong Software](http://maichong.it)

* [Liang Xingchen](https://github.com/liangxingchen)

## License

This project is licensed under the terms of the MIT license
