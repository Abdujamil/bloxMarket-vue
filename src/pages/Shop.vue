<template>
  <div class="shop__container">
    <div class="shop__filters">
      <div class="filters">
        <!-- Поиск -->
        <div class="filter-item filter-item-search">
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5997 6.79984C11.5997 9.45072 9.45072 11.5997 6.79984 11.5997C4.14896 11.5997 2 9.45072 2 6.79984C2 4.14896 4.14896 2 6.79984 2C9.45072 2 11.5997 4.14896 11.5997 6.79984ZM10.849 12.2632C9.71783 13.1029 8.31685 13.5997 6.79984 13.5997C3.04439 13.5997 0 10.5553 0 6.79984C0 3.04439 3.04439 0 6.79984 0C10.5553 0 13.5997 3.04439 13.5997 6.79984C13.5997 8.31685 13.1029 9.71783 12.2632 10.849L17.7067 16.2924C18.0972 16.683 18.0972 17.3161 17.7067 17.7067C17.3161 18.0972 16.683 18.0972 16.2924 17.7067L10.849 12.2632Z"
                fill="white"
                fill-opacity="0.5"
              />
            </svg>
          </span>
          <input
            v-model="filters.search"
            type="text"
            class="search-input"
            placeholder="Поиск"
            @input="applyFilters"
          />
        </div>

        <!-- Выбор игры -->
        <div class="filter-item">
          <Dropdown
            :options="games"
            v-model:selected="filters.selectedGame"
            placeholder="Выберите игру"
            @change="applyFilters"
          />
        </div>

        <!-- Сортировка -->
        <div class="filter-item">
          <Dropdown
            :options="sortingOptions"
            v-model:selected="filters.sortBy"
            placeholder="По умолчанию"
            @change="applyFilters"
          />
        </div>

        <!-- Фильтр по цене -->
        <div class="filter-item">
          <Dropdown
            :options="priceRanges"
            v-model:selected="filters.priceRange"
            placeholder="Цена"
            @change="applyFilters"
          />
        </div>
      </div>
    </div>

    <div class="shop__cards">
      <Card
        v-for="(card, index) in paginatedCards"
        :key="index"
        :cardData="card"
      />
    </div>

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
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import Dropdown from "../components/Dropdown.vue";
import Card from "../components/Card.vue";

// Состояние фильтров
const filters = reactive({
  search: "",
  selectedGame: null,
  sortBy: null,
  priceRange: null,
});

// Опции для dropdown'ов
const games = [
  { value: "game1", label: "Игра 1" },
  { value: "game2", label: "Игра 2" },
  { value: "game3", label: "Игра 3" },
];

const sortingOptions = [
  { value: "default", label: "По умолчанию" },
  { value: "ascending", label: "По возрастанию" },
  { value: "descending", label: "По убыванию" },
];

const priceRanges = [
  { value: "low", label: "Дешёвые" },
  { value: "medium", label: "Средние" },
  { value: "high", label: "Дорогие" },
];

// Применение фильтров
function applyFilters() {
  console.log("Текущие фильтры:", filters);
  // Реализуйте логику фильтрации данных
}

//--- Карточки скрипты ----//

// Пример данных
const cards = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  name: `Card ${i + 1}`,
}));

// Текущее состояние
const currentPage = ref(1);
const itemsPerPage = 18;

// Вычисление количества страниц
const totalPages = computed(() => Math.ceil(cards.length / itemsPerPage));

// Карточки для текущей страницы
const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return cards.slice(start, end);
});

// Переход на следующую страницу
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Переход на предыдущую страницу
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Установить текущую страницу
const setPage = (page) => {
  currentPage.value = page;
};
</script>

<style lang="scss" scoped>
.shop__container {
  width: 100%;
  margin-top: 5px;

  &_filters {
    width: 100%;
  }

  .shop__cards {
    display: flex;
    height: 100%;
    align-items: start;
    flex-wrap: wrap;
    gap: 24px;
    margin: 30px 0;
  }

  .filters {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .filter-item {
      width: 100%;
      max-width: 20%;

      &-search {
        display: flex;
        align-items: center;
        height: 46px;
        border: 1px solid #302d3e;
        padding: 10px 20px;
        border-radius: 0.5rem;
        background: #302d3e;
        color: #fff;
        gap: 10px;

        span {
          display: flex;
          width: 18px;
          height: 18px;
        }

        input {
          background: none;
          border: none;
          font-size: 1rem;

          &:active,
          &:focus {
            outline: none;
          }
        }
      }
    }
  }

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
  }
}
</style>
