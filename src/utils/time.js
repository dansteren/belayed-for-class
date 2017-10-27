import moment from "moment";

/**
 * Converts a timestamp into the appropriate format for a message
 */
export function formatTime(timestamp) {
  const currentTime = Date.now();
  const weekInMS = 604800000;
  const dayInMS = 86400000;
  const olderThanAWeek = timestamp < currentTime - weekInMS;
  const olderThanADay = timestamp < currentTime - dayInMS;
  if (olderThanAWeek) {
    return moment(timestamp).format("MMM D, h:mm A");
  }
  if (olderThanADay) {
    return moment(timestamp).format("ddd, h:mm A");
  }
  return moment(timestamp).format("h:mm A");
}
