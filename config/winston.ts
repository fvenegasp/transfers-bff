import winston from 'winston'
import {env} from './environment';
import { DateTime } from 'luxon';
const {
  splat,
  combine,
  timestamp,
  label,
  printf,
} = winston.format;


const myFormat = printf(({ timestamp, level, label, message }) => {
  const datetime = DateTime.fromISO(timestamp).toFormat('yyyy-LL-dd HH:mm:ss')
 return `[${datetime}][${label}]${level}:${message}`;
});

export const logger = winston.createLogger({
  format: combine(
    label({ label: env.APP_NAME }),
    timestamp(),
    splat(),
    myFormat,
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

