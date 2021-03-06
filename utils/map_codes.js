var country_to_code = {
    "Bangladesh": "BD",
    "Belgium": "BE",
    "Burkina Faso": "BF",
    "Bulgaria": "BG",
    "Bosnia and Herz.": "BA",
    "Brunei": "BN",
    "Bolivia": "BO",
    "Japan": "JP",
    "Burundi": "BI",
    "Benin": "BJ",
    "Bhutan": "BT",
    "Jamaica": "JM",
    "Botswana": "BW",
    "Brazil": "BR",
    "Bahamas": "BS",
    "Belarus": "BY",
    "Belize": "BZ",
    "Russia": "RU",
    "Rwanda": "RW",
    "Serbia": "RS",
    "Timor-Leste": "TL",
    "Turkmenistan": "TM",
    "Tajikistan": "TJ",
    "Romania": "RO",
    "Guinea-Bissau": "GW",
    "Guatemala": "GT",
    "Greece": "GR",
    "Eq. Guinea": "GQ",
    "Guyana": "GY",
    "Georgia": "GE",
    "United Kingdom": "GB",
    "Gabon": "GA",
    "Guinea": "GN",
    "Gambia": "GM",
    "Greenland": "GL",
    "Ghana": "GH",
    "Oman": "OM",
    "Tunisia": "TN",
    "Jordan": "JO",
    "Croatia": "HR",
    "Haiti": "HT",
    "Hungary": "HU",
    "Honduras": "HN",
    "Puerto Rico": "PR",
    "Palestine": "PS",
    "Portugal": "PT",
    "Paraguay": "PY",
    "Panama": "PA",
    "Papua New Guinea": "PG",
    "Peru": "PE",
    "Pakistan": "PK",
    "Philippines": "PH",
    "Poland": "PL",
    "Zambia": "ZM",
    "W. Sahara": "EH",
    "Estonia": "EE",
    "Egypt": "EG",
    "South Africa": "ZA",
    "Ecuador": "EC",
    "Italy": "IT",
    "Vietnam": "VN",
    "Solomon Is.": "SB",
    "Ethiopia": "ET",
    "Somalia": "SO",
    "Zimbabwe": "ZW",
    "Spain": "ES",
    "Eritrea": "ER",
    "Montenegro": "ME",
    "Moldova": "MD",
    "Madagascar": "MG",
    "Morocco": "MA",
    "Uzbekistan": "UZ",
    "Myanmar": "MM",
    "Mali": "ML",
    "Mongolia": "MN",
    "Macedonia": "MK",
    "Malawi": "MW",
    "Mauritania": "MR",
    "Uganda": "UG",
    "Malaysia": "MY",
    "Mexico": "MX",
    "Israel": "IL",
    "France": "FR",
    "Somaliland": "XS",
    "Finland": "FI",
    "Fiji": "FJ",
    "Falkland Is.": "FK",
    "Nicaragua": "NI",
    "Netherlands": "NL",
    "Norway": "NO",
    "Namibia": "NA",
    "Vanuatu": "VU",
    "New Caledonia": "NC",
    "Niger": "NE",
    "Nigeria": "NG",
    "New Zealand": "NZ",
    "Nepal": "NP",
    "Kosovo": "XK",
    "Côte d'Ivoire": "CI",
    "Switzerland": "CH",
    "Colombia": "CO",
    "China": "CN",
    "Cameroon": "CM",
    "Chile": "CL",
    "N. Cyprus": "XC",
    "Canada": "CA",
    "Congo": "CG",
    "Central African Rep.": "CF",
    "Dem. Rep. Congo": "CD",
    "Czech Rep.": "CZ",
    "Cyprus": "CY",
    "Costa Rica": "CR",
    "Cuba": "CU",
    "Swaziland": "SZ",
    "Syria": "SY",
    "Kyrgyzstan": "KG",
    "Kenya": "KE",
    "S. Sudan": "SS",
    "Suriname": "SR",
    "Cambodia": "KH",
    "El Salvador": "SV",
    "Slovakia": "SK",
    "Korea": "KR",
    "Slovenia": "SI",
    "Dem. Rep. Korea": "KP",
    "Kuwait": "KW",
    "Senegal": "SN",
    "Sierra Leone": "SL",
    "Kazakhstan": "KZ",
    "Saudi Arabia": "SA",
    "Sweden": "SE",
    "Sudan": "SD",
    "Dominican Rep.": "DO",
    "Djibouti": "DJ",
    "Denmark": "DK",
    "Germany": "DE",
    "Yemen": "YE",
    "Algeria": "DZ",
    "US": "US",
    "Uruguay": "UY",
    "Lebanon": "LB",
    "Lao PDR": "LA",
    "Taiwan": "TW",
    "Trinidad and Tobago": "TT",
    "Turkey": "TR",
    "Sri Lanka": "LK",
    "Latvia": "LV",
    "Lithuania": "LT",
    "Luxembourg": "LU",
    "Liberia": "LR",
    "Lesotho": "LS",
    "Thailand": "TH",
    "Fr. S. Antarctic Lands": "TF",
    "Togo": "TG",
    "Chad": "TD",
    "Libya": "LY",
    "United Arab Emirates": "AE",
    "Venezuela": "VE",
    "Afghanistan": "AF",
    "Iraq": "IQ",
    "Iceland": "IS",
    "Iran": "IR",
    "Armenia": "AM",
    "Albania": "AL",
    "Angola": "AO",
    "Argentina": "AR",
    "Australia": "AU",
    "Austria": "AT",
    "India": "IN",
    "Tanzania": "TZ",
    "Azerbaijan": "AZ",
    "Ireland": "IE",
    "Indonesia": "ID",
    "Ukraine": "UA",
    "Qatar": "QA",
    "Mozambique": "MZ"
  };
  
  
  
  
  var code_to_country = {
    "BD"  : "Bangladesh",
    "BE"  : "Belgium",
    "BF"  : "Burkina Faso",
    "BG"  : "Bulgaria",
    "BA"  : "Bosnia and Herz.",
    "BN"  : "Brunei",
    "BO"  : "Bolivia",
    "JP"  : "Japan",
    "BI"  : "Burundi",
    "BJ"  : "Benin",
    "BT"  : "Bhutan",
    "JM"  : "Jamaica",
    "BW"  : "Botswana",
    "BR"  : "Brazil",
    "BS"  : "Bahamas",
    "BY"  : "Belarus",
    "BZ"  : "Belize",
    "RU"  : "Russia",
    "RW"  : "Rwanda",
    "RS"  : "Serbia",
    "TL"  : "Timor-Leste",
    "TM"  : "Turkmenistan",
    "TJ"  : "Tajikistan",
    "RO"  : "Romania",
    "GW"  : "Guinea-Bissau",
    "GT"  : "Guatemala",
    "GR"  : "Greece",
    "GQ"  : "Eq. Guinea",
    "GY"  : "Guyana",
    "GE"  : "Georgia",
    "GB"  : "United Kingdom",
    "GA"  : "Gabon",
    "GN"  : "Guinea",
    "GM"  : "Gambia",
    "GL"  : "Greenland",
    "GH"  : "Ghana",
    "OM"  : "Oman",
    "TN"  : "Tunisia",
    "JO"  : "Jordan",
    "HR"  : "Croatia",
    "HT"  : "Haiti",
    "HU"  : "Hungary",
    "HN"  : "Honduras",
    "PR"  : "Puerto Rico",
    "PS"  : "Palestine",
    "PT"  : "Portugal",
    "PY"  : "Paraguay",
    "PA"  : "Panama",
    "PG"  : "Papua New Guinea",
    "PE"  : "Peru",
    "PK"  : "Pakistan",
    "PH"  : "Philippines",
    "PL"  : "Poland",
    "ZM"  : "Zambia",
    "EH"  : "W. Sahara",
    "EE"  : "Estonia",
    "EG"  : "Egypt",
    "ZA"  : "South Africa",
    "EC"  : "Ecuador",
    "IT"  : "Italy",
    "VN"  : "Vietnam",
    "SB"  : "Solomon Is.",
    "ET"  : "Ethiopia",
    "SO"  : "Somalia",
    "ZW"  : "Zimbabwe",
    "ES"  : "Spain",
    "ER"  : "Eritrea",
    "ME"  : "Montenegro",
    "MD"  : "Moldova",
    "MG"  : "Madagascar",
    "MA"  : "Morocco",
    "UZ"  : "Uzbekistan",
    "MM"  : "Myanmar",
    "ML"  : "Mali",
    "MN"  : "Mongolia",
    "MK"  : "Macedonia",
    "MW"  : "Malawi",
    "MR"  : "Mauritania",
    "UG"  : "Uganda",
    "MY"  : "Malaysia",
    "MX"  : "Mexico",
    "IL"  : "Israel",
    "FR"  : "France",
    "XS"  : "Somaliland",
    "FI"  : "Finland",
    "FJ"  : "Fiji",
    "FK"  : "Falkland Is.",
    "NI"  : "Nicaragua",
    "NL"  : "Netherlands",
    "NO"  : "Norway",
    "NA"  : "Namibia",
    "VU"  : "Vanuatu",
    "NC"  : "New Caledonia",
    "NE"  : "Niger",
    "NG"  : "Nigeria",
    "NZ"  : "New Zealand",
    "NP"  : "Nepal",
    "XK"  : "Kosovo",
    "CI"  : "CÃ´te d'Ivoire",
    "CH"  : "Switzerland",
    "CO"  : "Colombia",
    "CN"  : "China",
    "CM"  : "Cameroon",
    "CL"  : "Chile",
    "XC"  : "N. Cyprus",
    "CA"  : "Canada",
    "CG"  : "Congo",
    "CF"  : "Central African Rep.",
    "CD"  : "Dem. Rep. Congo",
    "CZ"  : "Czech Rep.",
    "CY"  : "Cyprus",
    "CR"  : "Costa Rica",
    "CU"  : "Cuba",
    "SZ"  : "Swaziland",
    "SY"  : "Syria",
    "KG"  : "Kyrgyzstan",
    "KE"  : "Kenya",
    "SS"  : "S. Sudan",
    "SR"  : "Suriname",
    "KH"  : "Cambodia",
    "SV"  : "El Salvador",
    "SK"  : "Slovakia",
    "KR"  : "Korea",
    "SI"  : "Slovenia",
    "KP"  : "Dem. Rep. Korea",
    "KW"  : "Kuwait",
    "SN"  : "Senegal",
    "SL"  : "Sierra Leone",
    "KZ"  : "Kazakhstan",
    "SA"  : "Saudi Arabia",
    "SE"  : "Sweden",
    "SD"  : "Sudan",
    "DO"  : "Dominican Rep.",
    "DJ"  : "Djibouti",
    "DK"  : "Denmark",
    "DE"  : "Germany",
    "YE"  : "Yemen",
    "DZ"  : "Algeria",
    "US"  : "US",
    "UY"  : "Uruguay",
    "LB"  : "Lebanon",
    "LA"  : "Lao PDR",
    "TW"  : "Taiwan",
    "TT"  : "Trinidad and Tobago",
    "TR"  : "Turkey",
    "LK"  : "Sri Lanka",
    "LV"  : "Latvia",
    "LT"  : "Lithuania",
    "LU"  : "Luxembourg",
    "LR"  : "Liberia",
    "LS"  : "Lesotho",
    "TH"  : "Thailand",
    "TF"  : "Fr. S. Antarctic Lands",
    "TG"  : "Togo",
    "TD"  : "Chad",
    "LY"  : "Libya",
    "AE"  : "United Arab Emirates",
    "VE"  : "Venezuela",
    "AF"  : "Afghanistan",
    "IQ"  : "Iraq",
    "IS"  : "Iceland",
    "IR"  : "Iran",
    "AM"  : "Armenia",
    "AL"  : "Albania",
    "AO"  : "Angola",
    "AR"  : "Argentina",
    "AU"  : "Australia",
    "AT"  : "Austria",
    "IN"  : "India",
    "TZ"  : "Tanzania",
    "AZ"  : "Azerbaijan",
    "IE"  : "Ireland",
    "ID"  : "Indonesia",
    "UA"  : "Ukraine",
    "QA"  : "Qatar",
    "MZ"  : "Mozambique"
  };
  
  
  
  var india_code_to_state = {
    "IN-BR": "Bihar",
    "IN-PY": "Puducherry",
    "IN-DD": "Daman and Diu",
    "IN-DN": "Dadra and Nagar Haveli",
    "IN-DL": "Delhi",
    "IN-NL": "Nagaland",
    "IN-WB": "West Bengal",
    "IN-HR": "Haryana",
    "IN-HP": "Himachal Pradesh",
    "IN-AS": "Assam",
    "IN-UT": "Uttaranchal",
    "IN-JH": "Jharkhand",
    "IN-JK": "Jammu and Kashmir",
    "IN-UP": "Uttar Pradesh",
    "IN-SK": "Sikkim",
    "IN-MZ": "Mizoram",
    "IN-CT": "Chhattisgarh",
    "IN-CH": "Chandigarh",
    "IN-GA": "Goa",
    "IN-GJ": "Gujarat",
    "IN-RJ": "Rajasthan",
    "IN-MP": "Madhya Pradesh",
    "IN-OR": "Orissa",
    "IN-TN": "Tamil Nadu",
    "IN-AN": "Andaman and Nicobar",
    "IN-AP": "Andhra Pradesh",
    "IN-TR": "Tripura",
    "IN-AR": "Arunachal Pradesh",
    "IN-KA": "Karnataka",
    "IN-PB": "Punjab",
    "IN-ML": "Meghalaya",
    "IN-MN": "Manipur",
    "IN-MH": "Maharashtra",
    "IN-KL": "Kerala"
  };
  
  
  
  var india_state_to_code = {
  "Bihar": "IN-BR",
  "Puducherry": "IN-PY",
  "Daman and Diu": "IN-DD",
  "Dadra and Nagar Haveli": "IN-DN",
  "Delhi": "IN-DL",
  "Nagaland": "IN-NL",
  "West Bengal": "IN-WB",
  "Haryana": "IN-HR",
  "Himachal Pradesh": "IN-HP",
  "Assam": "IN-AS",
  "Uttaranchal": "IN-UT",
  "Jharkhand": "IN-JH",
  "Jammu and Kashmir": "IN-JK",
  "Uttar Pradesh": "IN-UP",
  "Sikkim": "IN-SK",
  "Mizoram": "IN-MZ",
  "Chhattisgarh": "IN-CT",
  "Chandigarh": "IN-CH",
  "Goa": "IN-GA",
  "Gujarat": "IN-GJ",
  "Rajasthan": "IN-RJ",
  "Madhya Pradesh": "IN-MP",
  "Orissa": "IN-OR",
  "Tamil Nadu": "IN-TN",
  "Andaman and Nicobar": "IN-AN",
  "Andhra Pradesh": "IN-AP",
  "Tripura": "IN-TR",
  "Arunachal Pradesh": "IN-AR",
  "Karnataka": "IN-KA",
  "Punjab": "IN-PB",
  "Meghalaya": "IN-ML",
  "Manipur": "IN-MN",
  "Maharashtra": "IN-MH",
  "Kerala": "IN-KL"
  };