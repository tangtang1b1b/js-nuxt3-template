export default {
  menu: [
    {
      name: '關於泰成',
      url: '',
      children: [
        { name: '公司介紹', url: '/about' },
        { name: '公司活動', url: '/activity' },
      ],
    },
    {
      name: '生產廠區',
      url: '',
      children: [
        { name: '總公司-青埔廠', url: '/contact/qingpu' },
        { name: '大園廠', url: '/contact/dayuan' },
        { name: '觀音一廠', url: '/contact/guanyin01' },
        { name: '觀音二廠', url: '/contact/guanyin02' },
      ],
    },
    { name: '工程實績', url: '/projects' },
    { name: '聯絡我們', url: '/contact' },
  ],
  footerMenu: [
    {
      name: '關於泰成',
      url: '',
      children: [
        { name: '公司介紹', url: '/about' },
        { name: '公司活動', url: '/activity' },
      ],
    },
    {
      name: '生產廠區',
      type: 'end',
      url: '',
      children: [
        { name: '總公司-青埔廠', url: '/contact/qingpu' },
        { name: '大園廠', url: '/contact/dayuan' },
        { name: '觀音一廠', url: '/contact/guanyin01' },
        { name: '觀音二廠', url: '/contact/guanyin02' },
      ],
    },
    {
      name: '工程實績',
      url: '',
      children: [{ name: '工程實績', url: '/projects' }],
    },
    {
      name: '聯絡我們',
      url: '',
      children: [
        { name: '聯絡我們', url: '/contact' },
        { name: '徵才資訊', url: 'https://www.104.com.tw/company/jv7hp88?jobsource=n104bank1', target: '_blank'  },
      ],
    },
  ],
}
