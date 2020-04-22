<template>
    <div class="profile">
        <ProfileComponent></ProfileComponent>
    </div>
</template>

<script>
import ProfileComponent from '@/components/users/ProfileComponent.vue'
export default {
    name:'Profile',
    components:{
        ProfileComponent
    }
}
</script>