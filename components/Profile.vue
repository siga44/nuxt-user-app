<template>
  <div>
    <Avatar :id="user.id" :avatar="user.avatar"/>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar"

export default {
  components: {
    Avatar
  },
  props: ['user']
}
</script>
