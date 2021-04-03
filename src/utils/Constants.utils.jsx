import { isWebpSupported } from "react-image-webp/dist/utils";

export const BLOG_LINK = "/blog/";

export const iPad =
  !!window.navigator.userAgent.match(/iPad/i) ||
  /* With iPadOS, mobile safari requests desktop websites by default by using the MacOS Safari user
   agent string. The current workaround is to check if it's a MacOS Safari UserAgent + if it
    supports more than 0 touch points (touch screen). This might cause issues in the future but
    it is the only known workaround for now. https://developer.apple.com/forums/thread/119186 */
  (!!window.navigator.userAgent.match(/Macintosh; Intel Mac OS X/i) &&
    navigator.maxTouchPoints > 0);

export const iPhone = !!window.navigator.userAgent.match(/iPhone/i);
export const iOS = iPad || iPhone;
export const IS_WEBP_SUPPORTED = isWebpSupported();
