# 数据库演示页面

<div id="app">加载中...</div>

<script>
;(function() {
  // ========== 在这里填你的 Supabase 配置 ==========
  const SUPABASE_URL = '[https://你的项目ID.supabase.co](https://oiswxmrfftaentjuzen.supabase.co)'   // 改成你的 Project URL
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pc3d4bXJmZnRhZW5ydGp1emVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5ODcxOTYsImV4cCI6MjA5NjU2MzE5Nn0.wEEWaJfWp1YIXcX02aYvLZrWfi0YOgNITla8xWybzA8'                    // 改成你的 anon key
  // ===============================================

  // 加载 Supabase SDK
  if (!window.supabase) {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
    script.onload = () => init()
    document.head.appendChild(script)
  } else {
    init()
  }

  function init() {
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
    const container = document.getElementById('app')

    // 渲染界面
    container.innerHTML = `
      <style>
        .demo-container { max-width:800px; margin:20px auto; padding:20px; font-family:Arial; }
        .user-card { border:1px solid #ddd; padding:10px; margin:10px 0; border-radius:5px; background:#f9f9f9; }
        button { background:#007bff; color:white; border:none; padding:8px 16px; cursor:pointer; border-radius:4px; margin:5px; }
        input { padding:8px; margin:5px; width:200px; border:1px solid #ddd; border-radius:4px; }
        .delete-btn { background:#dc3545; }
        h1 { color:#333; }
        .info { color:#666; font-size:12px; margin-top:10px; }
      </style>
      <div class="demo-container">
        <h1>📋 用户管理系统 (Supabase)</h1>
        <div style="background:#e8f4f8; padding:10px; border-radius:5px; margin:10px 0;">
          <strong>✅ 已连接数据库</strong> - 可以添加/删除用户
        </div>
        <div>
          <h3>➕ 添加新用户</h3>
          <input type="text" id="username" placeholder="用户名">
          <input type="email" id="email" placeholder="邮箱">
          <button id="addBtn">添加</button>
        </div>
        <div>
          <h3>👥 用户列表</h3>
          <button id="refreshBtn">刷新</button>
          <div id="userList"></div>
        </div>
        <div class="info">💡 提示：数据存储在 Supabase 云端数据库</div>
      </div>
    `

    // 绑定事件
    document.getElementById('addBtn').onclick = addUser
    document.getElementById('refreshBtn').onclick = loadUsers

    async function loadUsers() {
      const { data, error } = await supabase.from('users').select('*').order('id', { ascending: false })
      if (error) {
        document.getElementById('userList').innerHTML = `<p style="color:red;">❌ 加载失败: ${error.message}</p>`
        return
      }
      const listDiv = document.getElementById('userList')
      if (!data || data.length === 0) {
        listDiv.innerHTML = '<p>暂无用户，请添加</p>'
        return
      }
      listDiv.innerHTML = data.map(user => `
        <div class="user-card">
          <strong>${escapeHtml(user.username)}</strong> - ${escapeHtml(user.email)}
          <small>(ID: ${user.id})</small>
          <button class="delete-btn" onclick="window.deleteUserTemp(${user.id})">删除</button>
        </div>
      `).join('')
      window.deleteUserTemp = deleteUser
    }

    async function addUser() {
      const username = document.getElementById('username').value.trim()
      const email = document.getElementById('email').value.trim()
      if (!username || !email) {
        alert('请填写用户名和邮箱')
        return
      }
      const { error } = await supabase.from('users').insert([{ username, email }])
      if (error) {
        alert('添加失败: ' + error.message)
        return
      }
      alert('✅ 添加成功')
      document.getElementById('username').value = ''
      document.getElementById('email').value = ''
      loadUsers()
    }

    async function deleteUser(id) {
      if (!confirm('确定删除吗？')) return
      const { error } = await supabase.from('users').delete().eq('id', id)
      if (error) {
        alert('删除失败: ' + error.message)
        return
      }
      alert('✅ 删除成功')
      loadUsers()
    }

    function escapeHtml(str) {
      return str.replace(/[&<>]/g, function(m) {
        return m === '&' ? '&amp;' : m === '<' ? '&lt;' : '&gt;'
      })
    }

    // 自动加载数据
    loadUsers()
  }
})()
</script>
