import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import logoImage from "../image/SNSicon.webp";
import { supabase } from "../lib/supabase-client";

function Login() {
  console.log("Login");
  /**
   * ボタンクリック時の処理
   */
  const handleClick = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `http://localhost:3000/home`,
        // skipBrowserRedirect: true,
      },
    });

    await console.log(supabase.auth.getUser());
    await console.log(supabase.auth.getSession());
    await console.log(data, error);

    const user = await supabase.auth.getUser();

    const userName = await user.data.user.identities[0].identity_data.user_name;
    const userId = user.data.user.id;
    console.log(userName);
    console.log(userId);
    // その変数を使ってデータベースにINSERT
    const { error: insertError } = await supabase
      .from("users")
      .update({ full_name: userName })
      .eq("id", userId);

    if (insertError) {
      console.error("Error inserting data:", insertError);
    } else {
      console.log("Data inserted successfully");
    }
  };

  return (
    <div
      className="login"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="titlename">Product キャッチ</h1>
      {/* 画像を追加 */}
      <img
        src={logoImage}
        alt="ロゴ"
        style={{ width: "200px", height: "auto", margin: "20px 0" }}
      />

      <Stack spacing={5} direction="column">
        <Button
          variant="contained"
          size="large"
          onClick={handleClick}
          style={{ fontSize: "1.2rem", padding: "15px 30px" }}
        >
          GitHubで認証
        </Button>
      </Stack>
      <h1 className="title">
        Product
        キャッチはgithubを使い制作物の共有に特化したエンジニア向けSNSです
      </h1>
    </div>
  );
}

export default Login;
