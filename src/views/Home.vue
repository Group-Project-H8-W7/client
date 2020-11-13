<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <span class="outline end-right">Quiz!</span>
          <span class="outline end-left">Game</span>
          <div class="mt-5">
            <label for="username" class="di">Enter Your Name</label><br />
            <input type="text" v-model="username" /> <br />
            <button class="btn mt-5" type="submit" @click.prevent="play">GET IN</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    play () {
      localStorage.username = this.username
      this.$router.push({ path: '/waitingRoom' })
    }
  }
}
</script>
<style scoped>
span {
  margin: 0;
  padding: 0;
}
.end-left {
  margin-left: -180px;
}
.end-right {
  margin-right: -117.5px;
  margin-left: 0px;
}
.outline {
  position: absolute;
  top: -54px;
}
.outline {
  color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: orange;
  font-size: 74px;
  font-family: "Arvo", serif;
}
.di {
  color: red;
  animation-name: example;
  animation-duration: 4s;
  font-family: "ink free", ink free;
  font-size: 30px;
}
@keyframes example {
  0% {
    color: red;
  }
  25% {
    color: yellow;
  }
  50% {
    color: blue;
  }
  100% {
    color: green;
  }
}
</style>
