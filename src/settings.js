import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

const appId = ""; // App ID from Agora
const appCertificate = ""; // App Ceritificate from Agora

const uid = 0;
const channelName = "main";
const role = RtcRole.SUBSCRIBER; // default role subscriber
const expireTime = 3600; //default expire time 1hr

//calculate privilege expire time
const currentTime = Math.floor(Date.now() / 1000);
const privilegeExpireTime = currentTime + expireTime;

const token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpireTime); // Temp Token 

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export { channelName };