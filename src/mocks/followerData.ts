export interface FollowerTypes {
  id: number;
  name: string;
  img: string;
  comment: number;
  like: number;
  likeStatus: boolean;
  createdAt: string;
}

export const FOLLOWER_DATA = [
  {
    id: 1,
    name: '김준호',
    img: '',
    comment: 5,
    like: 12,
    likeStatus: true,
    createdAt: '2024-12-23T10:00:00',
  },
  {
    id: 2,
    name: '이지은',
    img: '',
    comment: 3,
    like: 8,
    likeStatus: false,
    createdAt: '2024-12-23T10:00:00',
  },
  {
    id: 3,
    name: '박지혜',
    img: '',
    comment: 7,
    like: 15,
    likeStatus: true,
    createdAt: '2024-12-23T10:00:00',
  },
  {
    id: 4,
    name: '정준호',
    img: '',
    comment: 2,
    like: 4,
    likeStatus: false,
    createdAt: '2024-12-22T10:00:00',
  },
  {
    id: 5,
    name: '김민지',
    img: '',
    comment: 10,
    like: 20,
    likeStatus: true,
    createdAt: '2024-12-21T10:00:00',
  },
  {
    id: 6,
    name: '최지훈',
    img: '',
    comment: 6,
    like: 9,
    likeStatus: false,
    createdAt: '2024-12-20T10:00:00',
  },
  {
    id: 7,
    name: '오수연',
    img: '',
    comment: 4,
    like: 11,
    likeStatus: true,
    createdAt: '2024-10-14T10:00:00',
  },
  {
    id: 8,
    name: '김소영',
    img: '',
    comment: 8,
    like: 14,
    likeStatus: true,
    createdAt: '2024-08-13T10:00:00',
  },
  {
    id: 9,
    name: '정하영',
    img: '',
    comment: 1,
    like: 3,
    likeStatus: false,
    createdAt: '2023-12-12T10:00:00',
  },
  {
    id: 10,
    name: '이성민',
    img: '',
    comment: 9,
    like: 17,
    likeStatus: true,
    createdAt: '2023-12-11T10:00:00',
  },
];
