<template>
  <div class="home">
    <div class="content__head">
      <div class="content__head-slider">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :loop="true"
          :autoplay="{ delay: 1000 }"
          :navigation="{
            nextEl: '.intro__swiper-button-next',
            prevEl: '.intro__swiper-button-prev',
          }"
          :grab-cursor="true"
        >
          <swiper-slide>
            <img src="/slide-bg1.png" alt="background" />
            <div class="swiper__slide-head">
              <p>Активируй его и забирай свой бонус!</p>
              <h1>
                Нашёл промокод <br />
                в соцсетях?
              </h1>
              
            </div>
            <a class="swiper__slide-link" href="#">
              <svg
                width="26"
                height="16"
                viewBox="0 0 37 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.707 8.71246C37.0976 8.32199 37.0977 7.68882 36.7072 7.29824L30.3442 0.933354C29.9537 0.542772 29.3205 0.54268 28.93 0.933148C28.5394 1.32361 28.5393 1.95678 28.9298 2.34736L34.5858 8.00504L28.9281 13.6611C28.5375 14.0515 28.5374 14.6847 28.9279 15.0753C29.3184 15.4659 29.9515 15.466 30.3421 15.0755L36.707 8.71246ZM-0.000145716 9L35.9999 9.00525L36.0001 7.00525L0.000145716 7L-0.000145716 9Z"
                  fill="black"
                />
              </svg>
            </a>
          </swiper-slide>

          <swiper-slide>
            <h1>Слайд 2</h1>
            <p>Описание для второго слайда</p>
          </swiper-slide>

          <swiper-slide>
            <h1>Слайд 3</h1>
            <p>Описание для второго слайда</p>
          </swiper-slide>

          <div class="swiper__btns">
            <div class="intro__swiper-button-prev right">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.792893 7.28801C0.402369 7.67854 0.402369 8.3117 0.792893 8.70223L7.15685 15.0662C7.54738 15.4567 8.18054 15.4567 8.57107 15.0662C8.96159 14.6757 8.96159 14.0425 8.57107 13.652L2.91421 7.99512L8.57107 2.33826C8.96159 1.94774 8.96159 1.31457 8.57107 0.92405C8.18054 0.533526 7.54738 0.533526 7.15685 0.92405L0.792893 7.28801ZM16.5 6.99512L1.5 6.99512L1.5 8.99512L16.5 8.99512L16.5 6.99512Z"
                  fill="black"
                  fill-opacity="0.42"
                />
              </svg>
            </div>
            <div class="intro__swiper-button-next left">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2071 8.71199C16.5976 8.32146 16.5976 7.6883 16.2071 7.29777L9.84315 0.933814C9.45262 0.54329 8.81946 0.54329 8.42893 0.933814C8.03841 1.32434 8.03841 1.9575 8.42893 2.34803L14.0858 8.00488L8.42893 13.6617C8.03841 14.0523 8.03841 14.6854 8.42893 15.0759C8.81946 15.4665 9.45262 15.4665 9.84315 15.0759L16.2071 8.71199ZM0.5 9.00488L15.5 9.00488L15.5 7.00488L0.5 7.00488L0.5 9.00488Z"
                  fill="black"
                  fill-opacity="0.42"
                />
              </svg>
            </div>
          </div>
        </swiper>
      </div>

      <div class="content__head-gift">
        <h2>Ежедневные конкурсы на игровые предметы</h2>

        <div class="gift-btn">
          <a class="gift-link" href="#">
            <svg
              width="26"
              height="16"
              viewBox="0 0 37 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.707 8.71246C37.0976 8.32199 37.0977 7.68882 36.7072 7.29824L30.3442 0.933354C29.9537 0.542772 29.3205 0.54268 28.93 0.933148C28.5394 1.32361 28.5393 1.95678 28.9298 2.34736L34.5858 8.00504L28.9281 13.6611C28.5375 14.0515 28.5374 14.6847 28.9279 15.0753C29.3184 15.4659 29.9515 15.466 30.3421 15.0755L36.707 8.71246ZM-0.000145716 9L35.9999 9.00525L36.0001 7.00525L0.000145716 7L-0.000145716 9Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="content__body">
      <div class="cards">
        <div class="card">
          <div class="card__new"><span> NEW</span></div>
          <div class="card__body">
            <div class="card__body-foot">
              <div class="world-icon">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.58052 2.79697C8.83042 2.51511 8.97447 2.50488 9 2.50488C9.02553 2.50488 9.16958 2.51511 9.41948 2.79697C9.66834 3.07767 9.93815 3.5409 10.185 4.19915C10.5972 5.29837 10.8918 6.79699 10.9757 8.50488H7.02435C7.10822 6.79699 7.4028 5.29837 7.81501 4.19915C8.06185 3.5409 8.33166 3.07767 8.58052 2.79697ZM5.02218 8.50488C5.10742 6.59509 5.43487 4.8502 5.94235 3.49691C5.98785 3.37557 6.03525 3.25616 6.0846 3.13902C3.96378 4.11189 2.41296 6.11342 2.07089 8.50488H5.02218ZM2.07089 10.5049H5.02218C5.10742 12.4147 5.43487 14.1596 5.94235 15.5129C5.98785 15.6342 6.03525 15.7536 6.0846 15.8707C3.96378 14.8979 2.41296 12.8963 2.07089 10.5049ZM7.02435 10.5049H10.9757C10.8918 12.2128 10.5972 13.7114 10.185 14.8106C9.93815 15.4689 9.66834 15.9321 9.41948 16.2128C9.16958 16.4947 9.02553 16.5049 9 16.5049C8.97447 16.5049 8.83042 16.4947 8.58052 16.2128C8.33166 15.9321 8.06185 15.4689 7.81501 14.8106C7.4028 13.7114 7.10822 12.2128 7.02435 10.5049ZM12.9778 10.5049C12.8926 12.4147 12.5651 14.1596 12.0576 15.5129C12.0122 15.6342 11.9647 15.7536 11.9154 15.8707C14.0362 14.8979 15.587 12.8963 15.9291 10.5049H12.9778ZM15.9291 8.50488C15.587 6.11342 14.0362 4.11189 11.9154 3.13902C11.9647 3.25616 12.0122 3.37558 12.0576 3.49691C12.5651 4.8502 12.8926 6.59509 12.9778 8.50488H15.9291ZM18 9.50488C18 14.4754 13.9706 18.5049 9 18.5049C4.02944 18.5049 0 14.4754 0 9.50488C0 4.53432 4.02944 0.504883 9 0.504883C13.9706 0.504883 18 4.53432 18 9.50488Z"
                    fill="#20C75B"
                  />
                </svg>
                <span>148</span>
              </div>
              <div class="btn">
                Coinflip
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2071 8.71199C16.5976 8.32146 16.5976 7.6883 16.2071 7.29777L9.84314 0.933814C9.45262 0.54329 8.81946 0.54329 8.42893 0.933814C8.03841 1.32434 8.03841 1.9575 8.42893 2.34803L14.0858 8.00488L8.42893 13.6617C8.03841 14.0523 8.03841 14.6854 8.42893 15.0759C8.81946 15.4665 9.45262 15.4665 9.84315 15.0759L16.2071 8.71199ZM0.5 9.00488L15.5 9.00488L15.5 7.00488L0.5 7.00488L0.5 9.00488Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-2 card">
          <div class="card__new"><span> NEW</span></div>
          <div class="card__body">
            <div class="card__body-foot">
              <div class="world-icon">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.58052 2.79697C8.83042 2.51511 8.97447 2.50488 9 2.50488C9.02553 2.50488 9.16958 2.51511 9.41948 2.79697C9.66834 3.07767 9.93815 3.5409 10.185 4.19915C10.5972 5.29837 10.8918 6.79699 10.9757 8.50488H7.02435C7.10822 6.79699 7.4028 5.29837 7.81501 4.19915C8.06185 3.5409 8.33166 3.07767 8.58052 2.79697ZM5.02218 8.50488C5.10742 6.59509 5.43487 4.8502 5.94235 3.49691C5.98785 3.37557 6.03525 3.25616 6.0846 3.13902C3.96378 4.11189 2.41296 6.11342 2.07089 8.50488H5.02218ZM2.07089 10.5049H5.02218C5.10742 12.4147 5.43487 14.1596 5.94235 15.5129C5.98785 15.6342 6.03525 15.7536 6.0846 15.8707C3.96378 14.8979 2.41296 12.8963 2.07089 10.5049ZM7.02435 10.5049H10.9757C10.8918 12.2128 10.5972 13.7114 10.185 14.8106C9.93815 15.4689 9.66834 15.9321 9.41948 16.2128C9.16958 16.4947 9.02553 16.5049 9 16.5049C8.97447 16.5049 8.83042 16.4947 8.58052 16.2128C8.33166 15.9321 8.06185 15.4689 7.81501 14.8106C7.4028 13.7114 7.10822 12.2128 7.02435 10.5049ZM12.9778 10.5049C12.8926 12.4147 12.5651 14.1596 12.0576 15.5129C12.0122 15.6342 11.9647 15.7536 11.9154 15.8707C14.0362 14.8979 15.587 12.8963 15.9291 10.5049H12.9778ZM15.9291 8.50488C15.587 6.11342 14.0362 4.11189 11.9154 3.13902C11.9647 3.25616 12.0122 3.37558 12.0576 3.49691C12.5651 4.8502 12.8926 6.59509 12.9778 8.50488H15.9291ZM18 9.50488C18 14.4754 13.9706 18.5049 9 18.5049C4.02944 18.5049 0 14.4754 0 9.50488C0 4.53432 4.02944 0.504883 9 0.504883C13.9706 0.504883 18 4.53432 18 9.50488Z"
                    fill="#20C75B"
                  />
                </svg>
                <span>93</span>
              </div>
              <div class="btn">
                Cases
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2071 8.71199C16.5976 8.32146 16.5976 7.6883 16.2071 7.29777L9.84314 0.933814C9.45262 0.54329 8.81946 0.54329 8.42893 0.933814C8.03841 1.32434 8.03841 1.9575 8.42893 2.34803L14.0858 8.00488L8.42893 13.6617C8.03841 14.0523 8.03841 14.6854 8.42893 15.0759C8.81946 15.4665 9.45262 15.4665 9.84315 15.0759L16.2071 8.71199ZM0.5 9.00488L15.5 9.00488L15.5 7.00488L0.5 7.00488L0.5 9.00488Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-3 card">
          <div class="card__body">
            <div class="card__body-foot">
              <div class="world-icon">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.58052 2.79697C8.83042 2.51511 8.97447 2.50488 9 2.50488C9.02553 2.50488 9.16958 2.51511 9.41948 2.79697C9.66834 3.07767 9.93815 3.5409 10.185 4.19915C10.5972 5.29837 10.8918 6.79699 10.9757 8.50488H7.02435C7.10822 6.79699 7.4028 5.29837 7.81501 4.19915C8.06185 3.5409 8.33166 3.07767 8.58052 2.79697ZM5.02218 8.50488C5.10742 6.59509 5.43487 4.8502 5.94235 3.49691C5.98785 3.37557 6.03525 3.25616 6.0846 3.13902C3.96378 4.11189 2.41296 6.11342 2.07089 8.50488H5.02218ZM2.07089 10.5049H5.02218C5.10742 12.4147 5.43487 14.1596 5.94235 15.5129C5.98785 15.6342 6.03525 15.7536 6.0846 15.8707C3.96378 14.8979 2.41296 12.8963 2.07089 10.5049ZM7.02435 10.5049H10.9757C10.8918 12.2128 10.5972 13.7114 10.185 14.8106C9.93815 15.4689 9.66834 15.9321 9.41948 16.2128C9.16958 16.4947 9.02553 16.5049 9 16.5049C8.97447 16.5049 8.83042 16.4947 8.58052 16.2128C8.33166 15.9321 8.06185 15.4689 7.81501 14.8106C7.4028 13.7114 7.10822 12.2128 7.02435 10.5049ZM12.9778 10.5049C12.8926 12.4147 12.5651 14.1596 12.0576 15.5129C12.0122 15.6342 11.9647 15.7536 11.9154 15.8707C14.0362 14.8979 15.587 12.8963 15.9291 10.5049H12.9778ZM15.9291 8.50488C15.587 6.11342 14.0362 4.11189 11.9154 3.13902C11.9647 3.25616 12.0122 3.37558 12.0576 3.49691C12.5651 4.8502 12.8926 6.59509 12.9778 8.50488H15.9291ZM18 9.50488C18 14.4754 13.9706 18.5049 9 18.5049C4.02944 18.5049 0 14.4754 0 9.50488C0 4.53432 4.02944 0.504883 9 0.504883C13.9706 0.504883 18 4.53432 18 9.50488Z"
                    fill="#20C75B"
                  />
                </svg>
                <span>253</span>
              </div>
              <div class="btn">
                SHOP
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2071 8.71199C16.5976 8.32146 16.5976 7.6883 16.2071 7.29777L9.84314 0.933814C9.45262 0.54329 8.81946 0.54329 8.42893 0.933814C8.03841 1.32434 8.03841 1.9575 8.42893 2.34803L14.0858 8.00488L8.42893 13.6617C8.03841 14.0523 8.03841 14.6854 8.42893 15.0759C8.81946 15.4665 9.45262 15.4665 9.84315 15.0759L16.2071 8.71199ZM0.5 9.00488L15.5 9.00488L15.5 7.00488L0.5 7.00488L0.5 9.00488Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>

<style lang="scss" scoped>

.content {

  &__head {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
    height: 320px;

    &-slider {
      width: 90%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: right bottom;

      border-radius: 20px;
      z-index: 1;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
    }
    .swiper {
      height: 100%;
      border-radius: 20px;
    }

    .swiper__btns {
      position: absolute;
      right: 50px;
      bottom: 15px;
      z-index: 999;

      display: flex;
      align-items: center;

      gap: 20px;

      .left,
      .right {
        width: 30px;
        height: 30px;
        background: #ffffffb3;
        color: #000;
        padding: 10px;
        border-radius: 100px;

        display: flex;
        align-self: center;
        justify-content: center;
        transition: all 0.3s ease-in-out;

        svg {
          width: 100%;
          height: 100%;
        }
      }
      .left:hover,
      .right:hover {
        background: #ffffff;
      }
    }

    .swiper-slide {
      width: 100% !important;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      padding-left: 40px;
      position: relative;

      img {
        width: 100%;
        position: absolute;
        right: 0;
        object-fit: contain;
        z-index: -1;
        transition: all 0.4s ease-in-out;
        border-radius: 20px;
      }

      h1 {
        max-width: 404px;
        // height: 168px;
        font-size: 44px;
        font-weight: 800;
        line-height: 44px;

        color: #ffffff;
      }
      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;

        color: rgba(255, 255, 255, 0.8);

        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
      }

      .swiper__slide-link {
        width: 100%;
        max-width: 5rem;
        text-decoration: none;
        background: #ffffffb3;
        border-radius: 8px;
        padding: 8px;
        height: 36px;
        position: relative;
        margin-top: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: all 0.3s ease-in-out;

        &:hover {
          background: #ffffff;
        }
      }
    }

    &-gift {
      width: 30%;
      height: 100%;
      border-radius: 20px;

      background: url(/bag-2.png),
        linear-gradient(
          150deg,
          rgb(16 69 41) 20%,
          rgb(32, 7, 64) 43%,
          rgb(126, 58, 177) 100%
        );
      background-repeat: no-repeat;
      background-position: right bottom;
      background-size: 100%;

      z-index: 1;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
      position: relative;

      h2 {
        font-weight: 800;
        font-size: 20px;
        color: #ffffff;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
        max-width: 275px;
        margin: 0 auto;
        padding: 20px 10px 10px 10px;
      }

      .gift-btn {
        max-width: 275px;
        margin: 0 auto;
        padding: 0 10px;
      }

      .gift-link {
        width: 100%;
        max-width: 5rem;
        text-decoration: none;
        background: linear-gradient(325deg, rgba(95, 10, 167, 0.04) 0%, #A759FF 100%);
        border-radius: 8px;
        padding: 4px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-in-out, background-size 0.3s ease-in-out;
        background-size: 100%;

        svg path {
          fill: #ffffff7e;
        }

        &:hover {
          background-size: 200%;

          svg path {
            fill: #ffffff;
          }
        }
      }

      // &:hover {
      //   .gift-link {
      //     opacity: 1;
      //   }
      // }
    }
  }

  &__body {
    margin: 30px 0;

    .cards {
      width: 100%;
      height: 100%;
      max-height: 405px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      .card {
        width: 33%;
        height: 100%;
        position: relative;
        padding-top: 5px;
        height: 405px;
        transition: all 0.4s ease-in-out;

        &__new {
          width: 58px;
          height: 30px;
          background: linear-gradient(
            0deg,
            rgba(189, 216, 17, 1) 0%,
            rgba(239, 247, 79, 1) 100%
          );
          border-bottom-right-radius: 8px;
          border-bottom-left-radius: 8px;

          color: #000;
          font-weight: 700;
          text-align: center;

          display: flex;
          align-self: center;
          justify-content: center;

          position: absolute;
          top: 0;
          left: 30px;
        }

        &__body {
          background-color: rgb(54, 6, 90);
          background-image: url("/body1-img.png"); // Фоновое изображение
          background-size: 400px;
          background-repeat: no-repeat;
          background-position: center right;
          border-radius: 20px;
          height: 100%;
          transition: background-color 0.4s ease-in-out,
            background-image 0.4s ease-in-out, background-size 0.4s ease-in-out; // Анимация фона

          &-foot {
            position: absolute;
            bottom: 30px;
            left: 30px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            .world-icon {
              display: flex;
              align-items: center;
              gap: 8px;

              span {
                font-size: 14px;
                color: #20c75b;
                font-weight: 700;
                font-size: 14px;
                text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
              }
            }

            .btn {
              display: flex;
              align-items: center;
              gap: 10px;
              font-weight: 700;
              font-size: 32px;
              color: #ecf0f9;
              transition: all 0.4s ease-in-out;

              &:hover {
                gap: 15px;
              }

              span {
                width: 32px;
                height: 32px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
        }

        &:hover {
          .card__body {
            background-color: rgba(63, 6, 124, 1); // Новый цвет фона
            background-image: url("/body1-img.png"); // Новое фоновое изображение
            background-size: 110%; // Изменение размера фона для анимации

            &-foot {
              .btn {
                gap: 15px;

                span {
                  background: #fff;

                  svg path {
                    fill: #000000;
                  }
                }
              }
            }
          }
        }
      }

      .card-2 {
        .card__body {
          background-color: rgb(54, 6, 90);
          background-image: url("/body2-img.png");
        }

        &:hover {
          .card__body {
            background-color: rgba(63, 6, 124, 1); // Новый цвет фона
            background-image: url("/body2-img.png"); // Новое фоновое изображение
            background-size: 110%;
          }
        }
      }

      .card-3 {
        .card__body {
          background-color: rgb(54, 6, 90);
          background-image: url("/body3-img.png");
        }

        &:hover {
          .card__body {
            background-color: rgba(63, 6, 124, 1); // Новый цвет фона
            background-image: url("/body3-img.png"); // Новое фоновое изображение
            background-size: 110%;
          }
        }
      }
    }
  }
}
</style>
