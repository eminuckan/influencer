import Navbar from '$lib/components/Header/Navbar.svelte'

export default {
    title: 'Header/Navigation',
    component: Navbar,
    tags: ['autodocs']
}

export const Primary = {
    args:{
        items: [
            {title:'Ana Sayfa', href:'/'},
            {title:'Proje Hakkında', href:'/'},
            {title:'Ön Satış', href:'/'},
            {title:'İletişim', href:'/'},
        ]
    }
} 