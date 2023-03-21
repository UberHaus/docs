import * as React from "react";
import styles from "./CommunitySection.module.css";

const CommunitySection = () => {
  return (
    <section className={styles.communityContainer}>
      <div className={styles.threeGrid}>
        <div className={styles.contentFlex}>
          <h2 className={styles.communityCTAHeading}>Community meetings.</h2>
          <div className={styles.socialCopyContainer}>
            <p className={styles.socialCopy}>
              PublicHAUS is a vibrant and large community of DAOs, builders,
              tools and apps. Come to our weekly community rituals.
            </p>
          </div>
        </div>
        <div className={styles.socialFlex}>
          <div className={styles.socialContainer}>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M18.578 32.2089V32.225C17.0967 32.1331 15.9092 30.6876 15.9092 28.8725C15.9092 26.997 17.1939 25.5113 18.728 25.5113C20.262 25.5113 21.5427 26.9926 21.5427 28.8725C21.5427 30.7508 20.2592 32.2089 18.728 32.2089H18.578ZM18.728 23.5343C16.0793 23.5343 13.953 25.9363 13.953 28.8518C13.953 31.7674 16.0753 34.1652 18.728 34.1652C21.381 34.1652 23.499 31.7672 23.499 28.8518C23.499 25.9364 21.3727 23.5343 18.728 23.5343Z"
                  fill="#F6F1EF"
                  stroke="white"
                  stroke-width="0.3"
                />
                <path
                  d="M50.5906 24.6328L50.5908 24.6335C51.6724 28.9599 52.3119 32.2069 52.6806 34.3977C52.8649 35.4931 52.9815 36.3246 53.0519 36.895C53.0871 37.1802 53.1107 37.4004 53.1254 37.5559C53.1386 37.6944 53.1454 37.7891 53.1459 37.8306C53.1566 37.9605 53.1413 38.0912 53.1009 38.2151C53.0597 38.3412 52.9932 38.4576 52.9056 38.5572L52.902 38.5613L52.902 38.5612C50.7595 40.8269 48.1788 42.6334 45.3166 43.871L45.3155 43.8715C42.6856 44.9842 39.9176 45.7371 37.0865 46.1097L37.0767 46.111H37.0669H36.9841H36.9832C36.8125 46.11 36.645 46.0643 36.4974 45.9785C36.35 45.8927 36.2275 45.77 36.1422 45.6223C36.1421 45.6222 36.1421 45.622 36.142 45.6219L33.9586 41.8739C31.4946 42.2903 28.9993 42.4943 26.5002 42.4838C24.0012 42.497 21.5057 42.2957 19.0413 41.882L16.8584 45.6213C16.8583 45.6215 16.8582 45.6217 16.858 45.6219C16.765 45.7847 16.6271 45.9172 16.4608 46.0038C16.2943 46.0906 16.1063 46.1275 15.9194 46.1104L15.9133 46.1098L15.9133 46.1097C13.0799 45.7321 10.3105 44.9736 7.68013 43.8548L7.67931 43.8545C4.81713 42.6169 2.2364 40.8104 0.093912 38.5447L0.0901804 38.5407L0.0902542 38.5407C0.00264587 38.441 -0.0637774 38.3246 -0.104975 38.1985C-0.145615 38.0741 -0.160869 37.9428 -0.149854 37.8124C-0.147691 37.7385 -0.119552 37.4269 -0.050636 36.8874C0.0219088 36.3194 0.140873 35.4897 0.326747 34.3954C0.6985 32.2069 1.33796 28.9601 2.40917 24.6338L2.40944 24.6328C3.5449 20.1876 5.1475 15.8751 7.19047 11.7672L7.19256 11.7629L7.19263 11.763C7.27411 11.6113 7.3927 11.4826 7.53732 11.3891L7.54168 11.3863L7.54173 11.3864C9.54539 10.1873 11.6604 9.18476 13.8571 8.39291C17.9282 6.89635 19.8673 6.88913 19.9737 6.8891M50.5906 24.6328L20.951 7.72993C20.9177 7.49505 20.8002 7.28027 20.6203 7.12559C20.4405 6.97099 20.2107 6.88695 19.9737 6.8891M50.5906 24.6328C49.4549 20.1877 47.8523 15.8751 45.8096 11.7672L45.8096 11.7671L45.8074 11.763C45.7259 11.6113 45.6073 11.4826 45.4627 11.3891L45.4628 11.3891L45.458 11.3862C43.4485 10.1904 41.3279 9.19205 39.126 8.40518C35.057 6.92598 33.118 6.88928 33.0098 6.8891M50.5906 24.6328L20.951 7.7303L21.179 9.31468C24.7126 8.97349 28.2709 8.97349 31.8045 9.31468L32.0324 7.7303C32.0656 7.49528 32.1832 7.28035 32.3631 7.12559C32.5429 6.97097 32.7728 6.88694 33.0098 6.8891M19.9737 6.8891C19.9739 6.8891 19.9742 6.8891 19.9744 6.8891V7.0391L19.9729 6.88911C19.9732 6.88911 19.9734 6.88911 19.9737 6.8891ZM33.0098 6.8891C33.0101 6.88911 33.0103 6.88911 33.0105 6.88911L33.0091 7.0391V6.8891C33.0093 6.8891 33.0096 6.8891 33.0098 6.8891ZM43.5575 35.3372L43.5586 35.3363C43.6549 35.25 43.7671 35.1835 43.8891 35.1406C44.011 35.0977 44.1402 35.0792 44.2692 35.0863C44.3983 35.0933 44.5247 35.1257 44.6412 35.1816C44.7578 35.2375 44.8622 35.3157 44.9484 35.412C45.0347 35.5082 45.1012 35.6205 45.1441 35.7424C45.187 35.8643 45.2055 35.9935 45.1984 36.1226C45.1914 36.2516 45.159 36.378 45.1031 36.4946C45.0473 36.611 44.9692 36.7152 44.8731 36.8014C44.873 36.8016 44.8729 36.8017 44.8727 36.8018L44.7726 36.6901L43.5575 35.3372ZM43.5575 35.3372C39.9632 38.6241 34.6243 39.7301 34.2859 39.7988M43.5575 35.3372L35.9619 41.4215L37.5008 44.0616C39.9254 43.6679 42.2961 42.9932 44.5648 42.0509C47.0351 40.9765 49.2812 39.4472 51.1859 37.5428C51.0246 36.2531 50.4544 32.0786 48.714 25.1127C47.621 20.9031 46.1054 16.8147 44.1902 12.91C42.3601 11.8566 40.4416 10.9646 38.4566 10.2442L38.4541 10.2432C36.9609 9.6703 35.4171 9.23963 33.8432 8.95687L33.7402 9.65964C35.4917 10.1064 39.4532 11.2911 42.6249 13.5966L42.6251 13.5968C42.8346 13.7499 42.9747 13.9799 43.0146 14.2362C43.0545 14.4926 42.9909 14.7543 42.8379 14.9637C42.6848 15.1732 42.4548 15.3133 42.1985 15.3532C41.9422 15.3931 41.6806 15.3295 41.4711 15.1766C37.8495 12.5525 32.9046 11.4619 32.4837 11.3734C30.4983 11.135 28.5002 11.0195 26.5006 11.0275L26.4995 11.0275C24.5015 11.0205 22.5051 11.136 20.5213 11.3733L20.5195 11.3737C20.0955 11.4673 15.1294 12.5629 11.5329 15.1767C11.4292 15.2524 11.3117 15.3069 11.187 15.3372C11.0622 15.3675 10.9326 15.373 10.8057 15.3532C10.5493 15.3133 10.3193 15.1732 10.1663 14.9637C10.0132 14.7543 9.94965 14.4926 9.98955 14.2362C10.0093 14.1093 10.0539 13.9875 10.1207 13.8778C10.1875 13.7681 10.2753 13.6726 10.379 13.5968L10.3793 13.5966C13.5502 11.2916 17.5264 10.103 19.2639 9.65965L19.161 8.95673C17.5855 9.2383 16.0402 9.66904 14.546 10.2432L14.5434 10.2442L14.5434 10.2442C12.5584 10.9646 10.6401 11.8565 8.81001 12.9099C6.90613 16.8159 5.40153 20.9042 4.31913 25.1127C2.56587 32.0811 1.99584 36.2557 1.8466 37.5426C3.73963 39.4527 5.97466 40.9905 8.43561 42.0759C10.7033 43.0205 13.0741 43.6954 15.4992 44.0866L17.0374 41.4476C15.0254 40.9109 11.1234 39.5517 8.12684 36.8262M8.12684 36.8262C8.12673 36.8261 8.12661 36.826 8.1265 36.8259L8.22743 36.715L8.12729 36.8266C8.12714 36.8265 8.12699 36.8264 8.12684 36.8262ZM8.12684 36.8262C7.93277 36.652 7.81578 36.4079 7.80159 36.1474C7.78739 35.8868 7.87731 35.6312 8.05157 35.4368C8.22583 35.2425 8.47016 35.1253 8.7308 35.1111C8.99145 35.0969 9.24705 35.1868 9.4414 35.3611L9.44218 35.3618C11.2961 37.0478 13.6015 38.1648 15.4563 38.8607C16.3828 39.2083 17.1946 39.4499 17.7779 39.6046C18.0695 39.6819 18.3038 39.7375 18.4665 39.7736C18.5479 39.7916 18.6112 39.8048 18.6546 39.8134C18.6764 39.8177 18.6928 39.8207 18.7038 39.8227L18.7095 39.8236M18.7095 39.8236H18.6991C18.7119 39.8236 18.7222 39.8256 18.7148 39.8245L18.7095 39.8236ZM18.7095 39.8236H18.7239H18.7381L18.752 39.8263C21.3052 40.3121 23.8999 40.547 26.4989 40.5275L26.5007 40.5275C29.1005 40.5389 31.6952 40.2957 34.2476 39.8015L34.2617 39.7988H34.2761H34.2859M34.2859 39.7988C34.2824 39.7995 34.2794 39.8001 34.2769 39.8006C34.2767 39.8007 34.2764 39.8007 34.2761 39.8008C34.2727 39.8015 34.2705 39.8019 34.2695 39.8021L34.2761 39.8329L34.3009 39.9488V39.7988H34.2859ZM17.1157 41.3132C17.1672 41.3268 17.2175 41.3399 17.2664 41.3525L17.1879 41.4871L17.1157 41.3132Z"
                  fill="#F6F1EF"
                  stroke="white"
                  stroke-width="0.3"
                />
                <path
                  d="M34.1219 32.2089V32.225C32.6411 32.1331 31.4573 30.6878 31.4573 28.8725C31.4573 26.9968 32.7421 25.5113 34.2719 25.5113C35.8021 25.5113 37.0908 26.9931 37.0908 28.8725C37.0908 30.7506 35.8074 32.2089 34.2719 32.2089H34.1219ZM34.2719 23.5343C31.6273 23.5343 29.501 25.9364 29.501 28.8518C29.501 31.7673 31.6232 34.1652 34.2719 34.1652C36.9205 34.1652 39.047 31.7675 39.047 28.8518C39.047 25.9363 36.9206 23.5343 34.2719 23.5343Z"
                  fill="#F6F1EF"
                  stroke="white"
                  stroke-width="0.3"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="53" height="53" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span className={styles.socialCTA}>Join Discord</span>
          </div>
        </div>
        <div className={styles.socialFlex}>
          <div className={styles.socialContainer}>
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.5984 43.7507H7.37812C5.47969 43.7507 3.9375 42.1764 3.9375 40.2384V10.8719C3.9375 8.94829 5.47031 7.38354 7.35469 7.38354H11.5312V10.2546H7.35469C7.02187 10.2546 6.75 10.5322 6.75 10.8719V40.2384C6.75 40.5925 7.03125 40.8796 7.37812 40.8796H40.5984C40.95 40.8796 41.25 40.5734 41.25 40.2145V10.8958C41.25 10.5417 40.9688 10.2546 40.6219 10.2546H36.2344V7.38354H40.6219C42.5203 7.38354 44.0625 8.95786 44.0625 10.8958V40.2145C44.0625 42.1621 42.5062 43.7507 40.5984 43.7507Z"
                fill="#F6F1EF"
              />
              <path
                d="M28.6406 7.41699H19.5V10.2881H28.6406V7.41699Z"
                fill="#F6F1EF"
              />
              <path
                d="M16.9219 5.26367H14.1094V13.1592H16.9219V5.26367Z"
                fill="#F6F1EF"
              />
              <path
                d="M18.5625 11.7715H12.4688V14.6426H18.5625V11.7715Z"
                fill="#F6F1EF"
              />
              <path
                d="M33.7969 5.31152H30.9844V13.207H33.7969V5.31152Z"
                fill="#F6F1EF"
              />
              <path
                d="M35.3906 11.7715H29.2969V14.6426H35.3906V11.7715Z"
                fill="#F6F1EF"
              />
              <path
                d="M21.2156 34.9557L14.6578 28.2565L16.65 26.2276L21.2156 30.8931L31.35 20.5476L33.3422 22.5765L21.2156 34.9557Z"
                fill="#F6F1EF"
              />
            </svg>

            <span className={styles.socialCTA}>Add to Calendar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
