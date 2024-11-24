<template>
  <!-- Навигация -->
  <div class="navigation" v-if="totalPages > 1">
    <span
      class="navigation__item navigation__item-prev"
      :class="{ hidden: currentPage === 1 }"
      @click="prevPage"
    >
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM13 5.25L1 5.25V6.75L13 6.75V5.25Z"
          fill="white"
          fill-opacity="0.5"
        />
      </svg>
    </span>

    <span
      class="navigation__item"
      v-for="page in totalPages"
      :key="page"
      :class="{ 'navigation__item-active': currentPage === page }"
      @click="setPage(page)"
    >
      {{ page }}
    </span>

    <span
      class="navigation__item navigation__item-next"
      :class="{ hidden: currentPage === totalPages }"
      @click="nextPage"
    >
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z"
          fill="white"
          fill-opacity="0.5"
        />
      </svg>
    </span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &__item {
    padding: 10px;
    color: #ffffff50;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &-active {
      background: #302d3e;
      border-radius: 8px;
    }
  }
  .hidden {
    display: none;
  }
}
</style>
