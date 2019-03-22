import { awesomeFn } from '../src';

if (awesomeFn() !== 'Hello)') {
  throw new Error('its broken');
}

console.log('everything is okay');
