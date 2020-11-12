<template>
  <div class="game-page">
    <h1>Game Page</h1>
    <div class="container mt-5">
      <div class="row">
        <div class="col-6">
          <div class="player-list">
            <div class="card" widht="">
              <div class="card-body">
                <div class="row">
                  <div class="col-2">
                    <img class="avatar" :src="profiles.results[0].picture.thumbnail" alt="">
                  </div>
                  <div class="col-3">
                    <p>{{ profiles.results[0].name.first }}</p>
                    <p>100 point</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <p class="text-center">Question</p>
            <p>Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?</p>
            <form action="">
              <div class="row">
                <div class="col-6">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Alan Sugar</label>
                </div>
                </div>
                <div class="col-6">
                  <div class="form-check ml-5">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Donald Trump</label>
                </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Donald Trump</label>
                </div>
                </div>
                <div class="col-6">
                  <div class="form-check ml-5">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Donald Trump</label>
                  </div>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamePage',
  methods: {
    fetchProfile () {
      this.$store.dispatch('fetchProfile')
    }
  },
  computed: {
    profiles () {
      return this.$store.state.profiles
    }
  },
  created () {
    this.fetchProfile()
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  .avatar {
    border-radius: 50%;
  }
</style>
