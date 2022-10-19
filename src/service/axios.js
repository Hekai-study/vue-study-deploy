// 请求封装
import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUserStore } from 'store'

// 创建axiso实例
const service = axios.create({
  // 在请求地址前面加上baseURL
  baseURL: import.meta.env.VITE_BASE_API,
  // 当发送跨域请求时携带cookie
  // withCredentials: true,
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 指定请求令牌
    console.log('请求拦截');
    // 获取仓库数据
    const userStore = useUserStore()
    console.log(userStore);
    // token也可能存在session中
    if (userStore.token) {
      console.log('userStore-------------', userStore);
      // 自定义令牌的字段名为X-Token，根据咱们后台再做修改
      config.headers["X-Token"] = userStore.token;
    }
    // config.headers["X-Token"] = "my token";
    return config;
  },
  error => {
    // 请求错误的统一处理
    console.log(error); // for debug
    return Promise.reject(error);
  }
)
// 响应拦截
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * 通过判断状态码统一处理响应，根据情况修改
   * 同时也可以通过HTTP状态码判断请求结果
   */
  response => {
    const res = response.data;

    // 如果状态码不是20000则认为有错误
    if (res.code !== 20000) {
      ElMessage.error({
        message: res.message || "Error",
        duration: 5 * 1000,
      });

      // 50008: 非法令牌; 50012: 其他客户端已登入; 50014: 令牌过期;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 重新登录
        ElMessageBox.confirm("您已登出, 请重新登录", "确认", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          console.log('跳转');
          // 跳转到登录页面
          // 这里重置token，会自动跳转到登录页面，然后刷新页面
          // store.dispatch("user/resetToken").then(() => {
          //   location.reload();
          // });
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    ElMessage({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
)

export default service
