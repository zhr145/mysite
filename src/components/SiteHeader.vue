<template>
  <header class="page-header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/" class="logo-link">
          <h1 class="logo-text">HZAU AIoT Lab</h1>
        </router-link>
      </div>
      <nav class="navigation">
        <router-link to="/research" class="nav-link">RESEARCH</router-link>
        <router-link to="/yjDemo" class="nav-link">PROJECTS</router-link>
        <router-link to="/publications" class="nav-link">PUBLICATIONS</router-link>
        <router-link to="/about" class="nav-link">PEOPLE</router-link>
        <router-link to="/latest-news" class="nav-link">LATEST NEWS</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style scoped>
.page-header {
  padding: 2rem 0;
  margin-bottom: 2rem;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
}

.logo-link {
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
}

.logo-link:hover {
  text-decoration: none;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  margin: 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;
  white-space: nowrap;
}

.navigation {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-shrink: 0;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 1rem 0;
  position: relative;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;
}

.nav-link:hover {
  color: #ffd700;
  transform: translateY(-2px);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #ffd700;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* 移除选中状态的背景效果 */
.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  background: none;
  color: white;
}

.nav-link.router-link-active:hover,
.nav-link.router-link-exact-active:hover {
  background: none;
  color: #ffd700;
}
</style>

