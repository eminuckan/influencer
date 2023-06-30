import { fail, redirect } from "@sveltejs/kit";

export const actions ={
    login: async ({request,url,locals:{supabase}}) => {
        const provider = url.searchParams.get('provider');
        if(provider){
            const {data,error} = await supabase.auth.signInWithOAuth({
                provider: provider,
                options:{
                    redirectTo: `${url.origin}/auth/callback`,
                }
            });

            console.log(data)

            if (error){
                console.log(error);
                return fail(400,{
                    message: 'Bir şeyler ters gitti, lütfen tekrar deneyin.',
                });
            }

            throw redirect(303,data.url);
        }

        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');


        const {error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            console.log(error);
            return fail(500,{message:'Sunucu hatası, lütfen tekrar deneyin.',success:false,email})
        }

        throw redirect(303,'/');

    }
}