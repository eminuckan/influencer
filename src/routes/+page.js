import { supabase } from "../lib/supabaseClient";

export async function load(){
    const {data} = await supabase.from('influencers').select(`
        name,
        pic,
        influencer_links(
            link
        )
    `);
    return {
        influencers: data ?? []
    }
}