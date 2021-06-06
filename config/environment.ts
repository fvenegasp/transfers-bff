import dotenv from 'dotenv'
dotenv.config()

export const env = {
  APP_NAME: process.env.APP_NAME,
  PORT: process.env.PORT,  
};
