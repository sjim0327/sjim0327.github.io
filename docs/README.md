<!DOCTYPE html>
<html>
<head>
    <title>我的网站 + Supabase 数据库</title>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial; max-width: 800px; margin: 50px auto; padding: 20px; }
        .user-card { border: 1px solid #ddd; padding: 10px; margin: 10px 0; border-radius: 5px; }
        button { background: #007bff; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px; }
        input { margin: 5px; padding: 8px; width: 200px; border: 1px solid #ddd; border-radius: 4px; }
        .delete-btn { background: #dc3545; margin-left: 10px; }
    </style>
</head>
<body>
    <h1>📋 用户管理系统</h1>
    
    <div>
        <h3>➕ 添加新用户</h3>
        <input type="text" id="username" placeholder="用户名">
        <input type="email" id="email" placeholder="邮箱">
        <button onclick="addUser()">添加用户</button>
    </div>

    <div>
        <h3>👥 用户列表</h3>
        <button onclick="loadUsers()">🔄 刷新列表</button>
        <div id="userList"></div>
    </div>

    <!-- 引入 Supabase 官方 SDK -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

    <script>
        // ========== 🔧 在这里填入你的配置 ==========
        const SUPABASE_URL = 'https://你的项目ID.supabase.co';   // 替换成你的 Project URL
        const SUPABASE_KEY = '你的 anon public key';             // 替换成你的 anon key
        // ========================================

        const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

        // 加载用户列表
        async function loadUsers() {
            const { data: users, error } = await supabase
                .from('users')
                .select('*')
                .order('id', { ascending: false });

            if (error) {
                console.error('加载失败:', error);
                alert('加载失败：' + error.message);
                return;
            }

            const userListDiv = document.getElementById('userList');
            if (users.length === 0) {
                userListDiv.innerHTML = '<p>暂无用户，请添加</p>';
                return;
            }

            userListDiv.innerHTML = users.map(user => `
                <div class="user-card">
                    <strong>${escapeHtml(user.username)}</strong> - ${escapeHtml(user.email)}
                    <small>(ID: ${user.id}，创建于 ${new Date(user.created_at).toLocaleString()})</small>
                    <button class="delete-btn" onclick="deleteUser(${user.id})">删除</button>
                </div>
            `).join('');
        }

        // 添加用户
        async function addUser() {
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();

            if (!username || !email) {
                alert('请填写用户名和邮箱');
                return;
            }

            const { data, error } = await supabase
                .from('users')
                .insert([{ username, email }])
                .select();

            if (error) {
                alert('添加失败：' + error.message);
                return;
            }

            alert('✅ 用户添加成功！');
            document.getElementById('username').value = '';
            document.getElementById('email').value = '';
            loadUsers();  // 刷新列表
        }

        // 删除用户
        async function deleteUser(id) {
            if (!confirm('确定要删除这个用户吗？')) return;

            const { error } = await supabase
                .from('users')
                .delete()
                .eq('id', id);

            if (error) {
                alert('删除失败：' + error.message);
                return;
            }

            alert('✅ 删除成功');
            loadUsers();
        }

        // 防止 XSS 攻击（简单转义）
        function escapeHtml(str) {
            return str.replace(/[&<>]/g, function(m) {
                if (m === '&') return '&amp;';
                if (m === '<') return '&lt;';
                if (m === '>') return '&gt;';
                return m;
            });
        }

        // 页面加载时自动获取用户列表
        loadUsers();
    </script>
</body>
</html>
