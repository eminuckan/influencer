import { AuthApiError } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    register: async ({request,url,locals:{supabase}}) => {
        const provider = url.searchParams.get('provider');

        if(provider){
            const {data,error} = await supabase.auth.signInWithOAuth({
                provider: provider,
                options:{
                    redirectTo: `${url.origin}/auth/callback`,
                }
            });


            if (error){
                console.log(error);
                return fail(400,{
                    message: 'Bir şeyler ters gitti, lütfen tekrar deneyin.',
                });
            }

            throw redirect(303,data.url);
        }

        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');

        const {error} = await supabase.auth.signUp({
            email,
            password,
            options:{
                emailRedirectTo: `${url.origin}/auth/callback`,
                data:{
                    name: name,
                }
            }
        })

        if (error) {
            if( error instanceof AuthApiError && error.status === 400 ){
                return fail(400,{
                    message: 'Girilen bilgileri kontrol edin ve tekrar deneyin.',
                    success: false, 
                });
            }
            return fail(500,{message:'Sunucu hatası, lütfen tekrar deneyin.',success:false,email})
        }

        return {
            message: 'Doğrulama postası için e posta adresinizi kontrol edin.',
            success: true,
        }
    }
}    