<template>
  <div class="navbar">
    <div class="navbar__menu">
      <RouterLink to="/coin" class="navbar__manu-link">
        <img title="Coinflip" src="/coinflip.png" alt="icon" />
        <!-- <span>Coinflip</span> -->
      </RouterLink>
      <RouterLink to="/case" class="navbar__manu-link">
        <img title="Cases" src="/cases.png" alt="icon" />
        <!-- <span>Cases</span> -->
      </RouterLink>
      <RouterLink to="/shop" class="navbar__manu-link">
        <img title="SHOP" src="/shop.png" alt="icon" />
        <!-- <span>Shop</span> -->
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  background-color: #0D0A15;
  padding: 0 10px;

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
    position: relative;
    text-decoration: none;

    span{
      position: absolute;
      left: 130%;
      opacity: 0;

      background: #000;
      padding: 8px;
      border-radius: 8px;
    }

    img{
      opacity: .5;
      transition: all 0.3s ease-in-out;
    
    }

    &:hover, 
    &.router-link-active{
      transform: scale(1.1);
      opacity: 1;
      filter: drop-shadow(0px 0px 20px #a759ff);

      img{
        opacity: 1;
      }

      span{
        transform: scale(1);
        opacity: 1;
        filter: none;
      }

    }
  }

}
</style>
