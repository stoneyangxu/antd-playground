

const menus = {
  defaultSelectedKeys: ['1'],
  subMenus: [
    {
      key: 'sub1',
      title: 'Navigation One',
      icon: 'mail',
      items: [
        {
          key: '1',
          title: 'Todos',
          route: '/todos',
        },
        {
          key: '2',
          title: 'Option 2',
        },
        {
          key: '3',
          title: 'Option 3',
        },
      ],
    },
    {
      key: 'sub2',
      title: 'Navigation Two',
      icon: 'appstore',
      items: [
        {
          key: '4',
          title: 'Option 4',
        },
        {
          key: '5',
          title: 'Option 5',
        },
        {
          key: '6',
          title: 'Option 6',
        },
      ],
    },
  ],
};

export default {
  namespace: 'menu',
  state: {
    menus,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
};
