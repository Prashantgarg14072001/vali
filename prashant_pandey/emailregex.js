// email regex it will accpet .org.in .co.in  and not accpet .com .com
///^[^@\s]+@((?!subdomain\.com\.com)(?:(?!co\.in|gov\.in|org\.in)[^.\s])+\.([^.\s]{2,}|co\.in|gov\.in|org\.in))$/
//---------------------------------------------------------------------------------------------------------------
// email regex it will accpet .org.in .co.in .ac.in and not accpet .com .com
///^[^@\s]+@((?!subdomain\.com\.com)(?:(?!co\.in|ac\.in|gov\.in|org\.in)[^.\s])+\.([^.\s]{2,}|co\.in|ac\.in|gov\.in|org\.in))$/
  ///^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.co\.in)?$/;
    // /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    