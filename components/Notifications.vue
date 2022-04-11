<template>
  <div class="notification is-danger">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Notifications-comp",
  props: ["message"],
};
</script>
