<template>
  <div class="waiting-room">
    <h1>Waiting Room</h1>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="card">
            <div class="card-body">
              <h5
                class="card-title"
                style="font-family: 'Comic Sans MS', Comic Sans MS"
              >
                Score
              </h5>
              <h1
                class="display-1"
                style="font-family: 'Comic Sans MS', Comic Sans MS"
              >
                0
              </h1>
              <h3
                class="diplay-5"
                style="font-family: 'Comic Sans MS', Comic Sans MS"
              >
                player-name
              </h3>
            </div>
          </div>
        </div>
      </div>
       <button class="btn mt-5" type="submit" @click.prevent="play">PLAY</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaitingRoom",
  methods: {
    play() {
      
    }
  }
};
</script>

<style>
.btn{
    color: white;
    background-color: rgba(255, 107, 107,1.0);
    border-radius: 0;
    letter-spacing: 5px;
  }
</style>
