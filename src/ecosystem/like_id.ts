import { createClient } from '@supabase/supabase-js';

const supabaseUrl : string = "https://cdvdeesoyjnugbafkrul.supabase.co"
const supabasekey : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdmRlZXNveWpudWdiYWZrcnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NzU0MzEsImV4cCI6MjAzODE1MTQzMX0.jJGXFeqyQyEDSB4uRjqb0TN1UKbhbgnklXZ4ZkNzgXk"
const supabase = createClient(supabaseUrl, supabasekey);

//テーブルの作成
async function createTable() {
    // SQLクエリを定義
    const createTableQuery = `
      CREATE TABLE articles (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL
      );
    `;
      // SQLクエリを実行
  const { data, error } = await supabase
  .rpc('exec_sql', { sql: createTableQuery });

if (error) {
  console.error('Error creating table:', error);
} else {
  console.log('Table created successfully:', data);
}
}

createTable();

//ストアドプロシージャの生成
//複数の命令をまとめて、RDBMS(progreSQL)に保存する