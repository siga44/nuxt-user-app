<template>
  <v-hover class="my-10" v-slot:default="{ hover }">
    <v-avatar color="pink" size="96" style="position: relative;">

        <v-fade-transition>
          <v-file-input
            class="avatar-edit"
            v-if="hover"
            hide-input
            show-size
            prepend-icon="mdi-camera"
            accept="image/png, image/jpeg, image/svg"
            @change="onUpload"
          ></v-file-input>
        </v-fade-transition>

      <div :style="`opacity: ${hover ? '.5' : '1'}; position: absolute;`">
        <v-img width="96" v-if="avatar" :src="require(`~/assets/${avatar}`)" alt="avatar"/>
        <v-icon v-else>mdi-account-circle</v-icon>
      </div>

    </v-avatar>
  </v-hover>
</template>

<script>
export default {
  props: ['id', 'avatar'],
  methods: {
    onUpload(file) {
      const payload = {id: this.id, avatar: file.name}
      this.$store.dispatch('users/updateAvatar', payload)
    }
  }

}
</script>

<style>
.avatar-edit {
  z-index: 10;
  position: absolute;
  top: 15px;
  left: 35px;
}
</style>
