import React, { forwardRef } from 'react'

const FlowerIcon = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="72"
      viewBox="0 0 20 32"
      fill="none"
      className={props.className}
    >
      <path
        ref={ref}
        d="M12.8298 25.0685C18.8032 20.5657 17.226 16.6952 16.7765 16.1695C16.2203 15.5219 14.6127 17.0152 13.8584 18.3562C13.4048 19.2222 13.3091 20.2317 13.5917 21.1676C13.7844 21.8315 13.8158 22.5318 13.6833 23.2103C13.5507 23.8888 13.2582 24.5259 12.8298 25.0685ZM12.8298 25.0685C9.6527 27.8571 10.3308 30.9123 10.3308 30.9123C10.3308 30.9123 9.62984 28.9847 10.1556 27.6362C10.1556 27.6362 10.9175 24.139 7.82413 22.6381C7.21289 22.3228 6.54938 22.1214 5.86603 22.0438C2.40698 21.1523 2.16317 19.0876 2.05651 18.5466C1.94407 17.9153 1.6829 17.3198 1.2946 16.8095C0.631746 16.0476 1.2946 16.139 1.2946 16.139C2.34622 16.1233 3.38788 16.3446 4.34222 16.7866C6.50603 17.8533 6.30794 20.2762 6.31556 20.4895C6.31556 21.1219 6.4146 21.8076 8.20508 22.8819C10.9479 24.52 10.0641 27.8266 10.0641 27.8266C10.0641 27.8266 9.4927 29.2895 10.6279 31.7352C10.6279 31.7352 9.36318 29.2819 10.2394 27.3695C10.8508 26.3184 11.0847 25.0898 10.9022 23.8876C10.6965 21.8609 10.0184 21.8228 10.6508 19.3923C11.0628 17.8869 11.1202 16.3065 10.8184 14.7752C10.7346 14.1733 10.3765 12.3752 11.047 11.5371C11.1622 11.3943 11.3148 11.2864 11.4878 11.2252C11.6608 11.1641 11.8474 11.1523 12.0268 11.191C12.2061 11.2297 12.3712 11.3175 12.5036 11.4445C12.6359 11.5715 12.7304 11.7328 12.7765 11.9104C12.9441 12.4285 14.0489 14.6381 15.207 14.7752C15.5673 14.8153 15.9312 14.7431 16.249 14.5685C16.5667 14.394 16.8228 14.1256 16.9822 13.8C17.0893 13.5399 17.2497 13.3052 17.4531 13.1109C17.6566 12.9167 17.8984 12.7673 18.1632 12.6723C18.9251 12.4057 18.8565 11.6971 18.2546 11.4914C17.1091 11.2175 16.012 10.7705 15.0013 10.1657C13.9118 9.40377 11.1917 8.50473 10.7498 10.5009C10.5441 12.4514 12.1898 12.9847 12.9213 11.6895C13.6527 10.3943 15.1689 10.3409 16.7308 10.8133C18.2927 11.2857 19.4203 10.5847 18.7118 8.71806C18.4129 8.13582 18.2146 7.5073 18.1251 6.85901C18.1022 6.65903 18.1022 6.45709 18.1251 6.25711C18.2241 5.5489 18.0847 4.82788 17.7289 4.20758C17.1422 3.37711 15.6794 2.82853 13.9727 4.49711L13.767 4.66473C12.8451 5.28949 12.5251 5.28187 12.327 6.82854C12.2127 7.49901 11.6108 7.34663 11.2984 8.11616C11.0906 9.177 11.0214 10.2604 11.0927 11.339C11.0927 11.339 11.6489 9.22092 13.3175 8.88568C14.986 8.55044 14.4298 7.66663 13.8203 7.36187C13.2108 7.18663 12.0603 6.27996 13.0127 5.55615C14.1251 4.92377 15.2984 4.03234 14.666 3.14092C14.5999 2.99331 14.5046 2.86065 14.3857 2.75094C14.2669 2.64123 14.1271 2.55676 13.9747 2.50264C13.8222 2.44851 13.6604 2.42586 13.499 2.43604C13.3376 2.44622 13.18 2.48902 13.0356 2.56187C12.5251 2.68377 11.9308 1.79996 11.3822 1.26663C10.6203 0.580916 10.0641 1.39615 9.74413 1.72377C9.42413 2.05139 8.56318 2.39425 8.13651 3.01139C7.70984 3.62853 8.34222 4.14663 9.23365 4.48949C10.1251 4.83235 9.88127 6.08949 9.46222 6.54663C9.04318 7.00377 7.93841 8.15425 9.12699 8.75615C10.3156 9.35806 10.7803 10.0133 10.4679 10.1047C10.1556 10.1962 9.3708 9.40377 9.78222 8.30663C10.1937 7.20949 10.9022 5.88377 9.31746 5.16758C7.7327 4.45139 7.4127 2.71425 5.98794 2.88187C4.56318 3.04949 5.2108 3.87234 4.50222 4.83235C3.79365 5.79235 2.52889 6.04377 3.45841 7.22473C3.6479 7.46029 3.87433 7.66356 4.12889 7.82663C4.93651 8.34473 5.1727 8.58854 5.30222 9.15235C5.43175 9.71616 6.6508 10.8666 8.74603 10.6762L10.9556 11.4381L8.66984 10.5619C8.13502 10.3657 7.62389 10.1101 7.14603 9.79996C6.25779 9.165 5.24074 8.7332 4.16699 8.5352C2.2927 8.27615 2.7346 9.29711 3.03937 9.66282C3.33244 9.85377 3.54094 10.15 3.62177 10.4904C3.7026 10.8307 3.64957 11.1891 3.47365 11.4914C2.92508 12.5962 3.19175 13.2133 3.78603 13.2895C4.10338 13.3189 4.40687 13.4335 4.66439 13.6213C4.92191 13.8091 5.12387 14.063 5.24889 14.3562C5.73651 15.1181 6.71175 15.08 7.53461 14.4628C8.35746 13.8457 10.2317 12.4971 10.5365 12.2762C10.8413 12.0552 11.0089 11.5828 10.6737 11.7123C10.3384 11.8419 8.34984 13.5638 8.20508 14.4476C7.90794 16.2609 10.4908 16.2609 10.4908 16.2609C11.6734 16.3185 12.8543 16.1157 13.9498 15.6666C15.3441 14.9504 14.1098 13.4343 14.1098 13.4343C14.1098 13.4343 12.5022 11.5828 11.2451 11.5828"
        stroke="#272727"
        strokeWidth="0.203175"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDashoffset="300"
        strokeDasharray="300"
      />
    </svg>
  )
})
FlowerIcon.displayName = 'FlowerIcon'
export default FlowerIcon