<script setup>
    import Navbar from '@/components/common/NavbarComponent.vue'
    // import Footer from '../components/common/Footer.vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()
</script>

<template>
    <div class="flex bg-[#FFFFFF]">
        <div class="relative min-h-[100vh] flex-1 flex flex-col">
            <Navbar/>
            <RouterView/>
            <!-- <Footer /> -->
        </div>
    </div>
</template>