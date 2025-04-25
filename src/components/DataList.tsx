export interface IDataList {
  id: number;
  title:string;
  status:string;
  createdAt:string;
  author:string;
}
export const DataList: IDataList[] = [
  {
    id: 1,
    title: 'Bug: Component not rendering',
    status: 'Open',
    createdAt: '2024-03-01',
    author: 'alice',
  },
  {
    id: 2,
    title: 'Feature: Dark mode support',
    status: 'Closed',
    createdAt: '2024-02-25',
    author: 'bob',
  },
  {
    id: 3,
    title: 'Refactor: Improve performance',
    status: 'Open',
    createdAt: '2024-03-05',
    author: 'charlie',
  },
  {
    id: 4,
    title: 'Bug: Memory leak in useEffect',
    status: 'Open',
    createdAt: '2024-02-20',
    author: 'david',
  },
  {
    id: 5,
    title: 'UI: Improve button styling',
    status: 'Closed',
    createdAt: '2024-01-15',
    author: 'eve',
  },
];
