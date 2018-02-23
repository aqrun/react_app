import pageIndex from './pageIndex'
import pageAbout from './pageAbout'

import './index.css';

if(typeof window.page_index !== 'undefined' && window.page_index ){
    pageIndex();
}
if(typeof window.page_about !== 'undefined' && window.page_about){
    pageAbout()
}
