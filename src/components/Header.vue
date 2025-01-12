<template>
  <header class="header">
    <a href="/" class="header__logo">
      <img src="/logo.svg" alt="logo"/>
    </a>
    <div v-if="!isLogin" class="header__auth header__auth-noLog">
      <a href="#" class="auth__btn auth__btn--login" @click="login">Авторизация</a>
      <a href="#" class="auth__btn-support">
        <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 10.776C24 4.71 19.29 0 13.5 0C7.70999 0 3 4.71 3 10.5C1.2555 11.3955 0 13.044 0 15V18C0 19.1935 0.474105 20.3381 1.31802 21.182C2.16193 22.0259 3.30652 22.5 4.5 22.5H5.99999C6.39782 22.5 6.77935 22.342 7.06065 22.0607C7.34196 21.7794 7.49999 21.3978 7.49999 21V12C7.49999 11.6022 7.34196 11.2206 7.06065 10.9393C6.77935 10.658 6.39782 10.5 5.99999 10.5C5.99999 8.51088 6.79017 6.60322 8.19669 5.1967C9.60321 3.79018 11.5109 3 13.5 3C15.4891 3 17.3968 3.79018 18.8033 5.1967C20.2098 6.60322 21 8.51088 21 10.5C20.6022 10.5 20.2206 10.658 19.9393 10.9393C19.658 11.2206 19.5 11.6022 19.5 12V21C19.5 21.3978 19.658 21.7794 19.9393 22.0607C20.2206 22.342 20.6022 22.5 21 22.5V24H17.112C16.803 23.1285 15.978 22.5 15 22.5H12C11.4033 22.5 10.831 22.7371 10.409 23.159C9.98704 23.581 9.74999 24.1533 9.74999 24.75C9.74999 25.3467 9.98704 25.919 10.409 26.341C10.831 26.7629 11.4033 27 12 27H21C21.7956 27 22.5587 26.6839 23.1213 26.1213C23.6839 25.5587 24 24.7957 24 24V22.2255C24.8755 21.9178 25.6342 21.3462 26.1715 20.5895C26.7087 19.8328 26.9982 18.9281 27 18V15C26.9983 14.0721 26.7089 13.1675 26.1716 12.411C25.6343 11.6545 24.8755 11.0832 24 10.776L27 7.52885L24 10.776Z"
              fill="white"
          />
        </svg>
      </a>
    </div>

    <div v-if="isLogin" class="header__auth">
      <div class="auth__check">
        <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <circle
              cx="10"
              cy="10.5"
              r="9.5"
              fill="#A759FF"
              stroke="url(#paint0_linear_2190_397)"
          />
          <path
              d="M9.68714 11.5192L7.963 16.864L13.637 9.4147H10.3454L12.0382 4.13672L6.36426 11.5192H9.68714Z"
              fill="white"
          />
          <defs>
            <linearGradient
                id="paint0_linear_2190_397"
                x1="2.27273"
                y1="3.22727"
                x2="15.4545"
                y2="20.5"
                gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CA96FF"/>
              <stop offset="1" stop-color="#A759FF"/>
            </linearGradient>
          </defs>
        </svg>
        39.6
      </div>
      <a href="#" class="auth__btn auth__btn--topup">Пополнить</a>
      <RouterLink to="/profile" class="auth__ava">
        <img title="profile" src="/ava-img.png" alt="ava"/>
      </RouterLink>

      <a @click="openNotificationModel"
         :class="['auth__btn-support', 'auth__btn-notification', { 'active-class': openNotification }]">
        <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.3739 8.59722V7.8115C18.3739 3.49733 14.8486 0 10.5 0C6.15132 0 2.62602 3.49733 2.62602 7.8115V8.59722C2.62602 9.54018 2.34467 10.462 1.81743 11.2465L0.525421 13.1693C-0.654709 14.9254 0.246225 17.3124 2.29875 17.8678C7.66819 19.3205 13.3318 19.3205 18.7012 17.8678C20.7538 17.3124 21.6547 14.9254 20.4745 13.1693L19.1826 11.2465C18.6553 10.462 18.3739 9.54018 18.3739 8.59722ZM10.5002 23C8.61859 23 6.94531 22.0495 5.88017 20.5745C8.94709 21.0272 12.0533 21.0272 15.1202 20.5745C14.055 22.0495 12.3818 23 10.5002 23Z"
              fill="white"
          />
        </svg>
      </a>

      <div v-if="openNotification" class="mini-notification__block" ref="notificationBlock">
        <div class="notification-cards">
          <div class="notification-cards__card new_notification">
            <div class="card-head">
              <p>
                Оплата
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>

                21.11.2024 в 14:34
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>
                Новое
              </p>
            </div>
            <div class="card-body">
              <div class="card-body__success">
                <p>Успешная оплата на сумму</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  2 334
                </p>
              </div>
              <div class="card-body__available">
                <p>Доступно</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  6 437
                </p>
              </div>
            </div>
          </div>
          <div class="notification-cards__card">
            <div class="card-head">
              <p>
                Оплата
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>

                21.11.2024 в 14:34
              </p>
            </div>
            <div class="card-body">
              <div class="card-body__success">
                <p>Успешная оплата на сумму</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  2 334
                </p>
              </div>
              <div class="card-body__available">
                <p>Доступно</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  6 437
                </p>
              </div>
            </div>
          </div>
          <div class="notification-cards__card">
            <div class="card-head">
              <p>
                Оплата
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>

                21.11.2024 в 14:34
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>
                Новое
              </p>
            </div>
            <div class="card-body">
              <div class="card-body__success">
                <p>Успешная оплата на сумму</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  2 334
                </p>
              </div>
              <div class="card-body__available">
                <p>Доступно</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  6 437
                </p>
              </div>
            </div>
          </div>
          <div class="notification-cards__card">
            <div class="card-head">
              <p>
                Оплата
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>

                21.11.2024 в 14:34
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>
                Новое
              </p>
            </div>
            <div class="card-body">
              <div class="card-body__success">
                <p>Успешная оплата на сумму</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  2 334
                </p>
              </div>
              <div class="card-body__available">
                <p>Доступно</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  6 437
                </p>
              </div>
            </div>
          </div>
          <div class="notification-cards__card">
            <div class="card-head">
              <p>
                Оплата
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>

                21.11.2024 в 14:34
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>
                Новое
              </p>
            </div>
            <div class="card-body">
              <div class="card-body__success">
                <p>Успешная оплата на сумму</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  2 334
                </p>
              </div>
              <div class="card-body__available">
                <p>Доступно</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  6 437
                </p>
              </div>
            </div>
          </div>
          <div class="notification-cards__card">
            <div class="card-head">
              <p>
                Оплата
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>

                21.11.2024 в 14:34
                <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1" cy="1.5" r="1" fill="white" fill-opacity="0.5"/>
                </svg>
                Новое
              </p>
            </div>
            <div class="card-body">
              <div class="card-body__success">
                <p>Успешная оплата на сумму</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  2 334
                </p>
              </div>
              <div class="card-body__available">
                <p>Доступно</p>
                <p class="sum">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM6.13114 14.5L7.7116 9.46063H4.66563L9.86677 2.5L8.31505 7.47638H11.3323L6.13114 14.5Z"
                          fill="white"/>
                  </svg>

                  6 437
                </p>
              </div>
            </div>
          </div>
        </div>
        <RouterLink to="/notification" class="notification-btn">
          Все уведомления
        </RouterLink>
      </div>

      <a href="#" class="auth__btn-support auth__btn-settings">
        <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5596 0.175076C13.1309 5.07743e-08 12.5872 0 11.5 0C10.4127 0 9.86909 5.07743e-08 9.44032 0.175076C8.86856 0.408515 8.4143 0.856267 8.17748 1.41982C8.06937 1.67709 8.02706 1.97628 8.0105 2.41269C7.98617 3.05403 7.65249 3.64767 7.08861 3.96857C6.52473 4.28945 5.83631 4.27747 5.26066 3.97757C4.86894 3.77349 4.58492 3.66001 4.30482 3.62367C3.69126 3.54405 3.07073 3.70793 2.57976 4.07928C2.21153 4.35779 1.93971 4.82184 1.39609 5.74992C0.852472 6.67802 0.580668 7.14205 0.520087 7.59565C0.439301 8.20042 0.605574 8.81206 0.982318 9.29603C1.15428 9.51694 1.39594 9.70255 1.77102 9.93485C2.32242 10.2764 2.67721 10.8582 2.67717 11.5C2.67714 12.1418 2.32236 12.7235 1.77102 13.0649C1.39588 13.2973 1.15417 13.4831 0.982202 13.704C0.605458 14.1879 0.439197 14.7995 0.519971 15.4043C0.580552 15.8578 0.852368 16.322 1.39598 17.25C1.93959 18.1781 2.21141 18.6422 2.57964 18.9206C3.07061 19.2919 3.69114 19.4558 4.30471 19.3762C4.58479 19.3399 4.86879 19.2264 5.26048 19.0224C5.83617 18.7225 6.52463 18.7105 7.08855 19.0314C7.65247 19.3523 7.98616 19.9459 8.0105 20.5874C8.02706 21.0237 8.06937 21.323 8.17748 21.5802C8.4143 22.1437 8.86856 22.5915 9.44032 22.825C9.86909 23 10.4127 23 11.5 23C12.5872 23 13.1309 23 13.5596 22.825C14.1314 22.5915 14.5857 22.1437 14.8224 21.5802C14.9306 21.323 14.973 21.0237 14.9895 20.5873C15.0138 19.9459 15.3474 19.3523 15.9113 19.0314C16.4752 18.7104 17.1637 18.7225 17.7394 19.0224C18.1311 19.2264 18.415 19.3398 18.6951 19.3761C19.3087 19.4558 19.9292 19.2919 20.4202 18.9206C20.7885 18.6421 21.0603 18.1781 21.6039 17.2499C22.1475 16.3218 22.4193 15.8578 22.4799 15.4043C22.5606 14.7995 22.3944 14.1878 22.0177 13.7039C21.8456 13.4829 21.604 13.2972 21.2288 13.0649C20.6776 12.7235 20.3228 12.1417 20.3228 11.4999C20.3228 10.8581 20.6776 10.2765 21.2288 9.93508C21.6041 9.70267 21.8458 9.51706 22.0178 9.29603C22.3945 8.81214 22.5608 8.2005 22.4801 7.59572C22.4194 7.14213 22.1476 6.67808 21.604 5.75C21.0604 4.82192 20.7886 4.35787 20.4203 4.07936C19.9293 3.70801 19.3088 3.54413 18.6953 3.62375C18.4152 3.66009 18.1311 3.77356 17.7395 3.97762C17.1638 4.27753 16.4753 4.28952 15.9114 3.9686C15.3476 3.6477 15.0138 3.05401 14.9894 2.41263C14.9729 1.97625 14.9306 1.67708 14.8224 1.41982C14.5857 0.856267 14.1314 0.408515 13.5596 0.175076ZM11.5 15.4043C13.9444 15.4043 15.1667 13.4054 15.1667 11.5C15.1667 9.59457 13.9444 7.59572 11.5 7.59572C9.05553 7.59572 7.83333 9.59457 7.83333 11.5C7.83333 13.4054 9.05553 15.4043 11.5 15.4043Z"
              fill="white"
          />
        </svg>
      </a>

      <a v-if="isLogin == true" href="#" class="auth__btn-support">
        <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 10.776C24 4.71 19.29 0 13.5 0C7.70999 0 3 4.71 3 10.5C1.2555 11.3955 0 13.044 0 15V18C0 19.1935 0.474105 20.3381 1.31802 21.182C2.16193 22.0259 3.30652 22.5 4.5 22.5H5.99999C6.39782 22.5 6.77935 22.342 7.06065 22.0607C7.34196 21.7794 7.49999 21.3978 7.49999 21V12C7.49999 11.6022 7.34196 11.2206 7.06065 10.9393C6.77935 10.658 6.39782 10.5 5.99999 10.5C5.99999 8.51088 6.79017 6.60322 8.19669 5.1967C9.60321 3.79018 11.5109 3 13.5 3C15.4891 3 17.3968 3.79018 18.8033 5.1967C20.2098 6.60322 21 8.51088 21 10.5C20.6022 10.5 20.2206 10.658 19.9393 10.9393C19.658 11.2206 19.5 11.6022 19.5 12V21C19.5 21.3978 19.658 21.7794 19.9393 22.0607C20.2206 22.342 20.6022 22.5 21 22.5V24H17.112C16.803 23.1285 15.978 22.5 15 22.5H12C11.4033 22.5 10.831 22.7371 10.409 23.159C9.98704 23.581 9.74999 24.1533 9.74999 24.75C9.74999 25.3467 9.98704 25.919 10.409 26.341C10.831 26.7629 11.4033 27 12 27H21C21.7956 27 22.5587 26.6839 23.1213 26.1213C23.6839 25.5587 24 24.7957 24 24V22.2255C24.8755 21.9178 25.6342 21.3462 26.1715 20.5895C26.7087 19.8328 26.9982 18.9281 27 18V15C26.9983 14.0721 26.7089 13.1675 26.1716 12.411C25.6343 11.6545 24.8755 11.0832 24 10.776L27 7.52885L24 10.776Z"
              fill="white"
          />
        </svg>
      </a>
    </div>
  </header>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";
import {RouterLink} from 'vue-router';

const isLogin = ref(false);
const openNotification = ref(false);
const notificationBlock = ref(null);

const openNotificationModel = () => {
  openNotification.value = !openNotification.value;
};

const handleClickOutside = (event) => {
  const notificationButton = event.target.closest('.auth__btn-notification');

  // Проверяем, был ли клик вне блока уведомлений и кнопки
  if (notificationBlock.value && !notificationBlock.value.contains(event.target) && !notificationButton) {
    openNotification.value = false;
  }
};

onMounted(() => {
  // Добавляем обработчик события клика на документ
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  // Удаляем обработчик события при уничтожении компонента
  document.removeEventListener('click', handleClickOutside);
});

const login = () => {
  isLogin.value = !isLogin.value;
};

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px 50px 0px;

  a {
    text-decoration: none;

    img {
      width: 100%;
      max-width: 230px;
    }
  }

  &__logo {
    display: block;
  }

  &__auth {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

    .auth__btn {
      background: linear-gradient(
              90deg,
              rgba(62, 253, 123, 1) 0%,
              rgba(23, 216, 83, 1) 100%
      );
      padding: 6.5px 16.5px;
      border: none;
      cursor: pointer;
      border-radius: 8px;
      filter: drop-shadow(0px 0px 50px #48fd7840);
      color: #151022;
      font-size: 20px;
      font-weight: bold;
      transition: filter 0.3s ease-in-out, background-size 0.4s ease-in-out;

      &--topup {
        color: #fff;
        background: linear-gradient(
                325deg,
                rgba(95, 10, 167, 1) 0%,
                rgba(167, 89, 255, 1) 100%
        );
        background-size: 100%;
        filter: drop-shadow(0px 0px 20px #a352ea50);

        &:hover {
          background: linear-gradient(
                  160deg,
                  rgba(61, 7, 105, 1) 0%,
                  rgba(131, 36, 238, 1) 100%
          );
          background-size: 150%;
        }
      }

      &--login {
        background: linear-gradient(
                90deg,
                rgba(62, 253, 123, 1) 0%,
                rgba(23, 216, 83, 1) 100%
        );
      }
    }

    .auth__check {
      display: flex;
      align-items: center;
    }

    .auth__btn-support {
      width: 43px;
      height: 43px;
      padding: 8px;
      border-radius: 8px;
      background: #ffffff15;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease-in-out;

      opacity: 0.5;

      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }

    .auth__check {
      display: flex;
      align-items: center;
      gap: 10px;

      font-weight: 700;
      font-size: 16px;

      color: #a759ff;

      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    }

    .auth__ava {
      width: 43px;
      height: 43px;
      display: block;
      border-radius: 8px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        opacity: 0.5;
      }

      &:hover {
        img {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }

    .auth__btn-notification {
      cursor: pointer;
    }

    .auth__btn-notification.active-class {
      opacity: 1;
    }

    .auth__btn-notification.active-class svg path {
      fill: #fff;
      opacity: 1;
    }

    .mini-notification__block {
      width: 336px;
      height: 286px;
      position: absolute;
      top: 65px;
      left: auto;
      right: 20%;
      padding: 10px;
      z-index: 99;
      background: linear-gradient(3.43deg, #3F067C 2.83%, #290544 97.17%);
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      gap: 10px;

      .notification-cards {
        max-height: 220px;
        overflow: auto;
        padding-right: 10px;

        display: flex;
        flex-direction: column;
        gap: 6px;

        &__card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 6px 10px;
          gap: 4px;

          border: 1px solid transparent;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.1);
          transition: all .3s ease-in-out;
          cursor: pointer;
        }

        &__card.new_notification {
          border: 1px solid #A759FF;
          background: rgba(255, 255, 255, 0.2);
        }

        &__card:hover {
          border: 1px solid #A759FF;
          background: rgba(255, 255, 255, 0.2);
        }

        .card-head {
          p {
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 600;
            font-size: 12px;

            color: rgba(255, 255, 255, 0.5);
          }
        }

        .card-body {
          p {
            font-weight: 400;
            font-size: 14px;

            color: #FFFFFF;
          }

          div, .sum {
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .sum {
            font-weight: 600;
            font-size: 14px;
            color: #FFFFFF;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
            gap: 2px;
          }

          &__success {

          }

          &__available {

          }
        }
      }

      /* width */
      .notification-cards::-webkit-scrollbar {
        width: 6px;
      }

      /* Track */
      .notification-cards::-webkit-scrollbar-track {
        background: transparent;
      }

      /* Handle */
      .notification-cards::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 4px;
      }

      /* Handle on hover */
      .notification-cards::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.7);
      }


      .notification-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        font-weight: 700;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.7);
        transition: background-color .3s ease-in-out;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
}
</style>
