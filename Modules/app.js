import * as usr from './modules/user.js';
import { default as tg,withdraw,deposit } from './modules/account.js';
console.log(usr.name);
console.log(usr.code);
usr.code();
withdraw();
deposit();
tg();