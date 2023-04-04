
export function getMediaDevices(): Promise<MediaDeviceInfo[]> {
  return navigator.mediaDevices.enumerateDevices();
}
