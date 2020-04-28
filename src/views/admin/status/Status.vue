<template>
  <div class="Status">
    <StatusComponent></StatusComponent>
  </div>
</template>

<script>
import StatusComponent from "@/components/admin/status/Status.component.vue";
export default {
  name: "Status",
  components: {
    StatusComponent
  }
};
</script>