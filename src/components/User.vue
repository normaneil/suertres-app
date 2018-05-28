<script>
export default {
  name: 'User',
  props: ['user']
}
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Administrator </strong>
        </p>
        <p><a href="#">{{ user.name }}</a></p>
      </div>
    </div>
</footer>
</template>

<style scoped>
.footer {
  border-top:#eeeeee solid 1px;
}
</style>
