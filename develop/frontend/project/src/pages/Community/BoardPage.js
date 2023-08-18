import Category from '../../components/CommunityPage/Category';
import React from 'react';
import styles from './BoardPage.module.css';
import Pages from '../../components/CommunityPage/Pages';
import Header from '../../components/CommunityPage/Header';

export const dataList = [
  {
    id: 1,
    user: {
      name: 'cong',
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '1번째 제목',
    content: '온라인 코딩테스트1',
    date: '2023-08-01',
    views: 10,
    like_num: 1,
    reviews: 10,
  },
  {
    id: 2,
    user: {
      name: 'du',
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '2번째 제목',
    content: '온라인 코딩테스트2',
    date: '2023-08-02',
    views: 20,
    like_num: 2,
    reviews: 20,
  },
  {
    id: 3,
    user: {
      name: 'zzng',
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '3번째 제목',
    content: '온라인 코딩테스트3',
    date: '2023-08-03',
    views: 30,
    like_num: 3,
    reviews: 30,
  },
  {
    id: 3,
    user: {
      name: '타마마',
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '4번째 제목',
    content: '온라인 코딩테스트3',
    date: '2023-08-03',
    views: 30,
    like_num: 3,
    reviews: 30,
  },
  {
    id: 3,
    user: {
      name: '케로로',
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '5번째 제목',
    content: '온라인 코딩테스트3',
    date: '2023-08-03',
    views: 30,
    like_num: 3,
    reviews: 30,
  },
  {
    id: 4,
    user: {
      name: '쿠로로',
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '6번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 5,
    user: {
      name: '기로로',
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '7번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 6,
    user: {
      name: '도로로',
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '8번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 7,
    user: {
      name: '도로로',
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '9번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 8,
    user: {
      name: 1,
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '10번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 9,
    user: {
      name: 1,
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '11번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 10,
    user: {
      name: 1,
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '12번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 11,
    user: {
      name: 1,
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '13번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 12,
    user: {
      name: 1,
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '14번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 13,
    user: {
      name: 1,
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '15번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 14,
    user: {
      name: 1,
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '16번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 15,
    user: {
      name: 1,
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '17번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 16,
    user: {
      name: 1,
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '18번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
  {
    id: 4,
    user: {
      name: 1,
      profileImg: 'https://festivallife.kr/common/img/default_profile.png',
    },
    img: 'https://i.pinimg.com/474x/12/10/74/121074634270ef317603a02120b1f2a9.jpg',
    title: '19번째 제목',
    content: '온라인 코딩테스트4',
    date: '2023-08-04',
    views: 40,
    like_num: 4,
    reviews: 40,
  },
];

const BoardPage = () => {
  return (
    <div className={styles.BoardPage}>
      <Category />
      <Header />
      <Pages />
    </div>
  );
};

export default BoardPage;