<template>
  <div id="room">
      <Players></Players>
      <Question></Question>
  </div>
</template>

<script>
import Players from '../components/Players'
import Question from '../components/Question'
export default {
  name: 'Room',
  components: {
    Players,
    Question
  }
}
</script>

<style>
</style>
