<template>
  <div class="profile">
    <div class="profile__head">
      <div class="profile__head-btns">
        <button @click="showBlock('openHistoryBlock');"
                :class="{ 'btn-active': activeBlock === 'openHistoryBlock' }"
                class="btn btn-profile">
          <span>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M10.0046 0.399902C7.36474 0.399902 5.1985 2.55864 5.1985 5.19849C5.1985 7.83835 7.36474 10.0046 10.0046 10.0046C12.6444 10.0046 14.8013 7.83835 14.8013 5.19849C14.8013 2.55864 12.6444 0.399902 10.0046 0.399902ZM6.16234 10.9609C3.28018 10.9609 0.399902 12.8811 0.399902 15.7576V17.8916C0.582844 19.092 1.36 19.6018 2.32197 19.5999H17.6797C18.6417 19.6018 19.2768 18.7987 19.5999 17.8916V15.7576C19.6018 11.921 16.7215 10.9609 13.8375 10.9609H6.16234Z"
                  fill="white"
                  fill-opacity="0.5"
              />
            </svg>
          </span>
          Профиль
        </button>
        <button @click="showBlock('openHistoryOperation');"
                :class="{ 'btn-active': activeBlock === 'openHistoryOperation' }"
                class="btn btn-operations">
          <span>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM7.19828 18.75L9.56897 11.4009H5L12.8017 1.25L10.4741 8.50722H15L7.19828 18.75Z"
                  fill="white"
                  fill-opacity="0.5"
              />
            </svg>
          </span>
          История операций
        </button>
        <button @click="showBlock('openHistoryRetelling');"
                :class="{ 'btn-active': activeBlock === 'openHistoryRetelling' }"
                class="btn btn-retelling">
          <span>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M22 12C22 6.47714 17.5229 2 12 2C6.47714 2 2 6.47714 2 12C2 17.5228 6.47714 22 12 22C17.5229 22 22 17.5228 22 12ZM10.5714 13.4509L10.5714 5.87946C10.5714 5.32718 11.0191 4.87946 11.5714 4.87946L12 4.87946C12.5523 4.87946 13 5.32718 13 5.87946L13 11L18.1429 11C18.6951 11 19.1429 11.4477 19.1429 12L19.1429 12.4509C19.1429 13.0032 18.6951 13.4509 18.1429 13.4509L10.5714 13.4509Z"
                  fill="white"
                  fill-opacity="0.5"
              />
            </svg>
          </span>
          История вывода
        </button>
      </div>
    </div>

    <div v-if="activeBlock === 'openHistoryBlock'" class="profile__block">
      <div class="profile__head-user">
        <div class="user__account">
          <div class="user__account-ava">
            <img src="/ava-img.png" alt="ava"/>
          </div>

          <div class="user__account-info">
            <p>user230113</p>
          </div>
        </div>
        <div class="user__actions">
          <div class="user__action user__actions-opened">
            <p>Открыто</p>
            <h2>
              <span>
                <svg
                    width="29"
                    height="22"
                    viewBox="0 0 29 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.50004 3.78463C1.50004 3.27693 1.88048 2.8498 2.38479 2.79129L26.3848 0.00679166C26.9788 -0.0621209 27.5 0.402177 27.5 1.00013V3.00877C27.5 3.51647 27.1196 3.9436 26.6153 4.00211L2.61529 6.78661C2.02132 6.85552 1.50004 6.39122 1.50004 5.79327V3.78463ZM1.50026 8.92276C1.50039 8.37057 1.94807 7.92299 2.50026 7.92299H26.5001C27.0524 7.92299 27.5001 8.37065 27.5001 8.9229L27.5002 9.43412C27.5002 9.71021 27.724 9.93401 28.0001 9.93401C28.2762 9.93401 28.5 10.1578 28.5 10.434V12.4506C28.5 12.7267 28.2762 12.9506 28.0001 12.9506C27.724 12.9506 27.5002 13.1744 27.5002 13.4505L27.5001 21.0002C27.5 21.5525 27.0523 22.0002 26.5001 22.0002H26.0701H23.5C22.9478 22.0002 22.5 21.547 22.5 20.9947C22.5 20.4424 22.0523 19.9892 21.5 19.9892H20.5C19.9478 19.9892 19.5 20.4424 19.5 20.9947C19.5 21.547 19.0523 22.0002 18.5 22.0002H10.5C9.94776 22.0002 9.50004 21.547 9.50004 20.9947C9.50004 20.4424 9.05233 19.9892 8.50004 19.9892H7.50004C6.94776 19.9892 6.50004 20.4424 6.50004 20.9947C6.50004 21.547 6.05233 22.0002 5.50004 22.0002H2.50004C1.94776 22.0002 1.50004 21.5525 1.50004 21.0002V13.4506C1.50004 13.1744 1.27617 12.9506 1.00002 12.9506C0.723867 12.9506 0.5 12.7267 0.5 12.4505V10.4341C0.5 10.1579 0.723891 9.93401 1.00008 9.93401C1.27622 9.93401 1.50009 9.71019 1.50015 9.43405L1.50026 8.92276ZM12.819 20L14.2414 15.8005H11.5L16.181 10L14.7845 14.147H17.5L12.819 20Z"
                      fill="white"
                  />
                </svg>
              </span>
              342
            </h2>
          </div>
          <div class="user__action user__actions-withdrawn">
            <p>Выведено</p>
            <h2>
              <span>
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M12.3403 10.4106L11.1033 11.5151C10.8516 11.7398 10.5037 11.8225 10.1779 11.735L6.09291 10.6381C5.8581 10.575 5.60835 10.5997 5.3904 10.7074L1.47067 12.6453C0.947528 12.9039 0.756087 13.5537 1.05545 14.0547L5.57319 21.6149C5.6745 21.7844 5.82376 21.9201 6.00213 22.005L18.4235 27.912C19.3249 28.3406 20.2291 27.3291 19.7024 26.4812L15.1934 19.2226C15.011 18.9289 14.6897 18.7503 14.344 18.7503H13.3228C12.6302 18.7503 12.1473 18.0632 12.3819 17.4116L12.5111 17.0527C12.6776 16.5904 13.1552 16.3175 13.638 16.4088L15.7727 16.8129C15.9852 16.8531 16.1789 16.9611 16.3248 17.1207L27.5099 29.3546C27.8478 29.7242 28.407 29.7868 28.8183 29.5012L28.9555 29.4059C29.4544 29.0594 29.5317 28.3517 29.1193 27.9056L17.9746 15.8528C17.79 15.6531 17.6947 15.3869 17.7106 15.1155L17.8449 12.8168C17.8759 12.2881 18.3136 11.8752 18.8432 11.8752H19.3C19.8523 11.8752 20.3 12.3229 20.3 12.8752V14.4683C20.3 14.8008 20.4653 15.1117 20.7411 15.2975L27.7114 19.9954C28.5361 20.5512 29.5784 19.6932 29.1914 18.777L24.0128 6.51704C23.9391 6.34266 23.8175 6.19277 23.662 6.08479L15.5876 0.477514C15.1897 0.201194 14.651 0.249808 14.309 0.592894L11.5358 3.37485C11.2838 3.62769 11.1857 3.99572 11.2783 4.34048L12.64 9.40502C12.7381 9.76991 12.6222 10.1589 12.3403 10.4106Z"
                      fill="white"
                  />
                </svg>
              </span>
              572
            </h2>
          </div>
          <div class="user__action user__actions-spent">
            <p>Потрачено</p>
            <h2>
              <span>
                <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24ZM9.69828 21L12.069 13.4409H7.5L15.3017 3L12.9741 10.4646H17.5L9.69828 21Z"
                      fill="white"
                  />
                </svg>
              </span>
              14 503
            </h2>
          </div>
        </div>
        <div class="user__logout">
          <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M6.6665 6.66662V25.3333C6.6665 25.6869 6.80698 26.0261 7.05703 26.2761C7.30708 26.5261 7.64622 26.6666 7.99984 26.6666H11.9998V24H9.33317V7.99996H11.9998V5.33329H7.99984C7.64622 5.33329 7.30708 5.47377 7.05703 5.72382C6.80698 5.97386 6.6665 6.313 6.6665 6.66662ZM25.6558 5.37329L14.9892 2.70662C14.7927 2.65761 14.5876 2.65401 14.3895 2.69609C14.1913 2.73818 14.0054 2.82484 13.8458 2.9495C13.6862 3.07416 13.5571 3.23355 13.4682 3.41556C13.3794 3.59757 13.3332 3.79743 13.3332 3.99996V28C13.3327 28.2027 13.3786 28.4028 13.4672 28.5851C13.5559 28.7673 13.685 28.927 13.8448 29.0517C14.0045 29.1765 14.1907 29.2631 14.389 29.305C14.5873 29.3468 14.7926 29.3428 14.9892 29.2933L25.6558 26.6266C25.9444 26.5546 26.2006 26.3883 26.3838 26.1539C26.5669 25.9196 26.6664 25.6307 26.6665 25.3333V6.66662C26.6664 6.36921 26.5669 6.08036 26.3838 5.84601C26.2006 5.61166 25.9444 5.44527 25.6558 5.37329ZM19.9998 16.2506C19.9845 16.5939 19.8373 16.9181 19.5889 17.1556C19.3406 17.3931 19.0102 17.5256 18.6665 17.5256C18.3229 17.5256 17.9924 17.3931 17.7441 17.1556C17.4957 16.9181 17.3485 16.5939 17.3332 16.2506V15.748C17.3333 15.3943 17.474 15.0553 17.7242 14.8053C17.9743 14.5554 18.3135 14.4151 18.6672 14.4153C19.0208 14.4155 19.3599 14.5561 19.6098 14.8063C19.8597 15.0565 20 15.3957 19.9998 15.7493V16.2506Z"
                fill="#FF5862"
            />
          </svg>
        </div>
      </div>

      <div class="profile__body profile-block">
        <div class="profile__body-title">
          <h1>Инвентарь</h1>
        </div>

        <div class="profile__body-cards">
          <div class="cards__body">
            <CardInvertar
                v-for="(card, index) in paginatedCards"
                :key="index"
                :cardData="card"
            />
          </div>
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
    </div>

    <div v-if="activeBlock === 'openHistoryOperation'" class="profile__body history-operation__block">
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

        <!-- За все время -->
        <div class="filter-item">
          <Dropdown
              :options="time"
              v-model:selected="filters.selectedTime"
              placeholder="За все время"
              @change="applyFilters"
          />
        </div>

        <!-- Все операции -->
        <div class="filter-item">
          <Dropdown
              :options="sortingOptions"
              v-model:selected="filters.sortBy"
              placeholder="Все операции"
              @change="applyFilters"
          />
        </div>

      </div>

      <div class="history__table">
        <table class="table">
          <thead>
          <tr>
            <th>ID операции</th>
            <th>Метод пополнения</th>
            <th>Сумма</th>
            <th>Бонусы</th>
            <th>Дата и время</th>
            <th>Статус</th>
          </tr>
          </thead>
          <tbody>
          <tr class="done">
            <td class="id">14929042</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/mir.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
              <div class="bonuses__body">
                <div class="plus_icon">
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_976)">
                      <path
                          d="M3.01922 5.572V0.0279996H4.56722V5.572H3.01922ZM0.943219 3.532V2.068H6.65522V3.532H0.943219Z"
                          fill="#32F26F"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_976" x="0.943359" y="0.027832" width="7.71191" height="7.54395"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_976"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_976" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.19922 14C11.0652 14 14.1992 10.866 14.1992 7C14.1992 3.13401 11.0652 0 7.19922 0C3.33323 0 0.199219 3.13401 0.199219 7C0.199219 10.866 3.33323 14 7.19922 14ZM5.56488 12.25L6.94778 7.84055H4.28255L8.83356 1.75L7.4758 6.10433H10.1159L5.56488 12.25Z"
                        fill="#32F26F"/>
                </svg>
                <p>39.6</p>
              </div>
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_done.svg" alt="done icon">
              </div>
            </td>
          </tr>
          <tr class="processing">
            <td class="id">30403253</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/SBP.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_in_process.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="error">
            <td class="id">30403253</td>
            <td class="method-pay">

            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_error.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="done">
            <td class="id">14929042</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/mir.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
              <div class="bonuses__body">
                <div class="plus_icon">
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_976)">
                      <path
                          d="M3.01922 5.572V0.0279996H4.56722V5.572H3.01922ZM0.943219 3.532V2.068H6.65522V3.532H0.943219Z"
                          fill="#32F26F"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_976" x="0.943359" y="0.027832" width="7.71191" height="7.54395"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_976"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_976" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.19922 14C11.0652 14 14.1992 10.866 14.1992 7C14.1992 3.13401 11.0652 0 7.19922 0C3.33323 0 0.199219 3.13401 0.199219 7C0.199219 10.866 3.33323 14 7.19922 14ZM5.56488 12.25L6.94778 7.84055H4.28255L8.83356 1.75L7.4758 6.10433H10.1159L5.56488 12.25Z"
                        fill="#32F26F"/>
                </svg>
                <p>39.6</p>
              </div>
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_done.svg" alt="done icon">
              </div>
            </td>
          </tr>
          <tr class="processing">
            <td class="id">30403253</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/SBP.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_in_process.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="error">
            <td class="id">30403253</td>
            <td class="method-pay">

            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_error.svg" alt="done icon">
              </div>
            </td>
          </tr>


          <tr class="done">
            <td class="id">14929042</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/mir.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
              <div class="bonuses__body">
                <div class="plus_icon">
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_976)">
                      <path
                          d="M3.01922 5.572V0.0279996H4.56722V5.572H3.01922ZM0.943219 3.532V2.068H6.65522V3.532H0.943219Z"
                          fill="#32F26F"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_976" x="0.943359" y="0.027832" width="7.71191" height="7.54395"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_976"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_976" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.19922 14C11.0652 14 14.1992 10.866 14.1992 7C14.1992 3.13401 11.0652 0 7.19922 0C3.33323 0 0.199219 3.13401 0.199219 7C0.199219 10.866 3.33323 14 7.19922 14ZM5.56488 12.25L6.94778 7.84055H4.28255L8.83356 1.75L7.4758 6.10433H10.1159L5.56488 12.25Z"
                        fill="#32F26F"/>
                </svg>
                <p>39.6</p>
              </div>
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_done.svg" alt="done icon">
              </div>
            </td>
          </tr>
          <tr class="processing">
            <td class="id">30403253</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/SBP.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_in_process.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="error">
            <td class="id">30403253</td>
            <td class="method-pay">

            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_error.svg" alt="done icon">
              </div>
            </td>
          </tr>


          <tr class="done">
            <td class="id">14929042</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/mir.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
              <div class="bonuses__body">
                <div class="plus_icon">
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_976)">
                      <path
                          d="M3.01922 5.572V0.0279996H4.56722V5.572H3.01922ZM0.943219 3.532V2.068H6.65522V3.532H0.943219Z"
                          fill="#32F26F"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_976" x="0.943359" y="0.027832" width="7.71191" height="7.54395"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_976"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_976" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.19922 14C11.0652 14 14.1992 10.866 14.1992 7C14.1992 3.13401 11.0652 0 7.19922 0C3.33323 0 0.199219 3.13401 0.199219 7C0.199219 10.866 3.33323 14 7.19922 14ZM5.56488 12.25L6.94778 7.84055H4.28255L8.83356 1.75L7.4758 6.10433H10.1159L5.56488 12.25Z"
                        fill="#32F26F"/>
                </svg>
                <p>39.6</p>
              </div>
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_done.svg" alt="done icon">
              </div>
            </td>
          </tr>
          <tr class="processing">
            <td class="id">30403253</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/SBP.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_in_process.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="error">
            <td class="id">30403253</td>
            <td class="method-pay">

            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_error.svg" alt="done icon">
              </div>
            </td>
          </tr>


          <tr class="done">
            <td class="id">14929042</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/mir.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
              <div class="bonuses__body">
                <div class="plus_icon">
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_976)">
                      <path
                          d="M3.01922 5.572V0.0279996H4.56722V5.572H3.01922ZM0.943219 3.532V2.068H6.65522V3.532H0.943219Z"
                          fill="#32F26F"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_976" x="0.943359" y="0.027832" width="7.71191" height="7.54395"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_976"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_976" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.19922 14C11.0652 14 14.1992 10.866 14.1992 7C14.1992 3.13401 11.0652 0 7.19922 0C3.33323 0 0.199219 3.13401 0.199219 7C0.199219 10.866 3.33323 14 7.19922 14ZM5.56488 12.25L6.94778 7.84055H4.28255L8.83356 1.75L7.4758 6.10433H10.1159L5.56488 12.25Z"
                        fill="#32F26F"/>
                </svg>
                <p>39.6</p>
              </div>
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_done.svg" alt="done icon">
              </div>
            </td>
          </tr>
          <tr class="processing">
            <td class="id">30403253</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/SBP.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_in_process.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="error">
            <td class="id">30403253</td>
            <td class="method-pay">

            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_error.svg" alt="done icon">
              </div>
            </td>
          </tr>


          <tr class="done">
            <td class="id">14929042</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/mir.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
              <div class="bonuses__body">
                <div class="plus_icon">
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_976)">
                      <path
                          d="M3.01922 5.572V0.0279996H4.56722V5.572H3.01922ZM0.943219 3.532V2.068H6.65522V3.532H0.943219Z"
                          fill="#32F26F"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_976" x="0.943359" y="0.027832" width="7.71191" height="7.54395"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_976"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_976" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.19922 14C11.0652 14 14.1992 10.866 14.1992 7C14.1992 3.13401 11.0652 0 7.19922 0C3.33323 0 0.199219 3.13401 0.199219 7C0.199219 10.866 3.33323 14 7.19922 14ZM5.56488 12.25L6.94778 7.84055H4.28255L8.83356 1.75L7.4758 6.10433H10.1159L5.56488 12.25Z"
                        fill="#32F26F"/>
                </svg>
                <p>39.6</p>
              </div>
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_done.svg" alt="done icon">
              </div>
            </td>
          </tr>
          <tr class="processing">
            <td class="id">30403253</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/SBP.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_in_process.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="error">
            <td class="id">30403253</td>
            <td class="method-pay">

            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_error.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="done">
            <td class="id">14929042</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/mir.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
              <div class="bonuses__body">
                <div class="plus_icon">
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_976)">
                      <path
                          d="M3.01922 5.572V0.0279996H4.56722V5.572H3.01922ZM0.943219 3.532V2.068H6.65522V3.532H0.943219Z"
                          fill="#32F26F"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_976" x="0.943359" y="0.027832" width="7.71191" height="7.54395"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_976"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_976" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.19922 14C11.0652 14 14.1992 10.866 14.1992 7C14.1992 3.13401 11.0652 0 7.19922 0C3.33323 0 0.199219 3.13401 0.199219 7C0.199219 10.866 3.33323 14 7.19922 14ZM5.56488 12.25L6.94778 7.84055H4.28255L8.83356 1.75L7.4758 6.10433H10.1159L5.56488 12.25Z"
                        fill="#32F26F"/>
                </svg>
                <p>39.6</p>
              </div>
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_done.svg" alt="done icon">
              </div>
            </td>
          </tr>
          <tr class="processing">
            <td class="id">30403253</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/SBP.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_in_process.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="error">
            <td class="id">30403253</td>
            <td class="method-pay">

            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_error.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="done">
            <td class="id">14929042</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/mir.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
              <div class="bonuses__body">
                <div class="plus_icon">
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_976)">
                      <path
                          d="M3.01922 5.572V0.0279996H4.56722V5.572H3.01922ZM0.943219 3.532V2.068H6.65522V3.532H0.943219Z"
                          fill="#32F26F"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_976" x="0.943359" y="0.027832" width="7.71191" height="7.54395"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_976"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_976" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.19922 14C11.0652 14 14.1992 10.866 14.1992 7C14.1992 3.13401 11.0652 0 7.19922 0C3.33323 0 0.199219 3.13401 0.199219 7C0.199219 10.866 3.33323 14 7.19922 14ZM5.56488 12.25L6.94778 7.84055H4.28255L8.83356 1.75L7.4758 6.10433H10.1159L5.56488 12.25Z"
                        fill="#32F26F"/>
                </svg>
                <p>39.6</p>
              </div>
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_done.svg" alt="done icon">
              </div>
            </td>
          </tr>
          <tr class="processing">
            <td class="id">30403253</td>
            <td class="method-pay">
              <div class="method-pay__info">
                <div class="method-pay__icon">
                  <img src="../../public/SBP.svg" alt="card icon">
                </div>
                <p>Карта</p>
              </div>
            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_in_process.svg" alt="done icon">
              </div>
            </td>
          </tr>

          <tr class="error">
            <td class="id">30403253</td>
            <td class="method-pay">

            </td>
            <td class="sum">
              <div class="sum__valuta">
                <div class="sum__plus">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2588_967)">
                      <path d="M3.16039 7.596V0.204H5.22439V7.596H3.16039ZM0.392391 4.876V2.924H8.00839V4.876H0.392391Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_2588_967" x="0.392578" y="0.204102" width="9.61621" height="9.39209"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2588_967"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2588_967" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="sum__number">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4004 20.5C15.9232 20.5 20.4004 16.0228 20.4004 10.5C20.4004 4.97715 15.9232 0.5 10.4004 0.5C4.87754 0.5 0.400391 4.97715 0.400391 10.5C0.400391 16.0228 4.87754 20.5 10.4004 20.5ZM8.06562 18L10.0412 11.7008H6.23372L12.7352 3L10.7955 9.22047H14.5671L8.06562 18Z"
                          fill="white"/>
                  </svg>
                  <p>
                    560.5
                  </p>
                </div>
              </div>
            </td>
            <td class="bonuses">
            </td>
            <td class="date">21.11.2024 в 14:34</td>
            <td class="status">
              <div class="status__icon">
                <img src="../../public/status_pay_error.svg" alt="done icon">
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="activeBlock === 'openHistoryRetelling'" class="history-retelling__block">
      <h2>История вывода</h2>
    </div>
  </div>
</template>

<script setup>
import CardInvertar from "../components/CardInvertar.vue";
import Dropdown from "../components/Dropdown.vue";
import {reactive, ref, computed} from "vue";

const activeBlock = ref('openHistoryBlock'); // Хранит текущее состояние блока

function showBlock(block) {
  activeBlock.value = block; // Устанавливаем активный блок
}


// Состояние фильтров
const filters = reactive({
  search: "",
  selectedTime: null,
  sortBy: null,
  priceRange: null,
});

// Опции для dropdown'ов
const time = [
  {value: "month", label: "За месяц"},
  {value: "week", label: "За неделю"},
  {value: "day", label: "За день"},
];

const sortingOptions = [
  {value: "month", label: "За месяц"},
  {value: "week", label: "За неделю"},
  {value: "day", label: "За день"},
];

// Применение фильтров
function applyFilters() {
  console.log("Текущие фильтры:", filters);
  // Логика фильтрации данных будет тут
}

// Пример данных
const cards = Array.from({length: 70}, (_, i) => ({
  id: i + 1,
  name: `Card ${i + 1}`,
}));

// Текущее состояние
const currentPage = ref(1);
const itemsPerPage = 20;

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
.profile {
  &__head {
    margin-bottom: 30px;

    &-btns {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 20px;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        background: #ffffff10;
        border: none;
        border-radius: 12px;
        padding: 16px 30px;
        transition: background 0.3s ease-in-out;
        cursor: pointer;

        font-weight: 700;
        font-size: 20px;

        color: #ffffff49;

        // &:hover {
        //   background: #ffffff33;
        // }

        &-active {
          background: linear-gradient(
                  90deg,
                  rgba(52, 36, 71, 1) 0%,
                  rgba(50, 242, 111, 1) 100%
          );
          color: #ffffff;

          svg path {
            fill-opacity: 1;
          }
        }

        span {
          width: 24px;
          height: 24px;
        }
      }
    }

    &-user {
      width: 100%;
      padding: 20px;
      background: #ffffff05;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      .user__account,
      .user__actions,
      .user__logout {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }

      .user__account {
        &-ava {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &-info {
          p {
            font-weight: 600;
            font-size: 24px;

            color: #ffffff;
          }
        }
      }

      .user__actions {
        gap: 50px;

        .user__action {
          h2 {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 700;
            font-size: 28px;
            color: #ffffff;
            margin-top: 4px;
          }
        }
      }

      .user__logout {
        background: #ff4b5430;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.4s ease-in-out;

        svg {
          transition: all 0.4s ease-in-out;
        }

        &:hover {
          opacity: 1;

          svg {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  &__body {
    padding: 20px;
    background: #ffffff05;
    margin-top: 30px;
    border-radius: 16px;

    h1 {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 30px;
      color: #ffffff;
    }

    &-cards {
      min-height: 650px;

      .cards__body {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px;
      }
    }

    .navigation {
      width: 100%;

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
  }

  .filters {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;

    .filter-item {
      width: 100%;
      max-width: 33%;

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
          width: 100%;
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

  /* width */
  .history__table::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  .history__table::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  .history__table::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  /* Handle on hover */
  .history__table::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.20);
  }

  .history__table {
    max-height: 705px;
    overflow: auto;
    padding-right: 15px;

    .table {
      width: 100%;
      margin-bottom: 20px;
      border-collapse: separate; /* Измените на separate */
      border-spacing: 0 10px; /* Отступ между строками 10px */

      thead{
        position: sticky;
        top: 0;
        background: rgb(26 21 38);
      }

      th {
        text-align: start;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
        padding: 10px 20px;
        border: none;
      }

      td {
        padding: 5px;
        border: none;
      }

      tbody tr {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        margin-bottom: 10px;

        td {
          padding: 11.5px 20px;
        }

        td.id {
          font-weight: 700;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.5);
        }

        .method-pay {

          &__info {
            display: flex;
            align-items: center;
            gap: 10px;

            p {
              font-weight: 700;
              font-size: 16px;
            }
          }

          &__icon {
            display: flex;
            align-items: center;
          }
        }

        .sum {
          p {
            font-weight: 700;
          }

          &__valuta {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          &__number {
            display: flex;
            align-items: start;
            gap: 4px;
          }
        }

        .bonuses {

          &__body {
            width: fit-content;
            display: flex;
            align-items: center;
            padding: 4px 6px;
            gap: 4px;
            background: rgba(50, 242, 111, 0.2);
            border-radius: 4px;

            p {
              font-weight: 700;
              font-size: 12px;
              line-height: 15px;
              color: #32F26F;
              text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);

            }
          }
        }

        .date {
        }

        .status {

          &__icon {
            display: flex;
            align-items: center;
          }
        }

        td:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        td:last-child {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }

      tbody tr.error {
        background: rgba(255, 75, 85, 0.1);
      }
    }


  }
}
</style>
