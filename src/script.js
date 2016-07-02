import {log, warn} from './logger';
import {SOME_CONDITION} from './constants';

let action;
if (SOME_CONDITION > 10) {
    action = log;
} else {
    action = warn;
}
action('Log from script file');