<template>
  <div>
    <p>Please select a User</p>
    <hr>
    <ul class="list-group">
      <router-link
          v-for="(user, i) in users"
          tag="li"
          :to="`/user/${user}`"
          class="list-group-item"
          style="cursor: pointer"
          :key="user"
      >
        User {{ user }}
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: [1, 2, 3, 4]
      }
    }
  }
</script>