 var data= [
 ['Name','Vacation Time','Flexibility','Pay (raw)','Pay (ranked)','Meaningful?','Stress','Job Outlook','Education'],
        ['Software Engineer',21,1,93350,24,1,6.5,22.8,3],
        ['Actuary',20,2,93680,23,1,10.7,26.1,3],
        ['Human Resources Manager',21,2,99720,20,1,9.9,13.2,3],
        ['Dental Hygienist',19,2,70210,45,1,7.7,33.3,4],
        ['Financial Planner',22,2,67520,52,1,14.8,27,3],
        ['Audiologist',22,2,69720,48,2,4.7,33.6,1],
        ['Occupational Therapist',22,2,75400,40,2,10.6,29,2],
        ['Online Advertising Manager',21,2,115750,13,1,18,6.9,3],
        ['Computer Systems Analyst',20,2,79680,34,1,10.5,24.5,3],
        ['Mathematician',25,2,101360,19,1,6.7,22.7,2],
        ['Speeth Pathologist',23,2,69870,47,2,9.6,19.4,2],
        ['Optomestrist',23,1,97820,22,2,13.2,24.4,1],
        ['Physical Therapist',19,1,79860,33,2,9.7,36,1],
        ['Pharmacist',22,2,116670,11,2,9.9,14.5,1],
        ['Web Developer',20,1,62500,62,1,16.5,20.1,4],
        ['Petroleum Engineer',22,2,130280,9,1,13.9,25.5,3],
        ['Dietitian',23,1,55240,82,2,7.6,21.1,4],
        ['Statistician',18,2,75560,39,1,8.7,26.7,2],
        ['Chiropractor',23,1,66160,55,1,9.2,14.6,1],
        ['Sociologist',23,2,74960,41,1,12,15,2],
        ['Veterinarian',23,2,84460,31,2,11.2,12,1],
        ['Geologist',24,2,74000,43,1,16.7,12,3],
        ['Orthodontist',23,1,196270,3,2,19.2,16.3,1],
        ['Podiatrist',23,1,116440,12,2,14.2,22.5,1],
        ['Physsicist',26,2,106360,14,1,10.7,10.4,3],
        ['Physician Assistant',23,1,90930,26,2,27.2,38.4,1],
        ['Biologist',21,2,66262,54,1,8.7,-0.6,3],
        ['Civil Engineer',22,2,79340,35,1,16.9,19.7,3],
        ['Meteorologist',21,2,89260,28,1,8.7,10,3],
        ['Historian',29,2,52480,94,1,12.3,6,2],
        ['Museum Curator',21,2,44410,123,1,16.3,12.5,2],
        ['Market Research Analyst',19,2,60300,66,1,27.7,31.6,3],
        ['Dentist',26,1,149310,7,2,19.2,16.3,1],
        ['Computer Programmer',20,1,74280,42,1,5.5,8.3,3],
        ['Parole Officer',23,2,45000,121,1,5.9,-1,3],
        ['Vocational Counselor',22,2,53610,87,2,9.3,11.9,2],
        ['Technical Writer',16,2,65600,56,1,13.2,14.8,3],
        ['Nurse (Registered)',24,2,65470,57,2,26.2,19.4,4],
        ['Medical Secretary',19,2,32670,164,1,9.2,36,7],
        ['Physician (General Practice)',23,1,183940,5,2,21.2,14.6,1],
        ['Psychologist',23,1,69280,49,2,24.2,11.3,2],
        ['Pschiatrist',23,1,182660,6,2,19.2,16.2,1],
        ['Astonomer',21,2,106360,14,1,15.7,10,1],
        ['Optician',23,2,33300,160,1,11.2,23.4,7],
        ['Surgeon',28,2,344233,1,2,24.2,23.2,1],
        ['Respiratory Therapist',23,1,55870,80,2,15.2,19.1,4],
        ['Accountant',20,2,63500,58,1,13.7,13.1,3],
        ['Economist',23,2,91860,25,1,11.7,13.9,2],
        ['Paralegal Assistant',17,2,46990,114,1,12.5,16.7,4],
        ['Medical Records Technician',18,2,34160,158,1,5.2,22.1,5],
        ['Social Worker',21,2,44200,124,2,18,15.1,3],
        ['Stenographer/Court Reporter',17,2,48160,106,1,13.7,9.6,5],
        ['Anthropologist',34,2,57420,75,1,21.3,19.4,2],
        ['Archeologist',34,2,57420,75,1,21.3,19.4,2],
        ['Medical Technologist',23,2,54000,84,1,10.7,13.8,3],
        ['Architect',22,2,78690,37,1,33.9,17.3,3],
        ['Management Consultant',21,2,78600,38,1,23.7,18.6,3],
        ['Nuclear Engineer',22,2,104270,16,1,26.9,9.3,3],
        ['Loan Officer',22,2,59820,68,1,9.4,7.7,3],
        ['Aerospace Engineer',21,2,103720,17,1,14.9,7.3,3],
        ['Librarian',26,2,55370,81,1,5.2,7.4,2],
        ['Judge',19,2,102980,18,2,16.5,2.3,1],
        ['Heating/Refrigeration Mechanic',20,2,43640,126,1,16.1,13.7,7],
        ['Physiologist',22,2,42690,132,2,11.2,9.2,3],
        ['Surveyor',28,1,59570,70,1,23,10.3,3],
        ['Mechanical Engineer',22,2,80580,32,1,16.9,4.5,3],
        ['Executive Assistant',21,2,50220,101,1,10.7,-1.2,7],
        ['Insurance Agent',21,2,48150,107,1,31.9,10.4,7],
        ['Industrial Machine Repairer',20,2,49560,104,1,11.1,8.8,7],
        ['Public Relations Executive',19,2,186956,4,1,43.7,12.9,3],
        ['Medical Laboratory Technician',24,2,37240,151,1,5.2,23.1,7],
        ['Brick Mason',20,2,44950,122,1,15.3,43,8],
        ['Electrical Engineer',22,2,89630,27,1,17.9,4.7,3],
        ['School Principal',38,2,87760,29,2,20.3,5.7,2],
        ['Plumber',25,2,52950,93,1,17.1,21.3,7],
        ['Industrial Designer',18,2,59610,69,1,19.8,4.4,3],
        ['Stockbroker',21,2,70190,46,1,34.7,11.2,3],
        ['Recruiter',18,2,47500,112,1,13.9,7.9,3],
        ['Insurance Underwriter',21,2,62870,60,1,11.7,-6.1,3],
        ['Bookkeeper',17,2,35170,156,1,7.7,11.4,7],
        ['Electrician',22,2,49840,102,1,15.9,36.9,7],
        ['Event Coordinator',21,2,45810,119,1,44.9,33.2,3],
        ['Industrial Engineer',22,2,78860,36,1,14.9,4.5,3],
        ['Occupational Safety/Health Inspector',23,2,66790,53,1,11,6.6,3],
        ['Receptionist',18,2,25990,180,1,18.7,13.5,7],
        ['Construction Foreman',19,2,41000,139,1,25.8,12.7,7],
        ['Attorney',19,1,130880,8,1,31.7,9.8,1],
        ['Vending Machine Repairer',20,2,41664,135,1,5.9,13.7,7],
        ['Nurse (licensed practical)',24,2,42910,130,2,21.2,19.4,5],
        ['Funeral Director',23,2,51600,97,1,23.9,12.1,4],
        ['Set Designer',20,2,46723,116,1,15,6.3,3],
        ['Elementary School Teacher',42,2,53090,89,2,22.3,12.3,3],
        ['Clergy',18,1,47540,111,2,15.9,9.8,3],
        ['Chemist',19,2,73060,44,1,10.7,5.6,3],
        ['Purchasing Agent',21,2,60895,64,1,14.9,5.9,7],
        ['Communications Equipment Mechanic',20,2,47712,109,1,18.9,4.6,7],
        ['Machine Tool Operator',19,2,32389,165,1,8.9,-13.2,7],
        ['Advertising Account Executive',18,2,68677,51,1,36,-0.7,3],
        ['Automobile Body Repairer',20,2,36610,154,1,12.9,8.6,7],
        ['Cosmetologist',20,2,27530,176,1,9.5,12.7,5],
        ['Artist (fine art)',19,1,48819,105,1,17.8,3.8,7],
        ['Broadcast Technician',21,2,41630,136,1,12.7,3.8,4],
        ['Zoologist',19,2,57710,74,1,12.8,4.9,3],
        ['Commercial Airline Pilot',31,2,98410,21,1,54.8,9.4,3],
        ['Hair Stylist',20,2,27530,176,1,3.5,12.7,5],
        ['Sales REpresentative (wholesale)',20,2,57870,72,1,32.9,8.9,7],
        ['Tax examiner/Collector',23,2,50440,100,1,12.8,-3.9,3],
        ['Construction Machinery Operator',20,2,40980,140,1,17.9,13.4,7],
        ['Electrical Technician',20,2,57850,73,1,5.6,36.9,5],
        ['Architectural Drafter',19,2,49630,103,1,11.6,0.8,4],
        ['Hotel Manager',22,2,46810,115,1,18.1,1.4,7],
        ['Teacher Aide',42,2,23640,186,2,9.3,8.6,6],
        ['Author',22,1,55940,79,1,26.4,3,3],
        ['Sewage Plant Operator',21,2,42780,131,1,11.9,7.7,7],
        ['Nuclear Decontamination Technician',20,2,69060,50,1,28.9,14.9,4],
        ['Corporate Executive (Seniur)',24,2,200000,2,1,43.5,5.3,3],
        ['Security Guard',22,2,27550,175,1,11.4,12.1,7],
        ['Forklift Operator',20,2,23000,188,1,5.9,-2.7,8],
        ['Publication Editor',19,2,53880,86,1,21.1,-2.4,3],
        ['Emergency Medical Technician',23,2,31020,168,2,35.2,23.1,5],
        ['Film/Video Editor',19,1,46280,117,1,16.1,0.6,3],
        ['Engineering Technician',22,2,51820,96,1,17.9,0.9,4],
        ['Fitness Trainer/Instructor',23,1,31700,167,1,35.2,12.5,7],
        ['Carpet/Tile Installer',20,2,41583,137,1,12.9,8.7,8],
        ['Air Traffic Controller',22,2,122250,10,1,22.8,1.4,4],
        ['Carpenter',19,1,39940,143,1,22.9,29.6,8],
        ['Nurses Aide',24,2,24400,184,2,17.7,21.1,5],
        ['Truck Driver',17,2,48000,108,1,24,-2.7,8],
        ['Corrections Officer',23,2,38970,145,2,27.2,4.9,7],
        ['Bus Driver',26,2,29550,171,1,21,8.5,7],
        ['Choreographer',16,1,42110,133,1,32.8,24.3,7],
        ['Agrucultiral Scientist',17,2,58610,71,1,13.7,2.9,3],
        ['Fashion Designer',18,1,62860,61,1,30.8,-3,3],
        ['Tax Preparer',23,2,43350,127,1,20.7,9.9,7],
        ['Dental Laboratory Technician',23,2,56000,78,2,6.7,2.6,7],
        ['Advertising Salesperson',22,2,53000,90,1,31.7,-0.7,7],
        ['High School Teacher',34,2,55050,83,2,22.6,5.5,3],
        ['Salesperson (retail)',22,2,53000,90,1,16.9,9.8,8],
        ['Machinist',20,2,40910,141,1,8.1,8.8,7],
        ['Typist/Word Processor',17,2,33000,161,1,8.7,-24.6,7],
        ['Jeweler',21,1,38000,147,1,3.9,-9.8,7],
        ['Computer Service Technician',21,2,38000,147,1,6.9,3.8,6],
        ['Aircraft Mechanic',23,2,53000,90,1,21.9,2.4,7],
        ['Automobile Mechanic',20,2,39060,144,1,19.9,8.6,7],
        ['Photagrapher',18,1,25000,181,1,23.8,4.3,7],
        ['Electrical Equipment Repairer',20,2,51220,98,1,10.9,0,7],
        ['Buyer',20,2,40000,142,1,33.6,7.1,7],
        ['Sheet Metal Worker',22,2,32950,162,1,22.9,15.5,7],
        ['Janitor',25,2,22320,192,1,9.9,12.1,8],
        ['Sailor',21,2,38190,146,1,25,15.5,8],
        ['Chauffer',20,2,22820,190,1,17,15.5,7],
        ['Appliance Repairer',20,2,37500,150,1,6.9,0.7,7],
        ['Real Estate Agent',19,2,41990,134,1,33.9,11.1,7],
        ['Office Machine Repairer',20,2,47602,110,1,10.9,3.8,7],
        ['Highway Patrol Officer',23,2,60000,67,2,37.2,5.9,7],
        ['Cashier',19,2,18970,195,1,7.9,2.6,8],
        ['Child Care Worker',27,2,19510,194,2,20.9,14,7],
        ['Garbage Collector',20,2,43000,129,1,18.9,16.2,8],
        ['Ironworker',22,2,46140,118,1,26.3,21.8,7],
        ['Bartender',21,2,18900,196,1,9.1,11.9,8],
        ['Police Officer',24,2,56980,77,2,39.2,5.9,7],
        ['Furniture Upholsterer',20,2,24000,185,1,8.9,3.3,7],
        ['Dockworker',21,2,23000,188,1,21,24.3,8],
        ['Photojournalist',18,1,54000,84,1,41.8,4.3,7],
        ['Stationary Enginer',22,2,53560,88,1,24,3.1,7],
        ['Painter',16,1,32850,163,1,27.4,10.2,8],
        ['Handyman',20,1,44000,125,1,7.9,9.4,7],
        ['Bank Teller',19,2,24940,182,1,7.9,1,7],
        ['Musical Instrument Repaier',20,1,30000,170,1,10.4,6.2,7],
        ['Precision Assembler',20,2,30546,169,1,13,9.4,7],
        ['Construction Worker',20,2,38000,147,1,24.9,24.3,8],
        ['Welder',20,2,32000,166,1,18.9,19.8,7],
        ['Flight Attendant',26,2,37240,151,1,38.8,-6.5,7],
        ['Roofer',20,1,35290,155,1,25.9,11.4,8],
        ['Travel Agent',23,2,34600,157,1,34.8,-12.1,7],
        ['Actor',17,1,52000,95,1,39.8,4.1,6],
        ['Farmer',21,2,61000,63,1,21,-19.3,7],
        ['Disc Jockey',17,2,26850,179,1,23.8,-2.3,4],
        ['Dressmaker Tailor',16,1,29330,172,1,0.9,-1.8,8],
        ['Maid',25,2,19570,193,1,12.9,12.8,8],
        ['Mail Carrier',25,2,50890,99,1,17.9,-26.8,7],
        ['Shipping/Recieving Clerk',20,2,27470,178,1,11.4,-0.3,7],
        ['Firefighter',23,2,45250,120,2,56.2,6.6,5],
        ['Automobile Assembler',19,2,28580,174,1,18,9.4,7],
        ['Taxi Driver',20,2,22820,190,1,42,15.5,8],
        ['Conservationist scientist',20,2,63330,59,2,8.7,0.5,3],
        ['Drill-Press Operator',20,2,29160,173,1,8,16.6,7],
        ['Shoe Maker/Repairer',20,1,24402,183,1,14,-14,7],
        ['Broadcaster',17,2,41200,138,1,39.8,-2.3,3],
        ['Butcher',21,2,23140,187,1,14.9,4.8,8],
        ['Dishwasher',21,2,18400,198,1,9.9,6.2,8],
        ['Metal Worker',20,2,43290,128,1,8.9,2.9,7],
        ['Waiter/Waitresss',21,2,18540,197,1,10.1,5.6,8],
        ['Reporter (Newspaper)',17,2,37090,153,1,40.8,-13.8,3],
        ['Oil Rig Worker',21,2,47000,113,1,20.8,19.2,8],
        ['Dairy Farmer',19,2,60750,65,1,22,-19.3,7],
        ['Lumberjack',23,2,33630,159,1,35,-43.3,7],
        ['Biomedical Engineer',21,2,85163,30,1,10.7,26.6,3]
		];
		
		
$(document).ready(function(){
	$(document).on('click','.what',function(){
		$(document).find('.overlay').fadeIn(1000);
		
	
	});
	$(document).on('click','.close', function(){
		$(document).find('.overlay').fadeOut(1000);
	});
	
	$(document).on('click','#submitter',function(){
		$(document).find('.result').fadeIn(1000);
		
		
	
	});
	$(document).on('click','#exitSubmit', function(){
		$(document).find('.result').fadeOut(1000);
	});
	

	$(function slider(){
		$('#sliders').slider({
		max:100,
		min: 0,
		orientation: "vertical",
		
	})
	
	
	
	});
		$(function slider(){
		$('#slider1').slider({
		max:100,
		min: 0,
		orientation: "vertical",
		
	})
	
	
	
	});
	$(function slider(){
		$('#slider2').slider({
		max:100,
		min: 0,
		orientation: "vertical",
		
	})
	
	
	
	});
		$(function slider(){
		$('#slider3').slider({
		max:100,
		min: 0,
		orientation: "vertical",
		
	})
	
	
	
	});
		$(function slider(){
		$('#slider4').slider({
		max:100,
		min: 0,
		orientation: "horizontal",
		
	})
	
	
	
	});
	$(function slider(){
		$('#slider5').slider({
		max:100,
		min: 0,
		orientation: "horizontal",
		
	})
	
	
	
	});
	
	
	
	/*selecting data from array
	var selection= data[2][4];
alert();
*/


});