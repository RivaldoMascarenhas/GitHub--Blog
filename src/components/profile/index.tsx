import { useEffect, useState } from "react";
import { api } from "../../lib/Axios";
import {
  ContainerProfile,
  Github,
  Info,
  InfoContainer,
  TitleContainer,
} from "./styles";

interface UserType {
  avatar_url: any;
  name: string;
  login: string;
  bio: string;
  followers: number;
  html_url: string;
  company: string;
  location: string;
}

export function Profile() {
  const [user, setUser] = useState({} as UserType);

  async function User() {
    const user = await api.get("users/RivaldoMascarenhas");
    setUser(user.data);
  }

  useEffect(() => {
    User();
  }, []);

  return (
    <ContainerProfile>
      <img src={user.avatar_url} alt="" />
      <div>
        <TitleContainer>
          <h2>{user.name}</h2>
          <Github href={user.html_url}>
            GITHUB
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_512_32)">
                <path
                  d="M6.80357 1.67857C6.80357 1.23485 7.16267 0.875 7.60714 0.875H10.7988C10.9294 0.875 11.0349 0.896596 11.1278 0.936021C11.2006 0.974944 11.3111 1.03245 11.389 1.10854C11.389 1.10979 11.389 1.11105 11.3915 1.11205C11.5472 1.26825 11.6024 1.47215 11.625 1.67606C11.625 1.67706 11.625 1.67782 11.625 1.67857V4.89286C11.625 5.33733 11.2659 5.69643 10.8214 5.69643C10.377 5.69643 10.0179 5.33733 10.0179 4.89286V3.6197L5.76395 7.87109C5.45006 8.18499 4.9428 8.18499 4.62891 7.87109C4.31501 7.5572 4.31501 7.04994 4.62891 6.73605L8.8803 2.48214H7.60714C7.16267 2.48214 6.80357 2.12229 6.80357 1.67857ZM0.375 3.28571C0.375 2.39802 1.09445 1.67857 1.98214 1.67857H4.39286C4.83733 1.67857 5.19643 2.03842 5.19643 2.48214C5.19643 2.92662 4.83733 3.28571 4.39286 3.28571H1.98214V10.5179H9.21429V8.10714C9.21429 7.66267 9.57338 7.30357 10.0179 7.30357C10.4623 7.30357 10.8214 7.66267 10.8214 8.10714V10.5179C10.8214 11.4043 10.1007 12.125 9.21429 12.125H1.98214C1.09445 12.125 0.375 11.4043 0.375 10.5179V3.28571Z"
                  fill="#3294F8"
                />
              </g>
              <defs>
                <clipPath id="clip0_512_32">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Github>
        </TitleContainer>

        <p>{user.bio}</p>
        <InfoContainer>
          <Info>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0343 25.156C11.0343 25.28 10.8952 25.3793 10.7198 25.3793C10.5202 25.3979 10.381 25.2986 10.381 25.156C10.381 25.0319 10.5202 24.9326 10.6956 24.9326C10.877 24.914 11.0343 25.0133 11.0343 25.156ZM9.15323 24.8768C9.11089 25.0009 9.23186 25.1435 9.41331 25.1808C9.57056 25.2428 9.75202 25.1808 9.78831 25.0567C9.8246 24.9326 9.70968 24.79 9.52823 24.7341C9.37097 24.6907 9.19556 24.7527 9.15323 24.8768ZM11.8266 24.7713C11.6512 24.8148 11.5302 24.9326 11.5484 25.0753C11.5665 25.1994 11.7238 25.28 11.9052 25.2366C12.0806 25.1932 12.2016 25.0753 12.1835 24.9512C12.1653 24.8334 12.002 24.7527 11.8266 24.7713ZM15.8065 1C7.41734 1 1 7.53216 1 16.1362C1 23.0158 5.22177 28.9028 11.252 30.9747C12.0262 31.1174 12.2984 30.6273 12.2984 30.2241C12.2984 29.8395 12.2802 27.718 12.2802 26.4152C12.2802 26.4152 8.04637 27.3457 7.15726 24.5666C7.15726 24.5666 6.46774 22.7614 5.47581 22.2962C5.47581 22.2962 4.09073 21.3223 5.57258 21.3409C5.57258 21.3409 7.07863 21.4649 7.90726 22.9414C9.23185 25.3359 11.4516 24.6473 12.3165 24.2379C12.4556 23.2453 12.8488 22.5567 13.2843 22.1473C9.90323 21.7627 6.49194 21.2602 6.49194 15.2926C6.49194 13.5867 6.95161 12.7306 7.91935 11.6388C7.7621 11.2356 7.24798 9.57307 8.07661 7.4267C9.34073 7.02348 12.25 9.10161 12.25 9.10161C13.4597 8.75422 14.7601 8.57433 16.0484 8.57433C17.3367 8.57433 18.6371 8.75422 19.8468 9.10161C19.8468 9.10161 22.756 7.01728 24.0202 7.4267C24.8488 9.57927 24.3347 11.2356 24.1774 11.6388C25.1452 12.7368 25.7379 13.5929 25.7379 15.2926C25.7379 21.2788 22.1754 21.7565 18.7944 22.1473C19.3508 22.6374 19.8226 23.5679 19.8226 25.0257C19.8226 27.1162 19.8044 29.703 19.8044 30.2117C19.8044 30.6149 20.0827 31.105 20.8508 30.9623C26.8992 28.9028 31 23.0158 31 16.1362C31 7.53216 24.1956 1 15.8065 1ZM6.87903 22.3955C6.8004 22.4575 6.81855 22.6002 6.92137 22.718C7.01815 22.8173 7.15726 22.8607 7.23589 22.7801C7.31452 22.718 7.29637 22.5753 7.19355 22.4575C7.09677 22.3582 6.95766 22.3148 6.87903 22.3955ZM6.22581 21.893C6.18347 21.9736 6.24395 22.0729 6.36492 22.1349C6.46169 22.1969 6.58266 22.1783 6.625 22.0915C6.66734 22.0108 6.60685 21.9116 6.48589 21.8496C6.36492 21.8123 6.26815 21.8309 6.22581 21.893ZM8.18548 24.1014C8.08871 24.182 8.125 24.3681 8.26411 24.486C8.40323 24.6287 8.57863 24.6473 8.65726 24.548C8.73589 24.4674 8.6996 24.2813 8.57863 24.1634C8.44556 24.0207 8.26411 24.0021 8.18548 24.1014ZM7.49597 23.1895C7.39919 23.2515 7.39919 23.4128 7.49597 23.5555C7.59274 23.6982 7.75605 23.7602 7.83468 23.6982C7.93145 23.6175 7.93145 23.4562 7.83468 23.3136C7.75 23.1709 7.59274 23.1088 7.49597 23.1895Z"
                fill="#C4D4E3"
              />
            </svg>
            <p>{user.login}</p>
          </Info>

          <Info>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.6875 1C26.2402 1 27.5 2.25918 27.5 3.8125V28.1875C27.5 29.7402 26.2402 31 24.6875 31H19.0625V26.3125C19.0625 24.7598 17.8027 23.5 16.25 23.5C14.6973 23.5 13.4375 24.7598 13.4375 26.3125V31H7.8125C6.25918 31 5 29.7402 5 28.1875V3.8125C5 2.25918 6.25918 1 7.8125 1H24.6875ZM8.75 16.9375C8.75 17.4531 9.16953 17.875 9.6875 17.875H11.5625C12.0781 17.875 12.5 17.4531 12.5 16.9375V15.0625C12.5 14.5469 12.0781 14.125 11.5625 14.125H9.6875C9.16953 14.125 8.75 14.5469 8.75 15.0625V16.9375ZM15.3125 14.125C14.7969 14.125 14.375 14.5469 14.375 15.0625V16.9375C14.375 17.4531 14.7969 17.875 15.3125 17.875H17.1875C17.7031 17.875 18.125 17.4531 18.125 16.9375V15.0625C18.125 14.5469 17.7031 14.125 17.1875 14.125H15.3125ZM20 16.9375C20 17.4531 20.4219 17.875 20.9375 17.875H22.8125C23.3281 17.875 23.75 17.4531 23.75 16.9375V15.0625C23.75 14.5469 23.3281 14.125 22.8125 14.125H20.9375C20.4219 14.125 20 14.5469 20 15.0625V16.9375ZM9.6875 6.625C9.16953 6.625 8.75 7.04688 8.75 7.5625V9.4375C8.75 9.95312 9.16953 10.375 9.6875 10.375H11.5625C12.0781 10.375 12.5 9.95312 12.5 9.4375V7.5625C12.5 7.04688 12.0781 6.625 11.5625 6.625H9.6875ZM14.375 9.4375C14.375 9.95312 14.7969 10.375 15.3125 10.375H17.1875C17.7031 10.375 18.125 9.95312 18.125 9.4375V7.5625C18.125 7.04688 17.7031 6.625 17.1875 6.625H15.3125C14.7969 6.625 14.375 7.04688 14.375 7.5625V9.4375ZM20.9375 6.625C20.4219 6.625 20 7.04688 20 7.5625V9.4375C20 9.95312 20.4219 10.375 20.9375 10.375H22.8125C23.3281 10.375 23.75 9.95312 23.75 9.4375V7.5625C23.75 7.04688 23.3281 6.625 22.8125 6.625H20.9375Z"
                fill="#C4D4E3"
              />
            </svg>
            <p>{user.location}</p>
          </Info>

          <Info>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 16C14.8141 16 17.5 13.3136 17.5 10C17.5 6.68641 14.8141 4 11.5 4C8.18594 4 5.5 6.68641 5.5 10C5.5 13.3136 8.18594 16 11.5 16ZM13.8766 18.25H9.12344C4.63609 18.25 1 21.8875 1 26.3734C1 27.2734 1.7275 28 2.62469 28H20.3734C21.2734 28 22 27.2734 22 26.3734C22 21.8875 18.3625 18.25 13.8766 18.25ZM23.4578 19H19.9961C22.15 20.7672 23.5 23.4109 23.5 26.3734C23.5 26.9734 23.3219 27.5266 23.0312 28H29.5C30.3297 28 31 27.325 31 26.4578C31 22.3563 27.6438 19 23.4578 19ZM21.25 16C24.1516 16 26.5 13.6516 26.5 10.75C26.5 7.84844 24.1516 5.5 21.25 5.5C20.073 5.5 18.9981 5.90102 18.1225 6.55516C18.6625 7.59203 19 8.75313 19 10C19 11.665 18.4408 13.1941 17.5192 14.4395C18.4703 15.4 19.7875 16 21.25 16Z"
                fill="#C4D4E3"
              />
            </svg>
            <p>{user.followers} Seguidores </p>
          </Info>
        </InfoContainer>
      </div>
    </ContainerProfile>
  );
}
