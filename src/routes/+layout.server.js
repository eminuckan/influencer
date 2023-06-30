import {} from '@supabase/auth-helpers-sveltekit';

/** @type {import('./$types').PageLoad} */
export async function load({locals: {getSession}}) {
    return {
        session: await getSession(),
    }
}