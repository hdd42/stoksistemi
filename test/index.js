import chai from 'chai' ;
import request from 'request';
import helper from '../libs/helper';

chai.should();
chai.config.includeStack = true;


/** User test*/
require('./user/index')(chai,request, helper)
