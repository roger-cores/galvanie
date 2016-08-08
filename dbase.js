var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


var geographies = [
  {
    "S.No": 1,
    "city": "Mumbai",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "1,35,97,924",
    "Population class": "Class I"
  },
  {
    "S.No": 2,
    "city": "Delhi",
    "state": "Delhi",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "1,10,07,835",
    "Population class": "Class I"
  },
  {
    "S.No": 3,
    "city": "Bengaluru",
    "state": "Karnataka",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "84,25,970",
    "Population class": "Class I"
  },
  {
    "S.No": 4,
    "city": "Ahmedabad",
    "state": "Gujarat",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "72,08,200",
    "Population class": "Class I"
  },
  {
    "S.No": 5,
    "city": "Hyderabad",
    "state": "Telangana",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "68,09,970",
    "Population class": "Class I"
  },
  {
    "S.No": 6,
    "city": "Chennai",
    "state": "Tamil Nadu",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "46,81,087",
    "Population class": "Class I"
  },
  {
    "S.No": 7,
    "city": "Kolkata",
    "state": "West Bengal",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "44,86,679",
    "Population class": "Class I"
  },
  {
    "S.No": 8,
    "city": "Pune",
    "state": "Maharashtra",
    "Type": "Urban Agglomeration",
    "Population (2011)": "37,60,636",
    "Population class": 0
  },
  {
    "S.No": 9,
    "city": "Jaipur",
    "state": "Rajasthan",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "30,73,350",
    "Population class": "Class I"
  },
  {
    "S.No": 10,
    "city": "Surat",
    "state": "Gujarat",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "28,76,374",
    "Population class": 0
  },
  {
    "S.No": 11,
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "28,15,601",
    "Population class": "Class I"
  },
  {
    "S.No": 12,
    "city": "Kanpur",
    "state": "Uttar Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "27,67,031",
    "Population class": "Class I"
  },
  {
    "S.No": 13,
    "city": "Nagpur",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "24,05,421",
    "Population class": "Class I"
  },
  {
    "S.No": 14,
    "city": "Patna",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "22,31,554",
    "Population class": 0
  },
  {
    "S.No": 15,
    "city": "Indore",
    "state": "Madhya Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "19,60,631",
    "Population class": "Class I"
  },
  {
    "S.No": 16,
    "city": "Thane",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "18,18,872",
    "Population class": "Class I"
  },
  {
    "S.No": 17,
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "17,95,648",
    "Population class": "Class I"
  },
  {
    "S.No": 18,
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "Type": "Municipal Committee.",
    "Population (2011)": "17,30,320",
    "Population class": "Class I"
  },
  {
    "S.No": 19,
    "city": "Vadodara",
    "state": "Gujarat",
    "Type": "Municipal Committee.",
    "Population (2011)": "16,66,703",
    "Population class": "Class I"
  },
  {
    "S.No": 20,
    "city": "Firozabad",
    "state": "Uttar Pradesh",
    "Type": "Census town.",
    "Population (2011)": "16,45,675",
    "Population class": "Class I"
  },
  {
    "S.No": 21,
    "city": "Ludhiana",
    "state": "Punjab",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "16,13,878",
    "Population class": "Class I"
  },
  {
    "S.No": 22,
    "city": "Rajkot",
    "state": "Gujarat",
    "Type": "Urban Agglomeration",
    "Population (2011)": "16,06,745",
    "Population class": 0
  },
  {
    "S.No": 23,
    "city": "Agra",
    "state": "Uttar Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "15,74,542",
    "Population class": "Class I"
  },
  {
    "S.No": 24,
    "city": "Siliguri",
    "state": "West Bengal",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "15,72,000",
    "Population class": 0
  },
  {
    "S.No": 25,
    "city": "Nashik",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "14,86,973",
    "Population class": "Class I"
  },
  {
    "S.No": 26,
    "city": "Faridabad",
    "state": "Haryana",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "14,04,653",
    "Population class": "Class I"
  },
  {
    "S.No": 27,
    "city": "Patiala",
    "state": "Punjab",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "13,54,686",
    "Population class": 0
  },
  {
    "S.No": 28,
    "city": "Meerut",
    "state": "Uttar Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "13,09,023",
    "Population class": "Class I"
  },
  {
    "S.No": 29,
    "city": "Kalyan-Dombivali",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "12,46,381",
    "Population class": "Class I"
  },
  {
    "S.No": 30,
    "city": "Vasai-Virar",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "12,21,233",
    "Population class": "Class I"
  },
  {
    "S.No": 31,
    "city": "Varanasi",
    "state": "Uttar Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "12,01,815",
    "Population class": "Class I"
  },
  {
    "S.No": 32,
    "city": "Srinagar",
    "state": "Jammu and Kashmir",
    "Type": "Urban Agglomeration",
    "Population (2011)": "11,92,792",
    "Population class": 0
  },
  {
    "S.No": 33,
    "city": "Dhanbad",
    "state": "Jharkhand",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "11,61,561",
    "Population class": "Class I"
  },
  {
    "S.No": 34,
    "city": "Jodhpur",
    "state": "Rajasthan",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "11,37,000",
    "Population class": "Class I"
  },
  {
    "S.No": 35,
    "city": "Amritsar",
    "state": "Punjab",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "11,32,761",
    "Population class": "Class I"
  },
  {
    "S.No": 36,
    "city": "Raipur",
    "state": "Chhattisgarh",
    "Type": "Municipal Committee",
    "Population (2011)": "11,22,555",
    "Population class": 0
  },
  {
    "S.No": 37,
    "city": "Allahabad",
    "state": "Uttar Pradesh",
    "Type": "Municipality.",
    "Population (2011)": "11,17,094",
    "Population class": "Class I"
  },
  {
    "S.No": 38,
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "10,61,447",
    "Population class": "Class I"
  },
  {
    "S.No": 39,
    "city": "Jabalpur",
    "state": "Madhya Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "10,54,336",
    "Population class": "Class I"
  },
  {
    "S.No": 40,
    "city": "Gwalior",
    "state": "Madhya Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "10,53,505",
    "Population class": "Class I"
  },
  {
    "S.No": 41,
    "city": "Vijayawada",
    "state": "Andhra Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "10,48,240",
    "Population class": "Class I"
  },
  {
    "S.No": 42,
    "city": "Madurai",
    "state": "Tamil Nadu",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "10,16,885",
    "Population class": "Class I"
  },
  {
    "S.No": 43,
    "city": "Guwahati",
    "state": "Assam",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "9,63,429",
    "Population class": "Class I"
  },
  {
    "S.No": 44,
    "city": "Chandigarh",
    "state": "Chandigarh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "9,60,787",
    "Population class": "Class I"
  },
  {
    "S.No": 45,
    "city": "Hubli-Dharwad",
    "state": "Karnataka",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "9,43,857",
    "Population class": "Class I"
  },
  {
    "S.No": 46,
    "city": "Amroha",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "8,97,135",
    "Population class": "Class I"
  },
  {
    "S.No": 47,
    "city": "Moradabad",
    "state": "Uttar Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "8,89,810",
    "Population class": "Class I"
  },
  {
    "S.No": 48,
    "city": "Gurgaon",
    "state": "Haryana",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "8,76,824",
    "Population class": "Class I"
  },
  {
    "S.No": 49,
    "city": "Aligarh",
    "state": "Uttar Pradesh",
    "Type": "Municipalityunicipal Corporation / Corporation.",
    "Population (2011)": "8,72,575",
    "Population class": "Class I"
  },
  {
    "S.No": 50,
    "city": "Solapur",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "8,72,478",
    "Population class": 0
  },
  {
    "S.No": 51,
    "city": "Ranchi",
    "state": "Jharkhand",
    "Type": "Urban Agglomeration",
    "Population (2011)": "8,63,495",
    "Population class": 0
  },
  {
    "S.No": 52,
    "city": "Jalandhar",
    "state": "Punjab",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "8,62,196",
    "Population class": "Class I"
  },
  {
    "S.No": 53,
    "city": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "8,46,915",
    "Population class": "Class I"
  },
  {
    "S.No": 54,
    "city": "Bhubaneswar",
    "state": "Odisha",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "8,37,737",
    "Population class": "Class I"
  },
  {
    "S.No": 55,
    "city": "Salem",
    "state": "Tamil Nadu",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "8,31,038",
    "Population class": "Class I"
  },
  {
    "S.No": 56,
    "city": "Warangal",
    "state": "Telangana",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "8,19,429",
    "Population class": "Class I"
  },
  {
    "S.No": 57,
    "city": "Mira-Bhayandar",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "8,14,655",
    "Population class": "Class I"
  },
  {
    "S.No": 58,
    "city": "Thiruvananthapuram",
    "state": "Kerala",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "7,52,490",
    "Population class": "Class I"
  },
  {
    "S.No": 59,
    "city": "Bhiwandi",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "7,11,329",
    "Population class": "Class I"
  },
  {
    "S.No": 60,
    "city": "Saharanpur",
    "state": "Uttar Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "7,03,345",
    "Population class": "Class I"
  },
  {
    "S.No": 61,
    "city": "Guntur",
    "state": "Andhra Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "6,51,382",
    "Population class": "Class I"
  },
  {
    "S.No": 62,
    "city": "Amravati",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "6,46,801",
    "Population class": "Class I"
  },
  {
    "S.No": 63,
    "city": "Bikaner",
    "state": "Rajasthan",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "6,44,406",
    "Population class": "Class I"
  },
  {
    "S.No": 64,
    "city": "Noida",
    "state": "Uttar Pradesh",
    "Type": "Census town",
    "Population (2011)": "6,42,381",
    "Population class": "Class I"
  },
  {
    "S.No": 65,
    "city": "Jamshedpur",
    "state": "Jharkhand",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "6,29,659",
    "Population class": "Class I"
  },
  {
    "S.No": 66,
    "city": "Bhilai Nagar",
    "state": "Chhattisgarh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "6,25,697",
    "Population class": "Class I"
  },
  {
    "S.No": 67,
    "city": "Cuttack",
    "state": "Odisha",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "6,06,007",
    "Population class": "Class I"
  },
  {
    "S.No": 68,
    "city": "Kochi",
    "state": "Kerala",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "6,01,574",
    "Population class": "Class I"
  },
  {
    "S.No": 69,
    "city": "Udaipur",
    "state": "Rajasthan",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "5,98,483",
    "Population class": "Class I"
  },
  {
    "S.No": 70,
    "city": "Bhavnagar",
    "state": "Gujarat",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "5,93,768",
    "Population class": "Class I"
  },
  {
    "S.No": 71,
    "city": "Dehradun",
    "state": "Uttarakhand",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "5,78,420",
    "Population class": "Class I"
  },
  {
    "S.No": 72,
    "city": "Asansol",
    "state": "West Bengal",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "5,64,491",
    "Population class": "Class I"
  },
  {
    "S.No": 73,
    "city": "Nanded-Waghala",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "5,50,564",
    "Population class": "Class I"
  },
  {
    "S.No": 74,
    "city": "Ajmer",
    "state": "Rajasthan",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "5,42,580",
    "Population class": "Class I"
  },
  {
    "S.No": 75,
    "city": "Jamnagar",
    "state": "Gujarat",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "5,29,308",
    "Population class": "Class I"
  },
  {
    "S.No": 76,
    "city": "Ujjain",
    "state": "Madhya Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "5,15,215",
    "Population class": "Class I"
  },
  {
    "S.No": 77,
    "city": "Sangli",
    "state": "Maharashtra",
    "Type": "Urban Agglomeration",
    "Population (2011)": "5,13,862",
    "Population class": 0
  },
  {
    "S.No": 78,
    "city": "Loni",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "5,12,296",
    "Population class": "Class I"
  },
  {
    "S.No": 79,
    "city": "Jhansi",
    "state": "Uttar Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "5,07,293",
    "Population class": "Class I"
  },
  {
    "S.No": 80,
    "city": "Pondicherry",
    "state": "Puducherry",
    "Type": "Urban Agglomeration",
    "Population (2011)": "5,05,959",
    "Population class": 0
  },
  {
    "S.No": 81,
    "city": "Nellore",
    "state": "Andhra Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "5,05,258",
    "Population class": "Class I"
  },
  {
    "S.No": 82,
    "city": "Jammu",
    "state": "Jammu and Kashmir",
    "Type": "Municipal Committee",
    "Population (2011)": "5,03,690",
    "Population class": "Class I"
  },
  {
    "S.No": 83,
    "city": "Belagavi",
    "state": "Karnataka",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "4,88,292",
    "Population class": "Class I"
  },
  {
    "S.No": 84,
    "city": "Raurkela",
    "state": "Odisha",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "4,84,874",
    "Population class": 0
  },
  {
    "S.No": 85,
    "city": "Mangaluru",
    "state": "Karnataka",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "4,84,785",
    "Population class": "Class I"
  },
  {
    "S.No": 86,
    "city": "Tirunelveli",
    "state": "Tamil Nadu",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "4,74,838",
    "Population class": "Class I"
  },
  {
    "S.No": 87,
    "city": "Malegaon",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "4,71,006",
    "Population class": "Class I"
  },
  {
    "S.No": 88,
    "city": "Gaya",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "4,63,454",
    "Population class": "Class I"
  },
  {
    "S.No": 89,
    "city": "Tiruppur",
    "state": "Tamil Nadu",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "4,44,543",
    "Population class": "Class I"
  },
  {
    "S.No": 90,
    "city": "Davanagere",
    "state": "Karnataka",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "4,35,128",
    "Population class": "Class I"
  },
  {
    "S.No": 91,
    "city": "Kozhikode",
    "state": "Kerala",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "4,32,097",
    "Population class": "Class I"
  },
  {
    "S.No": 92,
    "city": "Akola",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "4,27,146",
    "Population class": "Class I"
  },
  {
    "S.No": 93,
    "city": "Kurnool",
    "state": "Andhra Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "4,24,920",
    "Population class": "Class I"
  },
  {
    "S.No": 94,
    "city": "Bokaro Steel City",
    "state": "Jharkhand",
    "Type": "Census town",
    "Population (2011)": "4,13,934",
    "Population class": "Class I"
  },
  {
    "S.No": 95,
    "city": "Rajahmundry",
    "state": "Andhra Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "4,13,616",
    "Population class": 0
  },
  {
    "S.No": 96,
    "city": "Ballari",
    "state": "Karnataka",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "4,09,644",
    "Population class": "Class I"
  },
  {
    "S.No": 97,
    "city": "Agartala",
    "state": "Tripura",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "3,99,688",
    "Population class": "Class I"
  },
  {
    "S.No": 98,
    "city": "Bhagalpur",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "3,98,138",
    "Population class": "Class I"
  },
  {
    "S.No": 99,
    "city": "Latur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "3,82,754",
    "Population class": "Class I"
  },
  {
    "S.No": 100,
    "city": "Dhule",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "3,76,093",
    "Population class": "Class I"
  },
  {
    "S.No": 101,
    "city": "Korba",
    "state": "Chhattisgarh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "3,63,210",
    "Population class": "Class I"
  },
  {
    "S.No": 102,
    "city": "Bhilwara",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "3,60,009",
    "Population class": "Class I"
  },
  {
    "S.No": 103,
    "city": "Brahmapur",
    "state": "Odisha",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "3,55,823",
    "Population class": "Class I"
  },
  {
    "S.No": 104,
    "city": "Mysore",
    "state": "Karnatka",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "3,51,838",
    "Population class": "Class I"
  },
  {
    "S.No": 105,
    "city": "Muzaffarpur",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "3,51,838",
    "Population class": "Class I"
  },
  {
    "S.No": 106,
    "city": "Ahmednagar",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "3,50,905",
    "Population class": "Class I"
  },
  {
    "S.No": 107,
    "city": "Kollam",
    "state": "Kerala",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "3,49,033",
    "Population class": "Class I"
  },
  {
    "S.No": 108,
    "city": "Raghunathganj",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "3,46,854",
    "Population class": 0
  },
  {
    "S.No": 109,
    "city": "Bilaspur",
    "state": "Chhattisgarh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "3,30,106",
    "Population class": "Class I"
  },
  {
    "S.No": 110,
    "city": "Shahjahanpur",
    "state": "Uttar Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "3,21,885",
    "Population class": 0
  },
  {
    "S.No": 111,
    "city": "Thrissur",
    "state": "Kerala",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "3,15,596",
    "Population class": "Class I"
  },
  {
    "S.No": 112,
    "city": "Alwar",
    "state": "Rajasthan",
    "Type": "Municipal Council",
    "Population (2011)": "3,15,310",
    "Population class": "Class I"
  },
  {
    "S.No": 113,
    "city": "Kakinada",
    "state": "Andhra Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "3,12,255",
    "Population class": "Class I"
  },
  {
    "S.No": 114,
    "city": "Nizamabad",
    "state": "Telangana",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "3,10,467",
    "Population class": "Class I"
  },
  {
    "S.No": 115,
    "city": "Sagar",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "3,08,922",
    "Population class": 0
  },
  {
    "S.No": 116,
    "city": "Tumkur",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "3,05,821",
    "Population class": "Class I"
  },
  {
    "S.No": 117,
    "city": "Hisar",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "3,01,249",
    "Population class": "Class I"
  },
  {
    "S.No": 118,
    "city": "Rohtak",
    "state": "Haryana",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "2,94,577",
    "Population class": 0
  },
  {
    "S.No": 119,
    "city": "Panipat",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "2,94,150",
    "Population class": "Class I"
  },
  {
    "S.No": 120,
    "city": "Darbhanga",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "2,94,116",
    "Population class": "Class I"
  },
  {
    "S.No": 121,
    "city": "Kharagpur",
    "state": "West Bengal",
    "Type": "Municipality/Industrial Township",
    "Population (2011)": "2,93,719",
    "Population class": "Class I"
  },
  {
    "S.No": 122,
    "city": "Aizawl",
    "state": "Mizoram",
    "Type": "Notified Town",
    "Population (2011)": "2,91,822",
    "Population class": "Class I"
  },
  {
    "S.No": 123,
    "city": "Ichalkaranji",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "2,87,570",
    "Population class": "Class I"
  },
  {
    "S.No": 124,
    "city": "Tirupati",
    "state": "Andhra Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "2,87,035",
    "Population class": "Class I"
  },
  {
    "S.No": 125,
    "city": "Karnal",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "2,86,974",
    "Population class": "Class I"
  },
  {
    "S.No": 126,
    "city": "Bathinda",
    "state": "Punjab",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "2,85,813",
    "Population class": "Class I"
  },
  {
    "S.No": 127,
    "city": "Rampur",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "2,81,494",
    "Population class": 0
  },
  {
    "S.No": 128,
    "city": "Shivamogga",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "2,74,352",
    "Population class": 0
  },
  {
    "S.No": 129,
    "city": "Ratlam",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "2,73,892",
    "Population class": 0
  },
  {
    "S.No": 130,
    "city": "Modinagar",
    "state": "Uttar Pradesh",
    "Type": "Municipality",
    "Population (2011)": "2,72,918",
    "Population class": 0
  },
  {
    "S.No": 131,
    "city": "Durg",
    "state": "Chhattisgarh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "2,68,679",
    "Population class": "Class I"
  },
  {
    "S.No": 132,
    "city": "Shillong",
    "state": "Meghalaya",
    "Type": "Urban Agglomeration",
    "Population (2011)": "2,67,662",
    "Population class": 0
  },
  {
    "S.No": 133,
    "city": "Imphal",
    "state": "Manipur",
    "Type": "Municipal Council",
    "Population (2011)": "2,64,986",
    "Population class": "Class I"
  },
  {
    "S.No": 134,
    "city": "Hapur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "2,62,801",
    "Population class": "Class I"
  },
  {
    "S.No": 135,
    "city": "Ranipet",
    "state": "Tamil Nadu",
    "Type": "Urban Agglomeration",
    "Population (2011)": "2,62,346",
    "Population class": 0
  },
  {
    "S.No": 136,
    "city": "Anantapur",
    "state": "Andhra Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "2,62,340",
    "Population class": "Class I"
  },
  {
    "S.No": 137,
    "city": "Arrah",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "2,61,099",
    "Population class": "Class I"
  },
  {
    "S.No": 138,
    "city": "Karimnagar",
    "state": "Telangana",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "2,60,899",
    "Population class": "Class I"
  },
  {
    "S.No": 139,
    "city": "Parbhani",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "2,59,329",
    "Population class": 0
  },
  {
    "S.No": 140,
    "city": "Etawah",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "2,56,790",
    "Population class": "Class I"
  },
  {
    "S.No": 141,
    "city": "Bharatpur",
    "state": "Rajasthan",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "2,52,109",
    "Population class": "Class I"
  },
  {
    "S.No": 142,
    "city": "Begusarai",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "2,51,136",
    "Population class": "Class I"
  },
  {
    "S.No": 143,
    "city": "New Delhi",
    "state": "Delhi",
    "Type": "Municipal Council",
    "Population (2011)": "2,49,998",
    "Population class": "Class I"
  },
  {
    "S.No": 144,
    "city": "Chhapra",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "2,49,555",
    "Population class": "Class I"
  },
  {
    "S.No": 145,
    "city": "Kadapa",
    "state": "Andhra Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "2,41,823",
    "Population class": "Class I"
  },
  {
    "S.No": 146,
    "city": "Ramagundam",
    "state": "Telangana",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "2,37,686",
    "Population class": 0
  },
  {
    "S.No": 147,
    "city": "Pali",
    "state": "Rajasthan",
    "Type": "Municipal Council",
    "Population (2011)": "2,29,956",
    "Population class": "Class I"
  },
  {
    "S.No": 148,
    "city": "Satna",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "2,29,307",
    "Population class": 0
  },
  {
    "S.No": 149,
    "city": "Vizianagaram",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "2,28,025",
    "Population class": "Class I"
  },
  {
    "S.No": 150,
    "city": "Katihar",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "2,25,982",
    "Population class": "Class I"
  },
  {
    "S.No": 151,
    "city": "Hardwar",
    "state": "Uttarakhand",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "2,25,235",
    "Population class": "Class I"
  },
  {
    "S.No": 152,
    "city": "Sonipat",
    "state": "Haryana",
    "Type": "Urban Agglomeration",
    "Population (2011)": "2,25,074",
    "Population class": 0
  },
  {
    "S.No": 153,
    "city": "Nagercoil",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "2,24,329",
    "Population class": "Class I"
  },
  {
    "S.No": 154,
    "city": "Thanjavur",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "2,22,619",
    "Population class": "Class I"
  },
  {
    "S.No": 155,
    "city": "Murwara (Katni)",
    "state": "Madhya Pradesh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "2,21,875",
    "Population class": "Class I"
  },
  {
    "S.No": 156,
    "city": "Naihati",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "2,21,762",
    "Population class": "Class I"
  },
  {
    "S.No": 157,
    "city": "Sambhal",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "2,21,334",
    "Population class": "Class I"
  },
  {
    "S.No": 158,
    "city": "Nadiad",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "2,18,150",
    "Population class": "Class I"
  },
  {
    "S.No": 159,
    "city": "Yamunanagar",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "2,16,628",
    "Population class": "Class I"
  },
  {
    "S.No": 160,
    "city": "English Bazar",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "2,16,083",
    "Population class": "Class I"
  },
  {
    "S.No": 161,
    "city": "Eluru",
    "state": "Andhra Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "2,14,414",
    "Population class": "Class I"
  },
  {
    "S.No": 162,
    "city": "Munger",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "2,13,101",
    "Population class": "Class I"
  },
  {
    "S.No": 163,
    "city": "Panchkula",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "2,10,175",
    "Population class": "Class I"
  },
  {
    "S.No": 164,
    "city": "Raayachuru",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "2,07,421",
    "Population class": 0
  },
  {
    "S.No": 165,
    "city": "Panvel",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "2,04,336",
    "Population class": 0
  },
  {
    "S.No": 166,
    "city": "Deoghar",
    "state": "Jharkhand",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "2,03,116",
    "Population class": "Class I"
  },
  {
    "S.No": 167,
    "city": "Ongole",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "2,02,826",
    "Population class": "Class I"
  },
  {
    "S.No": 168,
    "city": "Nandyal",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "2,00,746",
    "Population class": "Class I"
  },
  {
    "S.No": 169,
    "city": "Morena",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "2,00,506",
    "Population class": "Class I"
  },
  {
    "S.No": 170,
    "city": "Bhiwani",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "1,97,662",
    "Population class": "Class I"
  },
  {
    "S.No": 171,
    "city": "Porbandar",
    "state": "Gujarat",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,97,382",
    "Population class": 0
  },
  {
    "S.No": 172,
    "city": "Palakkad",
    "state": "Kerala",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,97,369",
    "Population class": 0
  },
  {
    "S.No": 173,
    "city": "Anand",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,97,351",
    "Population class": "Class I"
  },
  {
    "S.No": 174,
    "city": "Purnia",
    "state": "Bihar",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "1,97,211",
    "Population class": 0
  },
  {
    "S.No": 175,
    "city": "Baharampur",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "1,95,363",
    "Population class": "Class I"
  },
  {
    "S.No": 176,
    "city": "Barmer",
    "state": "Rajasthan",
    "Type": "Nagar Parishad",
    "Population (2011)": "1,89,715",
    "Population class": "Class I"
  },
  {
    "S.No": 177,
    "city": "Morvi",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,88,278",
    "Population class": "Class I"
  },
  {
    "S.No": 178,
    "city": "Orai",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad.",
    "Population (2011)": "1,87,185",
    "Population class": "Class I"
  },
  {
    "S.No": 179,
    "city": "Bahraich",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "1,86,241",
    "Population class": "Class I"
  },
  {
    "S.No": 180,
    "city": "Sikar",
    "state": "Rajasthan",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,85,925",
    "Population class": 0
  },
  {
    "S.No": 181,
    "city": "Vellore",
    "state": "Tamil Nadu",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "1,85,895",
    "Population class": "Class I"
  },
  {
    "S.No": 182,
    "city": "Singrauli",
    "state": "Madhya Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "1,85,190",
    "Population class": 0
  },
  {
    "S.No": 183,
    "city": "Khammam",
    "state": "Telangana",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "1,84,252",
    "Population class": "Class I"
  },
  {
    "S.No": 184,
    "city": "Mahesana",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,84,133",
    "Population class": "Class I"
  },
  {
    "S.No": 185,
    "city": "Silchar",
    "state": "Assam",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,84,105",
    "Population class": 0
  },
  {
    "S.No": 186,
    "city": "Sambalpur",
    "state": "Odisha",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "1,83,383",
    "Population class": "Class I"
  },
  {
    "S.No": 187,
    "city": "Rewa",
    "state": "Madhya Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "1,83,274",
    "Population class": 0
  },
  {
    "S.No": 188,
    "city": "Unnao",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad.",
    "Population (2011)": "1,77,658",
    "Population class": "Class I"
  },
  {
    "S.No": 189,
    "city": "Hugli-Chinsurah",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "1,77,209",
    "Population class": "Class I"
  },
  {
    "S.No": 190,
    "city": "Raiganj",
    "state": "West Bengal",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,75,047",
    "Population class": 0
  },
  {
    "S.No": 191,
    "city": "Phusro",
    "state": "Jharkhand",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,74,402",
    "Population class": 0
  },
  {
    "S.No": 192,
    "city": "Adityapur",
    "state": "Jharkhand",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "1,74,355",
    "Population class": "Class I"
  },
  {
    "S.No": 193,
    "city": "Alappuzha",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "1,74,164",
    "Population class": "Class I"
  },
  {
    "S.No": 194,
    "city": "Bahadurgarh",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "1,70,426",
    "Population class": "Class I"
  },
  {
    "S.No": 195,
    "city": "Machilipatnam",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,70,008",
    "Population class": "Class I"
  },
  {
    "S.No": 196,
    "city": "Rae Bareli",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "1,69,333",
    "Population class": 0
  },
  {
    "S.No": 197,
    "city": "Jalpaiguri",
    "state": "West Bengal",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "1,69,013",
    "Population class": "Class I"
  },
  {
    "S.No": 198,
    "city": "Bharuch",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,68,729",
    "Population class": "Class I"
  },
  {
    "S.No": 199,
    "city": "Pathankot",
    "state": "Punjab",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,68,485",
    "Population class": 0
  },
  {
    "S.No": 200,
    "city": "Hoshiarpur",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "1,68,443",
    "Population class": "Class I"
  },
  {
    "S.No": 201,
    "city": "Baramula",
    "state": "Jammu and Kashmir",
    "Type": "Municipal Council",
    "Population (2011)": "1,67,986",
    "Population class": "Class I"
  },
  {
    "S.No": 202,
    "city": "Adoni",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,66,344",
    "Population class": "Class I"
  },
  {
    "S.No": 203,
    "city": "Jind",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "1,66,225",
    "Population class": "Class I"
  },
  {
    "S.No": 204,
    "city": "Tonk",
    "state": "Rajasthan",
    "Type": "Municipal Council",
    "Population (2011)": "1,65,363",
    "Population class": "Class I"
  },
  {
    "S.No": 205,
    "city": "Tenali",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,64,649",
    "Population class": "Class I"
  },
  {
    "S.No": 206,
    "city": "Kancheepuram",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "1,64,265",
    "Population class": "Class I"
  },
  {
    "S.No": 207,
    "city": "Vapi",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,63,630",
    "Population class": "Class I"
  },
  {
    "S.No": 208,
    "city": "Sirsa",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "1,60,735",
    "Population class": 0
  },
  {
    "S.No": 209,
    "city": "Navsari",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,60,100",
    "Population class": "Class I"
  },
  {
    "S.No": 210,
    "city": "Mahbubnagar",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "1,57,902",
    "Population class": "Class I"
  },
  {
    "S.No": 211,
    "city": "Puri",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "1,57,837",
    "Population class": 0
  },
  {
    "S.No": 212,
    "city": "Robertson Pet",
    "state": "Karnataka",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,57,084",
    "Population class": 0
  },
  {
    "S.No": 213,
    "city": "Erode",
    "state": "Tamil Nadu",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "1,56,953",
    "Population class": "Class I"
  },
  {
    "S.No": 214,
    "city": "Batala",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "1,56,400",
    "Population class": "Class I"
  },
  {
    "S.No": 215,
    "city": "Haldwani-cum-Kathgodam",
    "state": "Uttarakhand",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "1,56,060",
    "Population class": "Class I"
  },
  {
    "S.No": 216,
    "city": "Vidisha",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,55,959",
    "Population class": "Class I"
  },
  {
    "S.No": 217,
    "city": "Saharsa",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,55,175",
    "Population class": "Class I"
  },
  {
    "S.No": 218,
    "city": "Thanesar",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "1,54,962",
    "Population class": "Class I"
  },
  {
    "S.No": 219,
    "city": "Chittoor",
    "state": "Andhra Pradesh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "1,53,766",
    "Population class": "Class I"
  },
  {
    "S.No": 220,
    "city": "Veraval",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,53,696",
    "Population class": "Class I"
  },
  {
    "S.No": 221,
    "city": "Lakhimpur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "1,52,010",
    "Population class": "Class I"
  },
  {
    "S.No": 222,
    "city": "Sitapur",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "1,51,908",
    "Population class": 0
  },
  {
    "S.No": 223,
    "city": "Hindupur",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,51,835",
    "Population class": "Class I"
  },
  {
    "S.No": 224,
    "city": "Santipur",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "1,51,774",
    "Population class": "Class I"
  },
  {
    "S.No": 225,
    "city": "Balurghat",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "1,51,183",
    "Population class": "Class I"
  },
  {
    "S.No": 226,
    "city": "Ganjbasoda",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "1,50,454",
    "Population class": "Class I"
  },
  {
    "S.No": 227,
    "city": "Moga",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "1,50,432",
    "Population class": "Class I"
  },
  {
    "S.No": 228,
    "city": "Proddatur",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,50,309",
    "Population class": 0
  },
  {
    "S.No": 229,
    "city": "Srinagar",
    "state": "Uttarakhand",
    "Type": 0,
    "Population (2011)": "1,50,000",
    "Population class": 0
  },
  {
    "S.No": 230,
    "city": "Medinipur",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "1,49,769",
    "Population class": 0
  },
  {
    "S.No": 231,
    "city": "Habra",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "1,49,675",
    "Population class": "Class II"
  },
  {
    "S.No": 232,
    "city": "Sasaram",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,47,396",
    "Population class": "Class I"
  },
  {
    "S.No": 233,
    "city": "Hajipur",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,47,126",
    "Population class": "Class I"
  },
  {
    "S.No": 234,
    "city": "Bhuj",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,47,123",
    "Population class": "Class I"
  },
  {
    "S.No": 235,
    "city": "Shivpuri",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,46,892",
    "Population class": 0
  },
  {
    "S.No": 236,
    "city": "Ranaghat",
    "state": "West Bengal",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,45,285",
    "Population class": 0
  },
  {
    "S.No": 237,
    "city": "Shimla",
    "state": "Himachal Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,44,975",
    "Population class": 0
  },
  {
    "S.No": 238,
    "city": "Tiruvannamalai",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "1,44,683",
    "Population class": "Class I"
  },
  {
    "S.No": 239,
    "city": "Kaithal",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "1,44,633",
    "Population class": "Class I"
  },
  {
    "S.No": 240,
    "city": "Rajnandgaon",
    "state": "Chhattisgarh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "1,43,770",
    "Population class": 0
  },
  {
    "S.No": 241,
    "city": "Godhra",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,43,126",
    "Population class": "Class I"
  },
  {
    "S.No": 242,
    "city": "Hazaribag",
    "state": "Jharkhand",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,42,494",
    "Population class": "Class I"
  },
  {
    "S.No": 243,
    "city": "Bhimavaram",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,42,280",
    "Population class": "Class I"
  },
  {
    "S.No": 244,
    "city": "Mandsaur",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,41,468",
    "Population class": "Class I"
  },
  {
    "S.No": 245,
    "city": "Dibrugarh",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "1,38,661",
    "Population class": "Class I"
  },
  {
    "S.No": 246,
    "city": "Kolar",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "1,38,553",
    "Population class": "Class I"
  },
  {
    "S.No": 247,
    "city": "Bankura",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "1,38,036",
    "Population class": "Class I"
  },
  {
    "S.No": 248,
    "city": "Mandya",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "1,37,735",
    "Population class": "Class I"
  },
  {
    "S.No": 249,
    "city": "Dehri-on-Sone",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,37,068",
    "Population class": "Class I"
  },
  {
    "S.No": 250,
    "city": "Madanapalle",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,35,669",
    "Population class": "Class I"
  },
  {
    "S.No": 251,
    "city": "Malerkotla",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "1,35,330",
    "Population class": "Class I"
  },
  {
    "S.No": 252,
    "city": "Lalitpur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "1,33,041",
    "Population class": "Class I"
  },
  {
    "S.No": 253,
    "city": "Bettiah",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,32,896",
    "Population class": "Class I"
  },
  {
    "S.No": 254,
    "city": "Pollachi",
    "state": "Tamil Nadu",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,28,458",
    "Population class": 0
  },
  {
    "S.No": 255,
    "city": "Khanna",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "1,28,130",
    "Population class": "Class I"
  },
  {
    "S.No": 256,
    "city": "Neemuch",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,28,108",
    "Population class": "Class I"
  },
  {
    "S.No": 257,
    "city": "Palwal",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "1,27,931",
    "Population class": "Class I"
  },
  {
    "S.No": 258,
    "city": "Palanpur",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,27,125",
    "Population class": "Class I"
  },
  {
    "S.No": 259,
    "city": "Guntakal",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,26,479",
    "Population class": "Class I"
  },
  {
    "S.No": 260,
    "city": "Nabadwip",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "1,25,528",
    "Population class": "Class I"
  },
  {
    "S.No": 261,
    "city": "Udupi",
    "state": "Karnataka",
    "Type": "City Municipal Council.",
    "Population (2011)": "1,25,350",
    "Population class": "Class I"
  },
  {
    "S.No": 262,
    "city": "Jagdalpur",
    "state": "Chhattisgarh",
    "Type": "Municipal Corporation / Corporation",
    "Population (2011)": "1,25,345",
    "Population class": "Class I"
  },
  {
    "S.No": 263,
    "city": "Motihari",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,25,183",
    "Population class": "Class I"
  },
  {
    "S.No": 264,
    "city": "Pilibhit",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "1,24,245",
    "Population class": 0
  },
  {
    "S.No": 265,
    "city": "Dimapur",
    "state": "Nagaland",
    "Type": "Municipal Committee",
    "Population (2011)": "1,23,777",
    "Population class": "Class I"
  },
  {
    "S.No": 266,
    "city": "Mohali",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "1,23,484",
    "Population class": 0
  },
  {
    "S.No": 267,
    "city": "Sadulpur",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "1,22,326",
    "Population class": 0
  },
  {
    "S.No": 268,
    "city": "Rajapalayam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "1,22,307",
    "Population class": 0
  },
  {
    "S.No": 269,
    "city": "Dharmavaram",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,21,992",
    "Population class": "Class I"
  },
  {
    "S.No": 270,
    "city": "Kashipur",
    "state": "Uttarakhand",
    "Type": "Nagar Palika Parishad.",
    "Population (2011)": "1,21,610",
    "Population class": "Class I"
  },
  {
    "S.No": 271,
    "city": "Sivakasi",
    "state": "Tamil Nadu",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,21,358",
    "Population class": 0
  },
  {
    "S.No": 272,
    "city": "Darjiling",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "1,20,414",
    "Population class": "Class I"
  },
  {
    "S.No": 273,
    "city": "Chikkamagaluru",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "1,18,496",
    "Population class": "Class I"
  },
  {
    "S.No": 274,
    "city": "Gudivada",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,18,289",
    "Population class": "Class I"
  },
  {
    "S.No": 275,
    "city": "Baleshwar Town",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "1,18,202",
    "Population class": "Class I"
  },
  {
    "S.No": 276,
    "city": "Mancherial",
    "state": "Telangana",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,18,195",
    "Population class": 0
  },
  {
    "S.No": 277,
    "city": "Srikakulam",
    "state": "Andhra Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,17,320",
    "Population class": 0
  },
  {
    "S.No": 278,
    "city": "Adilabad",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "1,17,167",
    "Population class": "Class I"
  },
  {
    "S.No": 279,
    "city": "Yavatmal",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "1,16,714",
    "Population class": "Class I"
  },
  {
    "S.No": 280,
    "city": "Barnala",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "1,16,454",
    "Population class": "Class I"
  },
  {
    "S.No": 281,
    "city": "Nagaon",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "1,16,355",
    "Population class": "Class I"
  },
  {
    "S.No": 282,
    "city": "Narasaraopet",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,16,329",
    "Population class": "Class I"
  },
  {
    "S.No": 283,
    "city": "Raigarh",
    "state": "Chhattisgarh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,15,908",
    "Population class": 0
  },
  {
    "S.No": 284,
    "city": "Roorkee",
    "state": "Uttarakhand",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,15,278",
    "Population class": 0
  },
  {
    "S.No": 285,
    "city": "Valsad",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,14,636",
    "Population class": "Class I"
  },
  {
    "S.No": 286,
    "city": "Ambikapur",
    "state": "Chhattisgarh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "1,14,575",
    "Population class": "Class I"
  },
  {
    "S.No": 287,
    "city": "Giridih",
    "state": "Jharkhand",
    "Type": "Town Panchayat",
    "Population (2011)": "1,14,447",
    "Population class": "Class I"
  },
  {
    "S.No": 288,
    "city": "Chandausi",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "1,14,254",
    "Population class": "Class I"
  },
  {
    "S.No": 289,
    "city": "Purulia",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "1,13,806",
    "Population class": 0
  },
  {
    "S.No": 290,
    "city": "Patan",
    "state": "Gujarat",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,13,749",
    "Population class": 0
  },
  {
    "S.No": 291,
    "city": "Bagaha",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,13,012",
    "Population class": "Class I"
  },
  {
    "S.No": 292,
    "city": "Hardoi",
    "state": "Uttar Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,12,486",
    "Population class": "Class II"
  },
  {
    "S.No": 293,
    "city": "Achalpur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "1,12,293",
    "Population class": "Class I"
  },
  {
    "S.No": 294,
    "city": "Osmanabad",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "1,12,085",
    "Population class": "Class I"
  },
  {
    "S.No": 295,
    "city": "Deesa",
    "state": "Gujarat",
    "Type": 0,
    "Population (2011)": "1,11,149",
    "Population class": "Class I"
  },
  {
    "S.No": 296,
    "city": "Nandurbar",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "1,11,067",
    "Population class": "Class I"
  },
  {
    "S.No": 297,
    "city": "Azamgarh",
    "state": "Uttar Pradesh",
    "Type": "P.",
    "Population (2011)": "1,10,980",
    "Population class": "Class I"
  },
  {
    "S.No": 298,
    "city": "Ramgarh",
    "state": "Jharkhand",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,10,496",
    "Population class": 0
  },
  {
    "S.No": 299,
    "city": "Firozpur",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "1,10,091",
    "Population class": "Class I"
  },
  {
    "S.No": 300,
    "city": "Baripada Town",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "1,10,058",
    "Population class": "Class I"
  },
  {
    "S.No": 301,
    "city": "Karwar",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "1,10,000",
    "Population class": "Class I"
  },
  {
    "S.No": 302,
    "city": "Siwan",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "1,09,919",
    "Population class": 0
  },
  {
    "S.No": 303,
    "city": "Rajampet",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,09,575",
    "Population class": 0
  },
  {
    "S.No": 304,
    "city": "Pudukkottai",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "1,09,217",
    "Population class": 0
  },
  {
    "S.No": 305,
    "city": "Anantnag",
    "state": "Jammu and Kashmir",
    "Type": "Municipal Council",
    "Population (2011)": "1,08,505",
    "Population class": "Class I"
  },
  {
    "S.No": 306,
    "city": "Tadpatri",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,08,249",
    "Population class": "Class I"
  },
  {
    "S.No": 307,
    "city": "Satara",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "1,08,048",
    "Population class": 0
  },
  {
    "S.No": 308,
    "city": "Bhadrak",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "1,07,369",
    "Population class": "Class I"
  },
  {
    "S.No": 309,
    "city": "Kishanganj",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,07,076",
    "Population class": "Class I"
  },
  {
    "S.No": 310,
    "city": "Suryapet",
    "state": "Telangana",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,06,524",
    "Population class": 0
  },
  {
    "S.No": 311,
    "city": "Wardha",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "1,06,444",
    "Population class": "Class I"
  },
  {
    "S.No": 312,
    "city": "Ranebennuru",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "1,06,365",
    "Population class": 0
  },
  {
    "S.No": 313,
    "city": "Amreli",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "1,05,980",
    "Population class": "Class I"
  },
  {
    "S.No": 314,
    "city": "Neyveli (TS)",
    "state": "Tamil Nadu",
    "Type": "Census town",
    "Population (2011)": "1,05,687",
    "Population class": "Class I"
  },
  {
    "S.No": 315,
    "city": "Jamalpur",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,05,221",
    "Population class": "Class I"
  },
  {
    "S.No": 316,
    "city": "Marmagao",
    "state": "Goa",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,04,758",
    "Population class": 0
  },
  {
    "S.No": 317,
    "city": "Udgir",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "1,04,063",
    "Population class": "Class I"
  },
  {
    "S.No": 318,
    "city": "Tadepalligudem",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,03,577",
    "Population class": "Class I"
  },
  {
    "S.No": 319,
    "city": "Nagapattinam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "1,02,838",
    "Population class": "Class I"
  },
  {
    "S.No": 320,
    "city": "Buxar",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,02,591",
    "Population class": "Class I"
  },
  {
    "S.No": 321,
    "city": "Aurangabad",
    "state": "Maharashtra",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "1,02,520",
    "Population class": "Class I"
  },
  {
    "S.No": 322,
    "city": "Jehanabad",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "1,02,456",
    "Population class": "Class I"
  },
  {
    "S.No": 323,
    "city": "Phagwara",
    "state": "Punjab",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,02,253",
    "Population class": 0
  },
  {
    "S.No": 324,
    "city": "Khair",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "1,02,106",
    "Population class": "Class II"
  },
  {
    "S.No": 325,
    "city": "Sawai Madhopur",
    "state": "Rajasthan",
    "Type": "Urban Agglomeration",
    "Population (2011)": "1,01,997",
    "Population class": 0
  },
  {
    "S.No": 326,
    "city": "Kapurthala",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "1,01,654",
    "Population class": "Class I"
  },
  {
    "S.No": 327,
    "city": "Chilakaluripet",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,01,550",
    "Population class": "Class I"
  },
  {
    "S.No": 328,
    "city": "Aurangabad",
    "state": "Bihar",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "1,01,520",
    "Population class": "Class I"
  },
  {
    "S.No": 329,
    "city": "Malappuram",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "1,01,330",
    "Population class": "Class I"
  },
  {
    "S.No": 330,
    "city": "Rewari",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "1,00,684",
    "Population class": 0
  },
  {
    "S.No": 331,
    "city": "Nagaur",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "1,00,618",
    "Population class": "Class I"
  },
  {
    "S.No": 332,
    "city": "Sultanpur",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "1,00,065",
    "Population class": 0
  },
  {
    "S.No": 333,
    "city": "Nagda",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "1,00,036",
    "Population class": "Class I"
  },
  {
    "S.No": 334,
    "city": "Port Blair",
    "state": "Andaman and Nicobar Islands",
    "Type": "Municipal Council",
    "Population (2011)": "99,984",
    "Population class": 0
  },
  {
    "S.No": 335,
    "city": "Lakhisarai",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "99,979",
    "Population class": "Class II"
  },
  {
    "S.No": 336,
    "city": "Panaji",
    "state": "Goa",
    "Type": "Urban Agglomeration",
    "Population (2011)": "99,677",
    "Population class": 0
  },
  {
    "S.No": 337,
    "city": "Tinsukia",
    "state": "Assam",
    "Type": "Municipal board.",
    "Population (2011)": "99,448",
    "Population class": "Class II"
  },
  {
    "S.No": 338,
    "city": "Itarsi",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "99,329",
    "Population class": "Class II"
  },
  {
    "S.No": 339,
    "city": "Kohima",
    "state": "Nagaland",
    "Type": "Municipal Committee",
    "Population (2011)": "99,039",
    "Population class": "Class II"
  },
  {
    "S.No": 340,
    "city": "Balangir",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "98,238",
    "Population class": "Class II"
  },
  {
    "S.No": 341,
    "city": "Nawada",
    "state": "Bihar",
    "Type": "Nagar Parishad",
    "Population (2011)": "98,029",
    "Population class": "Class II"
  },
  {
    "S.No": 342,
    "city": "Jharsuguda",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "97,730",
    "Population class": "Class II"
  },
  {
    "S.No": 343,
    "city": "Jagtial",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "96,460",
    "Population class": "Class II"
  },
  {
    "S.No": 344,
    "city": "Viluppuram",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "96,253",
    "Population class": "Class II"
  },
  {
    "S.No": 345,
    "city": "Amalner",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "95,994",
    "Population class": "Class II"
  },
  {
    "S.No": 346,
    "city": "Zirakpur",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "95,553",
    "Population class": "Class II"
  },
  {
    "S.No": 347,
    "city": "Tanda",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "95,516",
    "Population class": "Class II"
  },
  {
    "S.No": 348,
    "city": "Tiruchengode",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "95,335",
    "Population class": "Class II"
  },
  {
    "S.No": 349,
    "city": "Nagina",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "95,246",
    "Population class": "Class II"
  },
  {
    "S.No": 350,
    "city": "Yemmiganur",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "95,149",
    "Population class": "Class II"
  },
  {
    "S.No": 351,
    "city": "Vaniyambadi",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "95,061",
    "Population class": "Class II"
  },
  {
    "S.No": 352,
    "city": "Sarni",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "95,012",
    "Population class": 0
  },
  {
    "S.No": 353,
    "city": "Theni Allinagaram",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "94,453",
    "Population class": "Class II"
  },
  {
    "S.No": 354,
    "city": "Margao",
    "state": "Goa",
    "Type": "Urban Agglomeration",
    "Population (2011)": "94,383",
    "Population class": 0
  },
  {
    "S.No": 355,
    "city": "Akot",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "92,637",
    "Population class": "Class II"
  },
  {
    "S.No": 356,
    "city": "Sehore",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "92,518",
    "Population class": 0
  },
  {
    "S.No": 357,
    "city": "Mhow Cantonment",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "92,364",
    "Population class": 0
  },
  {
    "S.No": 358,
    "city": "Kot Kapura",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "91,979",
    "Population class": "Class II"
  },
  {
    "S.No": 359,
    "city": "Makrana",
    "state": "Rajasthan",
    "Type": "Urban Agglomeration",
    "Population (2011)": "91,853",
    "Population class": 0
  },
  {
    "S.No": 360,
    "city": "Pandharpur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "91,379",
    "Population class": 0
  },
  {
    "S.No": 361,
    "city": "Miryalaguda",
    "state": "Telangana",
    "Type": "Urban Agglomeration",
    "Population (2011)": "91,359",
    "Population class": 0
  },
  {
    "S.No": 362,
    "city": "Shamli",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "90,055",
    "Population class": 0
  },
  {
    "S.No": 363,
    "city": "Seoni",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "89,801",
    "Population class": 0
  },
  {
    "S.No": 364,
    "city": "Ranibennur",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "89,618",
    "Population class": 0
  },
  {
    "S.No": 365,
    "city": "Kadiri",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "89,429",
    "Population class": "Class II"
  },
  {
    "S.No": 366,
    "city": "Shrirampur",
    "state": "Maharashtra",
    "Type": "Urban Agglomeration",
    "Population (2011)": "88,761",
    "Population class": 0
  },
  {
    "S.No": 367,
    "city": "Rudrapur",
    "state": "Uttarakhand",
    "Type": "Municipal board",
    "Population (2011)": "88,676",
    "Population class": 0
  },
  {
    "S.No": 368,
    "city": "Parli",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "88,537",
    "Population class": 0
  },
  {
    "S.No": 369,
    "city": "Najibabad",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "88,535",
    "Population class": "Class II"
  },
  {
    "S.No": 370,
    "city": "Nirmal",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "88,433",
    "Population class": "Class II"
  },
  {
    "S.No": 371,
    "city": "Udhagamandalam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "88,430",
    "Population class": "Class II"
  },
  {
    "S.No": 372,
    "city": "Shikohabad",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "88,161",
    "Population class": 0
  },
  {
    "S.No": 373,
    "city": "Jhumri Tilaiya",
    "state": "Jharkhand",
    "Type": "Nagar Panchayat",
    "Population (2011)": "87,867",
    "Population class": "Class II"
  },
  {
    "S.No": 374,
    "city": "Aruppukkottai",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "87,722",
    "Population class": "Class II"
  },
  {
    "S.No": 375,
    "city": "Ponnani",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "87,495",
    "Population class": 0
  },
  {
    "S.No": 376,
    "city": "Jamui",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "87,357",
    "Population class": "Class II"
  },
  {
    "S.No": 377,
    "city": "Sitamarhi",
    "state": "Bihar",
    "Type": "Urban Agglomeration",
    "Population (2011)": "87,279",
    "Population class": 0
  },
  {
    "S.No": 378,
    "city": "Chirala",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "87,200",
    "Population class": "Class II"
  },
  {
    "S.No": 379,
    "city": "Anjar",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "87,183",
    "Population class": "Class II"
  },
  {
    "S.No": 380,
    "city": "Karaikal",
    "state": "Puducherry",
    "Type": "Municipality",
    "Population (2011)": "86,838",
    "Population class": "Class II"
  },
  {
    "S.No": 381,
    "city": "Hansi",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "86,770",
    "Population class": "Class II"
  },
  {
    "S.No": 382,
    "city": "Anakapalle",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "86,519",
    "Population class": "Class II"
  },
  {
    "S.No": 383,
    "city": "Mahasamund",
    "state": "Chhattisgarh",
    "Type": "Municipality",
    "Population (2011)": 85650,
    "Population class": "Class II"
  },
  {
    "S.No": 384,
    "city": "Faridkot",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "85,435",
    "Population class": "Class II"
  },
  {
    "S.No": 385,
    "city": "Saunda",
    "state": "Jharkhand",
    "Type": "Census town",
    "Population (2011)": "85,075",
    "Population class": 0
  },
  {
    "S.No": 386,
    "city": "Dhoraji",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "84,545",
    "Population class": "Class II"
  },
  {
    "S.No": 387,
    "city": "Paramakudi",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "84,321",
    "Population class": 0
  },
  {
    "S.No": 388,
    "city": "Balaghat",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "84,261",
    "Population class": "Class II"
  },
  {
    "S.No": 389,
    "city": "Sujangarh",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "83,846",
    "Population class": 0
  },
  {
    "S.No": 390,
    "city": "Khambhat",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "83,715",
    "Population class": "Class II"
  },
  {
    "S.No": 391,
    "city": "Muktsar",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "83,655",
    "Population class": 0
  },
  {
    "S.No": 392,
    "city": "Rajpura",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "82,956",
    "Population class": 0
  },
  {
    "S.No": 393,
    "city": "Kavali",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "82,336",
    "Population class": "Class II"
  },
  {
    "S.No": 394,
    "city": "Dhamtari",
    "state": "Chhattisgarh",
    "Type": "Municipality",
    "Population (2011)": "82,111",
    "Population class": "Class II"
  },
  {
    "S.No": 395,
    "city": "Ashok Nagar",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "81,828",
    "Population class": "Class II"
  },
  {
    "S.No": 396,
    "city": "Sardarshahar",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "81,394",
    "Population class": 0
  },
  {
    "S.No": 397,
    "city": "Mahuva",
    "state": "Gujarat",
    "Type": "Urban Agglomeration",
    "Population (2011)": "80,726",
    "Population class": 0
  },
  {
    "S.No": 398,
    "city": "Bargarh",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "80,625",
    "Population class": "Class II"
  },
  {
    "S.No": 399,
    "city": "Kamareddy",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "80,315",
    "Population class": "Class II"
  },
  {
    "S.No": 400,
    "city": "Sahibganj",
    "state": "Jharkhand",
    "Type": "Municipality",
    "Population (2011)": "80,154",
    "Population class": 0
  },
  {
    "S.No": 401,
    "city": "Kothagudem",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "79,819",
    "Population class": "Class II"
  },
  {
    "S.No": 402,
    "city": "Ramanagaram",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "79,394",
    "Population class": 0
  },
  {
    "S.No": 403,
    "city": "Gokak",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "79,121",
    "Population class": "Class II"
  },
  {
    "S.No": 404,
    "city": "Tikamgarh",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "79,106",
    "Population class": "Class II"
  },
  {
    "S.No": 405,
    "city": "Araria",
    "state": "Bihar",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "79,021",
    "Population class": "Class II"
  },
  {
    "S.No": 406,
    "city": "Rishikesh",
    "state": "Uttarakhand",
    "Type": "Urban Agglomeration",
    "Population (2011)": "78,805",
    "Population class": 0
  },
  {
    "S.No": 407,
    "city": "Shahdol",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "78,624",
    "Population class": 0
  },
  {
    "S.No": 408,
    "city": "Medininagar (Daltonganj)",
    "state": "Jharkhand",
    "Type": "Nagar Parishad",
    "Population (2011)": "78,396",
    "Population class": "Class II"
  },
  {
    "S.No": 409,
    "city": "Arakkonam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "78,395",
    "Population class": "Class II"
  },
  {
    "S.No": 410,
    "city": "Washim",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "78,387",
    "Population class": "Class II"
  },
  {
    "S.No": 411,
    "city": "Sangrur",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "77,989",
    "Population class": 0
  },
  {
    "S.No": 412,
    "city": "Bodhan",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "77,573",
    "Population class": "Class II"
  },
  {
    "S.No": 413,
    "city": "Fazilka",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "76,492",
    "Population class": "Class II"
  },
  {
    "S.No": 414,
    "city": "Palacole",
    "state": "Andhra Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "76,308",
    "Population class": 0
  },
  {
    "S.No": 415,
    "city": "Keshod",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "76,193",
    "Population class": "Class II"
  },
  {
    "S.No": 416,
    "city": "Sullurpeta",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "75,925",
    "Population class": 0
  },
  {
    "S.No": 417,
    "city": "Wadhwan",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "75,755",
    "Population class": "Class II"
  },
  {
    "S.No": 418,
    "city": "Gurdaspur",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "75,549",
    "Population class": "Class II"
  },
  {
    "S.No": 419,
    "city": "Vatakara",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "75,295",
    "Population class": "Class II"
  },
  {
    "S.No": 420,
    "city": "Tura",
    "state": "Meghalaya",
    "Type": "Municipality",
    "Population (2011)": "74,858",
    "Population class": "Class II"
  },
  {
    "S.No": 421,
    "city": "Narnaul",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "74,581",
    "Population class": "Class II"
  },
  {
    "S.No": 422,
    "city": "Kharar",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "74,460",
    "Population class": "Class II"
  },
  {
    "S.No": 423,
    "city": "Yadgir",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "74,294",
    "Population class": "Class II"
  },
  {
    "S.No": 424,
    "city": "Ambejogai",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "73,975",
    "Population class": "Class II"
  },
  {
    "S.No": 425,
    "city": "Ankleshwar",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "73,928",
    "Population class": "Class II"
  },
  {
    "S.No": 426,
    "city": "Savarkundla",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "73,774",
    "Population class": 0
  },
  {
    "S.No": 427,
    "city": "Paradip",
    "state": "Odisha",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "73,625",
    "Population class": 0
  },
  {
    "S.No": 428,
    "city": "Virudhachalam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "73,585",
    "Population class": "Class II"
  },
  {
    "S.No": 429,
    "city": "Kanhangad",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "73,342",
    "Population class": "Class II"
  },
  {
    "S.No": 430,
    "city": "Kadi",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "73,228",
    "Population class": "Class II"
  },
  {
    "S.No": 431,
    "city": "Srivilliputhur",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "73,183",
    "Population class": 0
  },
  {
    "S.No": 432,
    "city": "Gobindgarh",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "73,130",
    "Population class": "Class II"
  },
  {
    "S.No": 433,
    "city": "Tindivanam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "72,796",
    "Population class": "Class II"
  },
  {
    "S.No": 434,
    "city": "Mansa",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "72,627",
    "Population class": 0
  },
  {
    "S.No": 435,
    "city": "Taliparamba",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "72,465",
    "Population class": "Class II"
  },
  {
    "S.No": 436,
    "city": "Manmad",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "72,401",
    "Population class": 0
  },
  {
    "S.No": 437,
    "city": "Tanuku",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "72,348",
    "Population class": "Class II"
  },
  {
    "S.No": 438,
    "city": "Rayachoti",
    "state": "Andhra Pradesh",
    "Type": "Census town",
    "Population (2011)": "72,297",
    "Population class": 0
  },
  {
    "S.No": 439,
    "city": "Virudhunagar",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "72,296",
    "Population class": "Class II"
  },
  {
    "S.No": 440,
    "city": "Koyilandy",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "71,873",
    "Population class": "Class II"
  },
  {
    "S.No": 441,
    "city": "Jorhat",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "71,782",
    "Population class": "Class II"
  },
  {
    "S.No": 442,
    "city": "Karur",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "70,980",
    "Population class": "Class II"
  },
  {
    "S.No": 443,
    "city": "Valparai",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "70,859",
    "Population class": "Class II"
  },
  {
    "S.No": 444,
    "city": "Srikalahasti",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "70,854",
    "Population class": 0
  },
  {
    "S.No": 445,
    "city": "Neyyattinkara",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "70,850",
    "Population class": "Class II"
  },
  {
    "S.No": 446,
    "city": "Bapatla",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "70,777",
    "Population class": "Class II"
  },
  {
    "S.No": 447,
    "city": "Fatehabad",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "70,777",
    "Population class": "Class II"
  },
  {
    "S.No": 448,
    "city": "Malout",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "70,765",
    "Population class": 0
  },
  {
    "S.No": 449,
    "city": "Sankarankovil",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "70,574",
    "Population class": "Class II"
  },
  {
    "S.No": 450,
    "city": "Tenkasi",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "70,545",
    "Population class": "Class II"
  },
  {
    "S.No": 451,
    "city": "Ratnagiri",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "70,383",
    "Population class": 0
  },
  {
    "S.No": 452,
    "city": "Rabkavi Banhatti",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "70,248",
    "Population class": 0
  },
  {
    "S.No": 453,
    "city": "Sikandrabad",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "69,867",
    "Population class": 0
  },
  {
    "S.No": 454,
    "city": "Chaibasa",
    "state": "Jharkhand",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "69,565",
    "Population class": "Class II"
  },
  {
    "S.No": 455,
    "city": "Chirmiri",
    "state": "Chhattisgarh",
    "Type": "Municipal Corporation / Corporation.",
    "Population (2011)": "69,307",
    "Population class": "Class II"
  },
  {
    "S.No": 456,
    "city": "Palwancha",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "69,088",
    "Population class": 0
  },
  {
    "S.No": 457,
    "city": "Bhawanipatna",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "69,045",
    "Population class": "Class II"
  },
  {
    "S.No": 458,
    "city": "Kayamkulam",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "68,634",
    "Population class": "Class II"
  },
  {
    "S.No": 459,
    "city": "Pithampur",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "68,080",
    "Population class": 0
  },
  {
    "S.No": 460,
    "city": "Nabha",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "67,972",
    "Population class": "Class II"
  },
  {
    "S.No": 461,
    "city": "Shahabad, Hardoi",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "67,751",
    "Population class": 0
  },
  {
    "S.No": 462,
    "city": "Dhenkanal",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "67,414",
    "Population class": "Class II"
  },
  {
    "S.No": 463,
    "city": "Uran Islampur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "67,391",
    "Population class": "Class II"
  },
  {
    "S.No": 464,
    "city": "Gopalganj",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "67,339",
    "Population class": "Class II"
  },
  {
    "S.No": 465,
    "city": "Bongaigaon City",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "67,322",
    "Population class": "Class II"
  },
  {
    "S.No": 466,
    "city": "Palani",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "67,231",
    "Population class": 0
  },
  {
    "S.No": 467,
    "city": "Pusad",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "67,116",
    "Population class": 0
  },
  {
    "S.No": 468,
    "city": "Sopore",
    "state": "Jammu and Kashmir",
    "Type": "Urban Agglomeration",
    "Population (2011)": "66,963",
    "Population class": 0
  },
  {
    "S.No": 469,
    "city": "Pilkhuwa",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "66,907",
    "Population class": 0
  },
  {
    "S.No": 470,
    "city": "Tarn Taran",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "66,847",
    "Population class": "Class II"
  },
  {
    "S.No": 471,
    "city": "Renukoot",
    "state": "Uttar Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "66,597",
    "Population class": 0
  },
  {
    "S.No": 472,
    "city": "Mandamarri",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "66,596",
    "Population class": 0
  },
  {
    "S.No": 473,
    "city": "Shahabad",
    "state": "Karnataka",
    "Type": "Urban Agglomeration",
    "Population (2011)": "66,550",
    "Population class": 0
  },
  {
    "S.No": 474,
    "city": "Barbil",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "66,540",
    "Population class": "Class II"
  },
  {
    "S.No": 475,
    "city": "Koratla",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "66,504",
    "Population class": "Class II"
  },
  {
    "S.No": 476,
    "city": "Madhubani",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "66,340",
    "Population class": 0
  },
  {
    "S.No": 477,
    "city": "Arambagh",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "66,175",
    "Population class": "Class II"
  },
  {
    "S.No": 478,
    "city": "Gohana",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "65,708",
    "Population class": "Class II"
  },
  {
    "S.No": 479,
    "city": "Ladnu",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "65,575",
    "Population class": "Class II"
  },
  {
    "S.No": 480,
    "city": "Pattukkottai",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "65,533",
    "Population class": 0
  },
  {
    "S.No": 481,
    "city": "Sirsi",
    "state": "Karnataka",
    "Type": "Urban Agglomeration",
    "Population (2011)": "65,335",
    "Population class": 0
  },
  {
    "S.No": 482,
    "city": "Sircilla",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "65,314",
    "Population class": 0
  },
  {
    "S.No": 483,
    "city": "Tamluk",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "65,306",
    "Population class": "Class II"
  },
  {
    "S.No": 484,
    "city": "Jagraon",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "65,240",
    "Population class": "Class II"
  },
  {
    "S.No": 485,
    "city": "AlipurdUrban Agglomerationr",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "65,232",
    "Population class": "Class II"
  },
  {
    "S.No": 486,
    "city": "Alirajpur",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "65,232",
    "Population class": "Class II"
  },
  {
    "S.No": 487,
    "city": "Tandur",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "65,115",
    "Population class": "Class II"
  },
  {
    "S.No": 488,
    "city": "Naidupet",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "65,000",
    "Population class": "Class II"
  },
  {
    "S.No": 489,
    "city": "Tirupathur",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "64,125",
    "Population class": "Class II"
  },
  {
    "S.No": 490,
    "city": "Tohana",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "63,871",
    "Population class": "Class II"
  },
  {
    "S.No": 491,
    "city": "Ratangarh",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "63,486",
    "Population class": 0
  },
  {
    "S.No": 492,
    "city": "Dhubri",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "63,388",
    "Population class": "Class II"
  },
  {
    "S.No": 493,
    "city": "Masaurhi",
    "state": "Bihar",
    "Type": "Nagar Parishad",
    "Population (2011)": "63,248",
    "Population class": 0
  },
  {
    "S.No": 494,
    "city": "Visnagar",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "63,073",
    "Population class": "Class II"
  },
  {
    "S.No": 495,
    "city": "Vrindavan",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "63,005",
    "Population class": "Class II"
  },
  {
    "S.No": 496,
    "city": "Nokha",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "62,699",
    "Population class": "Class II"
  },
  {
    "S.No": 497,
    "city": "Nagari",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "62,253",
    "Population class": "Class II"
  },
  {
    "S.No": 498,
    "city": "Narwana",
    "state": "Haryana",
    "Type": "Municipal Council",
    "Population (2011)": "62,090",
    "Population class": "Class II"
  },
  {
    "S.No": 499,
    "city": "Ramanathapuram",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "62,050",
    "Population class": 0
  },
  {
    "S.No": 500,
    "city": "Ujhani",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad.",
    "Population (2011)": "62,039",
    "Population class": "Class II"
  },
  {
    "S.No": 501,
    "city": "Samastipur",
    "state": "Bihar",
    "Type": "Urban Agglomeration",
    "Population (2011)": "61,998",
    "Population class": 0
  },
  {
    "S.No": 502,
    "city": "Laharpur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "61,990",
    "Population class": "Class II"
  },
  {
    "S.No": 503,
    "city": "Sangamner",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "61,958",
    "Population class": 0
  },
  {
    "S.No": 504,
    "city": "Nimbahera",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "61,949",
    "Population class": "Class II"
  },
  {
    "S.No": 505,
    "city": "Siddipet",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "61,809",
    "Population class": 0
  },
  {
    "S.No": 506,
    "city": "Suri",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "61,806",
    "Population class": 0
  },
  {
    "S.No": 507,
    "city": "Diphu",
    "state": "Assam",
    "Type": "Town Committee / Town Area Committee",
    "Population (2011)": "61,797",
    "Population class": "Class II"
  },
  {
    "S.No": 508,
    "city": "Jhargram",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "61,712",
    "Population class": "Class II"
  },
  {
    "S.No": 509,
    "city": "Shirpur-Warwade",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "61,694",
    "Population class": 0
  },
  {
    "S.No": 510,
    "city": "Tilhar",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad.",
    "Population (2011)": "61,444",
    "Population class": "Class II"
  },
  {
    "S.No": 511,
    "city": "Sindhnur",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "61,262",
    "Population class": 0
  },
  {
    "S.No": 512,
    "city": "Udumalaipettai",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "61,133",
    "Population class": "Class II"
  },
  {
    "S.No": 513,
    "city": "Malkapur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "61,012",
    "Population class": 0
  },
  {
    "S.No": 514,
    "city": "Wanaparthy",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "60,949",
    "Population class": "Class II"
  },
  {
    "S.No": 515,
    "city": "Gudur",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "60,625",
    "Population class": "Class II"
  },
  {
    "S.No": 516,
    "city": "Kendujhar",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "60,590",
    "Population class": "Class II"
  },
  {
    "S.No": 517,
    "city": "Mandla",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "60,542",
    "Population class": 0
  },
  {
    "S.No": 518,
    "city": "Mandi",
    "state": "Himachal Pradesh",
    "Type": "Municipal Council",
    "Population (2011)": "60,387",
    "Population class": 0
  },
  {
    "S.No": 519,
    "city": "Nedumangad",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "60,161",
    "Population class": "Class II"
  },
  {
    "S.No": 520,
    "city": "North Lakhimpur",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "59,814",
    "Population class": "Class II"
  },
  {
    "S.No": 521,
    "city": "Vinukonda",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "59,725",
    "Population class": "Class II"
  },
  {
    "S.No": 522,
    "city": "Tiptur",
    "state": "Karnataka",
    "Type": "City Municipal Council",
    "Population (2011)": "59,543",
    "Population class": "Class II"
  },
  {
    "S.No": 523,
    "city": "Gobichettipalayam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "59,523",
    "Population class": "Class II"
  },
  {
    "S.No": 524,
    "city": "Sunabeda",
    "state": "Odisha",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "58,884",
    "Population class": 0
  },
  {
    "S.No": 525,
    "city": "Wani",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "58,840",
    "Population class": "Class II"
  },
  {
    "S.No": 526,
    "city": "Upleta",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "58,775",
    "Population class": "Class II"
  },
  {
    "S.No": 527,
    "city": "Narasapuram",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "58,770",
    "Population class": "Class II"
  },
  {
    "S.No": 528,
    "city": "Nuzvid",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "58,590",
    "Population class": "Class II"
  },
  {
    "S.No": 529,
    "city": "Tezpur",
    "state": "Assam",
    "Type": "Municipal board.",
    "Population (2011)": "58,559",
    "Population class": "Class II"
  },
  {
    "S.No": 530,
    "city": "Una",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "58,528",
    "Population class": "Class II"
  },
  {
    "S.No": 531,
    "city": "Markapur",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "58,462",
    "Population class": 0
  },
  {
    "S.No": 532,
    "city": "Sheopur",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "58,342",
    "Population class": 0
  },
  {
    "S.No": 533,
    "city": "Thiruvarur",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "58,301",
    "Population class": "Class II"
  },
  {
    "S.No": 534,
    "city": "Sidhpur",
    "state": "Gujarat",
    "Type": "Urban Agglomeration",
    "Population (2011)": "58,194",
    "Population class": 0
  },
  {
    "S.No": 535,
    "city": "Sahaswan",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "58,184",
    "Population class": 0
  },
  {
    "S.No": 536,
    "city": "Suratgarh",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "58,119",
    "Population class": 0
  },
  {
    "S.No": 537,
    "city": "Shajapur",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "57,818",
    "Population class": 0
  },
  {
    "S.No": 538,
    "city": "Rayagada",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "57,759",
    "Population class": 0
  },
  {
    "S.No": 539,
    "city": "Lonavla",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "57,698",
    "Population class": "Class II"
  },
  {
    "S.No": 540,
    "city": "Ponnur",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "57,640",
    "Population class": 0
  },
  {
    "S.No": 541,
    "city": "Kagaznagar",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "57,583",
    "Population class": "Class II"
  },
  {
    "S.No": 542,
    "city": "Gadwal",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "57,569",
    "Population class": "Class II"
  },
  {
    "S.No": 543,
    "city": "Bhatapara",
    "state": "Chhattisgarh",
    "Type": "Municipality",
    "Population (2011)": "57,537",
    "Population class": "Class II"
  },
  {
    "S.No": 544,
    "city": "Kandukur",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "57,246",
    "Population class": "Class II"
  },
  {
    "S.No": 545,
    "city": "Sangareddy",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "57,113",
    "Population class": 0
  },
  {
    "S.No": 546,
    "city": "Unjha",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "57,108",
    "Population class": "Class II"
  },
  {
    "S.No": 547,
    "city": "Lunglei",
    "state": "Mizoram",
    "Type": "Notified Town",
    "Population (2011)": "57,011",
    "Population class": "Class II"
  },
  {
    "S.No": 548,
    "city": "Karimganj",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "56,854",
    "Population class": "Class II"
  },
  {
    "S.No": 549,
    "city": "Kannur",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "56,823",
    "Population class": "Class II"
  },
  {
    "S.No": 550,
    "city": "Bobbili",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "56,819",
    "Population class": "Class II"
  },
  {
    "S.No": 551,
    "city": "Mokameh",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "56,615",
    "Population class": 0
  },
  {
    "S.No": 552,
    "city": "Talegaon Dabhade",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "56,435",
    "Population class": "Class II"
  },
  {
    "S.No": 553,
    "city": "Anjangaon",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "56,380",
    "Population class": "Class II"
  },
  {
    "S.No": 554,
    "city": "Mangrol",
    "state": "Gujarat",
    "Type": "Urban Agglomeration",
    "Population (2011)": "56,320",
    "Population class": 0
  },
  {
    "S.No": 555,
    "city": "Sunam",
    "state": "Punjab",
    "Type": "Urban Agglomeration",
    "Population (2011)": "56,251",
    "Population class": 0
  },
  {
    "S.No": 556,
    "city": "Gangarampur",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "56,175",
    "Population class": "Class II"
  },
  {
    "S.No": 557,
    "city": "Thiruvallur",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "56,074",
    "Population class": "Class II"
  },
  {
    "S.No": 558,
    "city": "Tirur",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "56,058",
    "Population class": "Class II"
  },
  {
    "S.No": 559,
    "city": "Rath",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "55,950",
    "Population class": 0
  },
  {
    "S.No": 560,
    "city": "Jatani",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "55,925",
    "Population class": "Class II"
  },
  {
    "S.No": 561,
    "city": "Viramgam",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "55,821",
    "Population class": "Class II"
  },
  {
    "S.No": 562,
    "city": "Rajsamand",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "55,687",
    "Population class": 0
  },
  {
    "S.No": 563,
    "city": "Yanam",
    "state": "Puducherry",
    "Type": "Municipality",
    "Population (2011)": "55,626",
    "Population class": "Class II"
  },
  {
    "S.No": 564,
    "city": "Kottayam",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "55,374",
    "Population class": "Class II"
  },
  {
    "S.No": 565,
    "city": "Panruti",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "55,346",
    "Population class": 0
  },
  {
    "S.No": 566,
    "city": "Dhuri",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "55,225",
    "Population class": "Class II"
  },
  {
    "S.No": 567,
    "city": "Namakkal",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "55,145",
    "Population class": "Class II"
  },
  {
    "S.No": 568,
    "city": "Kasaragod",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "54,172",
    "Population class": "Class II"
  },
  {
    "S.No": 569,
    "city": "Modasa",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "54,135",
    "Population class": 0
  },
  {
    "S.No": 570,
    "city": "Rayadurg",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "54,125",
    "Population class": 0
  },
  {
    "S.No": 571,
    "city": "Supaul",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "54,085",
    "Population class": 0
  },
  {
    "S.No": 572,
    "city": "Kunnamkulam",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "54,071",
    "Population class": "Class II"
  },
  {
    "S.No": 573,
    "city": "Umred",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "53,971",
    "Population class": "Class II"
  },
  {
    "S.No": 574,
    "city": "Bellampalle",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "53,958",
    "Population class": "Class II"
  },
  {
    "S.No": 575,
    "city": "Sibsagar",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "53,854",
    "Population class": 0
  },
  {
    "S.No": 576,
    "city": "Mandi Dabwali",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "53,811",
    "Population class": 0
  },
  {
    "S.No": 577,
    "city": "Ottappalam",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "53,792",
    "Population class": "Class II"
  },
  {
    "S.No": 578,
    "city": "Dumraon",
    "state": "Bihar",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "53,618",
    "Population class": "Class II"
  },
  {
    "S.No": 579,
    "city": "Samalkot",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "53,602",
    "Population class": 0
  },
  {
    "S.No": 580,
    "city": "Jaggaiahpet",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "53,530",
    "Population class": "Class II"
  },
  {
    "S.No": 581,
    "city": "Goalpara",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "53,430",
    "Population class": "Class II"
  },
  {
    "S.No": 582,
    "city": "Tuni",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "53,425",
    "Population class": "Class II"
  },
  {
    "S.No": 583,
    "city": "Lachhmangarh",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "53,392",
    "Population class": "Class II"
  },
  {
    "S.No": 584,
    "city": "Bhongir",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "53,339",
    "Population class": "Class II"
  },
  {
    "S.No": 585,
    "city": "Amalapuram",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "53,231",
    "Population class": "Class II"
  },
  {
    "S.No": 586,
    "city": "Firozpur Cantt.",
    "state": "Punjab",
    "Type": "Cantonment Board / Cantonment",
    "Population (2011)": "53,199",
    "Population class": "Class II"
  },
  {
    "S.No": 587,
    "city": "Vikarabad",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "53,143",
    "Population class": "Class II"
  },
  {
    "S.No": 588,
    "city": "Thiruvalla",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "52,883",
    "Population class": "Class II"
  },
  {
    "S.No": 589,
    "city": "Sherkot",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "52,880",
    "Population class": 0
  },
  {
    "S.No": 590,
    "city": "Palghar",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "52,677",
    "Population class": 0
  },
  {
    "S.No": 591,
    "city": "Shegaon",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "52,423",
    "Population class": 0
  },
  {
    "S.No": 592,
    "city": "Jangaon",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "52,394",
    "Population class": "Class II"
  },
  {
    "S.No": 593,
    "city": "Bheemunipatnam",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "52,110",
    "Population class": "Class II"
  },
  {
    "S.No": 594,
    "city": "Panna",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "52,057",
    "Population class": 0
  },
  {
    "S.No": 595,
    "city": "Thodupuzha",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "52,045",
    "Population class": "Class II"
  },
  {
    "S.No": 596,
    "city": "KathUrban Agglomeration",
    "state": "Jammu and Kashmir",
    "Type": "Municipal Council",
    "Population (2011)": "51,991",
    "Population class": "Class II"
  },
  {
    "S.No": 597,
    "city": "Palitana",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "51,944",
    "Population class": 0
  },
  {
    "S.No": 598,
    "city": "Arwal",
    "state": "Bihar",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "51,849",
    "Population class": "Class II"
  },
  {
    "S.No": 599,
    "city": "Venkatagiri",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "51,708",
    "Population class": "Class II"
  },
  {
    "S.No": 600,
    "city": "Kalpi",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "51,670",
    "Population class": "Class II"
  },
  {
    "S.No": 601,
    "city": "Rajgarh (Churu)",
    "state": "Rajasthan",
    "Type": "Urban Agglomeration",
    "Population (2011)": "51,640",
    "Population class": 0
  },
  {
    "S.No": 602,
    "city": "Sattenapalle",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "51,404",
    "Population class": 0
  },
  {
    "S.No": 603,
    "city": "Arsikere",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "51,336",
    "Population class": "Class II"
  },
  {
    "S.No": 604,
    "city": "Ozar",
    "state": "Maharashtra",
    "Type": "Census town",
    "Population (2011)": "51,297",
    "Population class": "Class II"
  },
  {
    "S.No": 605,
    "city": "Thirumangalam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "51,194",
    "Population class": "Class II"
  },
  {
    "S.No": 606,
    "city": "Petlad",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "51,147",
    "Population class": 0
  },
  {
    "S.No": 607,
    "city": "Nasirabad",
    "state": "Rajasthan",
    "Type": "Cantonment Board / Cantonment",
    "Population (2011)": "50,804",
    "Population class": "Class II"
  },
  {
    "S.No": 608,
    "city": "Phaltan",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "50,800",
    "Population class": 0
  },
  {
    "S.No": 609,
    "city": "Rampurhat",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "50,613",
    "Population class": 0
  },
  {
    "S.No": 610,
    "city": "Nanjangud",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "50,598",
    "Population class": "Class II"
  },
  {
    "S.No": 611,
    "city": "Forbesganj",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "50,475",
    "Population class": "Class II"
  },
  {
    "S.No": 612,
    "city": "Tundla",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "50,423",
    "Population class": "Class II"
  },
  {
    "S.No": 613,
    "city": "BhabUrban Agglomeration",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "50,179",
    "Population class": "Class II"
  },
  {
    "S.No": 614,
    "city": "Sagara",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "50,131",
    "Population class": 0
  },
  {
    "S.No": 615,
    "city": "Pithapuram",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "50,103",
    "Population class": 0
  },
  {
    "S.No": 616,
    "city": "Sira",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "50,088",
    "Population class": 0
  },
  {
    "S.No": 617,
    "city": "Bhadrachalam",
    "state": "Telangana",
    "Type": "Census town",
    "Population (2011)": "50,087",
    "Population class": "Class II"
  },
  {
    "S.No": 618,
    "city": "Charkhi Dadri",
    "state": "Haryana",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "49,985",
    "Population class": "Class III"
  },
  {
    "S.No": 619,
    "city": "Chatra",
    "state": "Jharkhand",
    "Type": "Municipality",
    "Population (2011)": "49,985",
    "Population class": "Class III"
  },
  {
    "S.No": 620,
    "city": "Palasa Kasibugga",
    "state": "Andhra Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "49,899",
    "Population class": 0
  },
  {
    "S.No": 621,
    "city": "Nohar",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "49,835",
    "Population class": "Class III"
  },
  {
    "S.No": 622,
    "city": "Yevla",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "49,826",
    "Population class": "Class III"
  },
  {
    "S.No": 623,
    "city": "Sirhind Fatehgarh Sahib",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "49,825",
    "Population class": 0
  },
  {
    "S.No": 624,
    "city": "Bhainsa",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "49,764",
    "Population class": "Class III"
  },
  {
    "S.No": 625,
    "city": "Parvathipuram",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "49,714",
    "Population class": 0
  },
  {
    "S.No": 626,
    "city": "Shahade",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "49,696",
    "Population class": 0
  },
  {
    "S.No": 627,
    "city": "Chalakudy",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "49,525",
    "Population class": "Class III"
  },
  {
    "S.No": 628,
    "city": "Narkatiaganj",
    "state": "Bihar",
    "Type": "Nagar Parishad",
    "Population (2011)": "49,507",
    "Population class": "Class III"
  },
  {
    "S.No": 629,
    "city": "Kapadvanj",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "49,308",
    "Population class": "Class III"
  },
  {
    "S.No": 630,
    "city": "Macherla",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "49,221",
    "Population class": 0
  },
  {
    "S.No": 631,
    "city": "Raghogarh-Vijaypur",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "49,173",
    "Population class": 0
  },
  {
    "S.No": 632,
    "city": "Rupnagar",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "49,159",
    "Population class": 0
  },
  {
    "S.No": 633,
    "city": "Naugachhia",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "49,069",
    "Population class": "Class III"
  },
  {
    "S.No": 634,
    "city": "Sendhwa",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "48,941",
    "Population class": 0
  },
  {
    "S.No": 635,
    "city": "Byasanagar",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "48,911",
    "Population class": "Class III"
  },
  {
    "S.No": 636,
    "city": "Sandila",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "48,899",
    "Population class": 0
  },
  {
    "S.No": 637,
    "city": "Gooty",
    "state": "Andhra Pradesh",
    "Type": "Census town",
    "Population (2011)": "48,658",
    "Population class": "Class III"
  },
  {
    "S.No": 638,
    "city": "Salur",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "48,354",
    "Population class": 0
  },
  {
    "S.No": 639,
    "city": "Nanpara",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "48,337",
    "Population class": "Class III"
  },
  {
    "S.No": 640,
    "city": "Sardhana",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "48,314",
    "Population class": 0
  },
  {
    "S.No": 641,
    "city": "Vita",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "48,289",
    "Population class": "Class III"
  },
  {
    "S.No": 642,
    "city": "Gumia",
    "state": "Jharkhand",
    "Type": "Census town",
    "Population (2011)": "48,141",
    "Population class": "Class III"
  },
  {
    "S.No": 643,
    "city": "Puttur",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "48,070",
    "Population class": 0
  },
  {
    "S.No": 644,
    "city": "Jalandhar Cantt.",
    "state": "Punjab",
    "Type": "Cantonment Board / Cantonment",
    "Population (2011)": "47,845",
    "Population class": "Class III"
  },
  {
    "S.No": 645,
    "city": "Nehtaur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "47,834",
    "Population class": "Class III"
  },
  {
    "S.No": 646,
    "city": "Changanassery",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "47,685",
    "Population class": "Class III"
  },
  {
    "S.No": 647,
    "city": "Mandapeta",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "47,638",
    "Population class": 0
  },
  {
    "S.No": 648,
    "city": "Dumka",
    "state": "Jharkhand",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "47,584",
    "Population class": "Class III"
  },
  {
    "S.No": 649,
    "city": "Seohara",
    "state": "Uttar Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "47,575",
    "Population class": 0
  },
  {
    "S.No": 650,
    "city": "Umarkhed",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "47,458",
    "Population class": "Class III"
  },
  {
    "S.No": 651,
    "city": "Madhupur",
    "state": "Jharkhand",
    "Type": "Municipality",
    "Population (2011)": "47,326",
    "Population class": 0
  },
  {
    "S.No": 652,
    "city": "Vikramasingapuram",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "47,241",
    "Population class": "Class III"
  },
  {
    "S.No": 653,
    "city": "Punalur",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "47,235",
    "Population class": 0
  },
  {
    "S.No": 654,
    "city": "Kendrapara",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "47,006",
    "Population class": "Class III"
  },
  {
    "S.No": 655,
    "city": "Sihor",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "46,960",
    "Population class": 0
  },
  {
    "S.No": 656,
    "city": "Nellikuppam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "46,678",
    "Population class": "Class III"
  },
  {
    "S.No": 657,
    "city": "Samana",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "46,592",
    "Population class": 0
  },
  {
    "S.No": 658,
    "city": "Warora",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "46,532",
    "Population class": "Class III"
  },
  {
    "S.No": 659,
    "city": "Nilambur",
    "state": "Kerala",
    "Type": "Census town",
    "Population (2011)": "46,366",
    "Population class": "Class III"
  },
  {
    "S.No": 660,
    "city": "Rasipuram",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "46,330",
    "Population class": 0
  },
  {
    "S.No": 661,
    "city": "Ramnagar",
    "state": "Uttarakhand",
    "Type": "Municipal board",
    "Population (2011)": "46,205",
    "Population class": 0
  },
  {
    "S.No": 662,
    "city": "Jammalamadugu",
    "state": "Andhra Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "46,069",
    "Population class": "Class III"
  },
  {
    "S.No": 663,
    "city": "Nawanshahr",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "46,024",
    "Population class": "Class III"
  },
  {
    "S.No": 664,
    "city": "Thoubal",
    "state": "Manipur",
    "Type": "Municipal Council",
    "Population (2011)": "45,947",
    "Population class": "Class III"
  },
  {
    "S.No": 665,
    "city": "Athni",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "45,858",
    "Population class": "Class III"
  },
  {
    "S.No": 666,
    "city": "Cherthala",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "45,827",
    "Population class": "Class III"
  },
  {
    "S.No": 667,
    "city": "Sidhi",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "45,700",
    "Population class": 0
  },
  {
    "S.No": 668,
    "city": "Farooqnagar",
    "state": "Telangana",
    "Type": "Census town.",
    "Population (2011)": "45,675",
    "Population class": "Class III"
  },
  {
    "S.No": 669,
    "city": "Peddapuram",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "45,520",
    "Population class": 0
  },
  {
    "S.No": 670,
    "city": "Chirkunda",
    "state": "Jharkhand",
    "Type": "Nagar Panchayat",
    "Population (2011)": "45,508",
    "Population class": "Class III"
  },
  {
    "S.No": 671,
    "city": "Pachora",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "45,333",
    "Population class": 0
  },
  {
    "S.No": 672,
    "city": "Madhepura",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "45,031",
    "Population class": 0
  },
  {
    "S.No": 673,
    "city": "Pithoragarh",
    "state": "Uttarakhand",
    "Type": "Municipal board",
    "Population (2011)": "44,964",
    "Population class": 0
  },
  {
    "S.No": 674,
    "city": "Tumsar",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "44,869",
    "Population class": "Class III"
  },
  {
    "S.No": 675,
    "city": "Phalodi",
    "state": "Rajasthan",
    "Type": "Urban Agglomeration",
    "Population (2011)": "44,868",
    "Population class": 0
  },
  {
    "S.No": 676,
    "city": "Tiruttani",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "44,781",
    "Population class": "Class III"
  },
  {
    "S.No": 677,
    "city": "Rampura Phul",
    "state": "Punjab",
    "Type": "Urban Agglomeration",
    "Population (2011)": "44,665",
    "Population class": 0
  },
  {
    "S.No": 678,
    "city": "Perinthalmanna",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "44,612",
    "Population class": 0
  },
  {
    "S.No": 679,
    "city": "Padrauna",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "44,383",
    "Population class": 0
  },
  {
    "S.No": 680,
    "city": "Pipariya",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "44,378",
    "Population class": 0
  },
  {
    "S.No": 681,
    "city": "Dalli-Rajhara",
    "state": "Chhattisgarh",
    "Type": "Municipality",
    "Population (2011)": "44,363",
    "Population class": "Class III"
  },
  {
    "S.No": 682,
    "city": "Punganur",
    "state": "Andhra Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "44,314",
    "Population class": 0
  },
  {
    "S.No": 683,
    "city": "Mattannur",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "44,313",
    "Population class": 0
  },
  {
    "S.No": 684,
    "city": "Mathura",
    "state": "Uttar Pradesh",
    "Type": "Municipality",
    "Population (2011)": "44,313",
    "Population class": 0
  },
  {
    "S.No": 685,
    "city": "Thakurdwara",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad.",
    "Population (2011)": "44,255",
    "Population class": "Class III"
  },
  {
    "S.No": 686,
    "city": "Nandivaram-Guduvancheri",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "44,098",
    "Population class": "Class III"
  },
  {
    "S.No": 687,
    "city": "Mulbagal",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "44,033",
    "Population class": 0
  },
  {
    "S.No": 688,
    "city": "Manjlegaon",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "44,029",
    "Population class": 0
  },
  {
    "S.No": 689,
    "city": "Wankaner",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "43,881",
    "Population class": "Class III"
  },
  {
    "S.No": 690,
    "city": "Sillod",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "43,867",
    "Population class": 0
  },
  {
    "S.No": 691,
    "city": "Nidadavole",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "43,809",
    "Population class": "Class III"
  },
  {
    "S.No": 692,
    "city": "Surapura",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "43,622",
    "Population class": 0
  },
  {
    "S.No": 693,
    "city": "Rajagangapur",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "43,594",
    "Population class": 0
  },
  {
    "S.No": 694,
    "city": "Sheikhpura",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "43,113",
    "Population class": 0
  },
  {
    "S.No": 695,
    "city": "Parlakhemundi",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "43,097",
    "Population class": 0
  },
  {
    "S.No": 696,
    "city": "Kalimpong",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "42,998",
    "Population class": "Class III"
  },
  {
    "S.No": 697,
    "city": "Siruguppa",
    "state": "Karnataka",
    "Type": "Town Panchayat",
    "Population (2011)": "42,919",
    "Population class": 0
  },
  {
    "S.No": 698,
    "city": "Arvi",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "42,822",
    "Population class": "Class III"
  },
  {
    "S.No": 699,
    "city": "Limbdi",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "42,769",
    "Population class": "Class III"
  },
  {
    "S.No": 700,
    "city": "Barpeta",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "42,649",
    "Population class": "Class III"
  },
  {
    "S.No": 701,
    "city": "Manglaur",
    "state": "Uttarakhand",
    "Type": "Municipal board",
    "Population (2011)": "42,584",
    "Population class": 0
  },
  {
    "S.No": 702,
    "city": "Repalle",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "42,539",
    "Population class": 0
  },
  {
    "S.No": 703,
    "city": "Mudhol",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "42,461",
    "Population class": 0
  },
  {
    "S.No": 704,
    "city": "Shujalpur",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "42,461",
    "Population class": 0
  },
  {
    "S.No": 705,
    "city": "Mandvi",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "42,355",
    "Population class": 0
  },
  {
    "S.No": 706,
    "city": "Thangadh",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "42,351",
    "Population class": "Class III"
  },
  {
    "S.No": 707,
    "city": "Sironj",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "42,179",
    "Population class": 0
  },
  {
    "S.No": 708,
    "city": "Nandura",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "42,167",
    "Population class": "Class III"
  },
  {
    "S.No": 709,
    "city": "Shoranur",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "42,029",
    "Population class": 0
  },
  {
    "S.No": 710,
    "city": "Nathdwara",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "42,016",
    "Population class": "Class III"
  },
  {
    "S.No": 711,
    "city": "Periyakulam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "42,012",
    "Population class": 0
  },
  {
    "S.No": 712,
    "city": "Sultanganj",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "41,958",
    "Population class": 0
  },
  {
    "S.No": 713,
    "city": "Medak",
    "state": "Telangana",
    "Type": "Nagar Panchayat",
    "Population (2011)": "41,945",
    "Population class": 0
  },
  {
    "S.No": 714,
    "city": "Narayanpet",
    "state": "Telangana",
    "Type": "Nagar Panchayat",
    "Population (2011)": "41,752",
    "Population class": "Class III"
  },
  {
    "S.No": 715,
    "city": "Raxaul Bazar",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "41,610",
    "Population class": 0
  },
  {
    "S.No": 716,
    "city": "Rajauri",
    "state": "Jammu and Kashmir",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "41,552",
    "Population class": 0
  },
  {
    "S.No": 717,
    "city": "Pernampattu",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "41,499",
    "Population class": 0
  },
  {
    "S.No": 718,
    "city": "Nainital",
    "state": "Uttarakhand",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "41,377",
    "Population class": "Class III"
  },
  {
    "S.No": 719,
    "city": "Ramachandrapuram",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "41,370",
    "Population class": 0
  },
  {
    "S.No": 720,
    "city": "Vaijapur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "41,296",
    "Population class": "Class III"
  },
  {
    "S.No": 721,
    "city": "Nangal",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "41,172",
    "Population class": "Class III"
  },
  {
    "S.No": 722,
    "city": "Sidlaghatta",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "41,098",
    "Population class": 0
  },
  {
    "S.No": 723,
    "city": "Punch",
    "state": "Jammu and Kashmir",
    "Type": "Municipal board",
    "Population (2011)": "40,987",
    "Population class": 0
  },
  {
    "S.No": 724,
    "city": "Pandhurna",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "40,931",
    "Population class": 0
  },
  {
    "S.No": 725,
    "city": "Wadgaon Road",
    "state": "Maharashtra",
    "Type": "Census town.",
    "Population (2011)": "40,884",
    "Population class": "Class III"
  },
  {
    "S.No": 726,
    "city": "Talcher",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "40,841",
    "Population class": "Class III"
  },
  {
    "S.No": 727,
    "city": "Varkala",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "40,728",
    "Population class": "Class III"
  },
  {
    "S.No": 728,
    "city": "Pilani",
    "state": "Rajasthan",
    "Type": "Urban Agglomeration",
    "Population (2011)": "40,590",
    "Population class": 0
  },
  {
    "S.No": 729,
    "city": "Nowgong",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "40,580",
    "Population class": "Class III"
  },
  {
    "S.No": 730,
    "city": "Naila Janjgir",
    "state": "Chhattisgarh",
    "Type": "Municipality",
    "Population (2011)": "40,561",
    "Population class": "Class III"
  },
  {
    "S.No": 731,
    "city": "Mapusa",
    "state": "Goa",
    "Type": "Municipal Council",
    "Population (2011)": "40,487",
    "Population class": 0
  },
  {
    "S.No": 732,
    "city": "Vellakoil",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "40,359",
    "Population class": "Class III"
  },
  {
    "S.No": 733,
    "city": "Merta City",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "40,252",
    "Population class": 0
  },
  {
    "S.No": 734,
    "city": "Sivaganga",
    "state": "Tamil Nadu",
    "Type": "Urban Agglomeration",
    "Population (2011)": "40,220",
    "Population class": 0
  },
  {
    "S.No": 735,
    "city": "Mandideep",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "39,859",
    "Population class": 0
  },
  {
    "S.No": 736,
    "city": "Sailu",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "39,851",
    "Population class": 0
  },
  {
    "S.No": 737,
    "city": "Vyara",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "39,789",
    "Population class": "Class III"
  },
  {
    "S.No": 738,
    "city": "Kovvur",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "39,667",
    "Population class": "Class III"
  },
  {
    "S.No": 739,
    "city": "Vadalur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "39,514",
    "Population class": "Class III"
  },
  {
    "S.No": 740,
    "city": "Nawabganj",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "39,241",
    "Population class": "Class III"
  },
  {
    "S.No": 741,
    "city": "Padra",
    "state": "Gujarat",
    "Type": "Urban Agglomeration",
    "Population (2011)": "39,205",
    "Population class": 0
  },
  {
    "S.No": 742,
    "city": "Sainthia",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "39,145",
    "Population class": 0
  },
  {
    "S.No": 743,
    "city": "Siana",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "38,999",
    "Population class": 0
  },
  {
    "S.No": 744,
    "city": "Shahpur",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "38,907",
    "Population class": 0
  },
  {
    "S.No": 745,
    "city": "Sojat",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "38,883",
    "Population class": 0
  },
  {
    "S.No": 746,
    "city": "Noorpur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "38,806",
    "Population class": "Class III"
  },
  {
    "S.No": 747,
    "city": "Paravoor",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "38,652",
    "Population class": 0
  },
  {
    "S.No": 748,
    "city": "Murtijapur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "38,554",
    "Population class": 0
  },
  {
    "S.No": 749,
    "city": "Ramnagar",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "38,554",
    "Population class": 0
  },
  {
    "S.No": 750,
    "city": "Sundargarh",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "38,421",
    "Population class": 0
  },
  {
    "S.No": 751,
    "city": "Taki",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "38,263",
    "Population class": "Class III"
  },
  {
    "S.No": 752,
    "city": "Saundatti-Yellamma",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "38,155",
    "Population class": 0
  },
  {
    "S.No": 753,
    "city": "Pathanamthitta",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "38,009",
    "Population class": 0
  },
  {
    "S.No": 754,
    "city": "Wadi",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "37,988",
    "Population class": "Class III"
  },
  {
    "S.No": 755,
    "city": "Rameshwaram",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "37,968",
    "Population class": 0
  },
  {
    "S.No": 756,
    "city": "Tasgaon",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "37,945",
    "Population class": "Class III"
  },
  {
    "S.No": 757,
    "city": "Sikandra Rao",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "37,938",
    "Population class": 0
  },
  {
    "S.No": 758,
    "city": "Sihora",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "37,870",
    "Population class": 0
  },
  {
    "S.No": 759,
    "city": "Tiruvethipuram",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "37,802",
    "Population class": "Class III"
  },
  {
    "S.No": 760,
    "city": "Tiruvuru",
    "state": "Andhra Pradesh",
    "Type": "Municipality",
    "Population (2011)": "37,802",
    "Population class": "Class III"
  },
  {
    "S.No": 761,
    "city": "Mehkar",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "37,715",
    "Population class": 0
  },
  {
    "S.No": 762,
    "city": "Peringathur",
    "state": "Kerala",
    "Type": "Census town",
    "Population (2011)": "37,699",
    "Population class": 0
  },
  {
    "S.No": 763,
    "city": "Perambalur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "37,631",
    "Population class": 0
  },
  {
    "S.No": 764,
    "city": "Manvi",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "37,613",
    "Population class": 0
  },
  {
    "S.No": 765,
    "city": "Zunheboto",
    "state": "Nagaland",
    "Type": "Town Committee / Town Area Committee",
    "Population (2011)": "37,447",
    "Population class": "Class III"
  },
  {
    "S.No": 766,
    "city": "Mahnar Bazar",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "37,370",
    "Population class": 0
  },
  {
    "S.No": 767,
    "city": "Attingal",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "37,346",
    "Population class": "Class III"
  },
  {
    "S.No": 768,
    "city": "Shahbad",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "37,289",
    "Population class": 0
  },
  {
    "S.No": 769,
    "city": "Puranpur",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "37,233",
    "Population class": 0
  },
  {
    "S.No": 770,
    "city": "Nelamangala",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "37,232",
    "Population class": "Class III"
  },
  {
    "S.No": 771,
    "city": "Nakodar",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "36,973",
    "Population class": "Class III"
  },
  {
    "S.No": 772,
    "city": "Lunawada",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "36,954",
    "Population class": "Class III"
  },
  {
    "S.No": 773,
    "city": "Murshidabad",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "36,947",
    "Population class": 0
  },
  {
    "S.No": 774,
    "city": "Mahe",
    "state": "Puducherry",
    "Type": "Municipality",
    "Population (2011)": "36,828",
    "Population class": 0
  },
  {
    "S.No": 775,
    "city": "Lanka",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "36,805",
    "Population class": "Class III"
  },
  {
    "S.No": 776,
    "city": "Rudauli",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "36,776",
    "Population class": 0
  },
  {
    "S.No": 777,
    "city": "Tuensang",
    "state": "Nagaland",
    "Type": "Town Committee / Town Area Committee",
    "Population (2011)": "36,774",
    "Population class": "Class III"
  },
  {
    "S.No": 778,
    "city": "Lakshmeshwar",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "36,754",
    "Population class": "Class III"
  },
  {
    "S.No": 779,
    "city": "Zira",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "36,732",
    "Population class": "Class III"
  },
  {
    "S.No": 780,
    "city": "Yawal",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "36,706",
    "Population class": "Class III"
  },
  {
    "S.No": 781,
    "city": "Thana Bhawan",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "36,669",
    "Population class": "Class III"
  },
  {
    "S.No": 782,
    "city": "Ramdurg",
    "state": "Karnataka",
    "Type": "Urban Agglomeration",
    "Population (2011)": "36,649",
    "Population class": 0
  },
  {
    "S.No": 783,
    "city": "Pulgaon",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "36,522",
    "Population class": 0
  },
  {
    "S.No": 784,
    "city": "Sadasivpet",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "36,334",
    "Population class": 0
  },
  {
    "S.No": 785,
    "city": "Nargund",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "36,291",
    "Population class": "Class III"
  },
  {
    "S.No": 786,
    "city": "Neem-Ka-Thana",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "36,231",
    "Population class": "Class III"
  },
  {
    "S.No": 787,
    "city": "Memari",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "36,207",
    "Population class": 0
  },
  {
    "S.No": 788,
    "city": "Nilanga",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "36,172",
    "Population class": "Class III"
  },
  {
    "S.No": 789,
    "city": "Naharlagun",
    "state": "Arunachal Pradesh",
    "Type": "Notified Town",
    "Population (2011)": "36,158",
    "Population class": "Class III"
  },
  {
    "S.No": 790,
    "city": "Pakaur",
    "state": "Jharkhand",
    "Type": "Municipality",
    "Population (2011)": "36,029",
    "Population class": 0
  },
  {
    "S.No": 791,
    "city": "Wai",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "36,025",
    "Population class": "Class III"
  },
  {
    "S.No": 792,
    "city": "Tarikere",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "35,942",
    "Population class": "Class III"
  },
  {
    "S.No": 793,
    "city": "Malavalli",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "35,851",
    "Population class": 0
  },
  {
    "S.No": 794,
    "city": "Raisen",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "35,702",
    "Population class": 0
  },
  {
    "S.No": 795,
    "city": "Lahar",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "35,674",
    "Population class": "Class III"
  },
  {
    "S.No": 796,
    "city": "Uravakonda",
    "state": "Andhra Pradesh",
    "Type": "Census town",
    "Population (2011)": "35,565",
    "Population class": "Class III"
  },
  {
    "S.No": 797,
    "city": "Savanur",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "35,563",
    "Population class": 0
  },
  {
    "S.No": 798,
    "city": "Sirohi",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "35,544",
    "Population class": 0
  },
  {
    "S.No": 799,
    "city": "Udhampur",
    "state": "Jammu and Kashmir",
    "Type": "Urban Agglomeration",
    "Population (2011)": "35,507",
    "Population class": "Class III"
  },
  {
    "S.No": 800,
    "city": "Umarga",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "35,477",
    "Population class": "Class III"
  },
  {
    "S.No": 801,
    "city": "Pratapgarh",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "35,422",
    "Population class": 0
  },
  {
    "S.No": 802,
    "city": "Lingsugur",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "35,411",
    "Population class": "Class III"
  },
  {
    "S.No": 803,
    "city": "Usilampatti",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "35,219",
    "Population class": "Class III"
  },
  {
    "S.No": 804,
    "city": "Palia Kalan",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "35,029",
    "Population class": 0
  },
  {
    "S.No": 805,
    "city": "Wokha",
    "state": "Nagaland",
    "Type": "Town Committee / Town Area Committee.",
    "Population (2011)": "35,004",
    "Population class": "Class III"
  },
  {
    "S.No": 806,
    "city": "Rajpipla",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "34,923",
    "Population class": 0
  },
  {
    "S.No": 807,
    "city": "Vijayapura",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "34,866",
    "Population class": "Class III"
  },
  {
    "S.No": 808,
    "city": "Rawatbhata",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "34,690",
    "Population class": 0
  },
  {
    "S.No": 809,
    "city": "Sangaria",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "34,537",
    "Population class": 0
  },
  {
    "S.No": 810,
    "city": "Paithan",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "34,518",
    "Population class": 0
  },
  {
    "S.No": 811,
    "city": "Rahuri",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "34,476",
    "Population class": 0
  },
  {
    "S.No": 812,
    "city": "Patti",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "34,444",
    "Population class": 0
  },
  {
    "S.No": 813,
    "city": "Zaidpur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "34,443",
    "Population class": "Class III"
  },
  {
    "S.No": 814,
    "city": "Lalsot",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "34,363",
    "Population class": "Class III"
  },
  {
    "S.No": 815,
    "city": "Maihar",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "34,342",
    "Population class": 0
  },
  {
    "S.No": 816,
    "city": "Vedaranyam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "34,266",
    "Population class": "Class III"
  },
  {
    "S.No": 817,
    "city": "Nawapur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "34,207",
    "Population class": "Class III"
  },
  {
    "S.No": 818,
    "city": "Solan",
    "state": "Himachal Pradesh",
    "Type": "Municipal Council",
    "Population (2011)": "34,206",
    "Population class": 0
  },
  {
    "S.No": 819,
    "city": "Vapi",
    "state": "Gujarat",
    "Type": "Industrial Notified Area",
    "Population (2011)": "34,162",
    "Population class": "Class III"
  },
  {
    "S.No": 820,
    "city": "Sanawad",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "34,114",
    "Population class": 0
  },
  {
    "S.No": 821,
    "city": "Warisaliganj",
    "state": "Bihar",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "34,056",
    "Population class": "Class III"
  },
  {
    "S.No": 822,
    "city": "Revelganj",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "34,042",
    "Population class": 0
  },
  {
    "S.No": 823,
    "city": "Sabalgarh",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "34,039",
    "Population class": 0
  },
  {
    "S.No": 824,
    "city": "Tuljapur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "34,011",
    "Population class": "Class III"
  },
  {
    "S.No": 825,
    "city": "Simdega",
    "state": "Jharkhand",
    "Type": "Notified area",
    "Population (2011)": "33,981",
    "Population class": 0
  },
  {
    "S.No": 826,
    "city": "Musabani",
    "state": "Jharkhand",
    "Type": "Census town",
    "Population (2011)": "33,980",
    "Population class": 0
  },
  {
    "S.No": 827,
    "city": "Kodungallur",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "33,935",
    "Population class": "Class III"
  },
  {
    "S.No": 828,
    "city": "Phulabani",
    "state": "Odisha",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "33,890",
    "Population class": 0
  },
  {
    "S.No": 829,
    "city": "Umreth",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "33,762",
    "Population class": "Class III"
  },
  {
    "S.No": 830,
    "city": "Narsipatnam",
    "state": "Andhra Pradesh",
    "Type": "Census town",
    "Population (2011)": "33,757",
    "Population class": "Class III"
  },
  {
    "S.No": 831,
    "city": "Nautanwa",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "33,753",
    "Population class": "Class III"
  },
  {
    "S.No": 832,
    "city": "Rajgir",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "33,738",
    "Population class": 0
  },
  {
    "S.No": 833,
    "city": "Yellandu",
    "state": "Telangana",
    "Type": "Municipality",
    "Population (2011)": "33,732",
    "Population class": "Class III"
  },
  {
    "S.No": 834,
    "city": "Sathyamangalam",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "33,722",
    "Population class": 0
  },
  {
    "S.No": 835,
    "city": "Pilibanga",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "33,608",
    "Population class": 0
  },
  {
    "S.No": 836,
    "city": "Morshi",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "33,607",
    "Population class": 0
  },
  {
    "S.No": 837,
    "city": "Pehowa",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "33,564",
    "Population class": 0
  },
  {
    "S.No": 838,
    "city": "Sonepur",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "33,490",
    "Population class": 0
  },
  {
    "S.No": 839,
    "city": "Pappinisseri",
    "state": "Kerala",
    "Type": "Census town",
    "Population (2011)": "33,273",
    "Population class": 0
  },
  {
    "S.No": 840,
    "city": "Zamania",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "33,243",
    "Population class": "Class III"
  },
  {
    "S.No": 841,
    "city": "Mihijam",
    "state": "Jharkhand",
    "Type": "Notified area",
    "Population (2011)": "33,236",
    "Population class": 0
  },
  {
    "S.No": 842,
    "city": "Purna",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "33,225",
    "Population class": 0
  },
  {
    "S.No": 843,
    "city": "Puliyankudi",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "33,187",
    "Population class": 0
  },
  {
    "S.No": 844,
    "city": "Shikarpur, Bulandshahr",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "33,187",
    "Population class": 0
  },
  {
    "S.No": 845,
    "city": "Umaria",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "33,114",
    "Population class": "Class III"
  },
  {
    "S.No": 846,
    "city": "Porsa",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "33,103",
    "Population class": 0
  },
  {
    "S.No": 847,
    "city": "Naugawan Sadat",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "32,954",
    "Population class": "Class III"
  },
  {
    "S.No": 848,
    "city": "Fatehpur Sikri",
    "state": "Uttar Pradesh",
    "Type": "Municipal board.",
    "Population (2011)": "32,905",
    "Population class": "Class III"
  },
  {
    "S.No": 849,
    "city": "Manuguru",
    "state": "Telangana",
    "Type": "Census town",
    "Population (2011)": "32,893",
    "Population class": 0
  },
  {
    "S.No": 850,
    "city": "Udaipur",
    "state": "Tripura",
    "Type": "Municipal Council",
    "Population (2011)": "32,758",
    "Population class": "Class III"
  },
  {
    "S.No": 851,
    "city": "Pipar City",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "32,735",
    "Population class": 0
  },
  {
    "S.No": 852,
    "city": "Pattamundai",
    "state": "Odisha",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "32,730",
    "Population class": 0
  },
  {
    "S.No": 853,
    "city": "Nanjikottai",
    "state": "Tamil Nadu",
    "Type": "Census town",
    "Population (2011)": "32,689",
    "Population class": "Class III"
  },
  {
    "S.No": 854,
    "city": "Taranagar",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "32,640",
    "Population class": "Class III"
  },
  {
    "S.No": 855,
    "city": "Yerraguntla",
    "state": "Andhra Pradesh",
    "Type": "Census town",
    "Population (2011)": "32,574",
    "Population class": "Class III"
  },
  {
    "S.No": 856,
    "city": "Satana",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "32,561",
    "Population class": 0
  },
  {
    "S.No": 857,
    "city": "Sherghati",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "32,526",
    "Population class": 0
  },
  {
    "S.No": 858,
    "city": "Sankeshwara",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "32,511",
    "Population class": 0
  },
  {
    "S.No": 859,
    "city": "Madikeri",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "32,496",
    "Population class": 0
  },
  {
    "S.No": 860,
    "city": "Thuraiyur",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "32,439",
    "Population class": "Class III"
  },
  {
    "S.No": 861,
    "city": "Sanand",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "32,417",
    "Population class": 0
  },
  {
    "S.No": 862,
    "city": "Rajula",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "32,395",
    "Population class": 0
  },
  {
    "S.No": 863,
    "city": "Kyathampalle",
    "state": "Telangana",
    "Type": "Census town",
    "Population (2011)": "32,385",
    "Population class": "Class III"
  },
  {
    "S.No": 864,
    "city": "Shahabad, Rampur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "32,370",
    "Population class": 0
  },
  {
    "S.No": 865,
    "city": "Tilda Newra",
    "state": "Chhattisgarh",
    "Type": "Municipality",
    "Population (2011)": "32,331",
    "Population class": "Class III"
  },
  {
    "S.No": 866,
    "city": "Narsinghgarh",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "32,329",
    "Population class": "Class III"
  },
  {
    "S.No": 867,
    "city": "Chittur-Thathamangalam",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "32,298",
    "Population class": "Class III"
  },
  {
    "S.No": 868,
    "city": "Malaj Khand",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "32,296",
    "Population class": 0
  },
  {
    "S.No": 869,
    "city": "Sarangpur",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "32,294",
    "Population class": 0
  },
  {
    "S.No": 870,
    "city": "Robertsganj",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "32,243",
    "Population class": 0
  },
  {
    "S.No": 871,
    "city": "Sirkali",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "32,228",
    "Population class": 0
  },
  {
    "S.No": 872,
    "city": "Radhanpur",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "32,191",
    "Population class": 0
  },
  {
    "S.No": 873,
    "city": "Tiruchendur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "32,171",
    "Population class": "Class III"
  },
  {
    "S.No": 874,
    "city": "Utraula",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad.",
    "Population (2011)": "32,145",
    "Population class": "Class III"
  },
  {
    "S.No": 875,
    "city": "Patratu",
    "state": "Jharkhand",
    "Type": "Census town",
    "Population (2011)": "32,134",
    "Population class": 0
  },
  {
    "S.No": 876,
    "city": "Vijainagar, Ajmer",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "32,124",
    "Population class": "Class III"
  },
  {
    "S.No": 877,
    "city": "Periyasemur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "32,024",
    "Population class": 0
  },
  {
    "S.No": 878,
    "city": "Pathri",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "32,001",
    "Population class": 0
  },
  {
    "S.No": 879,
    "city": "Sadabad",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "31,742",
    "Population class": 0
  },
  {
    "S.No": 880,
    "city": "Talikota",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "31,693",
    "Population class": "Class III"
  },
  {
    "S.No": 881,
    "city": "Sinnar",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "31,630",
    "Population class": 0
  },
  {
    "S.No": 882,
    "city": "Mungeli",
    "state": "Chhattisgarh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "31,613",
    "Population class": 0
  },
  {
    "S.No": 883,
    "city": "Sedam",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "31,539",
    "Population class": 0
  },
  {
    "S.No": 884,
    "city": "Shikaripur",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "31,516",
    "Population class": 0
  },
  {
    "S.No": 885,
    "city": "Sumerpur",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "31,482",
    "Population class": 0
  },
  {
    "S.No": 886,
    "city": "Sattur",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "31,443",
    "Population class": 0
  },
  {
    "S.No": 887,
    "city": "Sugauli",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "31,432",
    "Population class": 0
  },
  {
    "S.No": 888,
    "city": "Lumding",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "31,347",
    "Population class": "Class III"
  },
  {
    "S.No": 889,
    "city": "Vandavasi",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "31,320",
    "Population class": "Class III"
  },
  {
    "S.No": 890,
    "city": "Titlagarh",
    "state": "Odisha",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "31,258",
    "Population class": "Class III"
  },
  {
    "S.No": 891,
    "city": "Uchgaon",
    "state": "Maharashtra",
    "Type": "Census town",
    "Population (2011)": "31,238",
    "Population class": "Class III"
  },
  {
    "S.No": 892,
    "city": "Mokokchung",
    "state": "Nagaland",
    "Type": "Town Committee / Town Area Committee",
    "Population (2011)": "31,214",
    "Population class": 0
  },
  {
    "S.No": 893,
    "city": "Paschim Punropara",
    "state": "West Bengal",
    "Type": "Census town",
    "Population (2011)": "31,198",
    "Population class": 0
  },
  {
    "S.No": 894,
    "city": "Sagwara",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "31,127",
    "Population class": 0
  },
  {
    "S.No": 895,
    "city": "Ramganj Mandi",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "30,973",
    "Population class": 0
  },
  {
    "S.No": 896,
    "city": "Tarakeswar",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "30,947",
    "Population class": "Class III"
  },
  {
    "S.No": 897,
    "city": "Mahalingapura",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "30,858",
    "Population class": 0
  },
  {
    "S.No": 898,
    "city": "Dharmanagar",
    "state": "Tripura",
    "Type": "Municipal Council",
    "Population (2011)": "30,785",
    "Population class": "Class III"
  },
  {
    "S.No": 899,
    "city": "Mahemdabad",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "30,768",
    "Population class": 0
  },
  {
    "S.No": 900,
    "city": "Manendragarh",
    "state": "Chhattisgarh",
    "Type": "Municipality",
    "Population (2011)": "30,758",
    "Population class": 0
  },
  {
    "S.No": 901,
    "city": "Uran",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "30,439",
    "Population class": "Class III"
  },
  {
    "S.No": 902,
    "city": "Tharamangalam",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "30,222",
    "Population class": "Class III"
  },
  {
    "S.No": 903,
    "city": "Tirukkoyilur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "30,212",
    "Population class": "Class III"
  },
  {
    "S.No": 904,
    "city": "Pen",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "30,201",
    "Population class": 0
  },
  {
    "S.No": 905,
    "city": "Makhdumpur",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "30,109",
    "Population class": 0
  },
  {
    "S.No": 906,
    "city": "Maner",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "30,082",
    "Population class": 0
  },
  {
    "S.No": 907,
    "city": "Oddanchatram",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "30,064",
    "Population class": "Class III"
  },
  {
    "S.No": 908,
    "city": "Palladam",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "30,016",
    "Population class": 0
  },
  {
    "S.No": 909,
    "city": "Mundi",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "30,000",
    "Population class": 0
  },
  {
    "S.No": 910,
    "city": "Nabarangapur",
    "state": "Odisha",
    "Type": "Municipality",
    "Population (2011)": "29,960",
    "Population class": "Class III"
  },
  {
    "S.No": 911,
    "city": "Mudalagi",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "29,893",
    "Population class": 0
  },
  {
    "S.No": 912,
    "city": "Samalkha",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "29,866",
    "Population class": 0
  },
  {
    "S.No": 913,
    "city": "Nepanagar",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "29,682",
    "Population class": "Class III"
  },
  {
    "S.No": 914,
    "city": "Karjat",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "29,663",
    "Population class": "Class III"
  },
  {
    "S.No": 915,
    "city": "Ranavav",
    "state": "Gujarat",
    "Type": "Urban Agglomeration",
    "Population (2011)": "29,645",
    "Population class": 0
  },
  {
    "S.No": 916,
    "city": "Pedana",
    "state": "Andhra Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "29,613",
    "Population class": 0
  },
  {
    "S.No": 917,
    "city": "Pinjore",
    "state": "Haryana",
    "Type": "Urban Agglomeration",
    "Population (2011)": "29,609",
    "Population class": 0
  },
  {
    "S.No": 918,
    "city": "Lakheri",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "29,572",
    "Population class": "Class III"
  },
  {
    "S.No": 919,
    "city": "Pasan",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "29,565",
    "Population class": 0
  },
  {
    "S.No": 920,
    "city": "Puttur",
    "state": "Andhra Pradesh",
    "Type": "Census town",
    "Population (2011)": "29,436",
    "Population class": 0
  },
  {
    "S.No": 921,
    "city": "Vadakkuvalliyur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "29,417",
    "Population class": "Class III"
  },
  {
    "S.No": 922,
    "city": "Tirukalukundram",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "29,391",
    "Population class": "Class III"
  },
  {
    "S.No": 923,
    "city": "Mahidpur",
    "state": "Madhya Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "29,379",
    "Population class": 0
  },
  {
    "S.No": 924,
    "city": "Mussoorie",
    "state": "Uttarakhand",
    "Type": "Urban Agglomeration",
    "Population (2011)": "29,329",
    "Population class": 0
  },
  {
    "S.No": 925,
    "city": "Muvattupuzha",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "29,246",
    "Population class": 0
  },
  {
    "S.No": 926,
    "city": "Rasra",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "29,238",
    "Population class": 0
  },
  {
    "S.No": 927,
    "city": "Udaipurwati",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "29,236",
    "Population class": "Class III"
  },
  {
    "S.No": 928,
    "city": "Manwath",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "29,218",
    "Population class": 0
  },
  {
    "S.No": 929,
    "city": "Adoor",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "29,171",
    "Population class": "Class III"
  },
  {
    "S.No": 930,
    "city": "Uthamapalayam",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "29,050",
    "Population class": "Class III"
  },
  {
    "S.No": 931,
    "city": "Partur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "29,012",
    "Population class": 0
  },
  {
    "S.No": 932,
    "city": "Nahan",
    "state": "Himachal Pradesh",
    "Type": "Municipal Council",
    "Population (2011)": "28,899",
    "Population class": "Class III"
  },
  {
    "S.No": 933,
    "city": "Ladwa",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "28,887",
    "Population class": "Class III"
  },
  {
    "S.No": 934,
    "city": "Mankachar",
    "state": "Assam",
    "Type": "Census town",
    "Population (2011)": "28,780",
    "Population class": 0
  },
  {
    "S.No": 935,
    "city": "Nongstoin",
    "state": "Meghalaya",
    "Type": "Town Committee / Town Area Committee",
    "Population (2011)": "28,742",
    "Population class": "Class III"
  },
  {
    "S.No": 936,
    "city": "Losal",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "28,504",
    "Population class": "Class III"
  },
  {
    "S.No": 937,
    "city": "Sri Madhopur",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "28,492",
    "Population class": 0
  },
  {
    "S.No": 938,
    "city": "Ramngarh",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "28,458",
    "Population class": 0
  },
  {
    "S.No": 939,
    "city": "Mavelikkara",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "28,439",
    "Population class": 0
  },
  {
    "S.No": 940,
    "city": "Rawatsar",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "28,387",
    "Population class": 0
  },
  {
    "S.No": 941,
    "city": "Rajakhera",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "28,349",
    "Population class": 0
  },
  {
    "S.No": 942,
    "city": "Lar",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "28,307",
    "Population class": "Class III"
  },
  {
    "S.No": 943,
    "city": "Lal Gopalganj Nindaura",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "28,288",
    "Population class": "Class III"
  },
  {
    "S.No": 944,
    "city": "Muddebihal",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "28,219",
    "Population class": 0
  },
  {
    "S.No": 945,
    "city": "Sirsaganj",
    "state": "Uttar Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "28,212",
    "Population class": 0
  },
  {
    "S.No": 946,
    "city": "Shahpura",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "28,174",
    "Population class": 0
  },
  {
    "S.No": 947,
    "city": "Surandai",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "28,146",
    "Population class": 0
  },
  {
    "S.No": 948,
    "city": "Sangole",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "28,116",
    "Population class": 0
  },
  {
    "S.No": 949,
    "city": "Pavagada",
    "state": "Karnataka",
    "Type": "Town Panchayat",
    "Population (2011)": "28,068",
    "Population class": 0
  },
  {
    "S.No": 950,
    "city": "Tharad",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "27,954",
    "Population class": "Class III"
  },
  {
    "S.No": 951,
    "city": "Mansa",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "27,922",
    "Population class": 0
  },
  {
    "S.No": 952,
    "city": "Umbergaon",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "27,859",
    "Population class": "Class III"
  },
  {
    "S.No": 953,
    "city": "Mavoor",
    "state": "Kerala",
    "Type": "Census town",
    "Population (2011)": "27,845",
    "Population class": 0
  },
  {
    "S.No": 954,
    "city": "Nalbari",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "27,839",
    "Population class": "Class III"
  },
  {
    "S.No": 955,
    "city": "Talaja",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "27,822",
    "Population class": "Class III"
  },
  {
    "S.No": 956,
    "city": "Malur",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "27,815",
    "Population class": 0
  },
  {
    "S.No": 957,
    "city": "Mangrulpir",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "27,815",
    "Population class": 0
  },
  {
    "S.No": 958,
    "city": "Soro",
    "state": "Odisha",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "27,794",
    "Population class": 0
  },
  {
    "S.No": 959,
    "city": "Shahpura",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "27,792",
    "Population class": 0
  },
  {
    "S.No": 960,
    "city": "Vadnagar",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "27,790",
    "Population class": "Class III"
  },
  {
    "S.No": 961,
    "city": "Raisinghnagar",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "27,736",
    "Population class": 0
  },
  {
    "S.No": 962,
    "city": "Sindhagi",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "27,732",
    "Population class": 0
  },
  {
    "S.No": 963,
    "city": "Sanduru",
    "state": "Karnataka",
    "Type": "Town Panchayat",
    "Population (2011)": "27,614",
    "Population class": 0
  },
  {
    "S.No": 964,
    "city": "Sohna",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "27,570",
    "Population class": 0
  },
  {
    "S.No": 965,
    "city": "Manavadar",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "27,563",
    "Population class": 0
  },
  {
    "S.No": 966,
    "city": "Pihani",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "27,545",
    "Population class": 0
  },
  {
    "S.No": 967,
    "city": "Safidon",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "27,541",
    "Population class": 0
  },
  {
    "S.No": 968,
    "city": "Risod",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "27,516",
    "Population class": 0
  },
  {
    "S.No": 969,
    "city": "Rosera",
    "state": "Bihar",
    "Type": "Municipality",
    "Population (2011)": "27,492",
    "Population class": 0
  },
  {
    "S.No": 970,
    "city": "Sankari",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "27,454",
    "Population class": 0
  },
  {
    "S.No": 971,
    "city": "Malpura",
    "state": "Rajasthan",
    "Type": "Urban Agglomeration",
    "Population (2011)": "27,360",
    "Population class": 0
  },
  {
    "S.No": 972,
    "city": "Sonamukhi",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "27,354",
    "Population class": 0
  },
  {
    "S.No": 973,
    "city": "Shamsabad, Agra",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "27,338",
    "Population class": 0
  },
  {
    "S.No": 974,
    "city": "Nokha",
    "state": "Bihar",
    "Type": "Nagar Panchayat",
    "Population (2011)": "27,302",
    "Population class": "Class III"
  },
  {
    "S.No": 975,
    "city": "PandUrban Agglomeration",
    "state": "West Bengal",
    "Type": "Census town",
    "Population (2011)": "27,161",
    "Population class": 0
  },
  {
    "S.No": 976,
    "city": "Mainaguri",
    "state": "West Bengal",
    "Type": "Census town",
    "Population (2011)": "27,106",
    "Population class": 0
  },
  {
    "S.No": 977,
    "city": "Afzalpur",
    "state": "Karnataka",
    "Type": "Town Panchayat",
    "Population (2011)": "27,088",
    "Population class": "Class III"
  },
  {
    "S.No": 978,
    "city": "Shirur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "26,999",
    "Population class": 0
  },
  {
    "S.No": 979,
    "city": "Salaya",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "26,875",
    "Population class": 0
  },
  {
    "S.No": 980,
    "city": "Shenkottai",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "26,838",
    "Population class": 0
  },
  {
    "S.No": 981,
    "city": "Pratapgarh",
    "state": "Tripura",
    "Type": "Census town",
    "Population (2011)": "26,837",
    "Population class": 0
  },
  {
    "S.No": 982,
    "city": "Vadipatti",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "26,830",
    "Population class": "Class III"
  },
  {
    "S.No": 983,
    "city": "Nagarkurnool",
    "state": "Telangana",
    "Type": "Census town",
    "Population (2011)": "26,801",
    "Population class": "Class III"
  },
  {
    "S.No": 984,
    "city": "Savner",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "26,712",
    "Population class": 0
  },
  {
    "S.No": 985,
    "city": "Sasvad",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "26,689",
    "Population class": 0
  },
  {
    "S.No": 986,
    "city": "Rudrapur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "26,683",
    "Population class": 0
  },
  {
    "S.No": 987,
    "city": "Soron",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "26,678",
    "Population class": 0
  },
  {
    "S.No": 988,
    "city": "Sholingur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "26,652",
    "Population class": 0
  },
  {
    "S.No": 989,
    "city": "Pandharkaoda",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "26,572",
    "Population class": 0
  },
  {
    "S.No": 990,
    "city": "Perumbavoor",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "26,547",
    "Population class": 0
  },
  {
    "S.No": 991,
    "city": "Maddur",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "26,521",
    "Population class": 0
  },
  {
    "S.No": 992,
    "city": "Nadbai",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "26,411",
    "Population class": "Class III"
  },
  {
    "S.No": 993,
    "city": "Talode",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "26,363",
    "Population class": "Class III"
  },
  {
    "S.No": 994,
    "city": "Shrigonda",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "26,324",
    "Population class": 0
  },
  {
    "S.No": 995,
    "city": "Madhugiri",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "26,304",
    "Population class": 0
  },
  {
    "S.No": 996,
    "city": "Tekkalakote",
    "state": "Karnataka",
    "Type": "Town Panchayat",
    "Population (2011)": "26,224",
    "Population class": "Class III"
  },
  {
    "S.No": 997,
    "city": "Seoni-Malwa",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "26,202",
    "Population class": 0
  },
  {
    "S.No": 998,
    "city": "Shirdi",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "26,184",
    "Population class": 0
  },
  {
    "S.No": 999,
    "city": "SUrban Agglomerationr",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "26,149",
    "Population class": 0
  },
  {
    "S.No": 1000,
    "city": "Terdal",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "26,088",
    "Population class": "Class III"
  },
  {
    "S.No": 1001,
    "city": "Raver",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "25,993",
    "Population class": 0
  },
  {
    "S.No": 1002,
    "city": "Tirupathur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "25,980",
    "Population class": "Class III"
  },
  {
    "S.No": 1003,
    "city": "Taraori",
    "state": "Haryana",
    "Type": "Municipal Committee.",
    "Population (2011)": "25,944",
    "Population class": "Class III"
  },
  {
    "S.No": 1004,
    "city": "Mukhed",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "25,933",
    "Population class": 0
  },
  {
    "S.No": 1005,
    "city": "Manachanallur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "25,931",
    "Population class": 0
  },
  {
    "S.No": 1006,
    "city": "Rehli",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "25,890",
    "Population class": 0
  },
  {
    "S.No": 1007,
    "city": "Sanchore",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "25,884",
    "Population class": 0
  },
  {
    "S.No": 1008,
    "city": "Rajura",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "25,843",
    "Population class": 0
  },
  {
    "S.No": 1009,
    "city": "Piro",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "25,811",
    "Population class": 0
  },
  {
    "S.No": 1010,
    "city": "Mudabidri",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "25,713",
    "Population class": 0
  },
  {
    "S.No": 1011,
    "city": "Vadgaon Kasba",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "25,651",
    "Population class": "Class III"
  },
  {
    "S.No": 1012,
    "city": "Nagar",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "25,572",
    "Population class": "Class III"
  },
  {
    "S.No": 1013,
    "city": "Vijapur",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "25,558",
    "Population class": "Class III"
  },
  {
    "S.No": 1014,
    "city": "Viswanatham",
    "state": "Tamil Nadu",
    "Type": "Census town",
    "Population (2011)": "25,555",
    "Population class": "Class III"
  },
  {
    "S.No": 1015,
    "city": "Polur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "25,505",
    "Population class": 0
  },
  {
    "S.No": 1016,
    "city": "Panagudi",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "25,501",
    "Population class": 0
  },
  {
    "S.No": 1017,
    "city": "Manawar",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "25,467",
    "Population class": 0
  },
  {
    "S.No": 1018,
    "city": "Tehri",
    "state": "Uttarakhand",
    "Type": "Nagar Palika Parishad.",
    "Population (2011)": "25,423",
    "Population class": "Class III"
  },
  {
    "S.No": 1019,
    "city": "Samdhan",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "25,327",
    "Population class": 0
  },
  {
    "S.No": 1020,
    "city": "Pardi",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "25,275",
    "Population class": 0
  },
  {
    "S.No": 1021,
    "city": "Rahatgarh",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "25,215",
    "Population class": 0
  },
  {
    "S.No": 1022,
    "city": "Panagar",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "25,199",
    "Population class": 0
  },
  {
    "S.No": 1023,
    "city": "Uthiramerur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "25,194",
    "Population class": "Class III"
  },
  {
    "S.No": 1024,
    "city": "Tirora",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "25,181",
    "Population class": "Class III"
  },
  {
    "S.No": 1025,
    "city": "Rangia",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "25,151",
    "Population class": 0
  },
  {
    "S.No": 1026,
    "city": "Sahjanwa",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "25,107",
    "Population class": 0
  },
  {
    "S.No": 1027,
    "city": "Wara Seoni",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "25,103",
    "Population class": "Class III"
  },
  {
    "S.No": 1028,
    "city": "Magadi",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "25,031",
    "Population class": 0
  },
  {
    "S.No": 1029,
    "city": "Rajgarh (Alwar)",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "25,009",
    "Population class": 0
  },
  {
    "S.No": 1030,
    "city": "Rafiganj",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "24,992",
    "Population class": 0
  },
  {
    "S.No": 1031,
    "city": "Tarana",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "24,908",
    "Population class": "Class III"
  },
  {
    "S.No": 1032,
    "city": "Rampur Maniharan",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "24,844",
    "Population class": 0
  },
  {
    "S.No": 1033,
    "city": "Sheoganj",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "24,789",
    "Population class": 0
  },
  {
    "S.No": 1034,
    "city": "Raikot",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "24,769",
    "Population class": 0
  },
  {
    "S.No": 1035,
    "city": "Pauri",
    "state": "Uttarakhand",
    "Type": "Municipal board",
    "Population (2011)": "24,743",
    "Population class": 0
  },
  {
    "S.No": 1036,
    "city": "Sumerpur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "24,661",
    "Population class": 0
  },
  {
    "S.No": 1037,
    "city": "Navalgund",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "24,613",
    "Population class": "Class III"
  },
  {
    "S.No": 1038,
    "city": "Shahganj",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "24,602",
    "Population class": 0
  },
  {
    "S.No": 1039,
    "city": "Marhaura",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "24,548",
    "Population class": 0
  },
  {
    "S.No": 1040,
    "city": "Tulsipur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "24,488",
    "Population class": "Class III"
  },
  {
    "S.No": 1041,
    "city": "Sadri",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "24,413",
    "Population class": 0
  },
  {
    "S.No": 1042,
    "city": "Thiruthuraipoondi",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "24,404",
    "Population class": "Class III"
  },
  {
    "S.No": 1043,
    "city": "Shiggaon",
    "state": "Karnataka",
    "Type": "Town Panchayat",
    "Population (2011)": "24,327",
    "Population class": 0
  },
  {
    "S.No": 1044,
    "city": "Pallapatti",
    "state": "Tamil Nadu",
    "Type": "Census town",
    "Population (2011)": "24,326",
    "Population class": 0
  },
  {
    "S.No": 1045,
    "city": "Mahendragarh",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "24,323",
    "Population class": 0
  },
  {
    "S.No": 1046,
    "city": "Sausar",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "24,312",
    "Population class": 0
  },
  {
    "S.No": 1047,
    "city": "Ponneri",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "24,309",
    "Population class": 0
  },
  {
    "S.No": 1048,
    "city": "Mahad",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "24,276",
    "Population class": 0
  },
  {
    "S.No": 1049,
    "city": "Lohardaga",
    "state": "Jharkhand",
    "Type": "Municipal Council",
    "Population (2011)": "24,125",
    "Population class": "Class III"
  },
  {
    "S.No": 1050,
    "city": "Tirwaganj",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "24,082",
    "Population class": "Class III"
  },
  {
    "S.No": 1051,
    "city": "Margherita",
    "state": "Assam",
    "Type": "Census town",
    "Population (2011)": "24,049",
    "Population class": 0
  },
  {
    "S.No": 1052,
    "city": "Sundarnagar",
    "state": "Himachal Pradesh",
    "Type": "Municipal Council",
    "Population (2011)": "23,986",
    "Population class": 0
  },
  {
    "S.No": 1053,
    "city": "Rajgarh",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "23,937",
    "Population class": 0
  },
  {
    "S.No": 1054,
    "city": "Mangaldoi",
    "state": "Assam",
    "Type": "Municipal board",
    "Population (2011)": "23,920",
    "Population class": 0
  },
  {
    "S.No": 1055,
    "city": "Renigunta",
    "state": "Andhra Pradesh",
    "Type": "Census town",
    "Population (2011)": "23,862",
    "Population class": 0
  },
  {
    "S.No": 1056,
    "city": "Longowal",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "23,851",
    "Population class": "Class III"
  },
  {
    "S.No": 1057,
    "city": "Ratia",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "23,826",
    "Population class": 0
  },
  {
    "S.No": 1058,
    "city": "Lalgudi",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "23,740",
    "Population class": "Class III"
  },
  {
    "S.No": 1059,
    "city": "Shrirangapattana",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "23,729",
    "Population class": 0
  },
  {
    "S.No": 1060,
    "city": "Niwari",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "23,724",
    "Population class": "Class III"
  },
  {
    "S.No": 1061,
    "city": "Natham",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "23,660",
    "Population class": "Class III"
  },
  {
    "S.No": 1062,
    "city": "Unnamalaikadai",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "23,656",
    "Population class": "Class III"
  },
  {
    "S.No": 1063,
    "city": "PurqUrban Agglomerationzi",
    "state": "Uttar Pradesh",
    "Type": "Urban Agglomeration",
    "Population (2011)": "23,599",
    "Population class": 0
  },
  {
    "S.No": 1064,
    "city": "Shamsabad, Farrukhabad",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "23,596",
    "Population class": 0
  },
  {
    "S.No": 1065,
    "city": "Mirganj",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "23,576",
    "Population class": 0
  },
  {
    "S.No": 1066,
    "city": "Todaraisingh",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "23,559",
    "Population class": "Class III"
  },
  {
    "S.No": 1067,
    "city": "Warhapur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "23,456",
    "Population class": "Class III"
  },
  {
    "S.No": 1068,
    "city": "Rajam",
    "state": "Andhra Pradesh",
    "Type": "Census town",
    "Population (2011)": "23,424",
    "Population class": 0
  },
  {
    "S.No": 1069,
    "city": "Urmar Tanda",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "23,419",
    "Population class": "Class III"
  },
  {
    "S.No": 1070,
    "city": "Lonar",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "23,416",
    "Population class": "Class III"
  },
  {
    "S.No": 1071,
    "city": "Powayan",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "23,406",
    "Population class": 0
  },
  {
    "S.No": 1072,
    "city": "P.N.Patti",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "23,331",
    "Population class": 0
  },
  {
    "S.No": 1073,
    "city": "Palampur",
    "state": "Himachal Pradesh",
    "Type": "Town Panchayat",
    "Population (2011)": "23,331",
    "Population class": 0
  },
  {
    "S.No": 1074,
    "city": "Srisailam Project (Right Flank Colony) Township",
    "state": "Andhra Pradesh",
    "Type": "Census town",
    "Population (2011)": "23,273",
    "Population class": 0
  },
  {
    "S.No": 1075,
    "city": "Sindagi",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "23,234",
    "Population class": 0
  },
  {
    "S.No": 1076,
    "city": "Sandi",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "23,234",
    "Population class": 0
  },
  {
    "S.No": 1077,
    "city": "Vaikom",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "23,234",
    "Population class": "Class III"
  },
  {
    "S.No": 1078,
    "city": "Malda",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "23,218",
    "Population class": 0
  },
  {
    "S.No": 1079,
    "city": "Tharangambadi",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "23,191",
    "Population class": "Class III"
  },
  {
    "S.No": 1080,
    "city": "Sakaleshapura",
    "state": "Karnataka",
    "Type": "Town Municipal Council",
    "Population (2011)": "23,176",
    "Population class": 0
  },
  {
    "S.No": 1081,
    "city": "Lalganj",
    "state": "Bihar",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "23,124",
    "Population class": "Class III"
  },
  {
    "S.No": 1082,
    "city": "Malkangiri",
    "state": "Odisha",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "23,114",
    "Population class": 0
  },
  {
    "S.No": 1083,
    "city": "Rapar",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "23,057",
    "Population class": 0
  },
  {
    "S.No": 1084,
    "city": "Mauganj",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "23,024",
    "Population class": 0
  },
  {
    "S.No": 1085,
    "city": "Todabhim",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "22,977",
    "Population class": "Class III"
  },
  {
    "S.No": 1086,
    "city": "Srinivaspur",
    "state": "Karnataka",
    "Type": "Town Panchayat",
    "Population (2011)": "22,959",
    "Population class": 0
  },
  {
    "S.No": 1087,
    "city": "Murliganj",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "22,936",
    "Population class": 0
  },
  {
    "S.No": 1088,
    "city": "Reengus",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "22,932",
    "Population class": 0
  },
  {
    "S.No": 1089,
    "city": "Sawantwadi",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "22,901",
    "Population class": 0
  },
  {
    "S.No": 1090,
    "city": "Tittakudi",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "22,894",
    "Population class": "Class III"
  },
  {
    "S.No": 1091,
    "city": "Lilong",
    "state": "Manipur",
    "Type": "Nagar Panchayat",
    "Population (2011)": "22,888",
    "Population class": "Class III"
  },
  {
    "S.No": 1092,
    "city": "Rajaldesar",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "22,836",
    "Population class": 0
  },
  {
    "S.No": 1093,
    "city": "Pathardi",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "22,827",
    "Population class": 0
  },
  {
    "S.No": 1094,
    "city": "Achhnera",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "22,781",
    "Population class": "Class III"
  },
  {
    "S.No": 1095,
    "city": "Pacode",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "22,781",
    "Population class": 0
  },
  {
    "S.No": 1096,
    "city": "Naraura",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "22,775",
    "Population class": "Class III"
  },
  {
    "S.No": 1097,
    "city": "Nakur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "22,712",
    "Population class": "Class III"
  },
  {
    "S.No": 1098,
    "city": "Palai",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "22,640",
    "Population class": 0
  },
  {
    "S.No": 1099,
    "city": "Morinda, India",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "22,635",
    "Population class": 0
  },
  {
    "S.No": 1100,
    "city": "Manasa",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "22,623",
    "Population class": 0
  },
  {
    "S.No": 1101,
    "city": "Nainpur",
    "state": "Madhya Pradesh",
    "Type": "Municipality",
    "Population (2011)": "22,607",
    "Population class": "Class III"
  },
  {
    "S.No": 1102,
    "city": "Sahaspur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "22,606",
    "Population class": 0
  },
  {
    "S.No": 1103,
    "city": "Pauni",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "22,587",
    "Population class": 0
  },
  {
    "S.No": 1104,
    "city": "Prithvipur",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "22,535",
    "Population class": 0
  },
  {
    "S.No": 1105,
    "city": "Ramtek",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "22,516",
    "Population class": 0
  },
  {
    "S.No": 1106,
    "city": "Silapathar",
    "state": "Assam",
    "Type": "Town Committee / Town Area Committee",
    "Population (2011)": "22,516",
    "Population class": 0
  },
  {
    "S.No": 1107,
    "city": "Songadh",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "22,431",
    "Population class": 0
  },
  {
    "S.No": 1108,
    "city": "Safipur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "22,378",
    "Population class": 0
  },
  {
    "S.No": 1109,
    "city": "Sohagpur",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "22,339",
    "Population class": 0
  },
  {
    "S.No": 1110,
    "city": "Mul",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "22,330",
    "Population class": 0
  },
  {
    "S.No": 1111,
    "city": "Sadulshahar",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "22,326",
    "Population class": 0
  },
  {
    "S.No": 1112,
    "city": "Phillaur",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "22,302",
    "Population class": 0
  },
  {
    "S.No": 1113,
    "city": "Sambhar",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "22,293",
    "Population class": 0
  },
  {
    "S.No": 1114,
    "city": "Prantij",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "22,282",
    "Population class": 0
  },
  {
    "S.No": 1115,
    "city": "Nagla",
    "state": "Uttarakhand",
    "Type": "Census town",
    "Population (2011)": "22,258",
    "Population class": "Class III"
  },
  {
    "S.No": 1116,
    "city": "Pattran",
    "state": "Punjab",
    "Type": "Nagar Panchayat",
    "Population (2011)": "22,175",
    "Population class": 0
  },
  {
    "S.No": 1117,
    "city": "Mount Abu",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "22,152",
    "Population class": 0
  },
  {
    "S.No": 1118,
    "city": "Reoti",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "22,082",
    "Population class": 0
  },
  {
    "S.No": 1119,
    "city": "Tenu dam-cum-Kathhara",
    "state": "Jharkhand",
    "Type": "Census town.",
    "Population (2011)": "22,080",
    "Population class": "Class III"
  },
  {
    "S.No": 1120,
    "city": "Panchla",
    "state": "West Bengal",
    "Type": "Census town",
    "Population (2011)": "22,051",
    "Population class": 0
  },
  {
    "S.No": 1121,
    "city": "Sitarganj",
    "state": "Uttarakhand",
    "Type": "Municipal board",
    "Population (2011)": "22,027",
    "Population class": 0
  },
  {
    "S.No": 1122,
    "city": "Pasighat",
    "state": "Arunachal Pradesh",
    "Type": "Census town",
    "Population (2011)": "21,965",
    "Population class": 0
  },
  {
    "S.No": 1123,
    "city": "Motipur",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "21,957",
    "Population class": 0
  },
  {
    "S.No": 1124,
    "city": "O' Valley",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "21,943",
    "Population class": "Class III"
  },
  {
    "S.No": 1125,
    "city": "Raghunathpur",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "21,932",
    "Population class": 0
  },
  {
    "S.No": 1126,
    "city": "Suriyampalayam",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "21,923",
    "Population class": 0
  },
  {
    "S.No": 1127,
    "city": "Qadian",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "21,899",
    "Population class": "Class III"
  },
  {
    "S.No": 1128,
    "city": "Rairangpur",
    "state": "Odisha",
    "Type": "Notified area committee / Notified Area Council",
    "Population (2011)": "21,896",
    "Population class": 0
  },
  {
    "S.No": 1129,
    "city": "Silvassa",
    "state": "Dadra and Nagar Haveli",
    "Type": "Census town",
    "Population (2011)": "21,893",
    "Population class": 0
  },
  {
    "S.No": 1130,
    "city": "Nowrozabad (Khodargama)",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "21,883",
    "Population class": "Class III"
  },
  {
    "S.No": 1131,
    "city": "Mangrol",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "21,842",
    "Population class": 0
  },
  {
    "S.No": 1132,
    "city": "Soyagaon",
    "state": "Maharashtra",
    "Type": "Census town",
    "Population (2011)": "21,819",
    "Population class": 0
  },
  {
    "S.No": 1133,
    "city": "Sujanpur",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "21,815",
    "Population class": 0
  },
  {
    "S.No": 1134,
    "city": "Manihari",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "21,803",
    "Population class": 0
  },
  {
    "S.No": 1135,
    "city": "Sikanderpur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "21,783",
    "Population class": 0
  },
  {
    "S.No": 1136,
    "city": "Mangalvedhe",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "21,706",
    "Population class": 0
  },
  {
    "S.No": 1137,
    "city": "Phulera",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "21,643",
    "Population class": 0
  },
  {
    "S.No": 1138,
    "city": "Ron",
    "state": "Karnataka",
    "Type": "Town Panchayat",
    "Population (2011)": "21,643",
    "Population class": 0
  },
  {
    "S.No": 1139,
    "city": "Sholavandan",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "21,638",
    "Population class": 0
  },
  {
    "S.No": 1140,
    "city": "Saidpur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "21,568",
    "Population class": 0
  },
  {
    "S.No": 1141,
    "city": "Shamgarh",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "21,507",
    "Population class": 0
  },
  {
    "S.No": 1142,
    "city": "Thammampatti",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "21,503",
    "Population class": "Class III"
  },
  {
    "S.No": 1143,
    "city": "Maharajpur",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "21,490",
    "Population class": 0
  },
  {
    "S.No": 1144,
    "city": "Multai",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "21,423",
    "Population class": 0
  },
  {
    "S.No": 1145,
    "city": "Mukerian",
    "state": "Punjab",
    "Type": "Municipal Council",
    "Population (2011)": "21,384",
    "Population class": 0
  },
  {
    "S.No": 1146,
    "city": "Sirsi",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "21,373",
    "Population class": 0
  },
  {
    "S.No": 1147,
    "city": "Purwa",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "21,271",
    "Population class": 0
  },
  {
    "S.No": 1148,
    "city": "Sheohar",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "21,262",
    "Population class": 0
  },
  {
    "S.No": 1149,
    "city": "Namagiripettai",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "21,250",
    "Population class": "Class III"
  },
  {
    "S.No": 1150,
    "city": "Parasi",
    "state": "Uttar Pradesh",
    "Type": "Census town",
    "Population (2011)": "21,206",
    "Population class": 0
  },
  {
    "S.No": 1151,
    "city": "Lathi",
    "state": "Gujarat",
    "Type": "Municipality",
    "Population (2011)": "21,173",
    "Population class": "Class III"
  },
  {
    "S.No": 1152,
    "city": "Lalganj",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "21,142",
    "Population class": "Class III"
  },
  {
    "S.No": 1153,
    "city": "Narkhed",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "21,127",
    "Population class": "Class III"
  },
  {
    "S.No": 1154,
    "city": "Mathabhanga",
    "state": "West Bengal",
    "Type": "Municipality",
    "Population (2011)": "21,107",
    "Population class": 0
  },
  {
    "S.No": 1155,
    "city": "Shendurjana",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "21,083",
    "Population class": 0
  },
  {
    "S.No": 1156,
    "city": "Peravurani",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "21,045",
    "Population class": 0
  },
  {
    "S.No": 1157,
    "city": "Mariani",
    "state": "Assam",
    "Type": "Town Committee / Town Area Committee",
    "Population (2011)": "20,997",
    "Population class": 0
  },
  {
    "S.No": 1158,
    "city": "Phulpur",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "20,986",
    "Population class": 0
  },
  {
    "S.No": 1159,
    "city": "Rania",
    "state": "Haryana",
    "Type": "Municipal Committee",
    "Population (2011)": "20,961",
    "Population class": 0
  },
  {
    "S.No": 1160,
    "city": "Pali",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "20,942",
    "Population class": 0
  },
  {
    "S.No": 1161,
    "city": "Pachore",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "20,939",
    "Population class": 0
  },
  {
    "S.No": 1162,
    "city": "Parangipettai",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "20,912",
    "Population class": 0
  },
  {
    "S.No": 1163,
    "city": "Pudupattinam",
    "state": "Tamil Nadu",
    "Type": "Census town",
    "Population (2011)": "20,901",
    "Population class": 0
  },
  {
    "S.No": 1164,
    "city": "Panniyannur",
    "state": "Kerala",
    "Type": "Census town",
    "Population (2011)": "20,863",
    "Population class": 0
  },
  {
    "S.No": 1165,
    "city": "Maharajganj",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "20,860",
    "Population class": 0
  },
  {
    "S.No": 1166,
    "city": "Rau",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "20,855",
    "Population class": 0
  },
  {
    "S.No": 1167,
    "city": "Monoharpur",
    "state": "West Bengal",
    "Type": "Census town",
    "Population (2011)": "20,846",
    "Population class": 0
  },
  {
    "S.No": 1168,
    "city": "Mandawa",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "20,830",
    "Population class": 0
  },
  {
    "S.No": 1169,
    "city": "Marigaon",
    "state": "Assam",
    "Type": "Town Committee / Town Area Committee",
    "Population (2011)": "20,811",
    "Population class": 0
  },
  {
    "S.No": 1170,
    "city": "Pallikonda",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "20,771",
    "Population class": 0
  },
  {
    "S.No": 1171,
    "city": "Pindwara",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "20,765",
    "Population class": 0
  },
  {
    "S.No": 1172,
    "city": "Shishgarh",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "20,684",
    "Population class": 0
  },
  {
    "S.No": 1173,
    "city": "Patur",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "20,538",
    "Population class": 0
  },
  {
    "S.No": 1174,
    "city": "Mayang Imphal",
    "state": "Manipur",
    "Type": "Nagar Panchayat",
    "Population (2011)": "20,532",
    "Population class": 0
  },
  {
    "S.No": 1175,
    "city": "Mhowgaon",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "20,523",
    "Population class": 0
  },
  {
    "S.No": 1176,
    "city": "Guruvayoor",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "20,510",
    "Population class": "Class III"
  },
  {
    "S.No": 1177,
    "city": "Mhaswad",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "20,500",
    "Population class": 0
  },
  {
    "S.No": 1178,
    "city": "Sahawar",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "20,470",
    "Population class": 0
  },
  {
    "S.No": 1179,
    "city": "Sivagiri",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "20,380",
    "Population class": 0
  },
  {
    "S.No": 1180,
    "city": "Mundargi",
    "state": "Karnataka",
    "Type": "Town Panchayat",
    "Population (2011)": "20,363",
    "Population class": 0
  },
  {
    "S.No": 1181,
    "city": "Punjaipugalur",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "20,309",
    "Population class": 0
  },
  {
    "S.No": 1182,
    "city": "Kailasahar",
    "state": "Tripura",
    "Type": "Nagar Panchayat",
    "Population (2011)": "20,279",
    "Population class": "Class III"
  },
  {
    "S.No": 1183,
    "city": "Samthar",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "20,217",
    "Population class": 0
  },
  {
    "S.No": 1184,
    "city": "Sakti",
    "state": "Chhattisgarh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "20,213",
    "Population class": 0
  },
  {
    "S.No": 1185,
    "city": "Sadalagi",
    "state": "Karnataka",
    "Type": "Town Panchayat",
    "Population (2011)": "20,202",
    "Population class": 0
  },
  {
    "S.No": 1186,
    "city": "Silao",
    "state": "Bihar",
    "Type": "Notified area",
    "Population (2011)": "20,177",
    "Population class": 0
  },
  {
    "S.No": 1187,
    "city": "Mandalgarh",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "20,169",
    "Population class": 0
  },
  {
    "S.No": 1188,
    "city": "Loha",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "20,148",
    "Population class": "Class III"
  },
  {
    "S.No": 1189,
    "city": "Pukhrayan",
    "state": "Uttar Pradesh",
    "Type": "Municipal board",
    "Population (2011)": "20,107",
    "Population class": 0
  },
  {
    "S.No": 1190,
    "city": "Padmanabhapuram",
    "state": "Tamil Nadu",
    "Type": "Municipality",
    "Population (2011)": "20,075",
    "Population class": 0
  },
  {
    "S.No": 1191,
    "city": "Belonia",
    "state": "Tripura",
    "Type": "Municipal Council",
    "Population (2011)": "19,996",
    "Population class": "Class IV"
  },
  {
    "S.No": 1192,
    "city": "Saiha",
    "state": "Mizoram",
    "Type": "Notified Town",
    "Population (2011)": "19,731",
    "Population class": 0
  },
  {
    "S.No": 1193,
    "city": "Srirampore",
    "state": "West Bengal",
    "Type": 0,
    "Population (2011)": 19500,
    "Population class": 0
  },
  {
    "S.No": 1194,
    "city": "Talwara",
    "state": "Punjab",
    "Type": "Census town",
    "Population (2011)": "19,485",
    "Population class": "Class IV"
  },
  {
    "S.No": 1195,
    "city": "Puthuppally",
    "state": "Kerala",
    "Type": "Municipality",
    "Population (2011)": "18,850",
    "Population class": 0
  },
  {
    "S.No": 1196,
    "city": "Khowai",
    "state": "Tripura",
    "Type": "Municipal Council",
    "Population (2011)": "18,526",
    "Population class": "Class IV"
  },
  {
    "S.No": 1197,
    "city": "Vijaypur",
    "state": "Madhya Pradesh",
    "Type": "Nagar Panchayat.",
    "Population (2011)": "16,964",
    "Population class": "Class IV"
  },
  {
    "S.No": 1198,
    "city": "Takhatgarh",
    "state": "Rajasthan",
    "Type": "Municipality",
    "Population (2011)": "16,729",
    "Population class": "Class IV"
  },
  {
    "S.No": 1199,
    "city": "Thirupuvanam",
    "state": "Tamil Nadu",
    "Type": "Town Panchayat",
    "Population (2011)": "14,989",
    "Population class": "Class IV"
  },
  {
    "S.No": 1200,
    "city": "Adra",
    "state": "West Bengal",
    "Type": "Census town.",
    "Population (2011)": "14,956",
    "Population class": "Class IV"
  },
  {
    "S.No": 1201,
    "city": "Piriyapatna",
    "state": "Karnataka",
    "Type": "Census town",
    "Population (2011)": "14,924",
    "Population class": 0
  },
  {
    "S.No": 1202,
    "city": "Obra",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "14,786",
    "Population class": "Class IV"
  },
  {
    "S.No": 1203,
    "city": "Adalaj",
    "state": "Gujarat",
    "Type": "Census town.",
    "Population (2011)": "11,957",
    "Population class": "Class IV"
  },
  {
    "S.No": 1204,
    "city": "Nandgaon",
    "state": "Maharashtra",
    "Type": "Nagar Panchayat",
    "Population (2011)": "11,517",
    "Population class": "Class IV"
  },
  {
    "S.No": 1205,
    "city": "Barh",
    "state": "Bihar",
    "Type": "Census town",
    "Population (2011)": "10,803",
    "Population class": "Class IV"
  },
  {
    "S.No": 1206,
    "city": "Chhapra",
    "state": "Gujarat",
    "Type": "Census town",
    "Population (2011)": "10,147",
    "Population class": "Class IV"
  },
  {
    "S.No": 1207,
    "city": "Panamattom",
    "state": "Kerala",
    "Type": "Notified area",
    "Population (2011)": "10,032",
    "Population class": 0
  },
  {
    "S.No": 1208,
    "city": "Niwai",
    "state": "Uttar Pradesh",
    "Type": "Nagar Panchayat",
    "Population (2011)": "9,205",
    "Population class": "Class V"
  },
  {
    "S.No": 1209,
    "city": "Bageshwar",
    "state": "Uttarakhand",
    "Type": "Nagar Palika Parishad",
    "Population (2011)": "9,079",
    "Population class": "Class V"
  },
  {
    "S.No": 1210,
    "city": "Tarbha",
    "state": "Odisha",
    "Type": "Notified area committee / Notified Area Council.",
    "Population (2011)": "8,334",
    "Population class": "Class V"
  },
  {
    "S.No": 1211,
    "city": "Adyar",
    "state": "Karnataka",
    "Type": "Census town.",
    "Population (2011)": "7,034",
    "Population class": "Class V"
  },
  {
    "S.No": 1212,
    "city": "Narsinghgarh",
    "state": "Madhya Pradesh",
    "Type": "Census town",
    "Population (2011)": "6,735",
    "Population class": "Class V"
  },
  {
    "S.No": 1213,
    "city": "Warud",
    "state": "Maharashtra",
    "Type": "Municipal Council",
    "Population (2011)": "6,386",
    "Population class": "Class V"
  },
  {
    "S.No": 1214,
    "city": "Asarganj",
    "state": "Bihar",
    "Type": "Census town.",
    "Population (2011)": "6,327",
    "Population class": "Class V"
  },
  {
    "S.No": 1215,
    "city": "Sarsod",
    "state": "Haryana",
    "Type": "Gram Panchayat",
    "Population (2011)": "4,630",
    "Population class": 0
  }
];



var clients = [{
  "_id": ObjectId(),
  "name": "Frostox",
  "clientId": "efOeHY5Ovf",
  "clientSecret": "r18sAsEsxR",
  "trustedClient": true
}];

var states = [{
  "_id": ObjectId(),
  "name": "Maharashtra"
}, {
  "_id": ObjectId(),
  "name": "Gujurat"
}];

var cities = [{
  "_id": ObjectId(),
  "state": states[0]._id,
  "name": "Mumbai"
}, {
  "_id": ObjectId(),
  "state": states[1]._id,
  "name": "Ahemedabad"
}];

var logins = [{
  "_id": ObjectId(),
  "email":"rogercores@galvanie.com",
  "password":"timexA!1",
  "type":"USER",
  "mobile": 9999999999,
  "address": {
    "lat": 1,
    "lon": 2,
    "pinCode": 333333,
    "streetAddress": "Link Rd.",
    "city": cities[0]._id,
    "state": states[0]._id
  }
}, {
  "_id": ObjectId(),
  "email":"frostox@galvanie.com",
  "password":"timexA!1",
  "type":"ORGANIZATION",
  "mobile": 9999999994,
  "address": {
    "lat": 1,
    "lon": 2,
    "pinCode": 333333,
    "streetAddress": "Link Rd.",
    "city": cities[0]._id,
    "state": states[0]._id
  }
}, {
  "_id": ObjectId(),
  "email":"frostox101@galvanie.com",
  "password":"timexA!1",
  "type":"BLOODBANK",
  "mobile": 9999999991,
  "address": {
    "lat": 1,
    "lon": 2,
    "pinCode": 333333,
    "streetAddress": "Link Rd.",
    "city": cities[0]._id,
    "state": states[0]._id
  }
}];

var bloodgroups = [
  {
    "_id": ObjectId(),
    "name": "A+"
  }, {
    "_id": ObjectId(),
    "name": "B+"
  }, {
    "_id": ObjectId(),
    "name": "A-"
  }, {
    "_id": ObjectId(),
    "name": "B-"
  }, {
    "_id": ObjectId(),
    "name": "O+"
  }, {
    "_id": ObjectId(),
    "name": "O-"
  }, {
    "_id": ObjectId(),
    "name": "AB+"
  }, {
    "_id": ObjectId(),
    "name": "AB-"
  }
];

var users = [{
  "_id": ObjectId(),
  "fname": "Roger",
  "mname": "Louis",
  "lname": "Cores",
  "gender": "Male",
  "login": logins[0]._id,
  "dob": Date.now(),
  "bloodGroup": bloodgroups[0]._id
}];

var organizations = [{
  "_id": ObjectId(),
  "name": "Frostox",
  "description": "Save you",
  "login": logins[1]._id,
  "license": "dgee3"
}];

var bloodbanks = [{
  "_id": ObjectId(),
  "name": "Frostox 101",
  "organization": organizations[0]._id,
  "login": logins[2]._id,
  "license": "dff",
  "verified": false,
  "loginActive": true,
  "copyAddress": true,
  "address": logins[1].address
}];

var bloodgroupdonationmatrices = [
  {
    "_id": ObjectId(),
    "requestorBloodGroup": bloodgroups[0]._id,
    "donorBloodGroup": bloodgroups[1]._id
  },
  {
    "_id": ObjectId(),
    "requestorBloodGroup": bloodgroups[1]._id,
    "donorBloodGroup": bloodgroups[2]._id
  }
];




module.exports = {
  logins: logins,
  clients: clients,
  geographies: geographies,
  bloodgroups: bloodgroups,
  users: users,
  organizations: organizations,
  bloodbanks: bloodbanks,
  bloodgroupdonationmatrices: bloodgroupdonationmatrices
};
