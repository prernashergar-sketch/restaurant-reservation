import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gtxihadnygoxtfqcatot.supabase.co";
const supabaseKey = "sb_publishable_jmG9ZBR9LYERzIk9eGvbSA_UV6RGfo5";

export const supabase = createClient(supabaseUrl, supabaseKey);