<template class="bg-dark">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin">後台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupons">優惠券列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/articles">文章列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">返回前台</router-link>
          </li>
          <li>
            <a class="nav-link" @click.prevent="signout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-if="isLogin"></router-view>
</template>
<script>
export default {
  data () {
    return {
      url: process.env.VUE_APP_API,
      path: process.env.VUE_APP_PATH,
      isLogin: false
    }
  },
  methods: {
    checkAdmin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)otisToken\s*\=\s*([^;]*).*$)|^.*$/, '$1') // eslint-disable-line
      this.$http.defaults.headers.common['Authorization'] = token // eslint-disable-line
      if (token) {
        this.$http.post(`${this.url}/api/user/check`)
          .then(res => {
            // this.getProducts()
            console.log('登入成功')
            this.isLogin = true
          })
          .catch(err => {
            console.dir(err)
            this.isLogin = false
            this.$router.push('/Login')
          })
      } else {
        alert('尚未登入')
        this.isLogin = false
        this.$router.push('/Login')
      }
    },
    signout () {
      document.cookie = 'otisToken=;expires=;'
      alert('已登出後台')
      this.$router.push('/login')
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
