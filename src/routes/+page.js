import { supabase } from "../lib/supabaseClient";

export async function load(){
    const {data:influencers} = await supabase.from('influencers').select(`
        name,
        pic,
        influencer_links(
            link
        )
    `);

    const {data:items} = await supabase.from('timeline_items').select();
    return {
        influencers: influencers ?? [],
        timelineItems: items ?? []
    }
}