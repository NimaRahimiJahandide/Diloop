<script setup>
    import Navbar from '@/components/common/NavbarComponent.vue'
    import Footer from '@/components/common/FooterComponent.vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()
</script>

<template>
    <div class="flex bg-[#f2f4fa]">
        <div class="relative flex-1 flex flex-col">
            <Navbar/>
            <div class="max-w-[1248px] mx-auto px-6 w-full min-h-[100vh]">
                <RouterView/>
            </div>
            <Footer />
        </div>
    </div>
</template>