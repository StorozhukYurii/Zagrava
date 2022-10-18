export const DATA_LIST_TAB = [
  {
    status: 'All',
    id: '1',
  },
  {
    status: 'Price',
    id: '2',

    type:[
      {fromhigher: 'from a higher price'},
      {fromlower: 'from a lower price'},
    ],
    typer: ['from a higher price', 'from a lower price'],
  },
  {
    status: 'Type of product',
    id: '3',

    type: [
      {celticgod: 'Celtic god'},
      {wicca: 'Wicca'},
      {scandinavian_god: 'Scandinavian god'},
      {sumerian: 'Sumerian'},
      {candelholders: 'Candel holders'},
      {ancientgreece: 'Ancient Greece'},
    ],
    typer: [
      'Celtic god',
      'Wicca',
      'Scandinavian god',
      'Sumerian',
      'Candel holders',
      'Ancient Greece',
    ],
  },
  {
    status: 'Material',
    id: '4',

    type: [{oak: 'oak'}, {pine: 'pine'}],
    typer: ['oak', 'pine'],
  },
  {
    status: 'Rating',
    id: '5',
    type: [
      {fromhigher: 'from a higher rating'},
      {fromlower: 'from a lower rating'},
    ],
    typer: ['from a higher rating', 'from a lower rating'],
  },
];
