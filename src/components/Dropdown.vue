<template>
  <div class="dropdown" @click.stop="toggleDropdown">
    <div class="dropdown-selected">
      {{ selected?.label || placeholder }}

      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.2929 14.7071C10.6834 15.0976 11.3166 15.0976 11.7071 14.7071L18.0711 8.34315C18.4616 7.95262 18.4616 7.31946 18.0711 6.92893C17.6805 6.53841 17.0474 6.53841 16.6569 6.92893L11 12.5858L5.34315 6.92893C4.95262 6.53841 4.31946 6.53841 3.92893 6.92893C3.53841 7.31946 3.53841 7.95262 3.92893 8.34315L10.2929 14.7071ZM10 13V14H12V13H10Z"
          fill="white"
          fill-opacity="0.5"
        />
      </svg>
    </div>
    <ul v-if="isOpen" class="dropdown-menu">
      <li
        v-for="option in options"
        :key="option.value"
        @click.stop="selectOption(option)"
        class="dropdown-item"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// Props
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Object,
    default: null,
  },
  placeholder: {
    type: String,
    default: "Выберите",
  },
});

// Emits
const emit = defineEmits(["update:modelValue", "change"]);

// Reactive state
const isOpen = ref(false);
const selected = ref(props.modelValue); // Используем props для начального значения

// Watch for external changes in `modelValue`
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== selected.value) {
      selected.value = newValue; // Синхронизация состояния
    }
  }
);

// Methods
function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectOption(option) {
  selected.value = option;
  isOpen.value = false;
  emit("update:modelValue", option); // Синхронизация с внешним состоянием
  emit("change", option); // Кастомное событие
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  width: 100%;
  cursor: pointer;

  &-selected {
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid #302D3E;
    border-radius: 0.5rem;
    background: #302D3E;
    color: #fff;
    font-size: 1rem;
  }
  &-menu {
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0.5rem 0;
    background: #302D3E;
    border: 1px solid #302D3E;
    border-radius: 0.5rem;
    list-style: none;
    z-index: 10;
  }
  
  &-item {
    width: 100%;
    padding: 0.5rem 1rem;
    color: #fff;
    font-size: 1rem;
  }
  
  &-item:hover {
    background: #292635;
  }
}


</style>
