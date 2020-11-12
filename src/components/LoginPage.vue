<template>
  <div class="login-page mt-5">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12">
          <div class="card">
            <div class="card-body" id="card-login">
              <div class="row">
                <div class="col-6">
                  <div class="card-image">
                    <h3>LOGIN PAGE</h3>
                  </div>
                </div>
                <div class="col-6 mt-5">
                  <form action="">
                    <div class="card card-form">
                      <div class="card-body">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="username">
                        </div>
                      </div>
                    </div>
                    <button class="btn mt-5" type="submit">LOGIN</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
  .card{
      border-radius: 0;
      border: none;
  }

  #card-login {
    background-image: url('../assets/leyy-71SHXwBLp5w-unsplash.jpg');
    background-size: auto;
    background-repeat: no-repeat;
  }

  #card-login::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to top, rgba(34, 47, 62,.9), rgba(200, 214, 229,.3));
  }

  .card-image {
    color: white;
    height: 300px;
    background-image: url('../assets/leyy-71SHXwBLp5w-unsplash.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .card-image h3{
    padding: 30px;
    letter-spacing: 10px;
  }

  .card-form {
    background-color: transparent;
  }

  .btn{
    color: white;
    background-color: rgba(255, 107, 107,1.0);
    border-radius: 0;
    letter-spacing: 5px;
  }
</style>
