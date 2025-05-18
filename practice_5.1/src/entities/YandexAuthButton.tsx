'use client';

import { YandexAuthButtonProps } from "@/types";

export default function YandexAuthButton({
  onClick,
}: YandexAuthButtonProps) {
  
  return (
    <div>
      <button
      onClick={onClick}
      className={`
        flex items-center justify-center
        bg-black hover:bg-gray-800
        text-white font-medium
        rounded-lg px-5 py-3
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      <span className="mr-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.04 12c0-5.523 4.476-10 10-10 5.522 0 10 4.477 10 10s-4.478 10-10 10c-5.524 0-10-4.477-10-10z" fill="#fff"/>
          <path d="M13.32 7.666h-.924c-1.694 0-2.585.858-2.585 2.123 0 1.43.616 2.1 1.881 2.959l1.045.704-3.003 4.487H7.49l2.695-4.014c-1.55-1.111-2.42-2.19-2.42-4.015 0-2.288 1.595-3.85 4.62-3.85h3.003v11.868H13.32V7.666z" fill="#000"/>
        </svg>
      </span>
      Войти с Яндекс ID
    </button>
    </div>
  );
}