
import http from '../request'
// 查询用户信息
export const getUserInfoAsync: any = (email: string) => {
    return http.request({
      url: `/huajian/users/user/${email}`,
      method: 'get'
    });
  };