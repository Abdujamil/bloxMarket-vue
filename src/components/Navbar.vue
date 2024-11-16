<template>
  <div class="navbar">
    <div class="navbar__menu">
      <a href="#" class="navbar__manu-link">
        <img src="/menu1-icon.png" alt="icon" />
      </a>
      <a href="#" class="navbar__manu-link">
        <img src="/menu2-icon.png" alt="icon" />
      </a>
      <a href="#" class="navbar__manu-link">
        <img src="/menu3-icon.png" alt="icon" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 70px;
    height: 45px;
    transition: all 0.3s ease-in-out;
    opacity: 0.5;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
      filter: drop-shadow(0px 0px 20px #a759ff);
    }
  }
}
</style>
