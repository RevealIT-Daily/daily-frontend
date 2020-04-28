<template>
  <div class="Status">
    <AccountType></AccountType>
  </div>
</template>

<script>
import AccountType from "@/components/admin/account_type/AccountType.component.vue";
export default {
  name: "Status",
  components: {
    AccountType
  }
};
</script>