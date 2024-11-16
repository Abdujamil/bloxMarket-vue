<template>
  <div class="card">
    <div class="discount-badge">-20%</div>
    <img src="/sword.png" alt="Icebreaker 2" class="card-image" />
    <h3 class="card-title">Icebreaker 2</h3>
    <div class="card-prices">
      <span class="current-price">
        <i class="icon-energy">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.68665 8.0192L1.96252 13.364L7.6365 5.9147H4.34496L6.03775 0.636719L0.36377 8.0192H3.68665Z"
              fill="white"
            />
          </svg>
        </i>
        950
      </span>
      <span class="old-price">1140</span>
    </div>
    <button class="add-to-cart">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.8335 13.9998C4.91266 13.9998 4.17516 14.7457 4.17516 15.6665C4.17516 16.5873 4.91266 17.3332 5.8335 17.3332C6.75433 17.3332 7.50016 16.5873 7.50016 15.6665C7.50016 14.7457 6.75433 13.9998 5.8335 13.9998ZM0.833496 0.666504V2.33317H2.50016L5.496 8.654L4.371 10.6957C4.24183 10.9373 4.16683 11.2082 4.16683 11.4998C4.16683 12.4207 4.91266 13.1665 5.8335 13.1665H15.8335V11.4998H6.18766C6.071 11.4998 5.97933 11.4082 5.97933 11.2915C5.97933 11.254 5.98766 11.2207 6.00433 11.1915L6.75016 9.83317H12.9585C13.5835 9.83317 14.1293 9.48734 14.4168 8.97484L17.396 3.5665C17.4627 3.44984 17.5002 3.31234 17.5002 3.1665C17.5002 2.94549 17.4124 2.73353 17.2561 2.57725C17.0998 2.42097 16.8878 2.33317 16.6668 2.33317H4.346L3.55433 0.666504H0.833496ZM14.1668 13.9998C13.246 13.9998 12.5085 14.7457 12.5085 15.6665C12.5085 16.5873 13.246 17.3332 14.1668 17.3332C15.0877 17.3332 15.8335 16.5873 15.8335 15.6665C15.8335 14.7457 15.0877 13.9998 14.1668 13.9998Z"
          fill="white"
          fill-opacity="0.5"
        />
      </svg>
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  background: radial-gradient(
    circle,
    rgba(53, 35, 69, 1) 0%,
    rgba(29, 17, 47, 1) 100%
  );
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  position: relative;
  width: 190px;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, background 0.4s ease, transform 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background: radial-gradient(
      circle,
      rgb(85, 56, 110) 0%,
      rgba(29, 17, 47, 1) 100%
    );

    .card-image{
        transform: scale(1.05);
    }
  }

  .discount-badge {
    background-color: #22cc66;
    color: #000000;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 8px;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .card-image {
    max-width: 120px;
    margin: 10px auto;
    display: block;
  }

  .card-title {
    font-size: 18px;
    text-align: left;
    font-weight: 500;
    font-size: 16px;

    color: #ffffff;
  }

  .card-prices {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;

    .current-price {
      font-size: 20px;
      font-weight: 700;
      color: #b896f8;
      display: flex;
      align-items: center;
      gap: 5px;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);

      .icon-energy {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #b896f8;
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
    }

    .old-price {
      font-size: 14px;
      font-weight: 400;
      text-decoration: line-through;
    }
  }

  .add-to-cart {
    width: 100%;
    background-color: #4c2f5d;
    border: none;
    border-radius: 8px;
    color: #fff;
    padding: 5px;
    font-size: 16px;

    display: flex;
    align-self: center;
    justify-content: center;

    cursor: pointer;
    transition: background-color 0.4s ease;

    &:hover {
        svg path {
          fill-opacity: 1;
        }
      background-color: #b896f8a1;

    }

    .icon-cart {
      width: 16px;
      height: 16px;
      display: inline-block;
    }
  }
}
</style>
