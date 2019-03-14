<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded had ID: {{$route.params.id}}</p>
    <router-link tag="button" class="btn btn-warning"
                 :to="{ name: 'userEdit' , params: { id: $route.params.id }, query: { local: 'ru' } }">
      Edit user
    </router-link>
  </div>
</template>