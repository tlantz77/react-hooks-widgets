import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GOOGLE_TRANSLATE_API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM;'
const googleTranslateBaseURL = 'https://translation.googleapis.com/language/translate/v2';

const Convert = ({language, text}) => {
  useEffect(() => {
    console.log('changed l or t');
  }, [language, text]);

  return (
    <div>

    </div>
  )
}
 
export default Convert;