import { redirect } from "@sveltejs/kit";

export const GET = async ({locals: {supabase}}) => {
    const {error} = await supabase.auth.signOut();

    if (error) {
        throw error(500,{message:'Sunucu hatası, lütfen tekrar deneyin.',success:false})
    }

    throw redirect(303,'/');
};