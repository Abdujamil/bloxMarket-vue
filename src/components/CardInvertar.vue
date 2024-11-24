<template>
  <div class="card__invertar">
    <span>х4</span>
    <img src="/sword.png" alt="sword png" />

    <p>Icebreaker</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card__invertar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 20px 11px 14px;
  background: #ffffff05;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;

  transition: all .3s ease-in-out;

  &:hover {
    filter: drop-shadow(0px 0px 20px #a659ff50);
    border: 1px solid #a759ff;
  }

  span {
    background: #a759ff;
    padding: 2px 4px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 12px;
    color: #151022;

    position: absolute;
    top: 7px;
    right: 7px;
  }

  img {
    width: 90px;
    height: 90px;
  }

  p {
    width: 100%;
    text-align: left;
    margin-top: 12px;
    font-weight: 500;
    font-size: 14px;
  }
}
</style>
