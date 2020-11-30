import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: Array<any>
}

export default (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')

  res.status(200).json({
    data: [
      {
        id: 1,
        pid: 0,
        title: '一级',
        to: '/#1',
      },
      {
        id: 1121,
        pid: 1,
        title: '一级子级1',
        to: '/#2',
      },
      {
        id: 11211,
        pid: 1121,
        title: '一级孙级1',
        to: '/#2',
      },
      {
        id: 2,
        pid: 1,
        title: '二级1',
        to: '/#1-1',
      },
      {
        id: 2221,
        pid: 2,
        title: '2级孙级1',
        to: '/#2',
      },
      {
        id: 3,
        pid: 1,
        title: '二级2',
        to: '/#1-2',
      },
      {
        id: 4,
        pid: 1,
        title: '二级3',
        to: '/#1-3',
      },
      {
        id: 5,
        pid: 0,
        title: '一级2',
        to: '/#2',
      },
      {
        id: 6,
        pid: 5,
        title: '二级2',
        to: '/#2-1',
      },
      {
        id: 8,
        pid: 5,
        title: '二级3',
        to: '/#2-2',
      },
      {
        id: 7,
        pid: 6,
        title: '三级1',
        to: '/#3-1',
      },
    ]
  })
}
