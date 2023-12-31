import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://imca.store/',
});
export const loginoutApi = async (data) => {
  try {
    const response = await instance.post('/api/v1/users/Loginout/', data);
    return response;
  } catch (error) {
    throw error;
  }
};
export const logoutApi = async () => {
  try {
    const response = await instance.delete('/api/v1/users/Loginout/', {
      withCredentials: true,
    });
    console.log(response, '로그아웃요청');
    return response;
  } catch (error) {
    throw error;
  }
};
// GET 요청 보내기
// instance
//   .get('/endpoint')
//   .then((response) => {
//     console.log('응답 데이터:', response.data);
//   })
//   .catch((error) => {
//     console.error('에러 발생:', error);
//   });

// // POST 요청 보내기
// const postData = {
//   key: 'value',
// };

// instance
//   .post('/endpoint', postData)
//   .then((response) => {
//     console.log('응답 데이터:', response.data);
//   })
//   .catch((error) => {
//     console.error('에러 발생:', error);
//   });
