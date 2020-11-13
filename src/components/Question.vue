<template>
  <div class="container bg-light col-6 pb-4 mb-5" >
    <div class="col-12 my-5">
      <h1 class="display-5" style="font-family: 'Comic Sans MS', Comic Sans MS">
        question
      </h1>
      <p>
        Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies
        owned by which famous entrepreneur?
      </p>
      <div class="container">
        <form action="">
          <div class="row">
            <div class="col-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Alan Sugar</label
                >
              </div>
            </div>
            <div class="col-6">
              <div class="form-check ml-5">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Donald Trump</label
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Donald Trump</label
                >
              </div>
            </div>
            <div class="col-6">
              <div class="form-check ml-5">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Donald Trump</label
                >
              </div>
            </div>
          </div>
          <button class="btn mt-5" type="submit" @click.prevent="play">
            Confirm
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card-scoreboard {
  background-color: #d6d2c4;
  padding-top: 40px;
  padding-bottom: 40px;
}
.question-box {
  padding-top: 70px;
  padding-bottom: 70px;
  height: 100px
}
.mb-5, .my-5 {
    margin-bottom: 1rem!important;
}
.btn{
    color: white;
    background-color: rgba(255, 107, 107,1.0);
    border-radius: 0;
    letter-spacing: 5px;
  }
</style>
