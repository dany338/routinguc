export const wait = (ms = 1000) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const ROUTING_URL_API = 'http://btfx.herokuapp.com';

export const BASE_FONT_SIZE = 14;
