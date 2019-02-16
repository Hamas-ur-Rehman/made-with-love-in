'use strict';var copyButtons=document.querySelectorAll('.copy-btn');var clipboard=new ClipboardJS(copyButtons);var countryNameSpan=document.querySelector('#badge-text-B');var countrySwitchNames=function countrySwitchNames(){var nameList=Object.keys(countryNames);var index=Math.floor(Math.random()*nameList.length);var name=nameList[index];document.title='Made with \u2764 in '+name;countryNameSpan.innerHTML=name};setInterval(countrySwitchNames,1500);var form=document.querySelector('form');var inputCountrySelect=document.querySelector('#input-country-select');var getSearchParamsData=function getSearchParamsData(){var formValues=Object.values(form).reduce(function(obj,field){obj[field.name]={value:field.type==='checkbox'?field.checked:field.value,default:field.dataset.default};return obj},{});var searchParamsData={};Object.keys(formValues).forEach(function(key){if(key==='country'){return}var field=formValues[key];if(field.value.toString()===field.default){return}searchParamsData[key]=field.value});return searchParamsData};form.addEventListener('change',function(){var countryName=inputCountrySelect.value;var searchParamsData=getSearchParamsData();var searchParams=new URLSearchParams(searchParamsData).toString();searchParams=searchParams===''?'':'?'+searchParams;var badgeUrl='https://madewithlove.now.sh/'+countryNames[countryName]+searchParams;var textB='text'in searchParamsData?searchParamsData.text:countryName;var altText='Made with love in '+textB;document.querySelector('#output-svg').src=badgeUrl;document.querySelector('#output-url').innerHTML=badgeUrl;document.querySelector('#output-html').innerHTML='&lt;img src="'+badgeUrl+'" alt="'+altText+'"&gt;';document.querySelector('#output-md').innerHTML='!['+altText+']('+badgeUrl+')';document.querySelector('#output-rst').innerHTML='.. image:: '+badgeUrl});form.addEventListener('submit',function(e){e.preventDefault()});