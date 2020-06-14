import {isWebpSupported} from "react-image-webp/dist/utils";

export const BLOG_LINK = "/blog/";
export const iPad = !!window.navigator.userAgent.match(/iPad/i);
export const iPhone = !!window.navigator.userAgent.match(/iPhone/i);
export const iOS = iPad || iPhone;
export const IS_WEBP_SUPPORTED = isWebpSupported();
