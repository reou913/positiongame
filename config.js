// =====================================================================
// Supabase の設定（ここだけ書きかえます）
//
//   SUPABASE_URL ：Project URL（https://xxxx.supabase.co の形。最後の /rest/v1/ は付けない）
//   SUPABASE_KEY ：公開用の鍵（Publishable key か、anon public の鍵）
//
// ※ 公開用の鍵は、GitHub に上げても大丈夫です（データは RLS で守られています）。
// ※ service_role の鍵（secret key）は、ぜったいに書かないでください。
// =====================================================================
window.APP_CONFIG = {
  SUPABASE_URL: "https://mtctyeezzycwqoyfjdmd.supabase.co",
  SUPABASE_KEY: "sb_publishable_ZUDkLIqizJXlLmHA7xw_Fw_QWBKy_vy"
};
