import React from 'react';

const Header = () => {
    return (
        <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Панель навигации</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
      <button class="btn btn-outline-success" type="submit">Поиск</button>
    </form>
  </div>
</nav>
    );
};

export default Header;