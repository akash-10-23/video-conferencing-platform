import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = ""; // App ID from Agora
const token = ""; // Temp Token 

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";