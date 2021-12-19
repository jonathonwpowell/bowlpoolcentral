import qs from 'query-string';

// https://medium.com/swlh/using-react-hooks-to-sync-your-component-state-with-the-url-query-string-81ccdfcb174f

function setQueryStringWithoutPageReload(qsValue) { 
    const newurl = window.location.protocol + "//" +
                   window.location.host + 
                   window.location.pathname + 
                   qsValue;
 
    window.history.pushState({ path: newurl }, "", newurl);
};

export function setQueryStringValue ( 
    key, 
    value, 
    queryString = window.location.search
 ) { 
     const values = qs.parse(queryString); 
     const newQsValue = qs.stringify({ ...values, [key]: value }); 
     setQueryStringWithoutPageReload(`?${newQsValue}`);
 };

export function getQueryStringValue ( 
    key, 
    queryString = window.location.search
) { 
    const values = qs.parse(queryString); 
    return values[key];
};