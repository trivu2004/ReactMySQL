import React, { useEffect } from "react";

const BotStarChat = () => {
  useEffect(() => {
    const BotStar = {
      appId: "s6ee0b9fc-239b-473c-be07-7b3bb97721a0",
      mode: "livechat",
    };

    // Khởi tạo BotStar API
    window.BotStarApi = function () {
      (window.BotStarApi.q = window.BotStarApi.q || []).push(arguments);
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.botstar.com/static/js/widget.js";

    script.onload = () => {
      // Khởi tạo bot sau khi script đã được tải
      window.BotStarApi("init", BotStar);
      console.log("BotStar script loaded and bot initialized");
    };

    script.onerror = () => {
      console.error("Failed to load BotStar script");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Không cần render gì cả, bot sẽ tự động hiển thị
};

export default BotStarChat;
